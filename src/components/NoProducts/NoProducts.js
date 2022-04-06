import noProducts from "../../assets/no-products.png";
import styles from "./NoProducts.module.css";
import { Link } from "react-router-dom";

const NoProducts = () => {
    return (
        <div className={styles.noProductsWrapper}>
            <Link to="/product-listing" className="link-cta"><span>CALL DORAEMON</span><span class=" next-icon material-icons material-icons-outlined">
                navigate_next</span></Link>
            <img src={noProducts} className={styles.noProdsImg}></img>
        </div>
    )
}

export { NoProducts };