let btn= document.getElementById('btn');
let cont=document.getElementById('cont');
let colors=document.getElementById('colors');
// let div=document.querySelector('div');
// console.log(div);
// console.log(container);
let color= ["rgb(255, 107, 107)","rgb(95, 39, 205)","rgb(52, 31, 151)","rgb(72, 219, 251)","rgb(10, 189, 227)","rgb(200, 214, 229)","rgb(131, 149, 167)","rgb(29, 209, 161)","rgb(16, 172, 132)","rgb(87, 101, 116)"];
btn.addEventListener("click",function()
{
    const randomNUmber= Math.random()*color.length;
    // console.log(parseInt(randomNUmber));
    // console.log(document.body);
    // console.log(color[parseInt(randomNUmber)]);
    cont.style.backgroundColor=color[parseInt(randomNUmber)];
    colors.textContent= color[parseInt(randomNUmber)]
});

