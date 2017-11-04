
  const niveles = 15
  let teclas = generarTeclas(niveles)

  function siguienteNivel(nivelActual){
    if(nivelActual == niveles){
      return alert("¡¡GANASTE!!");
    }
    alert(`Nivel ${nivelActual+1}`)
    for(let i = 0 ; i<=nivelActual ; i++){
      setTimeout(()=>{
        activate(teclas[i]);
      },1000 * (i+1) +1000);

    }

  }
  siguienteNivel(2);
  function generarTeclas(niveles) {
    return new Array(niveles).fill(0).map(generarTeclaAleatoria)
  }

  function generarTeclaAleatoria() {
    const min = 65
    const max = 90
    return Math.round(Math.random() * (max - min) + min)
  }

  function getElementByKeyCode(keyCode) {
    return document.querySelector(`[data-key="${keyCode}"]`)
  }

  function activate(keyCode, opts = {}) {
    const el = getElementByKeyCode(keyCode)
    el.classList.add('active')
    if (opts.success) {
      el.classList.add('success')
    } else if (opts.fail) {
      el.classList.add('fail')
    }
    setTimeout(() => deactivate(el), 500)
  }

  function deactivate(el) {
    el.className = 'key'
  }
