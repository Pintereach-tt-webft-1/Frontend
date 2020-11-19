import React from "react";
import './Home.css';


export default function Footer(){

    return(
        <footer>
              <div className="contact">
              <img src="https://i.imgur.com/0RxPCN0.png" alt='logo'/>
                <a href='#'>Contact Us</a>
                <a href='#'>About Us</a>
                
                </div>
                <div className="Icons">
                    <img src="https://blog-assets.hootsuite.com/wp-content/uploads/2018/09/In-Black-54px-R.png" alt="LinkdIn"/>
                    <img src='https://blog-assets.hootsuite.com/wp-content/uploads/2018/09/flogo-RGB-HEX-Blk-58.png' alt='FaceBook'/>
                    <img src='https://mk0hootsuiteblof6bud.kinstacdn.com/wp-content/uploads/2018/09/Twitter_Logo_WhiteOnImage-150x150.png' alt='FaceBook'/>
                </div>
        </footer>
    )
}