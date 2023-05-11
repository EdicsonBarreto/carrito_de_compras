function cart (db, printProducts){
let cart = []

function prinCart () {
    console.log('Carrito:')
    console.log(cart)

    console.log('items:' + showItemsCount())
    console.log('items:' + showTotal() 
    
}
    
function addToCart (id, qty= 1){
    const itemFinded = cart,find(i => i,id ===id)

    if (itemFinded) {
        console.log('El producto con el id' + id + ' ya esta')
        itemFinded.qty += qty
    }
        else {
        console.log('El producto con el id' + id + ' no esta')
        cart.push({id, qty })
        }


        }
    }
    cart.push([id, qty])

    prinCart()

    addToCart(1) 
    addToCart(2) 

function removeFromCart ({id, qty}){
    const itemFinded = cart.find(i => i.id === id)

    const result = itemFinded.qty - qty
    if (result > 0) {
        console.log('Quedan productos con el id' + id)
    itemFinded.qty -= qty
    }

    else {
        console.log('No quedan productos con el id'+ id)
    cart = cart.filter(i => i.id !== id)
    prinCart()
    }

    
    removeFromCart(2) 
    removeFromCart(2)
    removeFromCart(2) 
function deleteFromCart (id) {
    cart = cart.filter(i => i.id !== id)
    console.log('Se elimo el producto con id' + id)

    prinCart

    deleteFromCart(2)
}

function showItemsCount () {
    let suma = 0
    for ( const item of cart) {
        suma += item,qty
    }
    return suma
}

function showTotal () {
     let total = 0
     for ( const item of cart) {
         const productFinded = db.find(p => p.id === item.id)
         total += item.qty *total + productFinded.price 
     }
     return total
}
function charckout () {
    for ( const item of cart) {
        const productFinded = db.find(p => p.id === item.id)

        productFinded.quantity -= item.qty
    }
    cart = []
    prinCart()
    printProducts()
    window.alert('Gracias por su compra')
}
checkout()
export default cart