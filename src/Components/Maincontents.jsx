'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Circ from '../Components/images/spice-70.png';
import Spi from '../Components/images/bannerimage.png';
import Sideimg from '../Components/images/spice55.jpg';
import Spicmix from '../Components/images/tea.png';
import Rice from '../Components/images/rice.png';
import Amchu from '../Components/images/Amchur.jpg';
import Yell from '../Components/images/yellow.jpg';
import Cinm from '../Components/images/Cinnamon.jpg';
import Mseeds from '../Components/images/Mustseeds.jpg';
import Cumin from '../Components/images/Cummin.jpg';
import Kalaunji from '../Components/images/Kalounji.jpg';
import WhiteR from '../Components/Riceimages/WhiteSella.jpg';
import SteamR from '../Components/Riceimages/Steammin.jpg';
import Golden from '../Components/Riceimages/GoldenSella.jpg';
import Shrabati from '../Components/Riceimages/Sharbatisella.jpg';
import ShrabatiG from '../Components/Riceimages/Sharbatigolden.jpg';
import SugandhaW from '../Components/Riceimages/SugandhaWhite.jpg';
import Counterup from './Counterup';
import Footer from './Footer';


const Maincontents = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div>

            <div className="wrap-3">
                <div className="container">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4 col-m-12 col-t-12 col-l-12">
                            <h1 className="about_head">About Trade Pros</h1>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-m-12 col-t-12 col-l-6">
                            <Image src={Circ} alt="circleimage" className="circimage" />
                            <div className="para_abs">
                                <p className="about_para"> One of the significant attractions of India is its Food. Indian Food is popular worldwide because of its distinctive flavor, scent, and lovely textures. Trade-Pros is proud to be engaged in an ethical business towards international commodity trading to establish long-term relationships with buyers and sellers. At Trade Pros, we represent Indian culture and our variety of spices to the world. We have our head office in Delhi, India, and branch offices in Dubai and Europe.
                                    <br />


                                    We are interested in working with clients globally. We ship various agricultural commodities and spices as whole/ powder and other items. <Link href="/about-us/"> …Know More </Link>
                                    <Image src={Spi} alt="WholeSpiceimage" className="whole_spice" /></p>

                            </div>
                        </div>
                        <div className="col-6 col-l-6">
                            <Image src={Sideimg} alt="Spicesimage" className="Spiceimg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrap-4">
                <div className="container">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6 col-m-12 col-t-12 ">

                            <div className="bloc-tabs">
                                <button
                                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(1)}
                                >
                                    <div className="clients_img">
                                        <Image src={Spicmix} alt="spice icon" /> <span>  Spices </span>
                                    </div>
                                </button>
                                <button
                                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(2)}
                                >
                                    <div className="clients_img">
                                        <Image src={Rice} alt="rice icon" /> <span> Rice</span>
                                    </div>
                                </button>

                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>
                    <div className="row">

                        <div className="col-12 col-m-12 col-t-12">

                            <div className="content-tabs">
                                <div className="row">


                                    <div className="col-6 col-m-12 col-t-12 ">





                                        <div
                                            className={toggleState === 1 ? "content  active-content" : "content"}
                                        >

                                            <div className="content_box">


                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Amchu} alt="Mustard Seeds" />
                                                            </div>
                                                            <div class="product">
                                                                <span class="new">New</span>
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Amchur</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/amchur/" class="read-more" >Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Yell} alt="Yellow chilli" />
                                                            </div>
                                                            <div class="product">
                                                                <span class="new">New</span>
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Yellow Chilli </h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/yellow-chilli/" class="read-more" >Read More</Link>
                                                </div>


                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Cinm} alt="Cinnamon Sticks" />
                                                            </div>
                                                            <div class="product">
                                                                <span class="new">New</span>
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Cinnamon Sticks</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/cinnamon-sticks/" class="read-more" >Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Mseeds} alt="Mustard Seeds" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Mustard Seeds</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/mustard-seeds/" class="read-more" >Read More</Link>
                                                </div>
                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Cumin} alt="Cumin Seeds" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Cumin Seeds</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/cumin-seeds/" class="read-more" >Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Kalaunji} alt="Kalounji" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Kalonji</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/kalounji/" class="read-more" >Read More</Link>
                                                </div>










                                            </div>
                                        </div>

                                        <div
                                            className={toggleState === 2 ? "content  active-content" : "content"}
                                        >

                                            <div className="content_box">



                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={WhiteR} alt="1121 White Sella" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">1121 White Sella</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/basmati/1121-white-sella/" class="read-more" >Read More</Link>
                                                </div>



                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={SteamR} alt="1121 Steam" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">1121 Steam</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/basmati/1121-steam/" class="read-more" >Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Golden} alt="1121 Golden Sella" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">1121 Golden Sella</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/basmati/1121-golden-sella/" class="read-more" >Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Shrabati} alt="Sharbati White Sella" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Sharbati White Sella</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/basmati/sharbati-white-sella/" class="read-more" >Read More</Link>
                                                </div>


                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={ShrabatiG} alt="Sharbati Golden Sella" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Sharbati Golden Sella</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/basmati/sharbati-golden-sella/" class="read-more" >Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={SugandhaW} alt="Sugandha White Sella" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Sugandha White Sella</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/basmati/sugandha-white-sella/" class="read-more" >Read More</Link>
                                                </div>








                                            </div>
                                        </div>


                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="wrap-5">
                <div className="container">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10 col-m-12 col-t-12">
                            <p className="para_hed"><span>T</span>rade Pros is one of the top-ranking businesses in the import-export industry. Our attention is constantly focused on quality control, cutting-edge equipment, excellent processing, first-rate infrastructure, a skilled workforce, personalized packaging, and the warehousing division. Our rapidly expanding business is adept at meeting the expanding client demand globally.</p>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
            </div>
            <Counterup/>
            <Footer/>
        </div>
    )
}

export default Maincontents