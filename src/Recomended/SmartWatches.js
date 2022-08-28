import React from 'react';
import SmartWatches from '../JSON/smartwatches.json'
const SmartWatchs = () => {
    return (
        <div className="smartwatch">
            <div className="titles">
                <p>Explore Awesome Products</p>
                <h4>Recomended For You</h4>
            </div>
            <div className="cards">
                {SmartWatches.map((post)=>{
                        return(
                            <div className="productCard">
                                <img src={post.img} alt="watch-img"/>
                                <p>{post.name}</p>
                                <div className="price">
                                    {post.price}
                                </div>
                            </div>
                        )
                    })}
            </div>
            <span className="buttonArea">
                <a href="s" className="exploreBtn"> Explore Other Products </a>   
            </span>
        </div>
    );
};


export default SmartWatchs;