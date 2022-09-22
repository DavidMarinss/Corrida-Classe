

let objeto = []


class carro {
    NomeEquipe
    Potencia
    velocidadeMaxima
    Aceleracao

    resultado(distancia) {
        let tempo = distancia / (this.velocidadeMaxima / this.Aceleracao)
        return tempo
    }



}


let mercedes = new carro
mercedes.NomeEquipe = "Mercedes"
mercedes.Potencia = 900
mercedes.velocidadeMaxima = 320
mercedes.Aceleracao = 2.4
objeto.push(mercedes)


let ferrari = new carro
ferrari.NomeEquipe = "Ferrari"
ferrari.Potencia = 1000
ferrari.velocidadeMaxima = 330
ferrari.Aceleracao = 2.5
objeto.push(ferrari)


let redbull = new carro
redbull.NomeEquipe = "RedBull"
redbull.Potencia = 800
redbull.velocidadeMaxima = 320
redbull.Aceleracao = 2.3
objeto.push(redbull)

let mcLaren = new carro
mcLaren.NomeEquipe = "Mclaren"
mcLaren.Potencia = 700
mcLaren.velocidadeMaxima = 300
mcLaren.Aceleracao = 2.2
objeto.push(mcLaren)

class corrida {
    NomePercuso
    Tipo
    Distancia
    Vencedor
    primeiroLugar() {

        let menorTempo = objeto[0].resultado(this.Distancia)
        let vencedorCorrida

        objeto.forEach(posicao => {
            let cronometro = posicao.resultado(this.Distancia)
            if (cronometro < menorTempo) {
                menorTempo = cronometro
                vencedorCorrida = posicao.NomeEquipe
            }

        })
        return vencedorCorrida

    }
    Qualvencedor() {
        console.log(this.Vencedor)

    }

}


let formula1 = new corrida
formula1.NomePercuso = "Interlagos"
formula1.tipo = "fórmula 1"
formula1.Distancia = 4309
formula1.Vencedor = formula1.primeiroLugar()
formula1.Qualvencedor()





