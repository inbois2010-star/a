const readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question('입력>> ',function(num){
    switch (parseInt(num)){
        case num>=81 && num<=90: console.log("B");
        break;
        case num>=71 && num<=80: console.log("C");
        break;
        case num>=61 && num<=70: console.log("D");
        break;
        case num>=91 && num<=100: console.log("A");
        break;
        default: console.log("잘못된")
    }
    rl.close();
});
console.log("범위 체크는 if 문이 적합함");