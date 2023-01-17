import React, {useState,useEffect} from 'react';
import Items from './items';
import getproductos, { getcategory } from '../services/mockAsynService';
import Flexmagic from '../components/flexmagic';
import { useParams } from 'react-router-dom';


function Itemlistcontainer(){
    const [productos,setProductos] = useState([]);

    let {category} = useParams();

    useEffect(
            () => {
                if(category) {
                    getcategory(category).then((response) =>{
                        setProductos(response);
                    });
                } else{
                    getproductos().then((response) =>{
                        setProductos(response);
                    }); 
                }
            }, [category]);
    
    return(
         <Flexmagic>
            {productos.map((items) => (
                <Items
                    key={items.id}
                    id={items.id}
                    imgurl={items.imgurl}
                    title={items.title}
                    price={items.price}
                    detail={items.detail}
            />
            ))}
        </Flexmagic>
    )
}

export default Itemlistcontainer;