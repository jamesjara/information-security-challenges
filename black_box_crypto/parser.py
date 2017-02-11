
import sys
import telnetlib
import time
import json
import cPickle as pickle

input = "4b795162425d5e1e1e757544726f6669797f7c63756f4249461e4f464d44754f425e534f5975585f75197d797e1b62696e6f5e751b424d4475595a5f4b7548755e434b754b424b424d755e4f1b75155e2a57" 

with open('dump.json', 'r') as fp:
    L = json.load(fp)


n = 2
charsBy = ([input[i:i+n] for i in range(0, len(input),n)]);

print charsBy;

sys.stdout.write( "-- NORML -- \n" )
sys.stdout.write( "---- \n" )
sys.stdout.write( "---- \n" )
sys.stdout.flush()

x = 0
for c in charsBy:
   if c in L:
     sys.stdout.write( L[c] )
     sys.stdout.flush()
     if x == 4	:
       sys.stdout.write( " -- \n" )
       sys.stdout.flush()
       x = 0
   else:
     print "missing: " + c
   x += 1

sys.stdout.write( "---- \n" )
sys.stdout.write( "---- \n" )
sys.stdout.write( "-- REVERSED -- \n" )
sys.stdout.write( "---- \n" )
sys.stdout.write( "---- \n" )
sys.stdout.flush()



x = 0
for c in charsBy:
   if c in L:
     sys.stdout.write( L[c] )
     sys.stdout.flush()
     if x == 4	:
       sys.stdout.write( " -- \n" )
       sys.stdout.flush()
       x = 0
   else:
     print "missing: " + c
   x += 1 


print charsBy;

