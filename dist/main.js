(()=>{"use strict";const e=(e,t,n,d)=>({title:e,description:t,dueDate:n,priority:d,displayTodo:()=>{let p=document.createElement("div"),l=document.createElement("input"),r=document.createElement("h5");return l.type="checkbox",r.appendChild(l),p.appendChild(r),r.innerHTML+="title: "+e+", desc: "+t+", due: "+n+", priority: "+d,p}}),t=t=>{let n=[];return{name:t,itemList:n,appendItem:e=>{n.push(e)},renderList:function(){let d=document.createElement("div"),p=document.createElement("h3");p.textContent=t,d.appendChild(p);for(let e=0;e<n.length;e++){let t=n[e].displayTodo();d.appendChild(t)}let l=this,r=document.createElement("button");return r.textContent="Add Item +",r.addEventListener("click",(t=>{l.appendItem(e("new","test desc new",2021,1));let n=t.target.parentNode;n.textContent="",n.replaceWith(l.renderList())})),d.appendChild(r),d.style="background: #1f1f1f; color: white; padding: 1rem; margin: 0.5rem 0 0.5rem 0.1rem; max-width: 500px;",r.style="display: block; margin: 0 0 0 auto",d}}},n=document.querySelector("#container");(()=>{let d=[],p=t("default");p.appendItem(e("Hello","test desc H",2020,1)),p.appendItem(e("1","test desc 1",2020,2)),p.appendItem(e("2","test desc 2",2020,2)),d.push(p);let l=t("spare");l.appendItem(e("a","test desc a",2020,1)),l.appendItem(e("B","test desc b",2020,2)),l.appendItem(e("c","test desc c",2020,3)),l.appendItem(e("D","test desc d",2020,4)),d.push(l);const r=()=>{n.textContent="";for(let e=0;e<d.length;e++){let t=d[e].renderList();n.appendChild(t)}let e=document.createElement("button");e.textContent="Add List +",e.addEventListener("click",(e=>{let n=t("New List");d.push(n),r()})),n.appendChild(e)};r()})()})();