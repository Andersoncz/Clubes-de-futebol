
const valorReal = document.querySelector("input")

function mudar(){
const valorConvertido= valorReal.value / 5 
const res = document.getElementById('res')
res.innerHTML =(`O Resultado é ${valorConvertido}   Dólares`)
}