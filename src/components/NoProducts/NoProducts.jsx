import noProducts from "../../assets/no-products.png";
import "./NoProducts.css";
import { Link } from "react-router-dom";

const NoProducts = () => {
    return (
        <div className="noProductsWrapper">
            <Link to="/product-listing" className="link-cta linkCta"><span>CALL DORAEMON</span><span class=" next-icon material-icons material-icons-outlined">navigate_next</span></Link>
            <img src={noProducts} className="noProdsImg" alt={noProducts}></img>
        </div>
    )
}

export { NoProducts };