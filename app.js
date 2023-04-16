let your_choice_display =document.getElementById('your_choice_display');
let computer_choice_display =document.getElementById('Computer_choice');
let result_display = document.getElementById('result');
let user_score=document.getElementById('usrscr');
let computer_score=document.getElementById('cptscr');

let choices = document.querySelectorAll('button');
let user_choice;
let computer_choice;
let result;
var usrscr=0;
var cptscr=0;



choices.forEach(choice=> choice.addEventListener('click',(e)=>{
    user_choice=e.target.id;
    your_choice_display.innerHTML=user_choice;
    compchoice();
    res();
    // console.log(computer_choice);
    // console.log(user_choice);
    
  
}))

function compchoice(){
    let rand=Math.floor((Math.random()*3))+1;
    // console.log(rand)

    if(rand==1){
        computer_choice='Rock';
    }
    if(rand==2){
        computer_choice='Paper';
    }
    if(rand==3){
        computer_choice='Scissors';
    }

    computer_choice_display.innerHTML=computer_choice;

}

function res(){
    if(computer_choice===user_choice){
        result='its a draw 🤝';
    }
    else if(computer_choice==='Rock' && user_choice=='Paper'){
        result='You win 🥳🥳';
        usrscr++;
        user_score.innerHTML=usrscr;



    }
    else if(computer_choice==='Rock' && user_choice=='Scissors'){
        result='You lose 😭😭';
        cptscr++;
        computer_score.innerHTML=cptscr;

    }
    else if(computer_choice==='Paper' && user_choice=='Rock'){
        result='You lose 😭😭';
        cptscr++;
        computer_score.innerHTML=cptscr;

    }
    else if(computer_choice==='Paper' && user_choice=='Scissors'){
        result='You win 🥳🥳';
        usrscr++;
        user_score.innerHTML=usrscr;

    }
    else if(computer_choice==='Scissors' && user_choice=='Rock'){
        result='You win 🥳🥳';
        usrscr++;
        user_score.innerHTML=usrscr;

    }
    else if(computer_choice==='Scissors' && user_choice=='Paper'){
        result='You lose 😭😭';
        cptscr++;
        computer_score.innerHTML=cptscr;

    }
    
    result_display.innerHTML=result;
}



// console.log(user_score);
// console.log(usrscr);

// user_score.innerHTML=usrscr;

