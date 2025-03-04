let stars  = document.getElementById('stars');
let moon  = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river  = document.getElementById('river');
let boat  = document.getElementById('boat');
let hasan = document.querySelector('.hh');
onscroll = function(){
let value = scrollY;
stars.style.left = value + 'px';
moon.style.top = value * 2.5 + 'px';
mountains3.style.top = value * 1 + 'px';
mountains4.style.top = value * 0.7 + 'px';
river.style.top = value  + 'px';
boat.style.top = value + 'px';
boat.style.left = value *2.5 + 'px';
hasan.style.fontSize = value + 'px';
if(scrollY >= 102)
hasan.style.fontSize = 102 + 'px';
hasan.style.position = 'fixed';
if(scrollY>= 421) 
hasan.style.display = 'none';


else{
    hasan.style.display = 'block';

}




}
if(scrollY >= 204){
document.querySelector( ' . main').style.background ='linear-gradient(#48ace8,#1001f1)'
}else{
    document.querySelector( ' . main').style.background ='linear-gradient(#200016,#1001f1)'
}






