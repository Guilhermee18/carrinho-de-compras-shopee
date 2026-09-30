// ==========================================
// CARRINHO
// ==========================================


// -> adicionar item no carrinho

async function addItem(userCart, item) {

    userCart.push(item)

}


// -> calcular total do carrinho

async function calculateTotal(userCart) {

    console.log("\nSHOPEE CART TOTAL:")

    const result = userCart.reduce(
        (total, item) => total + item.subtotal(),
        0
    )

    console.log(`🎁 Total: R$ ${result.toFixed(2)}`)

}


// -> deletar item do carrinho

async function deleteItem(userCart, name) {

    const index = userCart.findIndex(
        (item) => item.name === name
    )

    if (index !== -1) {

        userCart.splice(index, 1)

        console.log(`🗑️ ${name} foi removido do carrinho.`)

    } else {

        console.log("Item não encontrado.")

    }

}


// -> remover uma unidade do item

async function removeItem(userCart, item) {

    // 1. encontrar o índice do item

    const indexFound = userCart.findIndex(
        (p) => p.name === item.name
    )


    // 2. caso não encontre o item

    if (indexFound === -1) {

        console.log("Item não encontrado.")

        return

    }


    // 3. item > 1
    // diminuir uma unidade

    if (userCart[indexFound].quantity > 1) {

        userCart[indexFound].quantity -= 1

        console.log(
            `➖ Uma unidade de ${item.name} foi removida.`
        )

        return

    }


    // 4. caso item = 1
    // deletar item

    if (userCart[indexFound].quantity === 1) {

        userCart.splice(indexFound, 1)

        console.log(
            `🗑️ ${item.name} foi removido do carrinho.`
        )

    }

}


// -> mostrar todos os itens do carrinho

async function displayCart(userCart) {

    console.log("\n🛒 SHOPEE CART LIST:")

    if (userCart.length === 0) {

        console.log("Carrinho vazio.")

        return

    }

    userCart.forEach((item, index) => {

        console.log(
            `${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)} | ${item.quantity}x | subtotal = R$ ${item.subtotal().toFixed(2)}`
        )

    })

}



// ==========================================
// WISHLIST / FAVORITOS
// ==========================================


// -> adicionar item aos favoritos

async function addToWishlist(wishlist, item) {

    // verifica se o item já existe

    const itemAlreadyExists = wishlist.some(
        (product) => product.name === item.name
    )


    // impede produto duplicado

    if (itemAlreadyExists) {

        console.log(
            `❤️ ${item.name} já está nos favoritos.`
        )

        return

    }


    // adiciona aos favoritos

    wishlist.push(item)

    console.log(
        `❤️ ${item.name} foi adicionado aos favoritos.`
    )

}


// -> remover item dos favoritos

async function removeFromWishlist(wishlist, item) {

    const indexFound = wishlist.findIndex(
        (product) => product.name === item.name
    )


    if (indexFound === -1) {

        console.log(
            `❤️ ${item.name} não está nos favoritos.`
        )

        return

    }


    wishlist.splice(indexFound, 1)

    console.log(
        `💔 ${item.name} foi removido dos favoritos.`
    )

}


// -> mostrar favoritos

async function displayWishlist(wishlist) {

    console.log("\n❤️ MINHA WISHLIST:")


    if (wishlist.length === 0) {

        console.log("Sua lista de favoritos está vazia.")

        return

    }


    wishlist.forEach((item, index) => {

        console.log(
            `${index + 1}. ${item.name} - R$ ${item.price.toFixed(2)}`
        )

    })

}


// -> adicionar favorito ao carrinho

async function addWishlistToCart(wishlist, userCart, item) {

    // verificar se está nos favoritos

    const indexFound = wishlist.findIndex(
        (product) => product.name === item.name
    )


    if (indexFound === -1) {

        console.log(
            `❤️ ${item.name} não está nos favoritos.`
        )

        return

    }


    // verificar se já está no carrinho

    const itemAlreadyInCart = userCart.find(
        (product) => product.name === item.name
    )


    if (itemAlreadyInCart) {

        itemAlreadyInCart.quantity += 1

        console.log(
            `🛒 ${item.name} já estava no carrinho. Quantidade aumentada.`
        )

        return

    }


    // adicionar ao carrinho

    userCart.push(item)

    console.log(
        `🛒 ${item.name} foi adicionado ao carrinho.`
    )

}


export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,

    addToWishlist,
    removeFromWishlist,
    displayWishlist,
    addWishlistToCart
}