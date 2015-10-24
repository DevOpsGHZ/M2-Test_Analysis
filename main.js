//Read the results of unit tests and detect if there is any failed unit test.

var exec = require('child_process').exec;
var fs = require("fs");



function main()
{
	var unitTestflag;//unitTestFlag = true when all unit tests passed, false otherwise;
	var child = exec('npm test > unitTestResults.txt',
    function (error, stdout, stderr)
    {
        //console.log(stdout);
        //console.log(stderr);
        fs.readFile('unitTestResults.txt','utf8', function (err, data) 
        {
        	if (err) throw err;
        	//console.log(data);
        	//console.log(typeof(data));
        	var index = data.indexOf('failing');
        	//console.log(index);
        	if (index == -1){
        		unitTestflag = false;
        	}
        	else{
        		unitTestflag = true;
        	}
        	console.log('All unit Tests passed?: '+unitTestflag);
        });
    });


}

main();



