export const load = async ({fetch})=>{
    const productRes = await fetch('https://voyagersbeat.com/voyagersbeat/json_packages')
    const productData = await productRes.json()
    const products = productData
    return {
        products :products
    }
}