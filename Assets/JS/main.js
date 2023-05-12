import loader from "./components/loader.js"
import showMenu from "./components/ShowMenu.js"
import showCart from "./components/showCart.js"
import Products from "./components/Products.js"
import getProducts from "./helpers/getProducts.js"
import products from "./components/Products.js"
import cart from "./components/cart.js"

/*UI Elements */
/* Ocultar loader*/
loader()

/*Mostar menu*/
showMenu()

/* Mostrar Carrito*/
showCart()

/* End UI Elements */

/* Products */  
const {db, printProducts} = products(await getProducts())

/* Carrito*/
cart(db, printProducts)