var target = require('./target.js')
var mock = require('mock-fs');
target.checkLeapYear(undefined);
target.checkLeapYear('ciAny6QFo9');
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
target.getTomorrowDate('',478,0);
target.getTomorrowDate('',10,0);
target.getTomorrowDate('',566,0);
target.getTomorrowDate('',3,0);
target.getTomorrowDate('',12,1);
target.getTomorrowDate('',12,-9);
target.getTomorrowDate('',12,31);
target.getTomorrowDate('',12,1158);
target.getTomorrowDate('',12,23);
target.getTomorrowDate('',12,1396);
target.getTomorrowDate('',12,502);
target.getTomorrowDate('',12,26);
target.getTomorrowDate('',12,30);
target.getTomorrowDate('',12,2304);
target.getTomorrowDate('',12,20);
target.getTomorrowDate('',12,1935);
target.getTomorrowDate('',12,21);
target.getTomorrowDate('',12,29);
target.getTomorrowDate('',12,1679);
target.getTomorrowDate('',12,24);
target.getTomorrowDate('',12,2411);
target.getTomorrowDate('',12,19);
target.getTomorrowDate('',12,28);
target.getTomorrowDate('',12,1073);
target.getTomorrowDate('',12,2010);
target.getTomorrowDate('',478,1);
target.getTomorrowDate('',478,-9);
target.getTomorrowDate('',478,31);
target.getTomorrowDate('',478,1158);
target.getTomorrowDate('',478,23);
target.getTomorrowDate('',478,1396);
target.getTomorrowDate('',478,502);
target.getTomorrowDate('',478,26);
target.getTomorrowDate('',478,30);
target.getTomorrowDate('',478,2304);
target.getTomorrowDate('',478,20);
target.getTomorrowDate('',478,1935);
target.getTomorrowDate('',478,21);
target.getTomorrowDate('',478,29);
target.getTomorrowDate('',478,1679);
target.getTomorrowDate('',478,24);
target.getTomorrowDate('',478,2411);
target.getTomorrowDate('',478,19);
target.getTomorrowDate('',478,28);
target.getTomorrowDate('',478,1073);
target.getTomorrowDate('',478,2010);
target.getTomorrowDate('',10,1);
target.getTomorrowDate('',10,-9);
target.getTomorrowDate('',10,31);
target.getTomorrowDate('',10,1158);
target.getTomorrowDate('',10,23);
target.getTomorrowDate('',10,1396);
target.getTomorrowDate('',10,502);
target.getTomorrowDate('',10,26);
target.getTomorrowDate('',10,30);
target.getTomorrowDate('',10,2304);
target.getTomorrowDate('',10,20);
target.getTomorrowDate('',10,1935);
target.getTomorrowDate('',10,21);
target.getTomorrowDate('',10,29);
target.getTomorrowDate('',10,1679);
target.getTomorrowDate('',10,24);
target.getTomorrowDate('',10,2411);
target.getTomorrowDate('',10,19);
target.getTomorrowDate('',10,28);
target.getTomorrowDate('',10,1073);
target.getTomorrowDate('',10,2010);
target.getTomorrowDate('',566,1);
target.getTomorrowDate('',566,-9);
target.getTomorrowDate('',566,31);
target.getTomorrowDate('',566,1158);
target.getTomorrowDate('',566,23);
target.getTomorrowDate('',566,1396);
target.getTomorrowDate('',566,502);
target.getTomorrowDate('',566,26);
target.getTomorrowDate('',566,30);
target.getTomorrowDate('',566,2304);
target.getTomorrowDate('',566,20);
target.getTomorrowDate('',566,1935);
target.getTomorrowDate('',566,21);
target.getTomorrowDate('',566,29);
target.getTomorrowDate('',566,1679);
target.getTomorrowDate('',566,24);
target.getTomorrowDate('',566,2411);
target.getTomorrowDate('',566,19);
target.getTomorrowDate('',566,28);
target.getTomorrowDate('',566,1073);
target.getTomorrowDate('',566,2010);
target.getTomorrowDate('',3,1);
target.getTomorrowDate('',3,-9);
target.getTomorrowDate('',3,31);
target.getTomorrowDate('',3,1158);
target.getTomorrowDate('',3,23);
target.getTomorrowDate('',3,1396);
target.getTomorrowDate('',3,502);
target.getTomorrowDate('',3,26);
target.getTomorrowDate('',3,30);
target.getTomorrowDate('',3,2304);
target.getTomorrowDate('',3,20);
target.getTomorrowDate('',3,1935);
target.getTomorrowDate('',3,21);
target.getTomorrowDate('',3,29);
target.getTomorrowDate('',3,1679);
target.getTomorrowDate('',3,24);
target.getTomorrowDate('',3,2411);
target.getTomorrowDate('',3,19);
target.getTomorrowDate('',3,28);
target.getTomorrowDate('',3,1073);
target.getTomorrowDate('',3,2010);
target.extractDate('');
mock({"path/fileExists":{},"pathContent":{"file1":"text content"}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":""}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"path/fileExists":{"file1":""},"pathContent":{"file1":"text content"}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"path/fileExists":{"file1":""},"pathContent":{"file1":"text content"}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content"}});
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
mock({"pathContent":{"file1":""}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"pathContent":{"file1":""}});
	target.checkResult('pathContent/file1');
mock.restore();
mock({"path/fileExists":{"file1":""}});
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
