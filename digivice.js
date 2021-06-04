function digimonSearch(event) {
const value = event.target.value
const apiDigimon = `https://digimon-api.vercel.app/api/digimon/name/${value}`

fetch(apiDigimon)
.then(resultado =>{
    return resultado.json()
})
.then(digimon =>{
    console.log(digimon)
    let digi = document.querySelector('.digi')
    digi.src = digimon[0].img //estou alterando o src //o array tem um objeto na posicao 0 e dentro do objeto acessei o img
    digi.classList.add('digi2')
    document.querySelector('span').innerHTML = ''
})
.catch(error=>{
    console.log(error)
    document.querySelector('span').innerHTML = 'Você não teve infância, esse digimon não existe!'
})
}
