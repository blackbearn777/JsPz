function First() {
    let res ="";
    let bar ="";
    while(true ){
        bar = prompt("Chose language: en of ua");
        if(bar.toLowerCase() == "en" || bar.toLowerCase =="ua"){
            res = bar;
            break;
        }
        else{
            alert("Try again");
        }
    }
    let quest = -1;
    let temp =-1;
    if(res == "en"){
        while(true){
            temp =parseInt(prompt("enter the day number of week from 1-7"));
            if(temp>0 && temp<=7){
                quest = temp;
                break;
            }
            else{
                alert("Try again");
            }
        }
        switch(quest){
            case 1:
                alert("Monday");
                break;
            case 2:
                alert("Tuesday");
                break;
            case 3:
                alert("Wednesday");
                break;
            case 4:
                alert("Thursday");
                break;
            case 5:
                alert("Friday");
                break
            case 6:
                alert("Sunday");
                break; 
            case 7:
                alert("Saturday");
                break;   
                
        }
        
    }
    else if(res =="ua"){
        while(true){
            temp =parseInt(prompt("Введіть номер дня тижня від 1 до 7"));
            if(temp>0 && temp<=7){
                quest = temp;
                break;
            }
            else{
                alert("Try again");
            }
        }
        switch(quest){
            case 1:
                alert("Понеділок")
                break
            case 2:
                alert("Вівторок")
                break
            case 3:
                alert("Середа")
                break
            case 4:
                alert("Четвер")
                break
            case 5:
                alert("П'ятниця")
                break
            case 6:
                alert("Субота")
                break 
            case 7:
                alert("Неділя")
                break   
    }
}
}
//First();
function Second(lenght, width) {
    alph = ["_", "A","B","C","D","E","F","G","H"];
    
    let a =8;
    for (let i = 0; i < lenght; i++) {
        
        for (let j = 0; j<width; j++) { 
            if(j==0){
                document.write(a--);
            }              
            if(j%2==0){
                document.write('#');
            }
            else{
                document.write('@');
            }
        }
        document.write("<br>");  
    }
    for (let i = 0; i < alph.length; i++) {
       
        document.write(alph[i]);
        
    }
}
//Second(8,8);
function Third(numb) {
    // if(numb>9999 || numb<0){
    //     return null;
    // }
    let res = "";
    let str = String(numb);
    for (let i = str.length; i > 0; i--){
        if(str.length ==4){
            res = "Одиниці: " + str[0] + " Десятки: "+str[1]+" Сотні: "+str[2]+" Тисячі: "+str[3];
        }
        else if(str.length==3){
            res = "Одиниці: " + str[0] + " Десятки: "+str[1]+" Сотні: "+str[2]
        }
        else if(str.length==2){
            res = "Одиниці: " + str[0] + " Десятки: "+str[1];
        }
        else if(i==1){
            res = "Одиниці: " + str[0]
        }
    }
    return res;
    
}
//console.log(Third(895));
function Fourth(str) {
//     let res='';
//    for (let i = 0; i< str.lenght; i++) {
//        if(str[i] =='.'){
//            res = str.substring(i, str.lenght-1);
//            break;
//        }
//    } 
   return str.split('.')[1];
}
//console.log(Fourth('dgdfgdffhfhhfhggg.html'));
function Shower(arr) {
    for (let i = 0; i< arr.length; i++) {
      console.log(arr[i]);
       
    }
}
function Fivth(a) {
    Shower(a);
    var seen = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for(var i = 0; i < len; i++) {
         var item = a[i];
         if(seen[item] !== 1) {
               seen[item] = 1;
               out[j++] = item;
         }
    }
    console.log("//////////////////////////////////////");
    Shower(out);
    return out;
}
let a = [1,24,5,3,4,5,5,5,6,64,6,3,5,];
//Fivth(a);
function Seventh(email) {
    var r = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
if (!r){
	alert("False");
	
}
else{
    alert("True");
}
}
//Seventh("blackebarn77gmail.com");
function Eighth(str) {
    let vowels = "aeiouy";
    let arr = str.split(" ");
    let vow =0;
    console.log(arr.lenght);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if(arr[i][0] == vowels[j]){
                vow++;
            }
        }
        console.log("Text: " + str + " vowels: " + vow + " not vowels: " + (arr.lenght-vow));
    }
}
str = "Eba Nona Tora Ova Yola Ina Mina Eta Yas";
Eighth(str);