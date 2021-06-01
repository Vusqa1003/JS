let input= document.getElementById('input');
let out= document.getElementById('output');
let m= document.getElementById('meter');
let f= document.getElementById('feet');

m.addEventListener('click', function(){
    output.value=input.value /3.281 +' meters'

});

f.addEventListener('click', function(){
    output.value=input.value * 3.281 +' feets'

});



