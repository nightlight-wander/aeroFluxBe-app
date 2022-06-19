import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";

/**
 * All the routes related to Address are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */


/**
 * This handler handles getting items to user's Address.
 * send GET Request at /api/user/address
 * */

export const getAllAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userAllAddress = schema.users.findBy({ _id: userId }).address;
  return new Response(200, {}, { address: userAllAddress });
};

/**
 * This handler handles adding user address.
 * send POST Request at /api/user/address
 * body contains {address}
 * */

export const addNewAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userAllAddress = schema.users.findBy({ _id: userId }).address;
    const { curAddress } = JSON.parse(request.requestBody);
    userAllAddress.push({
      ...curAddress,
      _id:uuid(),
      createdAt: formatDate(),
      updatedAt: formatDate(),
    });
    this.db.users.update({ _id: userId }, { address: userAllAddress });
    return new Response(201, {}, { address: userAllAddress });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles updating user address.
 * send POST Request at /api/user/address
 * body contains {address}
 * */

export const updateAddressandler = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    try {
      if (!userId) {
        new Response(
          404,
          {},
          {
            errors: ["The email you entered is not Registered. Not Found error"],
          }
        );
      }
      const userAllAddress = schema.users.findBy({ _id: userId }).address;
      const {updatedAddress} = JSON.parse(request.requestBody);
      console.log(updatedAddress)
      const addressId = request.params.addressId;
      userAllAddress.forEach(singleAddress=>{
        if(singleAddress._id===addressId){
            // ({singleAddress}=({...updatedAddress,updatedAt: formatDate()}))
            singleAddress.userName=updatedAddress.userName;
            singleAddress.country=updatedAddress.country;
            singleAddress.state=updatedAddress.state;
            singleAddress.city=updatedAddress.city;
            singleAddress.pinCode=updatedAddress.pinCode;
            singleAddress.phoneNo=updatedAddress.phoneNo;
            singleAddress.updatedAt=formatDate();
        }
      })
      this.db.users.update({ _id: userId }, { address: userAllAddress });
      return new Response(201, {}, { address: userAllAddress });
    } catch (error) {
      return new Response(
        500,
        {},
        {
          error,
        }
      );
    }
  };

/**
 * This handler handles removing user address.
 * send DELETE Request at /api/user/address
 * body contains {address}
 * */

export const removeAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    let userAllAddress = schema.users.findBy({ _id: userId }).address;
    const addressId = request.params.addressId;
    userAllAddress = userAllAddress.filter((item) => item._id !== addressId);
    this.db.users.update({ _id: userId }, { address: userAllAddress });
    return new Response(200, {}, { address: userAllAddress });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
