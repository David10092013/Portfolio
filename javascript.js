const collapse = document.getElementsByClassName("box2")
for(let i = 0; i < collapse; i++){
collapse[i].addEventListener("click",function(){
    this.classList.toggle("active")
    let box2 = this.nextElementSibiling
    if(box2.style.display==="block"){
        box2.style.display=""
    }
    else{
        box2.style.display ==="block"
    }
})

}