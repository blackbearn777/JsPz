function First(){

    const os = require("os");
    let userName = os.userInfo().username;
    console.log(userName);
}
//First();
function Second(){
    const chalk = require('chalk');
console.log(chalk.red('Text in red'));
var beep = require('beepbeep')

beep()
}
//Second();
function Third( text){
    console.log('Path: ' +text);
    let fileName= text.split('/');
    console.log('Filename: '+ fileName[fileName.length - 1]);
    console.log('Rozshirenya: '+ fileName[fileName.length - 1].split('.')[1]);
    if(fileName[0] =='C:'){
        console.log('This is Windows');
    }
    else{
        console.log('This is Linux');
    }
}
//Third('C:/Users/пк/WebstormProjects/untitled4/Pz_2_8/script.js');
function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
function Fourth(){
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      let side = randomInteger(0,1);
      rl.question('Which number from 0 to 1 \n', (answer) => {
        // TODO: Log the answer in a database
        if(answer >1 || answer<0){
            console.log("You are moron!")
        }
        if(answer == side){
            console.log("You win!");
        }
        else{
            console.log("You lose!");
        }
      
        rl.close();
      });
    
}
//Fourth();

