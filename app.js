var list = document.getElementById('list');
var inp = document.querySelector("input");
var titel = document.getElementById("dd");
var titel2=document.getElementById("d2");
var xy= 1;
var y =0;
document.onkeydown=lay;
function lay(e){
  if(e.code =='Enter' || e.code =='NumpadEnter'){
    addtask()
  }
}
document.getElementById('b1').addEventListener("click",addtask)
function addtask (){
  xy+=1;
  //li 
  const entry = document.createElement('li');
  //checkbox
  const ch = document.createElement('input')
  ch.type = 'checkbox';
  ch.id=xy;
  ch.setAttribute("onChange", "doalert(this)");
  // delete button
  const b = document.createElement('button');
  b.setAttribute("onclick", "d(this)");
  b.innerHTML='<img src="trash-can.png">'
  b.setAttribute("class", "delete");
  //update button
  const m = document.createElement('button');
  m.setAttribute("onclick", "u(this)");
  m.innerHTML='<img src="pencil.png">'
  m.setAttribute("class", "update");
  //add to li
  entry.appendChild(ch);
  entry.appendChild(document.createTextNode(inp.value));
  entry.appendChild(b);
  entry.appendChild(m)

  list.appendChild(entry);
 inp.value='';
 titel.innerHTML="total todos :"+xy;
 titel2.innerHTML="todos done:"+y+"/"+xy;
} 
function d(l){
  
console.log(l.parentNode.childNodes[0].checked)
if(l.parentNode.childNodes[0].checked){y-=1}

    l.parentNode.remove();
    xy-=1;
    
    titel.innerHTML="total todos :"+xy;
   titel2.innerHTML="todos done:"+y+"/"+xy;
}
function doalert(x) {

    if (x.checked) {
      y+=1
      titel2.innerHTML="todos done:"+y+"/"+xy;
      x.parentNode.classList.add('checked')
    } else {
      y-=1;
      titel2.innerHTML="todos done:"+y+"/"+xy;
      x.parentNode.classList.remove('checked')
    }
  }

  function u(i){
    let person = prompt("update:",i.parentNode.childNodes[1].textContent );
    if (person == null || person == "") {
       
    } else {
      i.parentNode.childNodes[1].textContent=person;
    }

  }
