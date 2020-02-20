function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let arr1 = new Array(100);
let arr2 = new Array(200);
let arr4 = ArrFuller(arr1, 1, 10)
let arr0 = ArrFuller(arr2,1,10)
function ShowArr(arr) {
    for( i = 0; i<arr.length; i++){
        document.write(arr[i]);
    }
    
}
function ArrFuller(arr, x,y) {
    for( i = 0; i<arr.length; i++){
        arr[i] = getRandomInt(x,y);
    }
    return arr;
}
function AdditionPz(arr) {

    for(let i =0; i<arr1.length; i++){
        if(arr1[i]>0 && arr1[i]<10){
            console.log(arr1[i]);
        }
    }

}
//AdditionPz(arr4);
function FindFive(arr) {
    for(let i =0; i<arr.length;i++){
        if(arr[i] ==5){
            console.log("Is");
            break;
        }
    }
}
//FindFive(arr0);
function SumOfElements(arr) {
    let sum = 0;
    for(let i =0; i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
//console.log(SumOfElements(arr4));
function GetAverage(arr){
    let sum = 0;
    for(let i =0; i<arr.length; i++)
    {
        sum+=arr[i];
    }
    return sum/arr.length
}
//console.log(GetAverage(arr0));
function ArrayFill(char, count) {
    let arr = new Array(count);
    for(let i =0; i<arr.length; i++)
    {
        arr[i] = char;
    }
    return arr;
}
//ShowArr(ArrayFill('*',20));
let items = [[true, 2],["tug", 4],[5, 6]];
function SumOfTwoDementionArray(arr) {
    let sum =0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if(typeof(arr[i][j]) === "number"){
                sum += arr[i][j];
            }
            
        }
    }
    return sum;
}
console.log(SumOfTwoDementionArray(items));
