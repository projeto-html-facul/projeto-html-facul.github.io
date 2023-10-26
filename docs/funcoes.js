import { catalogo } from "./script.js";

export function mostrarProducts(targetElement, home) {
    catalogo.forEach((prod, i) => {
        if (home && !prod.home) {
            return;
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
    });
}
