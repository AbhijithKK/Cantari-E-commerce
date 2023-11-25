export const HomePage=async():Promise<any>=>{
    let res=await fetch('https://fakestoreapi.com/products?limit=4')
    let resp=await res.json()
   
    return resp
}
export const AllProducts=async():Promise<any>=>{
  let res=await fetch('https://fakestoreapi.com/products')
    let resp=await res.json()
   
        return resp
}
export const DetailsApi=async(num:any):Promise<any>=>{
  let res=await fetch(`https://fakestoreapi.com/products/${num}`)
    let resp=await res.json()
   
        return resp
}