function solution(num){
    return num*2;
}
solution(3);

const arr=[1,4,2,8,11,5];
let sum=0;
arr.push(15);
for (let i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log(sum);