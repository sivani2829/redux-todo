import { useDispatch, useSelector } from "react-redux"
import Product from "../Product";

const PostData=()=>{
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.posts.posts)
    console.log('data',data)
    return(
        <div className="d-flex flex-row justify-content-center flex-wrap">
     {data.map((e)=>
     <Product  key ={e.id} data={e} />
     )}
        </div>
    )
}
export default PostData