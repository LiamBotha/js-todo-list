(()=>{"use strict";const e=(e,t,n,l,o)=>{let r=o;return{title:e,description:t,dueDate:n,priority:l,displayTodo:(o,d)=>{let i=document.createElement("div"),a=document.createElement("input"),p=document.createElement("h4"),s=document.createElement("p"),c=document.createElement("h6"),m=document.createElement("h6");a.type="checkbox",a.checked=r,a.addEventListener("change",(e=>{r=e.target.checked,dispatchEvent(new Event("refresh"))}));let u=document.createElement("button");return u.textContent="X",u.style="display: block; position: absolute; top: 5px; right: 5px; color: red; background: transparent; border: none; margin: 0 0 0 auto; font-size: 1.2rem",u.addEventListener("click",(e=>{o.splice(d,1),dispatchEvent(new Event("refresh"))})),i.appendChild(u),i.addEventListener("dblclick",(o=>{let r=document.querySelectorAll(".add-btn");for(let e=0;e<r.length;e++)r[e].remove();let d=document.createElement("input"),a=document.createElement("div"),h=document.createElement("input"),b=document.createElement("input"),x=document.createElement("button");d.value=e,a.textContent=t,h.value=new Date(c.innerText.substring(5)),b.value=l,x.textContent="SAVE",console.log(l),a.contentEditable=!0,h.type="date",b.type="number",i.style="position: relative; background: rgb(255, 238, 109); padding: 1rem 1rem 2rem; width: 275px; min-height: 150px; border: 1px solid #cfcfcf; box-shadow: 2px 2px 4px rgba(0,0,0,0.3); margin: 1rem 0",i.style.display="flex",i.style.flexDirection="column",d.style="background: transparent; border: 1px dashed black; margin-bottom: 0.5rem; outline: none",a.style.flexGrow="1",a.style.overflowWrap="anywhere",a.style.border="1px dashed black",a.style.outline="none",a.style.whiteSpace="pre-line",h.style="position: absolute; bottom: 5px; left: 5px; font-size: 0.8rem",b.style="position: absolute; bottom: 5px; right: 5px; font-size: 0.8rem; width: 2.3rem",x.style="position: absolute; right: 55px; bottom: 5px",x.addEventListener("click",(o=>{e=d.value,t=a.innerText,n=null!=h.valueAsDate?h.valueAsDate.toDateString():n,l=b.valueAsNumber,console.log(b.value),dispatchEvent(new Event("refresh"))})),p.replaceWith(d),s.replaceWith(a),c.replaceWith(h),m.replaceWith(b),i.appendChild(x),u.remove()})),p.innerHTML+=""+e,s.textContent=""+t,c.textContent="due: "+n,m.textContent="priority: "+l,p.style="margin: 0",c.style="position: absolute; left: 5px; bottom:-20px",m.style="position: absolute; right: 5px; bottom: -20px",s.style="white-space: pre-wrap; overflow-wrap: anywhere; font-size: 0.8rem;",i.style="background: rgb(255, 238, 109); padding: 1rem; width: 275px; min-height: 150px; border: 1px solid #cfcfcf; box-shadow: 2px 2px 4px rgba(0,0,0,0.3); margin: 1rem 0",i.style.textDecoration=r?"line-through":"none",i.style.position="relative",p.prepend(a),i.appendChild(p),i.appendChild(s),i.appendChild(c),i.appendChild(m),i}}},t=(t,n)=>{let l=[],o=!1,r=n,d=t;return{getName:()=>d,itemList:l,appendItem:e=>{l.push(e)},renderList:function(t,n){l.sort(((e,t)=>e.priority-t.priority));let i=document.createElement("div"),a=document.createElement("h3"),p=document.createElement("input"),s=this,c=document.createElement("button");c.textContent="X",c.style="display: block; position: absolute; top: 5px; right: 5px; color: red; background: transparent; border: none; margin: 0 0 0 auto; font-size: 1.2rem",c.addEventListener("click",(e=>{t.splice(n,1),dispatchEvent(r)})),i.appendChild(c),0==o?(a.textContent=d,a.addEventListener("click",(e=>{o=!0,dispatchEvent(r)})),i.appendChild(a)):(p.value=d,p.style="font-size: 1.2rem; font-weight: bold; background: transparent; color: black; border: 1px dashed black; margin: 16px 0",p.addEventListener("blur",(e=>{o=!1,d=e.target.value,dispatchEvent(r)})),i.appendChild(p));for(let e=0;e<l.length;e++){let t=l[e].displayTodo(l,e);i.appendChild(t)}let m=document.createElement("button");return m.textContent="Add Item +",m.classList.add("add-btn"),m.addEventListener("click",(()=>{!function(t,n){let l=document.querySelectorAll(".add-btn");for(let e=0;e<l.length;e++)l[e].remove();let o=document.createElement("div"),d=document.createElement("input"),i=document.createElement("div"),a=document.createElement("button"),p=document.createElement("button"),s=document.createElement("input"),c=document.createElement("input");i.contentEditable=!0,s.type="date",c.type="number",c.valueAsNumber=0,o.style="position: relative; background: rgb(255, 238, 109); padding: 1rem 1rem 2rem; width: 275px; min-height: 150px; border: 1px solid #cfcfcf; box-shadow: 2px 2px 4px rgba(0,0,0,0.3); margin: 1rem 0",o.style.display="flex",o.style.flexDirection="column",d.style="background: transparent; border: 1px dashed black; margin-bottom: 0.5rem; outline: none",i.style.flexGrow="1",i.style.overflowWrap="anywhere",i.style.border="1px dashed black",i.style.outline="none",s.style="position: absolute; bottom: 5px; left: 5px; font-size: 0.8rem",c.style="position: absolute; bottom: 5px; right: 5px; font-size: 0.8rem; width: 2.3rem",d.value="Title",i.textContent="Description",a.textContent="Save",p.textContent="Delete",a.addEventListener("click",(n=>{null!=s.valueAsDate&&(t.appendItem(e(d.value,i.innerText,s.valueAsDate.toDateString(),c.valueAsNumber)),console.log(i.innerText),dispatchEvent(r))})),p.addEventListener("click",(e=>{dispatchEvent(r)})),o.appendChild(d),o.appendChild(i),o.appendChild(s),o.appendChild(c),n.appendChild(o).scrollIntoView(),n.appendChild(a),n.appendChild(p)}(s,i)})),i.appendChild(m),i.style="position: relative; padding: 1rem; margin: 0.5rem 0 0.5rem 0.7rem; width: max-content; height: 0%; background: white; flex-shrink: 0;",m.style="display: block; margin: 0 0 0 auto",i}}},n=document.querySelector("#container");(()=>{let l=[],o=new Event("refresh"),r=document.createElement("div"),d=document.createElement("div");document.querySelector("body").style="background: #1f1f1f;";let i=t("default",o);i.appendItem(e("Hello","test desc H",2020,1,!1)),i.appendItem(e("2","test desc 1",2020,2,!1)),i.appendItem(e("3","test desc 2",2020,2,!1)),l.push(i);let a=t("spare",o);a.appendItem(e("a","test desc a",2020,1,!1)),a.appendItem(e("B","test desc b",2020,3,!1)),a.appendItem(e("c","test desc c",2020,2,!1)),a.appendItem(e("D","test desc d",2020,4,!0)),l.push(a),addEventListener("refresh",(()=>{console.log("refresh"),s(),p()})),d.style="position: fixed; top: 0; left: 0; width: 250px; height: 100vh; background: #3f3f3f; text-align:center; color: white; font-size: 1.3rem;",r.style="margin-left: 250px;",n.appendChild(d),n.appendChild(r);const p=()=>{d.textContent="";for(let e=0;e<l.length;++e){let t=document.createElement("h5");t.textContent=l[e].getName(),d.appendChild(t)}let e=document.createElement("button");e.textContent="Add List +",e.style="width: 90%; padding: 0.3rem 0; font-size: 1rem;font-weight: bold;",e.addEventListener("click",(e=>{let n=t("New List",o);l.push(n),s(),p()})),d.appendChild(e)},s=()=>{r.textContent="";let e=document.createElement("div");e.style="display: flex; flex-direction: row;";for(let t=0;t<l.length;t++){let n=l[t].renderList(l,t);e.appendChild(n)}r.appendChild(e)};s(),p()})()})();