async function getProducts () {
  try{
      const res = await window.fetch('https://eCommercebackend.fundamentos-29.repl.co/')
    const data = await res.json()
    return data
  } 
  catch (error){
    console.log(error)
  }
  
  async function Products() {
    const products = await getProducts()
    console.log(products)
  }
}
  
  export default Products
   
