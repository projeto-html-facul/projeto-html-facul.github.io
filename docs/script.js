const catalogo = [{
    id: 1,
    nomeProd: "Air max plus Tn' Black and White",
    descProd: "Leve sua atitude ao máximo no Nike Air Max Plus. uma experiência Air que oferece estabilidade e sustentação premium com um amortecimento inacreditável.",
    precoProd: 295.00,
    img: "./images/Tenis/Tn' 1 Black and white/TN1 BLACK AND WHITE (1).jpg",
    img2: "./images/Tenis/Tn' 1 Black and white/TN1 BLACK AND WHITE (2).jpg",
    img3: "./images/Tenis/Tn' 1 Black and white/TN1 BLACK AND WHITE (3).jpg",
    img4: "./images/Tenis/Tn' 1 Black and white/TN1 BLACK AND WHITE (4).jpg",
    stock: 342,
    filter: "Air max plus Tn",
    home: true
},
{
    id: 2,
    nomeProd: "Air max plus Tn' Chargers",
    descProd: "bla",
    precoProd: 295.00,
    img: "./images/Tenis/Tn' 1 Chargers/TN Chargers (5).jpg",
    img2: "./images/Tenis/Tn' 1 Chargers/TN Chargers (5).jpg",
    img3: "./images/Tenis/Tn' 1 Chargers/TN Chargers (4).jpg",
    img4: "./images/Tenis/Tn' 1 Chargers/TN Chargers (3).jpg",
    stock: 431,
    filter: "Air max plus Tn",
    home: false
},
{
    id: 3,
    nomeProd: "Air max 95 'NEON' ",
    descProd: "X",
    precoProd: 330.00,
    img: "./images/Tenis/Air max 95 Neon/Air max 95 Neon (1).jpg",
    img2: "./images/Tenis/Air max 95 Neon/Air max 95 Neon (1).jpg",
    img3: "./images/Tenis/Air max 95 Neon/Air max 95 Neon (2).jpg",
    img4: "./images/Tenis/Air max 95 Neon/Air max 95 Neon (3).jpg",
    stock: 222,
    filter: "Air max 95",
    home: true
},
{
    id: 4,
    nomeProd: "Nike shox TL' Black",
    descProd: "X",
    precoProd: 330.00,
    img: "./images/Tenis/Nike Shox TL Black/Nike Shox TL Black (2).jpg",
    img2: "./images/Tenis/Nike Shox TL Black/Nike Shox TL Black (2).jpg",
    img3: "./images/Tenis/Nike Shox TL Black/Nike Shox TL Black (1).jpg",
    img4: "./images/Tenis/Nike Shox TL Black/Nike Shox TL Black (3).jpg",
    stock: 98,
    filter: "Nike Shox",
    home: true
},
{
    id: 5,
    nomeProd: "Air force 1 '07",
    descProd: "X",
    precoProd: 365.00,
    img: "./images/Tenis/Air force 1 '07/Air force 1 07 (3).jpg", 
    img2: "./images/Tenis/Air force 1 '07/Air force 1 07 (3).jpg",
    img3: "./images/Tenis/Air force 1 '07/Air force 1 07 (2).jpg",
    img4: "./images/Tenis/Air force 1 '07/Air force 1 07 (1).jpg",
    stock: 984,
    filter: "Air Force",
    home: true
},
{
    id: 6,
    nomeProd: "Air max plus Tn' Black and White",
    descProd: "X",
    precoProd: 295.00,
    img: "./images/Tenis/Tn' 1 White and Black/Tn'1 White and Black (1).jpg", 
    img2: "./images/Tenis/Tn' 1 White and Black/Tn'1 White and Black (1).jpg",
    img3: "./images/Tenis/Tn' 1 White and Black/Tn'1 White and Black (2).jpg",
    img4: "./images/Tenis/Tn' 1 White and Black/Tn'1 White and Black (3).jpg",
    stock: 34,
    filter: "Air max plus Tn",
    home: false
}
]

// Pagina de produtos

function mostrarProducts(targetElement, home) {
    for (let i = 0; i < catalogo.length; i++) {
        let prod = catalogo[i];

        if (home && !prod.home) {
            continue;
        }
        let cardProd = `
            <div class="row">
                <a href="produto${i + 1}.html"><img src="${prod.img}"></a>
                <div class="product-text">
                    <h5>New</h5>
                </div>
                <div class="preco">
                    <h4>${prod.nomeProd}</h4>
                    <p>R$${prod.precoProd.toFixed(2).replace('.', ',')}</p>
                </div>
            </div>`;
        targetElement.innerHTML += cardProd;
    }
}

var n = 3;

function productCart(){
    for(let i = 0; i < n; i++){
        let prod = catalogo[i]

        let cartProd = `<div class="box">
        <img src="${prod.img}" alt="Fotos">
        <div class="content">
            <h3>${prod.nomeProd}</h3>
            <h4>R$${prod.precoProd.toFixed(2).replace('.', ',')}</h4>
            <div class= "plusplus"> 
                <p class="unit">Quantidade: <input type= "number" min="1" max="${prod.stock}" value="1"></p>
                <button id="remove_cart">Remover</button>
            </div>
            <p class="btn-area">
                <i class="stock"></i>
                <span class="btn2">Disponíveis: ${prod.stock} </span>
            </p>
        </div>
    </div>`

    box_Products.innerHTML += cartProd;
    }
}

function totalCart(){
    let total = 0; 

    for (let i = 0; i < n; i++) {
        total += catalogo[i].precoProd;
    }
    let right_bar = document.getElementById('right_bar');

    let cart_total = `
        <div class="cart_total">
            <p><span>Subtotal:</span> <span>R$${total.toFixed(2).replace('.', ',')}</span></p>
            <hr>
            <p><span>Entrega:</span> <span>R$0,00</span></p>
            <hr>
            <p><span>Descontos:</span> <span>R$0,00</span></p>
            <hr>
            <p><span>Total:</span><span>R$${total.toFixed(2).replace('.', ',')}</span></p>
            <button class="btn_area">Finalizar Compra</button>
        </div>`;

    right_bar.innerHTML += cart_total;
}

//remove carrinho



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
  