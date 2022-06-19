import { useAllData } from "../../context/AllDataContext";
import { useAuth } from "../../context/AuthContext";
import { removeAddressService } from "../../utilities/addressService";

const AddressCard = ({ curObj,setCurAddress,setShowModal,setEdit }) => {
  const { userName, country, state, city, pincode, phoneNo, _id } = curObj;
  const {state:{selectedAddId},dispatch}=useAllData();
  const {authStates:{eToken}}=useAuth();

  const editAddressHandler=()=>{
    
    console.log(curObj);
    // const ifAdFound= address.find(item=>item._id===_id);
    // console.log(ifAdFound);
    setEdit(()=>true);
    setCurAddress(()=>({...curObj}));
    setShowModal(true);
    // editAddressService(curAddress, eToken, dispatch);
  }

  const removeAddressHandler=()=>{
    removeAddressService(curObj, eToken, dispatch);
  }
  
  return (
    <div key={_id} className="address-card">
      <input type="radio" checked={_id===selectedAddId} onChange={()=>dispatch({type:"CHOOSE_ADDRESSID",payload:_id})}/>
      <h3>UserName:<span>{userName}</span></h3>
      <p>Country:<span>{country}</span></p>
      <p>State:<span>{state}</span></p>
      <p>City:<span>{city}</span></p>
      <p>Pincode:<span>{pincode}</span></p>
      <p>PhoneNo:<span>{phoneNo}</span></p>
      <button className="btn btn-outline btn-small" onClick={()=>editAddressHandler(_id)}>Edit</button>
      <button className="btn btn-outline btn-small" onClick={()=>removeAddressHandler(_id)}>Remove</button>
    </div>
  );
};

export { AddressCard };
