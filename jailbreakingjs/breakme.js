var rl = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
});

function calculate_expression() {
      rl.question("> ", function(expression) {
          // if (/^[0-9.+-/%*<>!=[\]() ]*$/.test(expression)) {
          expression = "(![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]+[!+[]+!+[]]+(+(+!+[]+(!+[]+[])[!+[]+!+[]+!+[]]+[+!+[]]+[+[]]+[+[]])+[])[!+[]+!+[]]+[!+[]+!+[]]+(!![]+[][(![]+[])[+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[!+[]+!+[]+!+[]]+(!![]+[])[+!+[]]])[!+[]+!+[]+[+[]]]";
          console.log(f);
          //console.log(f);
          console.log(eval(expression));
          //        } else {
          //                    console.log('The expression must only contain the following characters: 0123456789.+-/%*<>!=[]()');
          //                  }
              calculate_expression();
            });
}

calculate_expression();

f = require('fs').readFileSync('flag.txt').toString();    
