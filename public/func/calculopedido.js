const prepped = document.querySelector("#PrepararPedido")
const prephist = document.querySelector("#history")

const dd = document.querySelectorAll("#dados")
const ddpdds = document.querySelectorAll("#ddpedidos")

function Verpedido(){
    listadecompras = []
    pedidosnumero = []
    const dpv = (dd[0].childNodes[1].childNodes[77].childNodes).length
    let x=1
    while(x<dpv){
        pedidosnumero.push(parseInt(dd[0].childNodes[1].childNodes[77].childNodes[x].value))
        x = x+2
    }
    if(pedidosnumero.length === 0){
        npedd = 1
    }else if(pedidosnumero.length > 0){
        var max = Math.max(...pedidosnumero);
        npedd=max+1
    }
    const numberped = npedd
    //console.log(dd[0].children[t2].childNodes[1].value)
    //Nome dos produtos
    let p1 = dd[0].childNodes[1].children[0].innerText
    let p2 = dd[0].childNodes[1].children[4].innerText
    let p3 = dd[0].childNodes[1].children[8].innerText
    let p4 = dd[0].childNodes[1].children[12].innerText
    let p5 = dd[0].childNodes[1].children[16].innerText
    let p6 = dd[0].childNodes[1].children[20].innerText
    let p7 = dd[0].childNodes[1].children[24].innerText
    let p8 = dd[0].childNodes[1].children[28].innerText
    let p9 = dd[0].childNodes[1].children[32].innerText

    //Preço
    let prc1 = parseFloat(dd[0].childNodes[1].children[1].innerText)
    let prc2 = parseFloat(dd[0].childNodes[1].children[5].innerText)
    let prc3 = parseFloat(dd[0].childNodes[1].children[9].innerText)
    let prc4 = parseFloat(dd[0].childNodes[1].children[13].innerText)
    let prc5 = parseFloat(dd[0].childNodes[1].children[17].innerText)
    let prc6 = parseFloat(dd[0].childNodes[1].children[21].innerText)
    let prc7 = parseFloat(dd[0].childNodes[1].children[25].innerText)
    let prc8 = parseFloat(dd[0].childNodes[1].children[29].innerText)
    let prc9 = parseFloat(dd[0].childNodes[1].children[33].innerText)
    
    //Quantidade
    let qtd1 = parseInt(dd[0].childNodes[1].children[2].value)
    let qtd2 = parseInt(dd[0].childNodes[1].children[6].value)
    let qtd3 = parseInt(dd[0].childNodes[1].children[10].value)
    let qtd4 = parseInt(dd[0].childNodes[1].children[14].value)
    let qtd5 = parseInt(dd[0].childNodes[1].children[18].value)
    let qtd6 = parseInt(dd[0].childNodes[1].children[22].value)
    let qtd7 = parseInt(dd[0].childNodes[1].children[26].value)
    let qtd8 = parseInt(dd[0].childNodes[1].children[30].value)
    let qtd9 = parseInt(dd[0].childNodes[1].children[34].value)

    const total = qtd1*prc1+qtd2*prc2+qtd3*prc3+qtd4*prc4+qtd5*prc5+qtd6*prc6+qtd7*prc7+qtd8*prc8+qtd9*prc9

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
    const imprimir = {lc: listadecompras}
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
    document.querySelector("#valortotal").innerHTML = `<div><input name="totalcompra" type="hidden" value="${total}"><br><p>Valor Total da sua compra é: R$ ${total.toFixed(2)}</p></div>`
}
prepped.addEventListener('click',Verpedido)