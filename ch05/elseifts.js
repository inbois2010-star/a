const readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question('입력>> ',function(score){
    if (score>=60) console.log("합격")
    else console.log("불합격")
    rl.close();
});

rl.question('입력>> ',function(num){
    if ((num%2)==0) console.log("짝수")
    else console.log("홀수")
    rl.close();
})