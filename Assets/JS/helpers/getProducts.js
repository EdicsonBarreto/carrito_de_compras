async function getProducts () {
    const res = await window.fetch('https://ecommercebackend.fundamentos-29.repl.co/')
    const data = await res.json()
    return data
  }
  
  async function Products() {
    const products = await getProducts()
    console.log(products)
  }
  
  export default Products
   
