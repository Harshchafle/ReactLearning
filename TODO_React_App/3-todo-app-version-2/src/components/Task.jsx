import React from 'react'

function Task(todoname, date) {
  return (
    <div className  ="container text-center">
        <div className="row">
          <div className="col-5">
            {todoname}
          </div>
          <div className="col-4">
            {date}
          </div>
          <div className="col-3">
            <button type="reset"className="btn btn-danger">Remove</button>
          </div>
        </div>
    </div>

  )
}

export default Task