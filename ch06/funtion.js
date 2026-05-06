/*짝수 홀수 개수
function solution(num_list) {
    var answer = []
    let a=0;
    let b=0;
    for (let i=0;i>num_list.length;i++){
        if (num_list%2==0){
            b++
        }else{
            a++
        }
    }
    return [a,b];
}*/

/*특정 문자 제거하기
function solution(my_string,letter){
    answer=[]
    for (let i=0;i<my_string.legnth;i++){
        if (my_string[i]!==letter){
            answer+=my_string
        }
    }
    return answer;
}*/

/*최댓값 만들기
function solution(numbers) {
    var answer = 0;
    let max=0
    for (let i=0;i<numbers.length;i++){
        if (numbers[i]>numbers[max]){
            max=i
        }
    }
    console.log(max)
    max=0
    for (let i=0;i<numbers.length;i++){
        if (numbers[i]>numbers[max]){
            max=i
        }
    }
    console.log(max)
    return answer;
}*/

/*아이스 아메리카노
function solution(money){
    let count=Math.floor(money/5500);
    let change=money%5500;
    return [count,change];
}*/
f=open("새파일.txt","r")
line=f.readline()
print(line)
f.close()