const prepped = document.querySelector("#PrepararPedido")
const prephist = document.querySelector("#history")

const dd = document.querySelectorAll("#dados")
const ddpdds = document.querySelectorAll("#ddpedidos")

function Verpedido(){
    listadecompras = []
    //Nome
    let p1 = dd[0].childNodes[1].innerText
    let p2 = dd[0].childNodes[7].innerText
    let p3 = dd[0].childNodes[13].innerText
    let p4 = dd[0].childNodes[19].innerText
    let p5 = dd[0].childNodes[25].innerText
    let p6 = dd[0].childNodes[31].innerText
    let p7 = dd[0].childNodes[37].innerText
    let p8 = dd[0].childNodes[43].innerText
    let p9 = dd[0].childNodes[49].innerText
    console.log(p1)
    console.log(p2)
    console.log(p3)
    console.log(p4)
    console.log(p5)
    console.log(p6)
    console.log(p7)
    console.log(p8)
    console.log(p9)


    //Preço
    let prc1 = parseFloat(dd[0].childNodes[3].innerText)
    let prc2 = parseFloat(dd[0].childNodes[9].innerText)
    let prc3 = parseFloat(dd[0].childNodes[15].innerText)
    let prc4 = parseFloat(dd[0].childNodes[21].innerText)
    let prc5 = parseFloat(dd[0].childNodes[27].innerText)
    let prc6 = parseFloat(dd[0].childNodes[33].innerText)
    let prc7 = parseFloat(dd[0].childNodes[39].innerText)
    let prc8 = parseFloat(dd[0].childNodes[45].innerText)
    let prc9 = parseFloat(dd[0].childNodes[51].innerText)
    console.log(prc1)
    console.log(prc2)
    console.log(prc3)
    console.log(prc4)
    console.log(prc5)
    console.log(prc6)
    console.log(prc7)
    console.log(prc8)
    console.log(prc9)

    //Quantidade
    let qtd1 = parseInt(dd[0].childNodes[5].value)
    let qtd2 = parseInt(dd[0].childNodes[11].value)
    let qtd3 = parseInt(dd[0].childNodes[17].value)
    let qtd4 = parseInt(dd[0].childNodes[23].value)
    let qtd5 = parseInt(dd[0].childNodes[29].value)
    let qtd6 = parseInt(dd[0].childNodes[35].value)
    let qtd7 = parseInt(dd[0].childNodes[41].value)
    let qtd8 = parseInt(dd[0].childNodes[47].value)
    let qtd9 = parseInt(dd[0].childNodes[53].value)
    console.log(qtd1)
    console.log(qtd2)
    console.log(qtd3)
    console.log(qtd4)
    console.log(qtd5)
    console.log(qtd6)
    console.log(qtd7)
    console.log(qtd8)
    console.log(qtd9)
    const total = qtd1*prc1+qtd2*prc2+qtd3*prc3+qtd4*prc4+qtd5*prc5+qtd6*prc6+qtd7*prc7+qtd8*prc8+qtd9*prc9
    console.log(total)
    if(qtd1 != 0){
        const l1 = {Produto:`${p1}`,PriceU:`${prc1}`,Quantidade:`${qtd1}`}
        listadecompras.push(l1)
    }
    if(qtd2 != 0){
        const l2 = {Produto:`${p2}`,PriceU:`${prc2}`,Quantidade:`${qtd2}`}
        listadecompras.push(l2)
    }
    if(qtd3 != 0){
        const l3 = {Produto:`${p3}`,PriceU:`${prc3}`,Quantidade:`${qtd3}`}
        listadecompras.push(l3)
    }
    if(qtd4 != 0){
        const l4 = {Produto:`${p4}`,PriceU:`${prc4}`,Quantidade:`${qtd4}`}
        listadecompras.push(l4)
    }
    if(qtd5 != 0){
        const l5 = {Produto:`${p5}`,PriceU:`${prc5}`,Quantidade:`${qtd5}`}
        listadecompras.push(l5)
    }
    if(qtd6 != 0){
        const l6 = {Produto:`${p6}`,PriceU:`${prc6}`,Quantidade:`${qtd6}`}
        listadecompras.push(l6)
    }
    if(qtd7 != 0){
        const l7 = {Produto:`${p7}`,PriceU:`${prc7}`,Quantidade:`${qtd7}`}
        listadecompras.push(l7)
    }
    if(qtd8 != 0){
        const l8 = {Produto:`${p8}`,PriceU:`${prc8}`,Quantidade:`${qtd8}`}
        listadecompras.push(l8)
    }
    if(qtd9 != 0){
        const l9 = {Produto:`${p9}`,PriceU:`${prc9}`,Quantidade:`${qtd9}`}
        listadecompras.push(l9)
    }
    console.log(listadecompras)
    const imprimir = {lc: listadecompras}
    let html = imprimir.lc.map( lar =>{
        return `<ul><li>${lar.Produto}</li><li>${lar.PriceU}</li><li>${lar.Quantidade}</li></ul>`
    })
    let html2 = imprimir.lc.map( lar =>{
        return `<div><input name="prodcompra" type="hidden" value="${lar.Produto}"><input name="priceunit" type="hidden" value="${lar.PriceU}"><input name="qtdcompra" type="hidden" value="${lar.Quantidade}"></div>`
    })
    document.querySelector("#vercompra").innerHTML = html.join("")
    document.querySelector("#mandardadoscompra").innerHTML = `<div>${html2}</div>`
    document.querySelector("#valortotal").innerHTML = `<div><input name="totalcompra" type="hidden" value="${total}"><br><p>${total}</p></div>`
}
function postarhistorico(){
    console.log(ddpdds[0])
}
prephist.addEventListener('click',postarhistorico)
prepped.addEventListener('click',Verpedido)