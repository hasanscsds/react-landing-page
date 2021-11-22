import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import iphoneImg from '../images/iphones-removebg.png'; //rasm formati korsatilmasa xato qaytaradi
//rasmni backroundini olish uchun remoeve.bg sayti

const Home = () => {
    return (
        <div className="home">
            <div className="main">
                <div className="side-1">
                    <h3>GET THE NEW IPHONE 12 PRO</h3>
                    <p>A transformative triple-camera system that
                    adds tons of capability without complexity</p>
                    <div className="buttons">
                        <a href="s" className="btn-1">Buy Now <ShoppingBasketIcon/></a>
                        <a href="s" className="btn-2">With $539 wyhtrade in </a>
                    </div>
                </div>
                <div className="side-2">
                    <img src={iphoneImg} alt="iphone-img"/>
                </div>
            </div>
        </div>
    );
};


export default Home;