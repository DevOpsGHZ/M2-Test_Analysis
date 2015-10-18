var chai = require('chai')
  , expect = chai.expect
  , should = chai.should();
var subject = require("../subject.js");

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

});
