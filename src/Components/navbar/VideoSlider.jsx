'use client';
import React from 'react';
import Image from 'next/image';
import Img1 from '../images/Back1.png';
import Img2 from '../images/Spice.jpg';
import Img4 from '../images/back3.jpg';
import Img3 from '../images/Header.jpg';
import Img5 from '../images/Header2.jpg';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const VideoSlider = () => {
    return (
        <>
            <AliceCarousel
                autoPlay
                autoPlayControls
                autoPlayStrategy="action"
                autoPlayInterval={1000}
                animationDuration={1000}
                animationType="fadeout"
                infinite
                touchTracking={false}
             disableDotsControls
             disableButtonsControls



            >

                <div className="first_img">

                    <Image src={Img1} className="sliderimg" alt="Spices" />
                    <div className="row">
                        <div className="col-6 col-m-12">
                            <div className="blurr_glass">
                                <h2 className="blurr_head">When Its Come To Commodity Trading
                                    <br />


                                    <span>Trade Pros  </span> Have <br />No Limits
                                </h2>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
                <div className="first_img">
                    <Image src={Img2} className="sliderimg" alt="Spices" />
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4 col-m-12">
                            <div className="blurr_glass rightglass">
                                <h2 className="blurr_head">Reach <span>Your Foreign Customers</span>
                                    With Us.
                                    <br />


                                </h2>
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>

                </div>
                <div className="first_img">
                    <Image src={Img4} className="sliderimg" alt="Whole Spices" />
                    <div className="row">
                        <div className="col-6 col-m-12">
                            <div className="blurr_glass rightglass">
                                <h2 className="blurr_head">Lets Your <span>Products</span> Be Delivered <br /> <br /> Safely Through Us</h2>
                            </div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                </div>
                <div className="first_img">
                    <Image src={Img3} className="sliderimg image_fix" alt="mustard " />
                </div>
                <div className="first_img">
                    <Image src={Img5} className="sliderimg" alt="Rice" />
                </div>

            </AliceCarousel>
        </>
    )
}

export default VideoSlider