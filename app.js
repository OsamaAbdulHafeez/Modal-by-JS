const mod = document.querySelector('.mod')
const content = document.querySelector('.content')
const con = document.querySelector('.con')
const cross = document.querySelector('.cross')
function handler(){
    mod.style.display = "none"
    con.style.display = "block"
}
function crossBtn(){
    con.style.display = "none"
    mod.style.display = "block"
}