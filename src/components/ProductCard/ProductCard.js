import React,{useState} from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './ProductCard.css' ;
import { useAllData } from '../../context/AllDataContext';

const calcPercentOff=(initialPrice,price)=>{
    return Math.floor((initialPrice-price)*100/price)
}

function ProductCard({singleProd}) {
  const [activation,setActivation]=useState(false)
  const styles={
      borderActivate:{
          display:activation?"none":"block",
        //   color:activation?"red":"",
      },
      fillActivate:{
          display:activation?"block":"none",
          color:activation?`var(--pink5)`:"",
      },
      size:{height: "20px",width: "20px"}
  }

  const likeHandler=()=>{
      setActivation(prevActivation=>!prevActivation)
      dispatch({type:"ADD_TO_WISH",payload:singleProd})
  }

  const {state,dispatch}=useAllData();
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
  return (
        <div key={_id} className="product">
                    <div className="product-container">
                        <div className="product-content">
                            <a href="#">
                                <div className="prod-img-bottom-extra">
                                    <div className="prod-img-box">
                                        <div className="prod-img" style={{height: "170px",width: "200px",maxInlineSize:"100%"}}>
                                            <img src={imageUrl}
                                            style={{height: "170px",width: "200px",maxInlineSize:"100%",objectFit:"contain cover"}}
                                            alt={name}/>
                                        </div>
                                    </div>
                                    {newProduct && <div className="prod-imgTag flex-vCenter">New</div>}
                                    {!stock && <div className="prod-imgTagBlur">OUT OF STOCK</div>}
                                </div>
                            </a>
                            <div className="product-ratings-container">
                                <span>{ratingNo}</span>
                                <span className="star-icon"> <StarBorderIcon /></span>
                                <span>
                                    <div className="product-count-seprator">|
                                        <span>{reviews}</span>
                                    </div>
                                </span>
                            </div>

                            <button className="like-box" onClick={()=>likeHandler()} >
                                <div className="like">
                                    <FavoriteBorderIcon style={styles.borderActivate}/>
                                    <FavoriteIcon style={styles.fillActivate} />
                                </div>
                            </button>
                            <div className="product-meta-info">
                                <h3 className="product-type"><a href="#">{name}</a></h3>
                                <h4 className="product-name"><a href="#">{categoryName}</a></h4>
                                <div className="product-price">
                                    <span>
                                        <span className="product-discount-price">{price}</span>
                                        <span className="product-strike">{initialPrice}</span>
                                    </span>
                                    <span className="product-discount">{calcPercentOff(initialPrice,price)}%off</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
  )
}

export {ProductCard};