let result= document.getElementById("appearedtext");
let button= document.getElementById("btn");

let number=[Math.floor(Math.random() * 100)];
button.addEventListener("click", function(){
    let input=document.getElementById('inputbox').value;
    if(input == number){
        result.innerHTML="You guessed the right number, Congratulations"
    }
    else if(input<number){
        result.innerHTML="Entered number is less"
    };
    if(input>number){
        result.innerHTML="Entered number is greater"
    }
});
