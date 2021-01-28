const input=document.getElementById("input")
const add=document.getElementById("add")
const list=document.getElementById("list")
const del=document.getElementsByClassName("del")

for (i = 0; i < del.length; i++) {
    del[i].onclick = deleteMe
}

add.addEventListener("click",()=>{
const btnRemove=document.createElement("button")
btnRemove.className=("del")
btnRemove.textContent="\u00D7"
btnRemove.onclick = deleteMe
    let li=document.createElement("li")
    if(input.value.length<=2){
        alert ("Please write longer text")
    }else if(input.value.length>40){
        alert ("Your text is very long")
    }else{
        li.textContent=input.value
        li.append(btnRemove)
        list.append(li)
        input.value=""
    }
 
})
function deleteMe(){
    this.parentElement.remove()
}

