const catalogo = [{
    id: 1,
    nomeProd: "Air max plus Tn' Black and White",
    descProd: "Leve sua atitude ao máximo no Nike Air Max Plus. uma experiência Air que oferece estabilidade e sustentação premium com um amortecimento inacreditável.",
    precoProd: 295.00,
    img: "./images/Tenis/Tn' 1 Black and white/TN1 BLACK AND WHITE (1).jpg" 
},
{
    id: 2,
    nomeProd: "Air max plus Tn' Chargers",
    descProd: "bla",
    precoProd: 295.00,
    img: "./images/Tenis/Tn' 1 Chargers/TN Chargers (5).jpg"
},
{
    id: 3,
    nomeProd: "Air max 95 'NEON' ",
    descProd: "X",
    precoProd: 330.00,
    img: "./images/Tenis/Air max 95 Neon/Air max 95 Neon (1).jpg"
},
{
    id: 4,
    nomeProd: "Nike shox TL' Black",
    descProd: "X",
    precoProd: 330.00,
    img: "./images/Tenis/Nike Shox TL Black/Nike Shox TL Black (2).jpg"
},]

// Pagina de produtos

function products(){
    for(let i = 0; i < catalogo.length; i ++){
        let prod = catalogo[i]

        let cardProd = `
        <div class="row">
        <a href="produto${i+1}.html"><img src="${prod.img}"></a>
        <div class="product-text">
            <h5>New</h5>
        </div>
        <div class="preco">
            <h4>${prod.nomeProd}</h4>
            <p>R$${prod.precoProd.toFixed(2).replace('.', ',')}</p>
        </div>
        </div>`

    products_grid.innerHTML += cardProd;

    }
}

// Destaques Index

function prodIndex(){
    for(let i = 0; i < 4; i++){
        let prod = catalogo[i]

        let cardProd = `<div class="row">
        <a href="produto${i+1}.html"><img
                src="${prod.img}"
                alt=""></a>
        <div class="product-text">
            <h5>New</h5>
        </div>

        <div class="preco">
            <h4>${prod.nomeProd}</h4>
            <p>${prod.precoProd.toFixed(2).replace(".", ",")}</p>
        </div>
    </div>`

    indexProd.innerHTML += cardProd;
    }
}

// seleção de tamanhos

function mostrarSelecao() {
    const tamanhoSelecionado = document.getElementById('tamanho').value;
    alert('Você selecionou o tamanho ' + tamanhoSelecionado);
  }

// seleção de imagens principais

  function showImg (pic){
    let bigImg = document.querySelector('.big-img img');
    bigImg.src = pic;
  }
  