import React, { useState,useEffect } from 'react'
import './CreateProduct.css'
import 'react-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import jwt_decode from "jwt-decode";
import styled from 'styled-components';

function check_cookie_name(name)  // "token"
{
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) {
    return (match[2]);
  }
  else{
      return ''
  }
}
const CreateProduct = () => {
    var decoded = jwt_decode(check_cookie_name("token"))
    console.log(decoded)
    const [formData, setFormData] = useState({
        name:'',
        category: '',
        price: '',
        quantity: '',
        owner: ''
    })
    const navigate = useNavigate()
    
  

   const changeName = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    })
    //console.log(formData)
   }
   const setOwner = (e) => {
    setFormData({
      ...formData,
      owner:decoded.name
    })
    
    //console.log(formData)
   }
   const changeCategroy = (e) => {
    setFormData({
      ...formData,
      category: e.target.value
    })
    //console.log(formData)
    }
    const changePrice = (e) => {
        setFormData({
          ...formData,
          price: e.target.value
        })
        //console.log(formData)
      }
    const changeQuantity = (e) => {
        setFormData({
          ...formData,
          quantity: e.target.value
        })
        //console.log(formData)
    }
    const submitForm = (e) => {
        e.preventDefault()
        setOwner(e);
        axios.post('http://localhost:5000/farmerCreateProduct', formData, {withCredentials: true})
          .then(response => {
            console.log(response)
            navigate('/farmerProfile')
            navigate(0)
            console.log(formData);
          })
          .catch(err => {
              console.log(err);
          })
      }

  return (
    <div id="farmer-create-product">
    <div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
           
            <div class="farmer-create-product-card">
                <h5 class="text-center mb-4">Add Product</h5>
                <form class="form-card"  action="/farmerCreateProduct" method="POST">
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label farmer-create-product-label px-3 ">Product name<span class="text-danger"> *</span></label>
                         <input type="text" onKeyDown={e => changeName(e)} id="fname" name="name" placeholder="Enter Product Name" className="farmer-create-product-input" onblur="validate(1)" /> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label farmer-create-product-labe; px-3">Product Category <span class="text-danger"> *</span></label>
                         <input type="text" onKeyDown={e => changeCategroy(e)} id="lname" name="lname" placeholder="Enter Product Type " className="farmer-create-product-input" onblur="validate(2)"/> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label farmer-create-product-label px-3">Product Price<span class="text-danger"> *</span></label> 
                        <input type="text" id="email" onKeyDown={e => changePrice(e)} name="price" placeholder="" className="farmer-create-product-input" onblur="validate(3)"/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label farmer-create-product-label px-3">Product Quantity<span class="text-danger"> *</span></label>
                         <input type="text" onKeyDown={e => changeQuantity(e)} id="mob" name="quantity" placeholder="" className="farmer-create-product-input" onblur="validate(4)"/> </div>
                    </div>
                    {/* <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label farmer-create-product-label px-3">Job title<span class="text-danger"> *</span></label> <input type="text" id="job" name="job" placeholder="" className="farmer-create-product-input" onblur="validate(5)"/> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label farmer-create-product-lebel px-3">What would you be using Flinks for?<span class="text-danger"> *</span></label> <input type="text" id="ans" name="ans" placeholder="" className="farmer-create-product-input" onblur="validate(6)"/> </div>
                    </div> */}
                    <div class="row justify-content-end">
                        <div class="form-group col-sm-6"> <button  type="submit" onClick={(e) => submitForm(e)}  class="btn-block-farmer-product btn-primary-farmer-product farmer-create-product-button">Create Product</button> </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    
</div>
  )
}

const CreateProfuctStyle = styled.p`
function validate(val) {
v1 = document.getElementById("fname");
v2 = document.getElementById("lname");
v3 = document.getElementById("email");
v4 = document.getElementById("mob");
v5 = document.getElementById("job");
v6 = document.getElementById("ans");

flag1 = true;
flag2 = true;
flag3 = true;
flag4 = true;
flag5 = true;
flag6 = true;

if(val>=1 || val==0) {
if(v1.value == "") {
v1.style.borderColor = "red";
flag1 = false;
}
else {
v1.style.borderColor = "green";
flag1 = true;
}
}

if(val>=2 || val==0) {
if(v2.value == "") {
v2.style.borderColor = "red";
flag2 = false;
}
else {
v2.style.borderColor = "green";
flag2 = true;
}
}
if(val>=3 || val==0) {
if(v3.value == "") {
v3.style.borderColor = "red";
flag3 = false;
}
else {
v3.style.borderColor = "green";
flag3 = true;
}
}
if(val>=4 || val==0) {
if(v4.value == "") {
v4.style.borderColor = "red";
flag4 = false;
}
else {
v4.style.borderColor = "green";
flag4 = true;
}
}
if(val>=5 || val==0) {
if(v5.value == "") {
v5.style.borderColor = "red";
flag5 = false;
}
else {
v5.style.borderColor = "green";
flag5 = true;
}
}
if(val>=6 || val==0) {
if(v6.value == "") {
v6.style.borderColor = "red";
flag6 = false;
}
else {
v6.style.borderColor = "green";
flag6 = true;
}
}

flag = flag1 && flag2 && flag3 && flag4 && flag5 && flag6;

return flag;
}
` 

export default CreateProduct