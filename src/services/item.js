// CASOS DE USO DOS ITENS
// -> criar item com subtotal já calculado

async function createItem(name, price, quantity) {

    const item = {

        name,
        price,
        quantity,

        subtotal: () => item.price * item.quantity,

    }

    return item
}

export default createItem