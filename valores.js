const precoLivros = [15,25,30,45,50,20,22,28,33,35,40]
const precoLivrosOrdenados = []
/*
console.log(precoLivros)
precoLivros.sort((a,b) => {
    const precoA = a
    const precoB = b
    return precoB - precoA // ordena do maior para o menor
})
console.log(precoLivros)
    */

let maiorPreco = 0
let indice = 0
for(let j = precoLivros.length;j > 0 ;j--){
    for(let i = 0;i<precoLivros.length;i++){
    indice = i
    if(indice == 0){
        maiorPreco = precoLivros[indice]
    }else if(maiorPreco < precoLivros[indice]){
        maiorPreco = precoLivros[indice]
    }
}
    precoLivrosOrdenados.push(maiorPreco)
    precoLivros.splice(precoLivros.indexOf(maiorPreco),1)
}

    
    console.log(precoLivros)
    console.log(precoLivrosOrdenados)
