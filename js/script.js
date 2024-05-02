
class Usuario {
  constructor(nome, email, assunto, mensagem) {
    this.nome = nome;
    this.email = email;
    this.assunto = assunto;
    this.mensagem = mensagem;
  }
};
  
  
let listaUser = [];

  
let labelNome = document.querySelector('#labelNome');
let nome = document.querySelector('#nome');
let validenome = false;
let validoEmail = false;
let assunto = document.getElementById('assunto');
let mensagem = document.getElementById('text-mensagem');
let labelEmail = document.querySelector('#labelEmail');
const emailInput = document.getElementById('email');
  
  
emailInput.addEventListener('input', () => {
  
  const email = emailInput.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)){
    labelEmail.innerHTML = 'Email';
    validoEmail = true;
      
  } else {
      labelEmail.setAttribute('style', 'color: red');
      labelEmail.innerHTML = 'Insira um endereço de email válido';
      validoEmail = false;
  }
  
});
  
  

nome.addEventListener('input', () => {
    
  
  nome.value = nome.value.replace(/[^a-zA-Z\s]/g, '');
  
  
  if (nome.value.length >= 10 && nome.value.length < 60) {
    labelNome.innerHTML = 'Nome';
    validenome = true;
  } else {
    labelNome.setAttribute('style', 'color: red');
    labelNome.innerHTML = 'Insira no mínimo 10 caracteres';
    validenome = false;
  }
  
});
  



function enviar() {
  if ( validoEmail && validenome && assunto.value.trim() !== '' &&  mensagem.value.trim() !== '') {
    
    let usuario = new Usuario(nome.value, email.value, assunto.value, mensagem.value);
    listaUser.push(usuario);
  
      
    localStorage.setItem('listaUser', JSON.stringify(listaUser));
    
    window.location.href = "index.html";
  
  
    document.getElementById('mensagem').innerHTML = '<span style="color:green;">Enviado com sucesso!</span>';
    return false;

  } else {
      document.getElementById('mensagem').innerHTML = '<span style="color:red;">Preencha o formulário corretamente</span>';
      return false;
  }

  
};
  
  
  
  