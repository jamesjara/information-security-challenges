netstat -ant | grep 'tcp' | awk '{
 split($4,p1,":")
 split($5,p2,":")
 #if(p2[1]=="0.0.0.0" || $5==":::*") next
 if ( p2[2] < 3000 ||  p2[2] > 4000 )
 print $4","$5","$6
}
' >  audit.log
#$4 ~ /2222$/ { print $4}'