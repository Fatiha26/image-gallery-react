import React from 'react'
const Gallery = () => {
  return (
    <div>
      <h1 className="mt-5 text-center main-heading">Order your food</h1>
      <hr />
      <div className='menu-tabs container'>
        <div className="menu-tab d-flex justify-content-around">
            <button className="btn btn-warning">Breakfast</button>
            <button className="btn btn-warning">Lunch</button>
            <button className="btn btn-warning">Evening</button>
            <button className="btn btn-warning">Dinner</button>
            <button className="btn btn-warning">All</button>

        </div>

      </div>
    </div>
  )
}

export default Gallery
