function toggleButton(){
    var x = document.getElementById("no1")
    if(x.innerHTML==="Friday it is!!!"){
        x.innerHTML= "welcome to JS"
    }
    else{
        x.innerHTML = "Friday it is!!!"
        x.style.color="Red"
    }
}