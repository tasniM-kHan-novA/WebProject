let followingBTN = document.getElementById("followBTN")
let count=0;
function followBTN(){
    if(count % 2 == 0){
        followingBTN.textContent="Unfollow";
        count++;
    }
    else{
        followingBTN.textContent="Follow";
        count=0;
    }
}