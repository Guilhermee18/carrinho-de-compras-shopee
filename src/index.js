import * as cartServices from "./services/cart.js"

import createItem from "./services/item.js"


// ==========================================
// CARRINHOS
// ==========================================

const myCart = []

const myWishlist = []


console.log("🛒 Welcome to your Shopee Cart!")



// ==========================================
// CRIANDO DOIS ITENS
// ==========================================

const item1 = await createItem(
    "Hotwheels Ferrari",
    20.99,
    1
)

const item2 = await createItem(
    "Hotwheels Lamborghini",
    39.99,
    3
)



// ==========================================
// ADICIONANDO ITENS AO CARRINHO
// ==========================================

await cartServices.addItem(
    myCart,
    item1
)

await cartServices.addItem(
    myCart,
    item2
)



// ==========================================
// MOSTRANDO CARRINHO
// ==========================================

await cartServices.displayCart(
    myCart
)



// ==========================================
// REMOVENDO UMA UNIDADE
// ==========================================

await cartServices.removeItem(
    myCart,
    item2
)



// ==========================================
// MOSTRANDO CARRINHO NOVAMENTE
// ==========================================

await cartServices.displayCart(
    myCart
)



// ==========================================
// CALCULANDO TOTAL
// ==========================================

await cartServices.calculateTotal(
    myCart
)



// ==========================================
// WISHLIST
// ==========================================


// adicionar Ferrari aos favoritos

await cartServices.addToWishlist(
    myWishlist,
    item1
)


// adicionar Lamborghini aos favoritos

await cartServices.addToWishlist(
    myWishlist,
    item2
)


// tentar adicionar Ferrari novamente

await cartServices.addToWishlist(
    myWishlist,
    item1
)


// mostrar favoritos

await cartServices.displayWishlist(
    myWishlist
)



// ==========================================
// REMOVER DOS FAVORITOS
// ==========================================

await cartServices.removeFromWishlist(
    myWishlist,
    item1
)


// mostrar favoritos novamente

await cartServices.displayWishlist(
    myWishlist
)



// ==========================================
// ADICIONAR FAVORITO AO CARRINHO
// ==========================================

// Ferrari foi removida da wishlist,
// então vamos adicioná-la novamente.

await cartServices.addToWishlist(
    myWishlist,
    item1
)


// agora colocamos o favorito no carrinho

await cartServices.addWishlistToCart(
    myWishlist,
    myCart,
    item1
)



// ==========================================
// CARRINHO FINAL
// ==========================================

await cartServices.displayCart(
    myCart
)


await cartServices.calculateTotal(
    myCart
)