let container =document.getElementById('sky');

let count = 0

function colorBG(){
    if(count % 2 === 0 ){
        container.style.backgroundColor="black";
        count++;
    }
    else{
        container.style.backgroundColor="yellow";
        count = 0;
        console.log("sorry");

    }
}