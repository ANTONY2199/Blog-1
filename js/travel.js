var active =false ;
function navEffect(){
    if(!active) {
        active=true;
        document.getElementById('men-mobile').style.display ="block";
    }else{
        document.getElementById('men-mobile').style.display ="none";
        active=false;
    }
}