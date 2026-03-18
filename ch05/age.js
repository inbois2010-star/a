const readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question('입력>> ',function(num){
    if (num>=1 && num<=100){
        if (num>=19) console.log("성인입니다");
        else console.log("미성년자 입니다");
    }else console.log("잘못 입력됨");
    rl.close();
});