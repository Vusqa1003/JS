let input= document.getElementById('input');
let out= document.getElementById('output');
let kilograms= document.getElementById('kg');
let pound= document.getElementById('pound');

kilograms.addEventListener('click', function(){
    output.value=input.value /2.205 +' kg'

});

pound.addEventListener('click', function(){
    output.value=input.value * 2.205 +' pounds'

});