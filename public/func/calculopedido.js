const prepped = document.querySelector("#PrepararPedido")
const prephist = document.querySelector("#history")

const dd = document.querySelectorAll("#dados")
const ddpdds = document.querySelectorAll("#ddpedidos")

function Verpedido(){
    listadecompras = []
    pedidosnumero = []
    console.log(dd)
    console.log(dd[0].childNodes[1].childNodes[57].childNodes)
    console.log((dd[0].childNodes[1].childNodes[57].childNodes).length)
    const dpv = (dd[0].childNodes[1].childNodes[57].childNodes).length
    let x=1
    while(x<dpv){
        pedidosnumero.push(parseInt(dd[0].childNodes[1].childNodes[57].childNodes[x].value))
        x = x+2
    }
    console.log(pedidosnumero)
    if(pedidosnumero.length === 0){
        npedd = 1
    }else if(pedidosnumero.length > 0){
        var max = Math.max(...pedidosnumero);
        npedd=max+1
    }
    console.log(npedd)
    const numberped = npedd
    //console.log(dd[0].children[t2].childNodes[1].value)
    //Nome dos produtos
    let p1 = dd[0].childNodes[1].children[0].innerText
    let p2 = dd[0].childNodes[1].children[3].innerText
    let p3 = dd[0].childNodes[1].children[6].innerText
    let p4 = dd[0].childNodes[1].children[9].innerText
    let p5 = dd[0].childNodes[1].children[12].innerText
    let p6 = dd[0].childNodes[1].children[15].innerText
    let p7 = dd[0].childNodes[1].children[18].innerText
    let p8 = dd[0].childNodes[1].children[21].innerText
    let p9 = dd[0].childNodes[1].children[24].innerText
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
    let prc1 = parseFloat(dd[0].childNodes[1].children[1].innerText)
    let prc2 = parseFloat(dd[0].childNodes[1].children[4].innerText)
    let prc3 = parseFloat(dd[0].childNodes[1].children[7].innerText)
    let prc4 = parseFloat(dd[0].childNodes[1].children[10].innerText)
    let prc5 = parseFloat(dd[0].childNodes[1].children[13].innerText)
    let prc6 = parseFloat(dd[0].childNodes[1].children[16].innerText)
    let prc7 = parseFloat(dd[0].childNodes[1].children[19].innerText)
    let prc8 = parseFloat(dd[0].childNodes[1].children[22].innerText)
    let prc9 = parseFloat(dd[0].childNodes[1].children[25].innerText)
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
    let qtd1 = parseInt(dd[0].childNodes[1].children[2].value)
    let qtd2 = parseInt(dd[0].childNodes[1].children[5].value)
    let qtd3 = parseInt(dd[0].childNodes[1].children[8].value)
    let qtd4 = parseInt(dd[0].childNodes[1].children[11].value)
    let qtd5 = parseInt(dd[0].childNodes[1].children[14].value)
    let qtd6 = parseInt(dd[0].childNodes[1].children[17].value)
    let qtd7 = parseInt(dd[0].childNodes[1].children[20].value)
    let qtd8 = parseInt(dd[0].childNodes[1].children[23].value)
    let qtd9 = parseInt(dd[0].childNodes[1].children[26].value)
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
    console.log(total.toFixed(2))

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
    console.log(listadecompras.length)
    console.log(imprimir.lc[0].Produto)
    let vp = imprimir.lc.map( lar =>{
        return `<td>${lar.Produto}<br></td>`
    })
    let vq = imprimir.lc.map( lar =>{
        return `<td>${lar.Quantidade}</td><br>`
    })
    let vpc = imprimir.lc.map( lar =>{
        return `<td>${lar.PriceU}</td><br>`
    })
    if(imprimir.lc.length == 1){
        let html2 = `<div><input name="prodcompra" type="hidden" value="${imprimir.lc[0].Produto}"><input name="priceunit" type="hidden" value="${imprimir.lc[0].PriceU}"><input name="qtdcompra" type="hidden" value="${imprimir.lc[0].Quantidade}"></div>`
        document.querySelector("#mandardadoscompra").innerHTML = `<div>${html2}</div>`
        
    }else if(imprimir.lc.length > 1){
        let html2 = imprimir.lc.map( lart =>{
            return `<div><input name="prodcompra" type="hidden" value="${lart.Produto}"><input name="priceunit" type="hidden" value="${lart.PriceU}"><input name="qtdcompra" type="hidden" value="${lart.Quantidade}"></div>`
        })
        document.querySelector("#mandardadoscompra").innerHTML = `<div>${html2}</div>`
    }
    document.querySelector("#npededio").innerHTML = `<div><input name="npedd" type="hidden" value="${numberped}"><br><p>Número do seu Pedido é: ${numberped}</p></div>`
    document.querySelector("#verprod").innerHTML = vp.join("")
    document.querySelector("#verquant").innerHTML = vq.join("")
    document.querySelector("#verpreco").innerHTML = vpc.join("")
    document.querySelector("#valortotal").innerHTML = `<div><input name="totalcompra" type="hidden" value="${total}"><br><p>Valor Total da sua compra é: ${total.toFixed(2)}</p></div>`
}
function postarhistorico(){
    console.log(ddpdds[0])
}
prephist.addEventListener('click',postarhistorico)
prepped.addEventListener('click',Verpedido)