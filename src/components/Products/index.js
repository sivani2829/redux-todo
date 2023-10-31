import { useDispatch } from 'react-redux'
import data from '../../data.json'
// import { decrementcart, incrementcart } from '../../ReduxToolkit/features/postSlice';

import { decrement, increment } from '../../ReduxToolkit/Action/action';
import { decrementcart, incrementcart } from '../../ReduxToolkit/Reducer/cartReducer';

const productsData=data
const Products=()=>{
    let dispatch=useDispatch();
    return(
        <div className='d-flex flex-row justify-content-center flex-wrap'>
            {productsData.map((each)=>(
                <div className='card d-flex flex-column justify-content-center m-2 p-3 w-25' key={each.id}>
                {/* <div className="card d-flex m-2"> */}
                    <img src={each.img} className='w-25'/>
                    <h4>Name:{each.productName}</h4>
                    <h3>Price:{each.price}</h3>
                    <h4>BrandName:{each.brand}</h4>
                    <div className='d-flex justify-content-center'>
                        <button className='btn btn-primary m-2' onClick={()=>dispatch(incrementcart({productName:each.productName,productPrice:each.price}))}>Add</button>
                        <button className='btn btn-primary m-2' onClick={()=>dispatch(decrementcart({productName:each.productName,productPrice:each.price}))}>Remove</button>
                         {/* <button className='btn btn-primary m-2' onClick={()=>dispatch(increment({productName:each.productName,productPrice:each.price}))}>Add</button>
                        <button className='btn btn-primary m-2' onClick={()=>dispatch(decrement({productName:each.productName,productPrice:each.price}))}>Remove</button> */}
                    </div>

                </div>
                // </div>
            ))}
      
        </div>
    )
}
export default Products