const body = document.getElementsByTagName("body")[0]
function setColor(name){
    if(name==='Random'){
        const red=Math.round( Math.random()*255)
        const green=Math.round( Math.random()*255)
        const blue=Math.round( Math.random()*255)
        const color=`rgb(${red},${green},${blue})`
        body.style.backgroundColor=color;
    }
    else
    body.style.backgroundColor=name;
    
}