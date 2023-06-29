const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

let cronometro;
let segundosAtual = 0;
let minutosAtual = 0;
let horasAtual = 0;

function atualizar() {
  if (segundosAtual < 10) {
    segundos.textContent = '0' + segundosAtual;
  } else {
    segundos.textContent = segundosAtual;
  }

  if (minutosAtual < 10) {
    minutos.textContent = '0' + minutosAtual;
  } else {
    minutos.textContent = minutosAtual;
  }

  if (horasAtual < 10) {
    horas.textContent = '0' + horasAtual;
  } else {
    horas.textContent = horasAtual;
  }

  if (segundosAtual === 59) {
    segundosAtual = 0;
    minutosAtual++;
  }

  if (minutosAtual === 60) {
    minutosAtual = 0;
    horasAtual++;
  }

  segundosAtual++;
}

function iniciar() {
    atualizar()
  cronometro = setInterval(atualizar, 1000);
}

function pausar() {
  clearInterval(cronometro);
}

function zerar() {
  clearInterval(cronometro);
  segundosAtual = 0;
  minutosAtual = 0;
  horasAtual = 0;
  horas.textContent = '00';
  minutos.textContent = '00';
  segundos.textContent = '00';
}
