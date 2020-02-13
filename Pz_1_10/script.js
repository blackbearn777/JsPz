function seconds(total) {
    return parseInt(total)%60;
}
console.log(seconds(10));
function perimeter(side,count) {
    return side*count;
}
console.log(perimeter(10,4));
function pedestiranFlowRate(cycleLenght,trafficLenght,turningLenght) {
    let red = cycleLenght/3;
    return "green "+red;
}
console.log(pedestiranFlowRate(120,20,40));
function calculate(param1,param2,param3) {
    return (param1+param2+param3)/3;
}
console.log(calculate(20,50,10));
let isDividible = function(n,x,y) {
    if(n%x === 0 && n%y === 0){

        return true;
    }
    else {
        return false;
    }
};
console.log(isDividible(5,2,2));
let isDividible2 = function(n,x,y){
    return n%x===0 && n%y ===0;
};
console.log(isDividible2(5,2,2));
let isDividible3 = function (n,x,y) {
    let isTrue =false;
    isTrue = n%x===0 ? true:false;
    isTrue = n%y === 0? true:false;
    return isTrue;
};
console.log(isDividible3(5,2,2));
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function Arrayer(n) {
    let arr = new Array(n);
    for( i =0; i<arr.length;i++){
        arr[i] = getRandomInt(10,100);
    }
    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    for (i = 0; i<arr.length;i++){
        if(arr[i]%2!==0){
            console.log(arr[i]);
        }
        if(min>arr[i]){
            min = arr[i]
        }
        if(max<arr[i]){
            max = arr[i]
        }
        sum +=arr[i];
    }
    let average = sum/n;
    console.log("Max:" + max);
    console.log("Min: "+min);
    console.log("Average: "+average);
    console.log("Lenght: "+ n);
    console.log("Sum: "+ sum);
}
Arrayer(10);
function TwoDemensionArray() {
    let a =5;
    let b=5;
    let arr = new Array(a);
    for(i=0;i<=b;i++){
        arr[i] = new Array(b);
    }
    for ( i=0;i<a;i++){
        for (j=0;j<b;j++){
            arr[i][j]=getRandomInt(-100,100)
        }}
    for (i=0;i<a;i++){
        for(j=0;j<b;j++){
            document.write(arr[i][j] + " ");
        }
        document.write("<br \/>");
    }
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if(i == j){
                if(arr[i][j]<0){
                    arr[i][j] = 0;
                }
                if(arr[i][j]>0){
                    arr[i][j] =1;
                }
            }
        }
    }
    for (i=0;i<a;i++){
        for(j=0;j<b;j++){
            document.write(arr[i][j] + " ");
        }
        document.write("<br \/>");
    }



}
TwoDemensionArray();
let Mul = function(a,b) {
    return a*b;
};
let Div = function(a,b) {
    if(b===0){
        return 0;
    }
    else {
        return a/b;
    }
};
let Sum = function (a,b) {
    return a+b;
};
let Sub = function (a,b) {
    return a-b;
};
function isPrime(n) {
    if (n < 2) {
        return 'Must be more than 1';
    } else if (n === 2) {
        return 'Prime';
    }

    let i = 2;
    const limit = Math.sqrt(n);
    while (i <= limit) {
        if (n % i === 0) {
            return 'Not prime';
        }
        i +=1;
    }

    return 'Простое число';
}

function Nine(a) {
    console.log(a);
    let isEven = a%2===0?"Even":"Not Even";
    console.log(isPrime(a));
    let strangeVariable = false;
    if(a%2===0 && a%3===0 && a%5===0 && a%6===0 && a%9===0){
        strangeVariable = true;
    }
    console.log(strangeVariable);
    console.log(isEven);
}
Nine(10);
let arr1 = [2,4,false,"fkfk"];
function Ten(arr) {
    for(i =0; i<arr.length;i++){
        if(typeof(arr[i])==="number"){
            arr[i] =Math.pow(arr[i],2);
        }
    }
    let reversed = arr.reverse();
    return reversed;
}
console.log(Ten(arr1));
