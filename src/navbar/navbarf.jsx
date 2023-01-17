import { Link } from "react-router-dom";
import "./navbarsty.css";


function Navbarapp (){

    
    return(
        <div className="navS">
            <Link to="/">
            <img className="homelogo" src="https://images.vexels.com/media/users/3/155395/isolated/preview/3ced49c3448bede9f79d9d57bff35586-silueta-de-vista-frontal-de-coche-deportivo.png" alt="logoalahomepage" />
            </Link>
            <input className="searchbox" type="text"  placeholder="puedes encontrar productos aqui.."/>
            <div className="divor">
                 <ul className="orul">
                    <li className="uls">
                        <Link to="/category/nuevo">Nuevos</Link>
                    </li>
                    <li className="uls">
                        <Link to="/category/usado">Usados</Link>
                    </li>
                </ul>
                <img src="/assets/img/cart.png" alt="carrito" className="tCarrito"/>
            </div>
        </div>
    )
}

export default Navbarapp;