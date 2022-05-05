let colorshex=document.getElementById('colorshex');
let btnhex=document.getElementById('btn-hex');
let hex=["#F97F51","#B33771","#6D214F","#3B3B98","#182C61","#EAB543","#FD7272","#2C3A47","#82589F"];
btnhex.addEventListener("click",function()
{
    const randomNUmber= Math.random()*hex.length;
    cont.style.backgroundColor=hex[parseInt(randomNUmber)];
    colorshex.textContent= hex[parseInt(randomNUmber)];
});