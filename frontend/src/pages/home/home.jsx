import Nav from "../../components/header/Nav";
import Footer from "../../components/header/footer/footer";
import News from "../../components/News/news";
import CartItem from "../../components/CardItem/CardItem";
import "./home.scss";
import"../../components/weather/weather";
import Weather from "../../components/weather/weather";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";


function Home() {
  return (
    <>
      <Nav />
      <div className="news">
        <Footer />
        <div className="bg-news">
          <div className="weatherToday">
          <div className="card-css">
            <CartItem label="500.00h" tiTle="Total Hour" />
            <CartItem label="500.00$" tiTle="Total Hour" />
    
          </div>
          <News />
          </div>
          <Weather/>
        </div>
      </div>

    </>
  );
}

export default Home;
