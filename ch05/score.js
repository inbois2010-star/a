const readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question('입력>> ',function(num){
    if (num>=1 && num<=100){
        if (num>=81 && num<=90) console.log("B");
        if (num>=71 && num<=80) console.log("C");
        if (num>=61 && num<=70) console.log("D");
        if (num>=0 && num<=60) console.log("F");
        if (num>=91 && num<=100) console.log("A");
    }else console.log("잘못 입력됨");
    rl.close();
});