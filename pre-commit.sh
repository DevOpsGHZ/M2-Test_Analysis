#!bin/bash

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


echo "-----Generate test case & Running Istanbul ------"
sleep .5
node generate.js
node_modules/.bin/istanbul cover test.js > coverage.txt
cat coverage.txt
echo "-----------Running Security Checking-------------"
sleep .5
git status > stage.txt
node security_checking.js

rm unitTestResults.txt
rm coverage.txt
rm stage.txt

while true; do
    read -p "Do you wish to perform this Commit? [Y/n]" yn
    case $yn in
        [Yy]* ) break;;
        [Nn]* ) echo "Commit discard!";exit;;
        * ) echo "Please answer yes or no.";;
    esac
done
echo "Commit test passed!"