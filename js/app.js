let totalGeral=0;
document.getElementById('lista-produtos').innerHTML='';               //Lista de produtos inicia vazia
document.getElementById('valor-total').textContent='R$0';             //Valor total do carrinho inicia zerado

function adicionar() {
    //recuperar valores (nome do produto, quantidade e valor)
    let produto=document.getElementById('produto').value;
    let nomeProduto=produto.split('-')[0];
    let valorUnitario=produto.split('R$')[1];
    let quantidade=document.getElementById('quantidade').value;

    //Testes:
    //alert(nomeProduto);
    //alert(valorUnitario);
    //alert(quantidade.value);
    //alert(subTotal);

    //calcular o subtotal (valor unitário x quantidade)
    let subTotal=valorUnitario*quantidade;

    //adicionar no carrinho
    let carrinho=document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
        </section>`;

    //atualizar o valor total do carrinho
    totalGeral=totalGeral + subTotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent=`R$${totalGeral}`;
    document.getElementById('quantidade').value=0;              //Zera o campo quantidade após o produto ser adicionado no carrinho
}

function limpar() {
    totalGeral=0;
    document.getElementById('lista-produtos').innerHTML='';               
    document.getElementById('valor-total').textContent='R$0';

}