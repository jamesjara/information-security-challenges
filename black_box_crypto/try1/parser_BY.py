
import sys
import telnetlib
import time
import json
import cPickle as pickle
 
with open('dump.json', 'r') as fp:
    L = json.load(fp)

print L[sys.argv[1]]
