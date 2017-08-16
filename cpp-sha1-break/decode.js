const exec = require('child_process').exec;
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+_)(*&^%$#@!.;[]{}~".split("");
//const alphabet = "a".split("");

//for(var x = 0; x < alphabet.length; x++){
for(var x = 0; x < 999999999; x++){
    //var letter = alphabet[x];
    var letter = x;
    exec(`python make-null-byte.py ${letter}`,(e,s,se) => {
       // console.log(`file created: ${s}`);
        exec(`openssl dgst -sha256 ${s} | awk '{print $1}'`,(error, stdout, stderr) =>{
            var tmp = stdout.split("= ");
            //console.log(`sha256 created: ${tmp[1]}`);
            exec(`curl 'hsse`, (error, stdout2, stderr) => {
                if(stdout2 != "Invalid hash\n")
                    console.log(`SERVER ${stdout2}`);
            });
        });
    });
    
}


 
