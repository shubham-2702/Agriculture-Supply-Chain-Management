import React from 'react'
import './FarmerProfile.css'

const FarmerProfile = () => {
  return (
    <div id="farmer-profile">
      <div class="container">
    <div class="farmer-profile-main-body">
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="farmer-profile-card">
                <div class="farmer-profile-card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>Ram Singh</h4>
                      {/* <p class="text-secondary mb-1">Full Stack Developer</p>
                      <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="farmer-profile-card mt-3">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe mr-2 icon-inline"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>Authority</h6>
                    <span class="text-secondary"> Kisan id number</span>
                  </li>
                
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <div class="farmer-profile-card mb-3">
                <div class="farmer-profile-card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Ram Singh
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Ram@gmail.com
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      +91 4536728910
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      96864567897
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     Gaya, Bihar
                    </div>
                  </div>
                  <hr/>
                  <div class="row">
                    <div class="col-sm-12">
                      <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row gutters-sm">
              <button>Add Products</button>
                <div class="col-sm-6 mb-3">
                 
                </div>
                <div class="col-sm-6 mb-3">
                  
                </div>
              </div>



            </div>
          </div>

        </div>
    </div>
    </div>
  )
}

export default FarmerProfile