const readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question('입력>> ',function(num){
    switch(num){
        case 'y':
            console.log("포맷하겠습니다");
            break;
        case 'n':
            console.log('포맷하지 않겠습니다');
            break;
        default:
            console.log("유효하지않은 문자입니다");
            break;
    }
    rl.close();
});