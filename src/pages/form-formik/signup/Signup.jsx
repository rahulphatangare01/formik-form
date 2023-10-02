import React from 'react'
import './Signup.css'
function Signup() {
  return (
    <>
       <div class="container  mt-5">
        <div className='box' >
        <h4  className='text-center mb-5 mt-5' >Add Site</h4>
        <form class="row w-50 demo mx-auto g-3 mt-5">
            <div class="col-md-6">
              <label for="inputEmail" class="form-label">Side Name</label>
              <input type="text" class="form-control" id="inputEmail"/>
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">GST Number</label>
              <input type="number" class="form-control" id="inputPassword"/>
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">Phone Number</label>
              <input type="number" class="form-control" id="inputAddress" />
            </div>
            <div class="col-6">
              <label for="inputAddress" class="form-label">Address </label>
              <input type="text" class="form-control" id="inputAddress"/>
            </div>
           
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Add Site</button>
            </div>
          </form>
        </div>
    </div>  
    </>
  )
}

export default Signup