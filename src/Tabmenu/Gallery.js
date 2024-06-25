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
      <div className='menu-item container-fluid mt-5'>
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row my-5">
              <div className="item col-12 col-md-6 col-lg-6 col-xl-4">
                 <div className="row item-inside">
                  <div className="col-12 col-md-12 col-lg-4 img-div">
                    <img src="" alt="menuPic" className="img-fluid" />
                  </div>
                  <div className="col-12 col-md-12 col-lg-8">
                    <div className="main-title pt-4 pb-3">
                      <h1>Maggi</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="menu-price-book">
                      <div className="price-book-divide">
                        <h2>Price : TK120</h2>
                        <a href="#">
                          <button className='btn btn-primary'>Order now</button>
                        </a>
                      </div>
                      <p>*Price may vary on selected date</p>
                    </div>
                  </div>
                 </div>

              </div>

              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Gallery
