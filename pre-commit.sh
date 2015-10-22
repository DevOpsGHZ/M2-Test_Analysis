#!/bin/bash
# echo "Running pre-commit script"
# sh ./pre-commit.sh
echo "----------------Pre Commit script----------------"
sleep 1
echo "----------------Running UnitTest ----------------"
sleep .5
npm test > unitTestResults.txt
cat unitTestResults.txt
fail="$(grep -o "failing" unitTestResults.txt)"
# echo $fail
if [[ "$fail" == "failing" ]]; then
	echo "UnitTest fails, commit reject!"
	exit 1
else
	echo "All unit test cases passed!"
fi

echo "-----Running JSHint to analyse source code ------"
sleep .5
jshint *.js > jshintResults.txt
cat jshintResults.txt
errors="$(grep -o "errors" jshintResults.txt)"
warnings="$(grep -o "warnings" jshintResults.txt)"

if [[ "$errors" == "errors" ]]; then
    echo "JsHint errors in source file!"
    exit 1
elif [[ "$warnings" == "warnings" ]]; then
    echo "JsHint warnings in source file!"
    exit 1
else
    echo "All unit test cases passed!"
fi

echo "-----Generate test case & Running Istanbul ------"
sleep .5
node generate.js
node_modules/.bin/istanbul cover test.js > coverage.txt
cat coverage.txt
sed -n '3,6p' coverage.txt > report.txt
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


echo "-----------Running Security Checking-------------"
sleep .5
git status > stage.txt
node security_checking.js

# rm unitTestResults.txt
# rm coverage.txt
# rm stage.txt
# rm report.txt

# exec < /dev/tty

# while true; do
#     read -p "Do you wish to perform this Commit? [Y/n]" yn
#     if [ "$yn" = "" ]; then
#         yn='Y'
#     fi
#     case $yn in
#         [Yy]* ) break;;
#         [Nn]* ) echo "Commit discard!";exit 1;;
#     * ) echo "Please answer yes or no.";;
#     esac
# done