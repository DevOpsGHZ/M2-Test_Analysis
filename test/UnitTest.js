var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();
var subject = require("../subject.js");
var fs = require("fs");
var mock = require('mock-fs');


describe("subject",function(){
	describe("inc function", function(){
		it("caculates -p+1/1 when p<0 and q==undefined ", function(){
			var inc1 = subject.inc(-1,undefined);
			expect(inc1).to.equal(2);
		});
		it("caculates -p+q/q when p<0 and q!=undefined", function(){
			var inc1 = subject.inc(-2,2);
			expect(inc1).to.equal(3);
		});
		it("caculates p+q/q when p>0 and q==undefined", function(){
			var inc1 = subject.inc(2,undefined);
			expect(inc1).to.equal(3);
		});
		it("caculates p+q/q when p>0 and q!=undefined", function(){
			var inc1 = subject.inc(2,2);
			expect(inc1).to.equal(3);
		});
		it("caculates p+q/q when p=0 and q==undefined", function(){
			var inc1 = subject.inc(0,undefined);
			expect(inc1).to.equal(1);
		});
		it("caculates p+q/q when p=0 and q!=undefined", function(){
			var inc1 = subject.inc(0,2);
			expect(inc1).to.equal(1);
		});


	});
	describe("weird funcion", function(){
		it("return 1 when x>7, y<0", function(){
			var weird1 = subject.weird(8,-1,0,'whatever');
			expect(weird1).to.equal(1);
		});
		it("return 1 when z<42", function(){
			var weird1 = subject.weird(0,0,41,'strict');
			expect(weird1).to.equal(0);
		});
		it("return 1 when z<42 and mode[0]==werw ", function(){
			var weird1 = subject.weird(0,0,41,['werw']);
			expect(weird1).to.equal(1);
		});
		it("return 1 when (x<=7 or y>=0) and z>42 and mode!=strict ", function(){
			var weird1 = subject.weird(7,0,42,'notstrict');
			expect(weird1).to.equal(6);
		});

		it("return 1 when (x<=7 or y>=0) and z>42 and mode==strict ", function(){
			var weird1 = subject.weird(0,0,42,'strict');
			expect(weird1).to.equal(1);
		});	
	});
	describe("fileTest funcion", function(){
		it("return false when there is no file under path/fileExists", function(){
			mock({"path/fileExists":{},"pathContent":{"file1":"text content"}});
			subject.fileTest('path/fileExists','pathContent/file1');
			var fileTestResult1 = subject.fileTest('path/fileExists','pathContent/file1'); 
			expect(fileTestResult1).to.equal(false);
			mock.restore();
		});
		it("return false when file in pathContent/file1 has no content", function(){
			mock({"path/fileExists":{"file1":"text content"},"pathContent":{"file1":""}});
			subject.fileTest('path/fileExists','pathContent/file1');
			var fileTestResult1 = subject.fileTest('path/fileExists','pathContent/file1'); 
			expect(fileTestResult1).to.equal(false);
			mock.restore();
		});

		it("return true when there is file with content in filePath", function(){
			mock({"path/fileExists":{"file1":"text content"},"pathContent":{"file1":"text content"}});
			subject.fileTest('path/fileExists','pathContent/file1');
			var fileTestResult1 = subject.fileTest('path/fileExists','pathContent/file1'); 
			expect(fileTestResult1).to.equal(true);
			mock.restore();
		});

	});
	describe("normalize funcion", function(){
		it("return raw phone number when match", function(){
			var normalized1 = subject.normalize('(123)-456-7890'); 
			expect(normalized1).to.equal('1234567890');
		});
		it("return input when doesn't match", function(){
			var normalized1 = subject.normalize('abc'); 
			expect(normalized1).to.equal('abc');
		});
	});
	describe("format funcion", function(){
		it("return format", function(){
			var normalized1 = subject.format('1234567890','(NNN)NNN-NNNN',true); 
			expect(normalized1).to.equal('(123)456-7890');
		});
		it("return format", function(){
			var normalized1 = subject.format('(123)456-7890','(NNN)NNN-NNNN',false); 
			expect(normalized1).to.equal('(123)456-7890');
		});

	});
	describe("blackListNumber funcion", function(){
		it("return true when area code is 212", function(){
			var blacklist1 = subject.blackListNumber('2124567890'); 
			expect(blacklist1).to.equal(true);
		});
		it("return false when area code is not 212", function(){
			var blacklist2 = subject.blackListNumber('1234567890'); 
			expect(blacklist2).to.equal(false);
		});

	});

});
