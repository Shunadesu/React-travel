import React, {useEffect} from "react";
import video from "../../Assets/video/videotravel.mp4";
import {GrLocation} from "react-icons/gr";
import {RiFilter3Fill} from "react-icons/ri";
import {BsInstagram, BsListTask} from "react-icons/bs";
import {FiFacebook} from "react-icons/fi";
import {CgMail} from "react-icons/cg";
import {TbApps} from "react-icons/tb";
import "./home.css"

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
    // craete a react hook to add scroll animation

    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])




    return (
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                    <span data-aos="fade-up" className="smallText">
                        Our Packages
                    </span>
                    <h1 data-aos="fade-up" className="homeTitle">
                        Search your Holidays
                    </h1>
                </div>


                <div className="cardDiv grid">
                    <div className="destinationInput">
                        <label htmlFor="city">Search your Destination</label>
                        <div className="input flex">
                            <input type="text" placeholder="Enter name here ...." />
                            <GrLocation className="icon"/>
                        </div>
                    </div>

                    <div className="dateInput">
                        <label htmlFor="city">Select your date</label>
                        <div className="input flex">
                            <input type="date" />
                        </div>
                    </div>

                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max Price:</label>
                            <h3 className="total"> $5000 </h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="1000" />
                        </div>
                    </div>

                    <div className="searchOptions flex">
                        <RiFilter3Fill className="icon"/>
                        <span>More Options</span>
                    </div>

                </div>

                <div className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon"/>
                        <BsInstagram className="icon"/>
                        <CgMail className="icon"/>


                    </div>

                    <div className="leftIcons">
                        <BsListTask className="icon"/>
                        <TbApps className="icon"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home