const precoRemedio = document.getElementById('precoRemedio')
const promocaoBtn = document.getElementById('promocao')

promocaoBtn.addEventListener('click', ()=>{
    
let precoFinal = Math.round(precoRemedio.value*2);

document.getElementById("info").innerHTML = `Leve 2 por apenas ${precoFinal}`;
})


