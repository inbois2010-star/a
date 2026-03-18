const readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question('입력>> ',function(num){
    for (i=1;i<10;i++){
        console.log(num+"곱하기 "+i+"은(는) "+(num*i))
    }

    rl.close();
});