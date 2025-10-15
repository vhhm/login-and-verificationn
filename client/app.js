const API = '/api/auth';

// Formulários e mensagens
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const verifyForm = document.getElementById('verifyForm');
const loginMsg = document.getElementById('loginMsg');
const registerMsg = document.getElementById('registerMsg');
const verifyMsg = document.getElementById('verifyMsg');
const verEmail = document.getElementById('verEmail');

// Switch entre formulários
document.getElementById('toRegister').addEventListener('click', ()=> switchForm('register'));
document.getElementById('toLogin').addEventListener('click', ()=> switchForm('login'));

function switchForm(form){
  loginForm.classList.remove('active');
  registerForm.classList.remove('active');
  verifyForm.classList.remove('active');

  if(form==='login'){ loginForm.classList.add('active'); document.getElementById('title').textContent='Login'; }
  if(form==='register'){ registerForm.classList.add('active'); document.getElementById('title').textContent='Cadastro'; }
  if(form==='verify'){ verifyForm.classList.add('active'); document.getElementById('title').textContent='Verificação'; }
}

// ----- LOGIN -----
loginForm.addEventListener('submit', async e => {
  e.preventDefault();
  loginMsg.textContent="Verificando...";
  const email = document.getElementById('logEmail').value;
  const password = document.getElementById('logPass').value;

  const res = await fetch(`${API}/login`, {
    method:'POST', headers:{'Content-Type':'application/json'},
    body:JSON.stringify({email,password})
  });
  const j = await res.json();
  if(res.ok){
    loginMsg.style.color="#0f0";
    loginMsg.textContent="Login realizado! Redirecionando...";
    setTimeout(()=> window.location.href="https://xisde.fun/",1000);
  } else {
    loginMsg.style.color="#f33";
    loginMsg.textContent=j.message;
  }
});

// ----- CADASTRO -----
registerForm.addEventListener('submit', async e => {
  e.preventDefault();
  registerMsg.textContent="Cadastrando...";
  registerMsg.style.color="#ffd700";

  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPass').value;

  const res = await fetch(`${API}/register`, {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({name,email,password})
  });
  const j = await res.json();
  if(res.ok){
    registerMsg.style.color="#0f0";
    registerMsg.textContent="Cadastro realizado! Redirecionando para verificação...";
    verEmail.value=email;
    switchForm('verify');
  } else {
    registerMsg.style.color="#f33";
    registerMsg.textContent=j.message || "Erro ao cadastrar";
  }
});

// ----- VERIFICAÇÃO -----
verifyForm.addEventListener('submit', async e => {
  e.preventDefault();
  verifyMsg.textContent="Verificando...";
  const email = verEmail.value;
  const code = document.getElementById('verCode').value;

  const res = await fetch(`${API}/verify`, {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({email,code})
  });
  const j = await res.json();
  if(res.ok){
    verifyMsg.style.color="#0f0";
    verifyMsg.textContent="Conta verificada! Redirecionando...";
    setTimeout(()=> window.location.href="https://xisde.fun/",1000);
  } else {
    verifyMsg.style.color="#f33";
    verifyMsg.textContent=j.message || "Código inválido";
  }
});

// Reenviar código
document.getElementById('btnResend').addEventListener('click', async ()=>{
  verifyMsg.textContent="Reenviando código...";
  const email = verEmail.value;

  const res = await fetch(`${API}/resend`, {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({email})
  });

  const j = await res.json();
  verifyMsg.style.color="#ffd700";
  verifyMsg.textContent = j.message;
});

// ----- PARTICULAS ANIMADAS -----
// --- PARTICULAS ---
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const colors = ['#ffffffff','#ffffffff','#ffffffff','#ffffffff'];

class Particle {
  constructor(){
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.size = Math.random()*3+1;
    this.speedX = (Math.random()-0.5)*1.5;
    this.speedY = (Math.random()-0.5)*1.5;
    this.color = colors[Math.floor(Math.random()*colors.length)];
  }
  update(){ this.x+=this.speedX; this.y+=this.speedY; if(this.x>canvas.width)this.x=0; if(this.x<0)this.x=canvas.width; if(this.y>canvas.height)this.y=0; if(this.y<0)this.y=canvas.height;}
  draw(){ ctx.fillStyle=this.color; ctx.beginPath(); ctx.arc(this.x,this.y,this.size,0,Math.PI*2); ctx.fill(); }
}

function initParticles(){
  particlesArray=[];
  for(let i=0;i<120;i++) particlesArray.push(new Particle());
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particlesArray.forEach(p=>{ p.update(); p.draw(); });
  requestAnimationFrame(animate);
}

window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

initParticles();
animate();

