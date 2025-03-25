import React from 'react'

function TodoItem() {
    let name = 'Walking'
    let date = '21/02/2004'
  return (
    <>
        <div class="container text-center">
            <div class="row">
              <div class="col-5">
                {name}
              </div>
              <div class="col-4">
                {date}
              </div>
              <div class="col-3">
                <button type="reset"className="btn btn-danger">Remove</button>
              </div>
            </div>
        </div>
        <div class="container text-center">
            <div class="row">
              <div class="col-5">
                Go to school
              </div>
              <div class="col-4">
                13/12/2005
              </div>
              <div class="col-3">
                <button type="reset"className="btn btn-danger">Remove</button>
              </div>
            </div>
        </div>
    </>
  )
}

export default TodoItem