import {  useState } from "react";
import { useAllData } from "../../context/AllDataContext";
import { Header } from "../Header/Header";
import { AddressCard } from "./AddressCard";
import { ModalAddress } from "./ModalAddress";
import "../../pages/Wishlist/Wishlist.css";
import "../../styles/grids.css";
import { Footer } from "../Footer/Footer";

const Address = () => {
    const {state:{address}}=useAllData();
    const [showModal,setShowModal]=useState(false);
    const [curAddress, setCurAddress] = useState({});
    const [edit,setEdit]=useState(false);
    
    const setModal=()=>{
        setShowModal(true);
    }
    
  return (
    <div className="addressGrid-wrapper rows3-grid">
        <Header/>
        <button onClick={()=>setModal()} className="add-address btn-pos">Add Address</button>
        {showModal&&<ModalAddress setShowModal={setShowModal} curAddress={curAddress} setCurAddress={setCurAddress} edit={edit}/>}
        <main className="wishlist-main cols2-grid-wishlist">
        
        
        <div className="address-wrapper">
        {address.map(curObj=>{
            return <AddressCard curObj={curObj} setCurAddress={setCurAddress} setShowModal={setShowModal} setEdit={setEdit} key={curObj._id} />
        })}
        
        </div>
        
        </main>
        <Footer/>
    </div>
  )
}

export {Address};