
const prepped = document.querySelector("#PrepararPedido")
const adeprod = document.querySelector("#addprod")

const dd = document.querySelectorAll("#dados")


function Preparalista(){
    listadecompras = []
    //Nome
    let p1 = dd[0].childNodes[5].innerText
    let p2 = dd[0].childNodes[11].innerText
    let p3 = dd[0].childNodes[17].innerText
    console.log(p1)
    console.log(p2)
    console.log(p3)
    console.log(dd[0].childNodes)

    //Preço
    let prc1 = parseFloat(dd[0].childNodes[7].innerText)
    let prc2 = parseFloat(dd[0].childNodes[13].innerText)
    let prc3 = parseFloat(dd[0].childNodes[19].innerText)
    console.log(prc1)
    console.log(prc2)
    console.log(prc3)
    //Quantidade
    let qtd1 = parseInt(dd[0].childNodes[9].value)
    let qtd2 = parseInt(dd[0].childNodes[15].value)
    let qtd3 = parseInt(dd[0].childNodes[21].value)
    console.log(qtd1)
    console.log(qtd2)
    console.log(qtd3)
    const total = qtd1*prc1+qtd2*prc2+qtd3*prc3
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
    console.log(listadecompras)
    const imprimir = {lc: listadecompras}
    let html = imprimir.lc.map( lar =>{
        return `<ul><li>${lar.Produto}</li><li>${lar.PriceU}</li><li>${lar.Quantidade}</li></ul>`
    })
    let html2 = imprimir.lc.map( lar =>{
        return `<div><input name="tolete" type="hidden" value="${lar.Produto}"><input name="tolete2" type="hidden" value="${lar.PriceU}"><input name="tolete3" type="hidden" value="${lar.Quantidade}"></div>`
    })
    document.querySelector("#vercompra").innerHTML = html.join("")
    document.querySelector("#mandardadoscompra").innerHTML = `<div>${html2}</div>`
    document.querySelector("#valortotal").innerHTML = `<div><input name="tolete4" type="hidden" value="${total}"><br><p>${total}</p></div>`
}
function Verpedido(){
    console.log('Espera')
}
prepped.addEventListener('click',Preparalista) 