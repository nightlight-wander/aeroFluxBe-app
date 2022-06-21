import { Link, useNavigate } from 'react-router-dom';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './ProductCard.css';
import { useAllData } from '../../context/AllDataContext';
import { useAuth } from '../../context/AuthContext';

const calcPercentOff = (initialPrice, price) => {
    return Math.floor((initialPrice - price) * 100 / price)
}

function ProductCard({ singleProd }) {
    const { authStates: { eToken, isLogin } } = useAuth();
    const navigate = useNavigate();
    const { state, dispatch } = useAllData();
    const {
        _id,
        name,
        price,
        initialPrice,
        ratingNo,
        categoryName,
        stock,
        imageUrl,
        reviews,
        newProduct
    } = singleProd;
    const isWishlist = state.wishlist.find(item => item._id === _id)
    
    const styles = {
        borderActivate: {
            display: isWishlist ? "none" : "block",
        },
        fillActivate: {
            display: isWishlist ? "block" : "none",
            color: isWishlist ? `var(--dark-red2)` : "",
        },
        size: { height: "20px", width: "20px" }
    }

    const likeHandler=()=>{
        if(eToken && isLogin){
          if(!isWishlist){
            dispatch({type:"ADD_TO_WISH",payload:singleProd})
            
            }else {
                dispatch({type:"REMOVE_FROM_WISH",payload:singleProd})
            }
        }else{
            navigate("/login")
        }  
    }

    return (
        <div key={_id} className="product">
            <div className="product-container">
                <div className="product-content">
                    <Link to="#">
                        <div className="prod-img-bottom-extra">
                            <div className="prod-img-box">
                                <div className="prod-img" style={{ height: "170px", width: "200px", maxInlineSize: "100%" }}>
                                    <img src={imageUrl}
                                        style={{ height: "170px", width: "200px", maxInlineSize: "100%", objectFit: "contain cover" }}
                                        alt={name} />
                                </div>
                            </div>
                            {newProduct && <div className="prod-imgTag flex-vCenter">New</div>}
                            {!stock && <div className="prod-imgTagBlur">OUT OF STOCK</div>}
                        </div>
                    </Link>
                    <div className="product-ratings-container">
                        <span>{ratingNo}</span>
                        <span className="star-icon"><StarBorderIcon /></span>
                        <span>
                            <div className="product-count-seprator">|
                                <span>{reviews}</span>
                            </div>
                        </span>
                    </div>


                    <button className="like-box" onClick={() => { stock && likeHandler() }} >
                        <div className="like">
                            <FavoriteBorderIcon style={styles.borderActivate} />
                            <FavoriteIcon style={styles.fillActivate} />
                        </div>
                    </button>
                    <div className="product-meta-info">
                        <h3 className="product-type"><Link to="#">{name}</Link></h3>
                        <h4 className="product-name"><Link to="#">{categoryName}</Link></h4>
                        <div className="product-price">
                            <span>
                                <span className="product-discount-price">{price}</span>
                                <span className="product-strike">{initialPrice}</span>
                            </span>
                            <span className="product-discount">{calcPercentOff(initialPrice, price)}%off</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export { ProductCard };