import axios from "axios";

export const addressService = async (curAddress, eToken, dispatch) => {
  try {
    const {data:{address}}= await axios.post(
      "/api/user/address",
      {curAddress},
      { headers: { authorization: eToken } }
    );
    dispatch({type:"ADD_ADDRESS",payload:address});
    
    console.log(address);
  } catch (error) {
    console.log(error);
  }
};

export const editAddressService = async (curAddress, eToken, dispatch) => {
  try {
    const {data}= await axios.post(
      `/api/user/address/${curAddress._id}`,
      {updatedAddress:curAddress},
      { headers: { authorization: eToken } }
    );
    dispatch({type:"ADD_ADDRESS",payload:data.address});
    
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const removeAddressService = async (curAddress, eToken, dispatch) => {
  try {
    const {data}= await axios.delete(
      `/api/user/address/${curAddress._id}`,
      { headers: { authorization: eToken } }
    );
    dispatch({type:"ADD_ADDRESS",payload:data.address});
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

