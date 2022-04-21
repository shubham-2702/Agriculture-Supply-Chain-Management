import React, { useState,useEffect } from 'react'
import './CreateProduct.css'
import 'react-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import jwt_decode from "jwt-decode";

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
      name: e.target.value
    })
    //console.log(formData)
  }
   const changeOwner = (e) => {
    setFormData({
      ...formData,
      owner:e.target.value
    })
    
    console.log(formData)
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
        console.log(decoded.email)
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
                         <input type="text" onKeyUp={e => changeName(e)} id="fname" name="name" placeholder="Enter Product Name" className="farmer-create-product-input" onblur="validate(1)" /> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label farmer-create-product-labe; px-3">Product Category <span class="text-danger"> *</span></label>
                         <input type="text" onKeyUp={e => changeCategroy(e)} id="lname" name="lname" placeholder="Enter Product Type " className="farmer-create-product-input" onblur="validate(2)"/> </div>
                    </div>
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label farmer-create-product-label px-3">Product Price<span class="text-danger"> *</span></label> 
                        <input type="text" id="email" onKeyUp={e => changePrice(e)} name="price" placeholder="" className="farmer-create-product-input" onblur="validate(3)"/> </div>
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label farmer-create-product-label px-3">Product Quantity<span class="text-danger"> *</span></label>
                         <input type="text" onKeyUp={e => changeQuantity(e)} id="mob" name="quantity" placeholder="" className="farmer-create-product-input" onblur="validate(4)"/> </div>
                    </div>
                    <br/>
                    {/* <div class="row justify-content-between text-left">
                        <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label farmer-create-product-label px-3">Job title<span class="text-danger"> *</span></label> <input type="text" id="job" name="job" placeholder="" className="farmer-create-product-input" onblur="validate(5)"/> </div>
                    </div> */}
                    <div class="row justify-content-between text-left">
                        <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label farmer-create-product-lebel px-3">Confirm your Email<span class="text-danger"> *</span></label>
                         <input type="text"  onKeyUp={e => changeOwner(e)} id="ans" name="ans" placeholder="" className="farmer-create-product-input" onblur="validate(6)"/> </div>
                    </div>
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

export default CreateProduct