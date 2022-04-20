import React from 'react';
import "./Rightbar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbar__top">
                <h2>LinkedIn News</h2>
            
    
            <div className="rightbar__topcontent">
                <p className="rightbar__news">Meesho lays off 150 employees</p>
                <p className="rightbar__time">19h ago • 12,506 readers</p>
                <p className="rightbar__news">Unacademy fires 1,000 employees</p>
                <p className="rightbar__time">4d ago • 28,381 readers</p>
                <p className="rightbar__news">The 25 top companies in India</p>
                <p className="rightbar__time">6d ago • 42,581 readers</p>
                <p className="rightbar__news">Indian cos storm the metaverse</p>
                <p className="rightbar__time">1d ago • 5,790 readers</p>
                <p className="rightbar__news">Pay hikes to exceed pre-Covid levels?</p>
                <p className="rightbar__time">5d ago • 2,274 readers</p>
                
                <div className="showmore">
                <p>Show more</p>
                <ExpandMoreIcon />
                </div>
            </div>
            </div>   
            <div className="rightbar__bottom">
            <p>Stay up-to-date with the latest industry trends!</p>
            <h2 className="scalar">SCALAR</h2>
            <h2 className="academy">ACADEMY</h2>
            <div className="rightbar__bottomcontent">
                <p className="rightbar__ad">Abhishek, you might like to follow</p>
                <p className="rightbar__adbold">Scalar Academy</p>
            </div>
            <button className="follow__button">Follow</button>
            </div>
        </div>
      );
    }

export default Rightbar;