let countEl = document.getElementById('count');
let count = 0;  
function increment(){
  count = count+1;
  countEl.innerText = count;
}
function disincrement(){
  count = count-1;
  countEl.innerText = count;
}
function rest(){
  countEl.innerText=0;
}
