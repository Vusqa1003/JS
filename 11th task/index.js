let weight=document.getElementById('weight');
let height=document.getElementById('height');
let bmi=document.getElementById('bmi');
let btn=document.getElementById('btn');

btn.addEventListener('click', function(){
    let w=weight.value;
    let h=height.value;
    let calculate=( w / (h*h) * 10000);
    bmi.value=calculate;
})


