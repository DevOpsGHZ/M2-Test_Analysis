var target = require('./target.js')
var mock = require('mock-fs');
target.checkLeapYear(undefined);
target.checkLeapYear('-MI8sZdEtU');
target.checkLeapYear(100);
target.checkLeapYear(101);
target.checkLeapYear(99);
target.checkLeapYear(400);
target.checkLeapYear(401);
target.checkLeapYear(399);
target.checkLeapYear(4);
target.checkLeapYear(5);
target.checkLeapYear(3);
target.getTomorrowDate('',12,0);
target.getTomorrowDate('',680,0);
target.getTomorrowDate('',5,0);
target.getTomorrowDate('',716,0);
target.getTomorrowDate('',6,0);
target.getTomorrowDate('',12,4);
target.getTomorrowDate('',12,-6);
target.getTomorrowDate('',12,31);
target.getTomorrowDate('',12,1247);
target.getTomorrowDate('',12,23);
target.getTomorrowDate('',12,2743);
target.getTomorrowDate('',12,26);
target.getTomorrowDate('',12,990);
target.getTomorrowDate('',12,30);
target.getTomorrowDate('',12,2564);
target.getTomorrowDate('',12,22);
target.getTomorrowDate('',12,2019);
target.getTomorrowDate('',12,21);
target.getTomorrowDate('',12,29);
target.getTomorrowDate('',12,2533);
target.getTomorrowDate('',12,28);
target.getTomorrowDate('',12,1415);
target.getTomorrowDate('',12,1238);
target.getTomorrowDate('',12,19);
target.getTomorrowDate('',12,2668);
target.getTomorrowDate('',680,4);
target.getTomorrowDate('',680,-6);
target.getTomorrowDate('',680,31);
target.getTomorrowDate('',680,1247);
target.getTomorrowDate('',680,23);
target.getTomorrowDate('',680,2743);
target.getTomorrowDate('',680,26);
target.getTomorrowDate('',680,990);
target.getTomorrowDate('',680,30);
target.getTomorrowDate('',680,2564);
target.getTomorrowDate('',680,22);
target.getTomorrowDate('',680,2019);
target.getTomorrowDate('',680,21);
target.getTomorrowDate('',680,29);
target.getTomorrowDate('',680,2533);
target.getTomorrowDate('',680,28);
target.getTomorrowDate('',680,1415);
target.getTomorrowDate('',680,1238);
target.getTomorrowDate('',680,19);
target.getTomorrowDate('',680,2668);
target.getTomorrowDate('',5,4);
target.getTomorrowDate('',5,-6);
target.getTomorrowDate('',5,31);
target.getTomorrowDate('',5,1247);
target.getTomorrowDate('',5,23);
target.getTomorrowDate('',5,2743);
target.getTomorrowDate('',5,26);
target.getTomorrowDate('',5,990);
target.getTomorrowDate('',5,30);
target.getTomorrowDate('',5,2564);
target.getTomorrowDate('',5,22);
target.getTomorrowDate('',5,2019);
target.getTomorrowDate('',5,21);
target.getTomorrowDate('',5,29);
target.getTomorrowDate('',5,2533);
target.getTomorrowDate('',5,28);
target.getTomorrowDate('',5,1415);
target.getTomorrowDate('',5,1238);
target.getTomorrowDate('',5,19);
target.getTomorrowDate('',5,2668);
target.getTomorrowDate('',716,4);
target.getTomorrowDate('',716,-6);
target.getTomorrowDate('',716,31);
target.getTomorrowDate('',716,1247);
target.getTomorrowDate('',716,23);
target.getTomorrowDate('',716,2743);
target.getTomorrowDate('',716,26);
target.getTomorrowDate('',716,990);
target.getTomorrowDate('',716,30);
target.getTomorrowDate('',716,2564);
target.getTomorrowDate('',716,22);
target.getTomorrowDate('',716,2019);
target.getTomorrowDate('',716,21);
target.getTomorrowDate('',716,29);
target.getTomorrowDate('',716,2533);
target.getTomorrowDate('',716,28);
target.getTomorrowDate('',716,1415);
target.getTomorrowDate('',716,1238);
target.getTomorrowDate('',716,19);
target.getTomorrowDate('',716,2668);
target.getTomorrowDate('',6,4);
target.getTomorrowDate('',6,-6);
target.getTomorrowDate('',6,31);
target.getTomorrowDate('',6,1247);
target.getTomorrowDate('',6,23);
target.getTomorrowDate('',6,2743);
target.getTomorrowDate('',6,26);
target.getTomorrowDate('',6,990);
target.getTomorrowDate('',6,30);
target.getTomorrowDate('',6,2564);
target.getTomorrowDate('',6,22);
target.getTomorrowDate('',6,2019);
target.getTomorrowDate('',6,21);
target.getTomorrowDate('',6,29);
target.getTomorrowDate('',6,2533);
target.getTomorrowDate('',6,28);
target.getTomorrowDate('',6,1415);
target.getTomorrowDate('',6,1238);
target.getTomorrowDate('',6,19);
target.getTomorrowDate('',6,2668);
target.extractDate('');
mock({"path/fileExists":{"file1":""},"pathContent":{"file1":""}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":""}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content"}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content"}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"path/fileExists":{"file1":""},"pathContent":{"file1":""}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"pathContent":{"file1":"text content"}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"pathContent":{"file1":""}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"pathContent":{"file1":"text content"}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"pathContent":{"file1":""}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"pathContent":{"file1":"text content"}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"path/fileExists":{"file1":""}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"path/fileExists":{"file1":""}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"path/fileExists":{}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"path/fileExists":{}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"path/fileExists":{"file1":""}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({});
	target.checkResult('pathContent/file1');
mock.restore();
mock({});
	target.checkResult('pathContent/file1');
mock.restore();
mock({});
	target.checkResult('pathContent/file1');
mock.restore();
mock({});
	target.checkResult('pathContent/file1');
mock.restore();
mock({});
	target.checkResult('pathContent/file1');
mock.restore();
