MILESTONE: TEST+ANALYSIS
------------------------

In creating your pipeline, you need a **testing component** and **analysis component** that ensures the correctness of a commit.

### Properties

The testing and analysis components must support the following properties.

* The ability to run unit tests, measure coverage, and report the results.

* The ability to improve testing coverage using one of the techniques covered in class: constraint-based test generation, fuzzing, etc.  You can use an existing tool or implement your own approach.

* The ability to run an existing static analysis tool on the source code (e.g. FindBugs, PMD, CheckStyle, NCover, Lint, etc.), process its results, and report its findings.

* The ability to extend an existing analysis tool with a custom analysis, or implement a new analysis from scratch.  For example, you could write a static analysis that checks for the ratio of comments to code, or finds parse errors in SQL string statements.  You could introduce security checks, a dynamic analysis, a data-flow analysis or a data-flow based test coverage.

* Using hooks or post-build scripts, have the ability to reject a commit if it fails a minimum testing criteria (e.g. failed test case, or less than 50% statement coverage) and analysis criteria (e.g. cannot commits that generate a particular FindBugs rule, such as "Method concatenates strings using + in a loop").

* The ability to parse a code files and json files in order to detect the presence of AWS/digital ocean security tokens. The ability to check commited files that are private ssh keys. Using hooks, reject the commit if any violation occurs.

### Tools

In creating your test and analysis components, you have the option of

* configuring existing plugins that support testing, coverage, and analysis and work with Jenkins set to run as post-build scripts, or 
* automating your own testing and analysis tools outside of Jenkins as part of a trigger (either run from a build hook or git hook). If you built a from scratch build server, this is probably what you want to do.


### Submission

Submit the following:

* your code and configuration files, 
* a README.md, with a \#\#\# Test section describing your testing setup and a \#\#\# Analysis section describing your base and extended analysis.
* test cases/scripts/screenshots that demostrate each capability.
* A screencast describing basic.

*If you are configuring a system such as Jenkins, and have set everything up via the GUI, then you should still submit the its configuration file as part of your code.*

Submit [your repo link here](https://docs.google.com/a/ncsu.edu/forms/d/1d7J_XAnq-sKVmkyNIreE3mcsYkh42fJyT6G6K4Roz9o/viewform#start=invite)

**Due Friday, October 23rd @ midnight.**

### Evaluation

* Unit Tests and Coverage - 20%
* Advanced Testing Technique - 20%
* Base Analysis - 20%
* Extended Analysis - 10%
* Testing Gate - 10%
* Analysis Gate - 10%
* Security Token Gate - 10%

## Resources

* https://code.google.com/p/findbugs/wiki/DetectorPluginTutorial