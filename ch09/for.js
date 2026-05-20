const arr=["고양이","사자","강아지"];
const abj={name:"표승현",age:17};
for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
for (let animal of arr){
    console.log(animal);
}
for (let key in obj){
    console.log(key);
    console.log(obj[key]);
}