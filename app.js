const navButtons=[...document.querySelectorAll('[data-view]')];
function showView(name){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('hidden',v.id!==name));navButtons.forEach(b=>b.classList.toggle('active',b.dataset.view===name));const labels={overview:'Good morning.',personal:'Personal assistant',jobs:'Job search',reselling:'Reselling',trading:'Trading'};document.getElementById('heading').textContent=labels[name]||'Jarvis';}
navButtons.forEach(b=>b.addEventListener('click',()=>showView(b.dataset.view)));
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>showView(b.dataset.go)));
document.getElementById('send').addEventListener('click',()=>{const input=document.getElementById('ask');document.getElementById('notice').textContent=input.value.trim()?'This preview does not have an AI backend connected yet. Your request has not been sent.':'Type a request first.';});
document.getElementById('mic').addEventListener('click',()=>{document.getElementById('notice').textContent='Voice input will be enabled after the speech service is configured.';});
