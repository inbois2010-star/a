const color=['R','G','B'];

// let r=color[o];
// let g=color[1];
// let b=color[2];
let [r,g,b]=color;



const user={
    id:'gbsw',
    pw:1234,
    name:'표승현',
    age:17
};

// let id=user.id;
// let pw=user.pw;
// let name=user.name;
// let age=user.age;
let {id,pw,name,age}=user;



let asdf=10;
let zxcv=15;
//별도 변수없이 값 변경 가능
[asdf,zxcv]=[zxcv,asdf];



let {id,pw,name,age=20}=user;
console.log(age);