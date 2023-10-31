import { useDispatch } from "react-redux"
import { decrementcart, incrementcart } from "../../ReduxToolkit/Reducer/cartReducer";
import { postdecrement, postincrement } from "../../ReduxToolkit/features/postSlice";

const Product=({data})=>{
    

    const dispatch=useDispatch();
    const {id,name,price,image,description,company,category}=data
    return(
       
            <div className='card d-flex flex-column m-2 p-3 w-25 shadow mt-3 h-50'>
          
                <img src={image} className='w-100 h-25'/>
                <h4>Name:{name}</h4>
                <h3>Price:{price}</h3>
                <h4>BrandName:{company}</h4>
                <h4>Category:{category}</h4>
                <p>{description}</p>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary m-2' onClick={()=>dispatch(postincrement({productName:name,productPrice:price}))}>Add</button>
                    <button className='btn btn-primary m-2' onClick={()=>dispatch(postdecrement({productName:name,productPrice:price}))}>Remove</button>
                     {/* <button className='btn btn-primary m-2' onClick={()=>dispatch(increment({productName:each.productName,productPrice:each.price}))}>Add</button>
                    <button className='btn btn-primary m-2' onClick={()=>dispatch(decrement({productName:each.productName,productPrice:each.price}))}>Remove</button> */}
                </div>

            </div>
            
       
  
    // </div>
    )
}
export default Product