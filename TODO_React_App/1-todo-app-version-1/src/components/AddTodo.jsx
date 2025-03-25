import React from 'react'

function AddTodo() {
  return (
    <div class="container text-center">
          
          <div class="row">
            <div class="col-5">
              <input type="text" name="" id="" placeholder="Enter Todo here..."/>
            </div>
            <div class="col-4">
              <input type="datetime-local" name="" id="" />
            </div>
            <div class="col-3">
              <button type="submit" className="btn btn-success">Add</button>
            </div>

          </div>
    </div>
  )
}

export default AddTodo