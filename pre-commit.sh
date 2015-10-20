#!bin/bash

echo "----------------Pre Commit script----------------"
echo "----------------Running UnitTest ----------------"
npm test > unitTestResults.txt
cat unitTestResults.txt
echo "----------------Running Istanbul ----------------"
node_modules/.bin/istanbul cover test.js > coverage.txt
cat coverage.txt
echo "-----------Running Security Checking-------------"
git status > stage.txt
node security_checking.js

rm unitTestResults.txt
rm coverage.txt
rm stage.txt
