function displayMovieInfo(titulo, duracao_em_minutos) {
    const horas = Math.floor(duracao_em_minutos / 60);
    const minutos = duracao_em_minutos % 60;
    const tituloElement = document.getElementById('Titulo');
    const duracaoElement = document.getElementById('Duracao');
    tituloElement.innerHTML = "Título do filme: " + titulo;
    duracaoElement.innerHTML = "Duração do filme: " + horas + " horas e " + minutos + " minutos";
  }
  
  function showMovieInfo() {
    const titulo = document.getElementById('text').value;
    const duracao_em_minutos = parseInt(document.getElementById('number').value);
    displayMovieInfo(titulo, duracao_em_minutos);
  }
  