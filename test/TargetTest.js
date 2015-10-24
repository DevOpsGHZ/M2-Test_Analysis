var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();
var target = require("../target.js");
var fs = require("fs");
var mock = require('mock-fs');

describe("subject",function(){
	describe("checkYear function",function(){
		it("return 1 when input leap year 2012",function(){
			var year1 = target.checkLeapYear(2012);
			expect(year1).to.equal(0);
		});
		it("return 1 when input leap year 2000",function(){
			var year2 = target.checkLeapYear(2000);
			expect(year2).to.equal(1);

		});
		it("return 0 when input year 2015",function(){
			var year3 = target.checkLeapYear(2005);
			expect(year3).to.equal(0);
		});
	});

	describe("checkResult function",function(){
		it("return true when there is fail",function(){
			mock({"path":{"result":"some fail"}});
			var result1 = target.checkResult("path/result");
			expect(result1).to.equal(true);
			mock.restore();
		});

		it("return false when there is no fail",function(){
			mock({"path":{"result":"all passing"}});
			var result2 = target.checkResult("path/result");
			expect(result2).to.equal(false);
			mock.restore();
		});

		it("return error when there is no content in file",function(){
			mock({"path":{"result":""}});
			var result3 = target.checkResult("path/result");
			expect(result3).to.equal("error");
			mock.restore();
		});
		it("return error when there is no file",function(){
			mock({"path":{}});
			var result4 = target.checkResult("path/result");
			expect(result4).to.equal("error");
			mock.restore();
		});
		it("return error when there is no file",function(){
			mock({"path":{}});
			var result5 = target.checkResult("path/result");
			expect(result5).to.equal("error");
			mock.restore();
		});
	describe("getTomorrowDate function",function(){
		it("return 2015/10/24 when input 2015,10,23",function(){
			var date1=target.getTomorrowDate(2015,10,23);
			expect(date1).to.equal("2015/10/24");
		});
		it("return 2012/3/1 when input 2012,2,29",function(){
			var date2=target.getTomorrowDate(2012,2,29);
			expect(date2).to.equal("2012/3/1");
		});
		it("return 2012/2/29 when input 2012,2,28",function(){
			var date2=target.getTomorrowDate(2012,2,28);
			expect(date2).to.equal("2012/2/29");
		});
		it("return 2015/3/1 when input 2015,2,28",function(){
			var date2=target.getTomorrowDate(2015,2,28);
			expect(date2).to.equal("2015/3/1");
		});


	});
	describe("extractDate function",function(){
		it("return {year:2015,month:10,day:23} when input 2015/10/23",function(){
			var date1=target.extractDate('2015/10/23');
			expect(date1.year).to.equal(2015);
			expect(date1.month).to.equal(10);
			expect(date1.day).to.equal(23);
		});
	});

		

	});

});


