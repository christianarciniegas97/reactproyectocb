
import { Link } from "react-router-dom";
import ButtonDetail from "../components/btn";
import "./item.css";


function Items({id,imgurl,title,price,detail}){

    const urlDet = `/item/${id}`;

    return(
        <div className="stylesit">
            <div className="spaces">
                <img className="wimg" src={imgurl}  alt={title}/>
            </div>
            <div>
                <h2 className="titleProducts">{title}</h2>
                <div className="divdetil">
                    <h3 className="detail">{price}</h3>
                    <p className="detail">{detail}</p>
                    <Link to={urlDet}>
                        <ButtonDetail text="ver más"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Items;