#!/bin/bash

echo "--------------------Pre Commit script--------------------"
sleep 1


echo
echo "--------------------Running UnitTest --------------------"
sleep .5
npm test > unitTestResults.txt
cat unitTestResults.txt
fail="$(grep -o "failing" unitTestResults.txt)"
# echo $fail
if [[ "$fail" == "failing" ]]; then
	echo "UnitTest fails, commit reject!"
    rm unitTestResults.txt
	exit 1
else
    rm unitTestResults.txt
	echo "All unit test cases passed!"
fi


echo
echo "------------------- Running Istanbul --------------------"
sleep 1.5
echo "Generating test cases ......"
sleep 1
node generate.js
node_modules/.bin/istanbul cover test.js > coverage.txt
cat coverage.txt
sed -n '3,6p' coverage.txt > report.txt
rm coverage.txt
while read line
do
    # length=$(echo -n "$line" | wc -c)
    l="5"
    var="50"
    hundred="100"
    temp=$line
    t=${temp:15:3}
    if [ "$t" == "$hundred" ];then
        t="99."
    fi


    t1=${t:0:2}
    # echo $length
    if [ "$t1" -gt "$var" ];then
        echo ${temp:0:10} "Coverage is higher than " $var "% Pass!"
    else 
        echo ${temp:0:10} "Coverage is less than " $var "%."
        echo "Failed to commit" 
        exit 1
    fi
done < report.txt
rm report.txt


echo "---------Running JSHint to analyse source code ----------"
sleep 1.5

git status > stage.txt
python get_staged_file.py > staged_file.txt

while read line
do
    jshint --config jshint.conf $line >> jshintResults.txt
done < staged_js.txt

jshintResults=jshintResults.txt

if [ -e "$jshintResults" ]; then
    cat jshintResults.txt
    errors="$(grep -o "errors" jshintResults.txt)"
    warnings="$(grep -o "warnings" jshintResults.txt)"

    if [[ "$errors" == "errors" ]]; then
        echo "JsHint errors in source file!"
        rm jshintResults.txt
        exec < /dev/tty
        while true; do
            read -p "Do you wish to continue this Commit? [Y/n]" yn
            if [ "$yn" = "" ]; then
                yn='Y'
            fi
            case $yn in
                [Yy]* ) break;;
                [Nn]* ) echo "Commit discard!";exit 1;;
            * ) echo "Please answer yes or no.";;
            esac
        done
        # exit 1
    elif [[ "$warnings" == "warnings" ]]; then
        echo "JsHint warnings in source file!"
        rm jshintResults.txt
        # exit 1
    else
        rm jshintResults.txt
        echo 
    fi
else
    echo "No js file to be committed"
fi



echo
echo "-------------Running Comments Ratio Checking---------------"
sleep 1.5
# git status > stage.txt
python comments_ratio.py
rm staged_js.txt

echo
echo "-----------------Running Security Checking-----------------"
sleep 1.5
node security_checking.js
rm stage.txt
rm staged_file.txt
echo

exec < /dev/tty

while true; do
    read -p "Do you wish to perform this Commit? [Y/n]" yn
    if [ "$yn" = "" ]; then
        yn='Y'
    fi
    case $yn in
        [Yy]* ) break;;
        [Nn]* ) echo "Commit discard!";exit 1;;
    * ) echo "Please answer yes or no.";;
    esac
done
