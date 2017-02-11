# -*- coding: utf-8 -*-

import sys
import telnetlib
import time
import json
print sys.getdefaultencoding()

L = dict()
s = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ_{}[]?¿"
 
for c in s:
    tn = telnetlib.Telnet("88.99.14.32", "36478")
    tn.read_until(b"Enter the text you want to encrypt:", 30000 )
    print("Sending -> " + c)
    tn.write(c.encode('ascii') + b"\n\n")
    output = tn.read_until(b"\n\r")
    output2 = output.split('\n') 
    prevalue = output2[2]
    L[prevalue[-2:]] = c
 
print(L)

with open('dump.json', 'w') as fp:
    json.dump(L, fp)


 
