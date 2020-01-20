let n = Math.floor(Math.random()*100)+1;
var c = []
c = []
var pr 
console.log(n);
let i = 0
function Run(){
    let a = document.querySelector('input').value
    c.push(a)
    if(i>0) {pr=pr+' '+c[i]}
    else pr=c[0]   
    if(i<5){
    if(a>n){
        document.querySelector('.des').textContent="เยอะไป ลดหน่อย"
        document.querySelector('.output').textContent=pr   
    }
    else if(a<n){
        document.querySelector('.des').textContent="น้อยไปนิดนึง"
        document.querySelector('.output').textContent=pr   
    }
   else{
    document.querySelector('.des').textContent="ถูกแล้ว"
    document.querySelector('.output').textContent=pr
    i=5  
   }
}
i++
}
function Restart(){
    n = Math.floor(Math.random()*100)+1;
    c = []
    pr = null 
    console.log(n);
    i = 0 
    document.querySelector('.des').textContent=" "
    document.querySelector('.output').textContent=" "
}
    
