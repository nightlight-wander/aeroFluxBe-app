import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useAllData } from '../../../context/AllDataContext';
import "./ActionsHead.css"
import { useAuth } from '../../../context/AuthContext';

function ActionsHead() {
  const { state: { wishlist, bag } } = useAllData();
  const { authStates: { eToken, isLogin }, authDispatch } = useAuth();
  const navigate = useNavigate();
  const logOutHandlder = () => {
    localStorage.removeItem("eToken");
    localStorage.removeItem("user");
    authDispatch({type:"GET_TOKEN",payload:""});
    authDispatch({type:"GET_USER",payload:{}});
    authDispatch({type:"CHECK_LOGIN",payload:!isLogin})

  }
  return (
    <div className="actions-head flex-vCenter">
      {!isLogin ? <Link to="/login" className="user flex-col flex-vCenter">
        <span><PermIdentityOutlinedIcon /> </span>
        <span className="actions-title">Profile</span>
      </Link> :
        <div className="user flex-col flex-vCenter" onClick={() => logOutHandlder()}>
          <span><LogoutIcon /></span>
          <span className="actions-title">Logout</span>
        </div>
      }

      <Link to="/wishlist" className="wishlist wish-badge flex-col flex-vCenter">
        <span><FavoriteBorderOutlinedIcon size={24} px /></span>
        <span className="actions-title">Wishlist</span>
        {wishlist.length > 0 ? <span className="status-badge flex-center">{wishlist.length}</span> : null}
      </Link>
      <Link to="/bag" className="bag bag-badge flex-col flex-vCenter">
        <span><ShoppingBagIcon /> </span>
        <span className="actions-title">Bag</span>
        {bag.length ? <span className="status-badge bag-status flex-center">{bag.length}</span> : null}
      </Link>
    </div>
  )
}

export { ActionsHead }