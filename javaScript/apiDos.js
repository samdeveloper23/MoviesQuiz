'use strict';

let tiempo = 60;
let acierto = 0;
let error = 0;
let contador = 1;
const min = 0;
const max = 50;
let azar_2 = Math.floor(Math.random() * (+max - +min)) + +min;
console.log(azar_2);

async function main() {
  const response = await fetch('/jSon/quiz.json');

  if (response.ok) {
    const texto = await response.json();
    console.log(texto);

    const pregunta = document.querySelector('#pregunta');
    pregunta.innerHTML = `${texto[azar_2].question}`;

    const respuestaCero = document.querySelector('#r0');
    respuestaCero.innerHTML = `${texto[azar_2].answers[0]}`;

    const respuestaUno = document.querySelector('#r1');
    respuestaUno.innerHTML = `${texto[azar_2].answers[1]}`;

    const respuestaDos = document.querySelector('#r2');
    respuestaDos.innerHTML = `${texto[azar_2].answers[2]}`;

    const respuestaTres = document.querySelector('#r3');
    respuestaTres.innerHTML = `${texto[azar_2].answers[3]}`;

    const aciertos = document.querySelector('#aciertos');
    aciertos.innerHTML = `✔️: ${acierto}`;

    const fallos = document.querySelector('#fallos');
    fallos.innerHTML = `✖️: ${error}`;

    const rondas = document.querySelector('#rondas');
    rondas.innerHTML = `Round: ${contador} de 10`;

    const volumen = document.querySelector('#volumen');
    volumen.volume = 0.1;

    const alarma = document.querySelector('#alarma');

    const gong = document.querySelector('#gong');

    const time = document.querySelector('#time');

    const resultado = document.querySelector('#resultado');

    const aprobado = document.querySelector('#aprobado');

    const reinicio = document.querySelector('#reinicio');

    const botonReinicio = document.querySelector('#r4');

    const miCronometro = setInterval(() => {
      tiempo--;
      time.innerHTML = `🕓 ${tiempo}`;

      console.log(tiempo);
      if (tiempo === 0) {
        rondas.remove();
        aciertos.remove();
        fallos.remove();
        respuestaCero.remove();
        respuestaUno.remove();
        respuestaDos.remove();
        respuestaTres.remove();
        pregunta.remove();
        time.remove();
        clearInterval(miCronometro);
        alarma.remove();
        volumen.remove();
        gong.setAttribute('src', '/media/gong.mp3');

        resultado.innerHTML = `Your score is ${acierto} out of 10`;
        botonReinicio.innerHTML = 'Restart';
        botonReinicio.setAttribute('class', 'botones2');
        reinicio.setAttribute('href', '/html/game.html');
        if (acierto === 5) {
          aprobado.innerHTML = 'enough';
        } else if (acierto > 5) {
          aprobado.innerHTML = 'Suitable';
        } else {
          aprobado.innerHTML = 'unfit';
        }
      } else if (tiempo <= 10) {
        time.style.color = 'red';
        alarma.setAttribute('src', '/media/tic-toc-dos.mp3');
      }
    }, 1000);

    respuestaCero.addEventListener('click', (e) => {
      if (texto[azar_2].answers[0] === texto[azar_2].correct) {
        acierto++;
        contador++;
        azar_2 = Math.floor(Math.random() * (+max - +min)) + +min;
        console.log(azar_2);

        pregunta.innerHTML = `${texto[azar_2].question}`;
        respuestaCero.innerHTML = `${texto[azar_2].answers[0]}`;
        respuestaUno.innerHTML = `${texto[azar_2].answers[1]}`;
        respuestaDos.innerHTML = `${texto[azar_2].answers[2]}`;
        respuestaTres.innerHTML = `${texto[azar_2].answers[3]}`;
        rondas.innerHTML = `Round: ${contador} de 10`;
        aciertos.innerHTML = `✔️: ${acierto}`;

        if (contador > 10) {
          rondas.remove();
          aciertos.remove();
          fallos.remove();
          respuestaCero.remove();
          respuestaUno.remove();
          respuestaDos.remove();
          respuestaTres.remove();
          pregunta.remove();
          time.remove();
          clearInterval(miCronometro);
          resultado.innerHTML = `Your score is ${acierto} out of 10`;
          botonReinicio.innerHTML = 'Restart';
          botonReinicio.setAttribute('class', 'botones2');
          reinicio.setAttribute('href', 'game.html');
          if (acierto === 5) {
            aprobado.innerHTML = 'enough';
          } else if (acierto > 5) {
            aprobado.innerHTML = 'Suitable';
          } else {
            aprobado.innerHTML = 'unfit';
          }
        }
      } else {
        error++;
        contador++;
        azar_2 = Math.floor(Math.random() * (+max - +min)) + +min;
        console.log(azar_2);

        pregunta.innerHTML = `${texto[azar_2].question}`;
        respuestaCero.innerHTML = `${texto[azar_2].answers[0]}`;
        respuestaUno.innerHTML = `${texto[azar_2].answers[1]}`;
        respuestaDos.innerHTML = `${texto[azar_2].answers[2]}`;
        respuestaTres.innerHTML = `${texto[azar_2].answers[3]}`;
        rondas.innerHTML = `Round: ${contador} de 10`;
        fallos.innerHTML = `✖️: ${error}`;

        if (contador > 10) {
          rondas.remove();
          aciertos.remove();
          fallos.remove();
          respuestaCero.remove();
          respuestaUno.remove();
          respuestaDos.remove();
          respuestaTres.remove();
          pregunta.remove();
          time.remove();
          clearInterval(miCronometro);
          resultado.innerHTML = `Your score is ${acierto} out of 10`;
          botonReinicio.innerHTML = 'Restart';
          botonReinicio.setAttribute('class', 'botones2');
          reinicio.setAttribute('href', 'game.html');
          if (acierto === 5) {
            aprobado.innerHTML = 'enough';
          } else if (acierto > 5) {
            aprobado.innerHTML = 'Suitable';
          } else {
            aprobado.innerHTML = 'unfit';
          }
        }
      }
    });

    respuestaUno.addEventListener('click', (e) => {
      if (texto[azar_2].answers[1] === texto[azar_2].correct) {
        acierto++;
        contador++;
        azar_2 = Math.floor(Math.random() * (+max - +min)) + +min;
        console.log(azar_2);

        pregunta.innerHTML = `${texto[azar_2].question}`;
        respuestaCero.innerHTML = `${texto[azar_2].answers[0]}`;
        respuestaUno.innerHTML = `${texto[azar_2].answers[1]}`;
        respuestaDos.innerHTML = `${texto[azar_2].answers[2]}`;
        respuestaTres.innerHTML = `${texto[azar_2].answers[3]}`;
        rondas.innerHTML = `Round: ${contador} de 10`;
        aciertos.innerHTML = `✔️: ${acierto}`;

        if (contador > 10) {
          rondas.remove();
          aciertos.remove();
          fallos.remove();
          respuestaCero.remove();
          respuestaUno.remove();
          respuestaDos.remove();
          respuestaTres.remove();
          pregunta.remove();
          time.remove();
          clearInterval(miCronometro);
          resultado.innerHTML = `Your score is ${acierto} out of 10`;
          botonReinicio.innerHTML = 'Restart';
          botonReinicio.setAttribute('class', 'botones2');
          reinicio.setAttribute('href', 'game.html');
          if (acierto === 5) {
            aprobado.innerHTML = 'enough';
          } else if (acierto > 5) {
            aprobado.innerHTML = 'Suitable';
          } else {
            aprobado.innerHTML = 'unfit';
          }
        }
      } else {
        error++;
        contador++;
        azar_2 = Math.floor(Math.random() * (+max - +min)) + +min;
        console.log(azar_2);
        pregunta.innerHTML = `${texto[azar_2].question}`;
        respuestaCero.innerHTML = `${texto[azar_2].answers[0]}`;
        respuestaUno.innerHTML = `${texto[azar_2].answers[1]}`;
        respuestaDos.innerHTML = `${texto[azar_2].answers[2]}`;
        respuestaTres.innerHTML = `${texto[azar_2].answers[3]}`;
        rondas.innerHTML = `Round: ${contador} de 10`;
        fallos.innerHTML = `✖️: ${error}`;
        if (contador > 10) {
          rondas.remove();
          aciertos.remove();
          fallos.remove();
          respuestaCero.remove();
          respuestaUno.remove();
          respuestaDos.remove();
          respuestaTres.remove();
          pregunta.remove();
          time.remove();
          clearInterval(miCronometro);
          resultado.innerHTML = `Your score is ${acierto} out of 10`;
          botonReinicio.innerHTML = 'Restart';
          botonReinicio.setAttribute('class', 'botones2');
          reinicio.setAttribute('href', 'game.html');
          if (acierto === 5) {
            aprobado.innerHTML = 'enough';
          } else if (acierto > 5) {
            aprobado.innerHTML = 'Suitable';
          } else {
            aprobado.innerHTML = 'unfit';
          }
        }
      }
    });

    respuestaDos.addEventListener('click', (e) => {
      if (texto[azar_2].answers[2] === texto[azar_2].correct) {
        acierto++;
        contador++;
        azar_2 = Math.floor(Math.random() * (+max - +min)) + +min;
        console.log(azar_2);

        pregunta.innerHTML = `${texto[azar_2].question}`;
        respuestaCero.innerHTML = `${texto[azar_2].answers[0]}`;
        respuestaUno.innerHTML = `${texto[azar_2].answers[1]}`;
        respuestaDos.innerHTML = `${texto[azar_2].answers[2]}`;
        respuestaTres.innerHTML = `${texto[azar_2].answers[3]}`;
        rondas.innerHTML = `Round: ${contador} de 10`;
        aciertos.innerHTML = `✔️: ${acierto}`;

        if (contador > 10) {
          rondas.remove();
          aciertos.remove();
          fallos.remove();
          respuestaCero.remove();
          respuestaUno.remove();
          respuestaDos.remove();
          respuestaTres.remove();
          pregunta.remove();
          time.remove();
          clearInterval(miCronometro);
          resultado.innerHTML = `Your score is ${acierto} out of 10`;
          botonReinicio.innerHTML = 'Restart';
          botonReinicio.setAttribute('class', 'botones2');
          reinicio.setAttribute('href', 'game.html');
          if (acierto === 5) {
            aprobado.innerHTML = 'enough';
          } else if (acierto > 5) {
            aprobado.innerHTML = 'Suitable';
          } else {
            aprobado.innerHTML = 'unfit';
          }
        }
      } else {
        error++;
        contador++;
        azar_2 = Math.floor(Math.random() * (+max - +min)) + +min;
        console.log(azar_2);

        pregunta.innerHTML = `${texto[azar_2].question}`;
        respuestaCero.innerHTML = `${texto[azar_2].answers[0]}`;
        respuestaUno.innerHTML = `${texto[azar_2].answers[1]}`;
        respuestaDos.innerHTML = `${texto[azar_2].answers[2]}`;
        respuestaTres.innerHTML = `${texto[azar_2].answers[3]}`;
        rondas.innerHTML = `Round: ${contador} de 10`;
        fallos.innerHTML = `✖️: ${error}`;

        if (contador > 10) {
          rondas.remove();
          aciertos.remove();
          fallos.remove();
          respuestaCero.remove();
          respuestaUno.remove();
          respuestaDos.remove();
          respuestaTres.remove();
          pregunta.remove();
          time.remove();
          clearInterval(miCronometro);
          resultado.innerHTML = `Your score is ${acierto} out of 10`;
          botonReinicio.innerHTML = 'Restart';
          botonReinicio.setAttribute('class', 'botones2');
          reinicio.setAttribute('href', 'game.html');
          if (acierto === 5) {
            aprobado.innerHTML = 'enough';
          } else if (acierto > 5) {
            aprobado.innerHTML = 'Suitable';
          } else {
            aprobado.innerHTML = 'unfit';
          }
        }
      }
    });

    respuestaTres.addEventListener('click', (e) => {
      if (texto[azar_2].answers[3] === texto[azar_2].correct) {
        acierto++;
        contador++;
        azar_2 = Math.floor(Math.random() * (+max - +min)) + +min;
        console.log(azar_2);

        pregunta.innerHTML = `${texto[azar_2].question}`;
        respuestaCero.innerHTML = `${texto[azar_2].answers[0]}`;
        respuestaUno.innerHTML = `${texto[azar_2].answers[1]}`;
        respuestaDos.innerHTML = `${texto[azar_2].answers[2]}`;
        respuestaTres.innerHTML = `${texto[azar_2].answers[3]}`;
        rondas.innerHTML = `Round: ${contador} de 10`;
        aciertos.innerHTML = `✔️: ${acierto}`;

        if (contador > 10) {
          rondas.remove();
          aciertos.remove();
          fallos.remove();
          respuestaCero.remove();
          respuestaUno.remove();
          respuestaDos.remove();
          respuestaTres.remove();
          pregunta.remove();
          time.remove();
          clearInterval(miCronometro);
          resultado.innerHTML = `Your score is ${acierto} out of 10`;
          botonReinicio.innerHTML = 'Restart';
          botonReinicio.setAttribute('class', 'botones2');
          reinicio.setAttribute('href', 'game.html');
          if (acierto === 5) {
            aprobado.innerHTML = 'enough';
          } else if (acierto > 5) {
            aprobado.innerHTML = 'Suitable';
          } else {
            aprobado.innerHTML = 'unfit';
          }
        }
      } else {
        error++;
        contador++;
        azar_2 = Math.floor(Math.random() * (+max - +min)) + +min;
        console.log(azar_2);

        pregunta.innerHTML = `${texto[azar_2].question}`;
        respuestaCero.innerHTML = `${texto[azar_2].answers[0]}`;
        respuestaUno.innerHTML = `${texto[azar_2].answers[1]}`;
        respuestaDos.innerHTML = `${texto[azar_2].answers[2]}`;
        respuestaTres.innerHTML = `${texto[azar_2].answers[3]}`;
        rondas.innerHTML = `Round: ${contador} de 10`;
        fallos.innerHTML = `✖️: ${error}`;

        if (contador > 10) {
          rondas.remove();
          aciertos.remove();
          fallos.remove();
          respuestaCero.remove();
          respuestaUno.remove();
          respuestaDos.remove();
          respuestaTres.remove();
          pregunta.remove();
          time.remove();
          clearInterval(miCronometro);
          resultado.innerHTML = `Your score is ${acierto} out of 10`;
          botonReinicio.innerHTML = 'Restart';
          botonReinicio.setAttribute('class', 'botones2');
          reinicio.setAttribute('href', 'game.html');
          if (acierto === 5) {
            aprobado.innerHTML = 'enough';
          } else if (acierto > 5) {
            aprobado.innerHTML = 'Suitable';
          } else {
            aprobado.innerHTML = 'unfit';
          }
        }
      }
    });
  } else {
    console.error('Error en la peticion');
  }
}
main();
