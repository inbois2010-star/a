//함수 지정법

function plus1(){
    return a+b;
};

const plus2=function(){
    return a+b;
};

const plus3=(a,b)=>{
    return a+b;
};

const plus4=(a,b)=>a+b;

//매개변수가 하나인경우

const plus5 = a => a+1;

const plus6 = () => null;