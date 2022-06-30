import React from 'react'

export default function TextForm() {
  return (
    <div>
      <div className="mb-3">
            <label htmlfor="Mybox" className="form-label">Example textarea</label>
            <textarea className="form-control" id="Mybox" rows="3"></textarea>
      </div>
    </div>
  )
  //this return a text box with id="Mybox"
}
