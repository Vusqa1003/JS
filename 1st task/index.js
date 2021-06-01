let color = document.getElementById('color');
let change=document.getElementById('btn');
let arr=["Fushia","Aquamarine", "Crimson", "Chocolate", "Blue voilet", "DarkOliveGreen"];
change.addEventListener('click', function(){
    var randomColor=arr[Math.floor(Math.random() * arr.length)]
    color.style.background=randomColor;
    
}
)
