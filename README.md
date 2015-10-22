# M2-Test_Analysis
## Unit Test

Using mocha for unit testing.   
20 unit tests written in test/unitTest.js.    
run `node main.js` will tell the result if all unit tests passed.

## Static Analysis

Using [JSHint](<http://jshint.com>) for static analysis. It will scan the js file to see if there are any potential bugs or dirty codes. 

There are some default rules. You can modify the `jshint.conf` file to custom the rules.

The `jshint.conf` file looks like this:

```
{
	"passfail"      : false,	// Stop on first error
	"maxerr"        : 10,		// Maximum errors before stopping
	"devel"         : true,		// Allow development statements e.g. `console.log();`
	"asi"           : false,    // Tolerate Missing Semicolon
	"maxlen"        : 80		// Maximum line length
}
```

run `jshint <filename>` will analysis the js file and output the result.

```
zsp-rmbp:M2-Test_Analysis zsp$ jshint subject.js 
subject.js: line 6, col 9, Use '===' to compare with 'undefined'.
subject.js: line 28, col 39, Use '===' to compare with '0'.
subject.js: line 37, col 23, Did you mean to return a conditional instead of an assignment?
subject.js: line 54, col 22, Use '===' to compare with '0'.
subject.js: line 85, col 43, Missing semicolon.
subject.js: line 86, col 6, Unnecessary semicolon.

6 errors
```

## Extend Analysis Tool

We extend analysis tool by implementing a comment ratio calculation tool from scratch.

The new tool is a simple python file `comments_ratio.py`.