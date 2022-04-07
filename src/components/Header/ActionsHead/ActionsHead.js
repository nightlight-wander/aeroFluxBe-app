import React from 'react';
import { Link } from "react-router-dom";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useAllData } from '../../../context/AllDataContext';
import "./ActionsHead.css"

function ActionsHead() {
  const {state:{wishlist,bag}}=useAllData();
  const bagLength=bag.length+bag.qty;
  return (
    <div className="actions-head flex-vCenter">
    <Link to="/login" className="user flex-col flex-vCenter">
        <span><PermIdentityOutlinedIcon/> </span>
        <span className="actions-title">Profile</span>
    </Link>
    <Link to="/wishlist" className="wishlist wish-badge flex-col flex-vCenter">
        <span><FavoriteBorderOutlinedIcon size={24}px/></span>
        <span className="actions-title">Wishlist</span>
        {wishlist.length>0?<span className="status-badge flex-center">{wishlist.length}</span>:null}
    </Link>
    <Link to="/bag" className="bag bag-badge flex-col flex-vCenter">
        <span><ShoppingBagIcon/> </span>
        <span className="actions-title">Bag</span>
        {bagLength>0?<span className="status-badge bag-status flex-center">{bagLength}</span>:null}
    </Link>
</div>
  )
}

export {ActionsHead}