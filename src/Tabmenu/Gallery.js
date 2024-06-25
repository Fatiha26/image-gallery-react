import React, { useState } from 'react'
import Menu from './Menu';


const Gallery = () => {
  const [item,setItem] = useState(Menu);

  const filterItem = (cateitem) => {
          const updatedItems = Menu.filter((curElem)=>{
            return curElem.category === cateitem;
          });
          setItem(updatedItems);
  }
  return (
    <div>
      <h1 className="mt-5 text-center main-heading">Order your food</h1>
      <hr />
      <div className='menu-tabs container'>
        <div className="menu-tab d-flex justify-content-around">
            <button className="btn btn-warning" onClick={()=> filterItem('breakfast')}>Breakfast</button>
            <button className="btn btn-warning" onClick={()=> filterItem('lunch')}>Lunch</button>
            <button className="btn btn-warning" onClick={()=> filterItem('evening')}>Evening</button>
            <button className="btn btn-warning" onClick={()=> filterItem('dinner')}>Dinner</button>
            <button className="btn btn-warning" onClick={()=> setItem(Menu)}>All</button>
        </div>
      </div>
      <div className='menu-item container-fluid'>
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row my-2 menu-inner">

                {
                  item.map((elem)=>{
                    const {id,image,name,category,price,description} = elem;

                    return(
                      <>
                <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                 <div className="row item-inside">
                  <div className="col-12 col-md-12 col-lg-4 img-div">
                    <img src={image} alt="menuPic" className="img-fluid" />
                  </div>
                  <div className="col-12 col-md-12 col-lg-8">
                    <div className="main-title pt-4 pb-3">
                      <h1>{name}</h1>
                      <p>{category}</p>
                    </div>
                    <div className="menu-price-book">
                      <div className="price-book-divide">
                        <h4>{price}</h4>
                        <a href="#">
                          <button className='btn btn-primary'>Order now</button>
                        </a>
                      </div>
                      <p className='mt-1'>{description}</p>
                    </div>
                  </div>
                 </div>

              </div>
                      </>
                    )
                  })
                }
          

              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Gallery
