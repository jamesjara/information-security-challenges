const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream('dump')
});

const result = [];
rl.on('line', (line)=>{
    if(line.includes('Leftover Cptre Data')){
        const char = parseInt(line.replace('Leftoer Captre Data: ','').substr(4,2),16);
        if(char>0 && char>=4 && char <=80){
                result.push(String.fromCharCode(char +  'a'.charCodeAt(0)-4) );
        } else {
                result.push(' ');
        }
    }
});

rl.on('close', ()=>{
  console.log(result.join(''));
});


