let image_slider = document.getElementById('image_change');
let arr=["image1.jpg","image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg"];
var i=0;
function previous()
{
    if(i<=0) i=arr.length;
        i--;
        return image();
}
function next(){
    if(i>=arr.length-1)
    i= -1;
    i++;
    return image();
}
function image(){
    return image_slider.setAttribute('src', 'image/' +arr[i])
}

