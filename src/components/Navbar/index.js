import { useSelector } from "react-redux"

const Navbar=()=>{
    let cart=useSelector((state)=>state.posts.cartData.length)
    let price=useSelector((state)=>state.posts.total)
    console.log("price",price)
    return(
        <div className="d-flex justify-content-center bg-dark p-3">
            <h1 className="text-light btn btn-primary m-2">cart:{cart}</h1>
            <h1 className="text-light m-2 btn btn-primary">Total Price:{price}</h1>
        </div>

    )
}
export default Navbar