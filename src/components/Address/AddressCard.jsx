import { useAllData } from "../../context/AllDataContext";
import { useAuth } from "../../context/AuthContext";
import { editAddressService } from "../../utilities/addressService";

const AddressCard = ({ curObj,setCurAddress,setShowModal,setEdit }) => {
  const {authStates:eToken}=useAuth();
  const { userName, country, state, city, pincode, phoneNo, _id } = curObj;
  const {state:{selectedAddId,address},dispatch}=useAllData();

  const editAddressHandler=()=>{
    
    console.log(curObj);
    const ifAdFound= address.find(item=>item._id===_id);
    // console.log(ifAdFound);
    setCurAddress(()=>({...curObj}));
    setShowModal(true);
    setEdit(true);
    // editAddressService(curAddress, eToken, dispatch);
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
      <button className="btn btn-outline btn-small">Remove</button>
    </div>
  );
};

export { AddressCard };
