const precosLivros = [15,25,30,45,50,20,22,28,33,35,40]
const precos = Array.from(precosLivros)//pega o elemento html
precosLivros.sort((a,b) => {
    const precoA = a
    const precoB = b
    return precoB - precoA // ordena do maior para o menor
})

    