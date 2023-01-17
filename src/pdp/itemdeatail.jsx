import React, {useState,useEffect} from 'react';
import { singleProduct } from '../services/mockAsynService';
import "./itemdeatails.css"
import Baddtocart from './btn/Btnaddtocart';
import { useParams } from 'react-router-dom';


function ItemDetail(){
    const [producto,setProductos] = useState([]);

    let{id} = useParams();

    useEffect(
        () => {
            singleProduct(id).then((response) =>{
                setProductos(response);
            });
        }, []);
    
    return(
        <div className="stylesg">
            <div className="ImgConProd">
               <img className="Whimg" src={producto.imgurl} alt={producto.title} />
            </div>
            <div className="detailcontent">
                <h1>{producto.title}</h1>
                <h2>{producto.price}</h2>
                <h3>{producto.detail}</h3>
                <Baddtocart text="Agrega producto" />
            </div>
        </div>
    )
}

export default ItemDetail;