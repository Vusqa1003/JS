let image = document.getElementById('image_change');
let change=document.getElementById('btn');
let arr=["image1.jpg","image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg"];
change.addEventListener('click', function(){
   var randomImage=arr[Math.floor(Math.random() * arr.length)]
 
    image.src=`./image/${randomImage}`;
    
}
)