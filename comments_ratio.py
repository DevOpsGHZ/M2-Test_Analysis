#!/usr/bin/env python

import re
import sys

with open(sys.argv[1], "r") as f:
	buf = f.read()

comment_num = 0
pattern1 = r"//.*\n"
#print pattern1.match(buf)
comment_num += len( re.findall(pattern1, buf) )

pattern2 = r"/\*[^*]*\*/"
res = re.findall(pattern2, buf)
comment_num += len(res)

for i in res:
	comment_num += len(re.findall(r"\n", i))

with open(sys.argv[1], "r") as f:
	buf = f.readlines()

code_num = len(buf)

print "Code: %d lines, Comment: %d lines, Ratio:%.2f%%" % ( code_num, comment_num, float(comment_num)/code_num)