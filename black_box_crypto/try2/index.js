var crypto = require('crypto');


function encrypt(text,password){
    const cipher = crypto.createCipher('aes-256-ctr',password)
    let crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex')
    
    return  crypted
}

function encrypt2(text,password){
    crypted = crypto.createHmac('sha1', password).update(text).digest('hex')
    return  crypted
}


const abc =  "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ_{}[]?¿"

abc.split('').map((el,idx,array)=>{
    
    //console.log(el , "->" ,encrypt('A',el));
    //console.log(encrypt2('A',el))


})

/*
var tests = ["BB"  , "AABB", "BBAA", "AAAB", "BAAA"];
var letter = { "A": "6b", "B": "68", "C": "69", "2a": "2a" };
tests.map(function(text){
    console.log("-------", text);
    var format4Decrypt = "";
    
    for(var i = 0; i < text.length / 2; i++){
        console.log("--------------", i);
        var a = text[i*2+1] || "2a";
        var b = text[i*2] || "2a";
        
        format4Decrypt += letter[a] + letter[b];
        console.log(i*2+1, text[i*2+1]);
        console.log(i*2, text[i*2]);
    }
    
    
    console.log("format4Decrypt: ", format4Decrypt);
    console.log("\n\n");
    
    console.log( "->" ,encrypt('A', format4Decrypt ));
});
*/


// new try with dict

const input = "4b795162425d5e1e1e757544726f6669797f7c63756f4249461e4f464d44754f425e534f5975585f75197d797e1b62696e6f5e751b424d4475595a5f4b7548755e434b754b424b424d755e4f1b75155e2a57"

const chunks = input.match(/.{1,4}/g);


const dict = { '40': 'j',
    '41': 'k',
    '42': 'h',
    '43': 'i',
    '44': 'n',
    '45': 'o',
    '46': 'l',
    '47': 'm',
    '48': 'b',
    '49': 'c',
    '50': 'z',
    '52': 'x',
    '53': 'y',
    '58': 'r',
    '59': 's',
    '60': 'J',
    '61': 'K',
    '62': 'H',
    '63': 'I',
    '64': 'N',
    '65': 'O',
    '66': 'L',
    '67': 'M',
    '68': 'B',
    '69': 'C',
    '70': 'Z',
    '72': 'X',
    '73': 'Y',
    '78': 'R',
    '79': 'S',
    '4b': 'a',
    '6b': 'A',
    '4e': 'd',
    '6e': 'D',
    '4f': 'e',
    '6f': 'E',
    '4c': 'f',
    '6c': 'F',
    '4d': 'g',
    '6d': 'G',
    '5a': 'p',
    '7a': 'P',
    '5b': 'q',
    '7b': 'Q',
    '5e': 't',
    '7e': 'T',
    '5f': 'u',
    '7f': 'U',
    '5c': 'v',
    '7c': 'V',
    '5d': 'w',
    '75': '_',
    '15': '?',
    '19': '3',
    '1b': '1',
    '18': '2',
    '19': '3',
    '1e': '4',
    '1f': '5',
    '1c': '6',
    '1d': '7',
    '12': '8',
    '13': '9',
    '57': '}',
    '51': '{',
    '2a': '',
    '7d': 'W' }

const phrase = []

chunks.map((chunk)=>{
    const parts = chunk.match(/.{1,2}/g)
    const newObj = [ decrypt(parts[1]) , decrypt(parts[0])  ]
    
    phrase.push(newObj.join(''))
})

// yeah! w00tz!

console.log(phrase.join(''));

function decrypt(key){
    return dict[key] ?  dict[key] : '*'+key+'*';
}
