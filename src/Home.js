import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        {/* Product id, title, price, rating, image */}
        <div className="home_row">
          <Product
            id="98234"
            title="
        
        Sony PlayStation 4 Pro 1TB White (PS4)"
            price={200}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71NyRR72fWL._AC_SL1500_.jpg"
          />
          <Product
            id="15406"
            title="
        
          iPhone XR 128 GB Red"
            price={705}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/515dXLYiSQL._AC_SL1024_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="98234"
            title="
        
          Razer BlackWidow Elite"
            price={130}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71E%2BNcq9%2BKL._AC_SL1500_.jpg"
          />
          <Product
            id="98234"
            title="
        
          Apple iPad 10.2 inch 32 GB"
            price={459}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61hjzGugXhL._AC_SL1500_.jpg"
          />
          <Product
            id="98234"
            title="
        
          Amazon Echo (3rd Gen) - Smart speaker with Alexa,  EU power adaptor"
            price={97}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91LsUb-L29L._AC_SL1500_.jpg"
          />
        </div>

        <div className="home_row">
          <Product
            id="98234"
            title="
        
          AmazonBasics – Wireless Headphone Wireless with Docking Station"
            price={100}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71PJ7SAvzHL._AC_SL1475_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
