import os
import sys

data = ['a']
for x in range (0, int(sys.argv[1])):
   data.append('\x00')
filee = os.open('bin_' + sys.argv[1], os.O_CREAT|os.O_WRONLY)
os.write(filee, buffer(''.join(data)))
os.close(filee)
print 'bin_' + sys.argv[1]