import React from 'react'
import as from "../assets/sf.png"
import bs from "../assets/sl.png"
import cs from "../assets/stl.png"
import ds from "../assets/swh.png"
import es from "../assets/sp.png"
import fs from "../assets/shl.png"
import gs from "../assets/sgl.png"
import hs from "../assets/swp.png"
import is from "../assets/sc.png"

const Products = () => {
  return (
        <>

      <div className="products">


        <h1 class='productHeading'>Our  Products</h1>
        <div id='productCard'>

        <div class="card">
      <div class="container-image">
        <img src={es} alt="" />
       
      </div>
      <div class="content">
        <div class="detail">
          <span>New <br/> Product</span>
          <button><a href="/contact">Enquire Now</a></button>
        </div>
        <div class="product-image">
          <div class="box-image">
            <img src={es} alt="" />
          </div>
        </div>
      </div>
      <h2>Solar Pv Module</h2>
        </div>

        <div class="card">
      <div class="container-image">
        <img src={as} alt="" />
       
      </div>
      <div class="content">
        <div class="detail">
          <span>New <br/> Product</span>
          <button><a href="/contact">Enquire Now</a></button>

        </div>
        <div class="product-image">
          <div class="box-image">
            <img src={as} alt="" />
          </div>
        </div>
      </div>
      <h2>Solar Flasher</h2>
        </div>

        <div class="card">
      <div class="container-image">
        <img src={bs} alt="" />
       
      </div>
      <div class="content">
        <div class="detail">
          <span>New <br/> Product</span>
          <button><a href="/contact">Enquire Now</a></button>

        </div>
        <div class="product-image">
          <div class="box-image">
            <img src={bs} alt="" />
          </div>
        </div>
      </div>
      <h2>Solar Lantern</h2>
        </div>

        <div class="card">
      <div class="container-image">
        <img src={cs} alt="" />
       
      </div>
      <div class="content">
        <div class="detail">
          <span>New <br/> Product</span>
          <button><a href="/contact">Enquire Now</a></button>

        </div>
        <div class="product-image">
          <div class="box-image">
            <img src={cs} alt="" />
          </div>
        </div>
      </div>
      <h2>Solar Stret Light</h2>
        </div>

        <div class="card">
      <div class="container-image">
        <img src={ds} alt="" />
       
      </div>
      <div class="content">
        <div class="detail">
          <span>New <br/> Product</span>
          <button><a href="/contact">Enquire Now</a></button>

        </div>
        <div class="product-image">
          <div class="box-image">
            <img src={ds} alt="" />
          </div>
        </div>
      </div>
      <h2>Solar Water Heater</h2>
        </div>

        <div class="card">
      <div class="container-image">
        <img src={fs} alt="" />
       
      </div>
      <div class="content">
        <div class="detail">
          <span>New <br/> Product</span>
          <button><a href="/contact">Enquire Now</a></button>

        </div>
        <div class="product-image">
          <div class="box-image">
            <img src={fs} alt="" />
          </div>
        </div>
      </div>
      <h2>Solar Inverter</h2>
        </div>

        <div class="card">
      <div class="container-image">
        <img src={gs} alt="" />
       
      </div>
      <div class="content">
        <div class="detail">
          <span>New <br/>Product</span>
          <button><a href="/contact">Enquire Now</a></button>

        </div>
        <div class="product-image">
          <div class="box-image">
            <img src={gs} alt="" />
          </div>
        </div>
      </div>
      <h2>Solar Bulb</h2>

        </div>

        <div class="card">
      <div class="container-image">
        <img src={hs} alt="" />
       
      </div>
      <div class="content">
        <div class="detail">
          <span>New <br/>Product</span>
          <button><a href="/contact">Enquire Now</a></button>

        </div>
        <div class="product-image">
          <div class="box-image">
            <img src={hs} alt="" />
          </div>
        </div>
      </div>
      <h2>Solar Water Pump</h2>
        </div>

        <div class="card">
      <div class="container-image">
        <img src={is} alt="" />
       
      </div>
      <div class="content">
        <div class="detail">
          <span>New <br/>Product</span>
          <button><a href="/contact">Enquire Now</a></button>

        </div>
        <div class="product-image">
          <div class="box-image">
            <img src={is} alt="" />
          </div>
        </div>
      </div>
      <h2>Solar Cooker</h2>
        </div>


      </div>

    </div>
    </>
  )
}

export default Products