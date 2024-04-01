
'use client';
import React from 'react';
import { useState } from "react";
import cor from '../../Components/Riceimages/pngegg.png';
import Ginger from '../../Components/images/8.png';
import Link from 'next/link';
import { IoHome } from "react-icons/io5";
import Image from 'next/image';





import Spicmix from '../../Components/images/tea.png';
import Rice from '../../Components/images/rice.png';
import Cumin from '../../Components/images/Cummin.jpg';
import Cardmom from '../../Components/images/Cardmom.jpg';

import Safron from '../../Components/images/Saffron.jpg';
import Blackp from '../../Components/images/BlackPepper.jpg';
import Kalaunji from '../../Components/images/Kalounji.jpg';

import Fennel from '../../Components/images/Fennel.jpg';
import Corin from '../../Components/images/Coriander.jpg';
import Turm from '../../Components/images/turmeric.jpg';
import Pome from '../../Components/images/Pome.jpg';
import Asaf from '../../Components/images/Asaf.jpg';
import Blackcr from '../../Components/images/Blackcr.jpg';
import Bayleave from '../../Components/images/BayLeave.jpg';
import Fengu from '../../Components/images/Fenu.jpg';
import Mseeds from '../../Components/images/Mustseeds.jpg';
import Clov from '../../Components/images/Cloves.jpg';
import Tama from '../../Components/images/Tama.jpg';
import Trach from '../../Components/images/Trachy.jpg';
import Amchu from '../../Components/images/Amchur.jpg';
import Cinm from '../../Components/images/Cinnamon.jpg';
import Yell from '../../Components/images/yellow.jpg';
import Dryc from '../../Components/images/dry-chilly.jpg';




import WhiteR from "../../Components/Riceimages/WhiteSella.jpg";
import SteamR from "../../Components/Riceimages/Steammin.jpg";
import Golden from '../../Components/Riceimages/GoldenSella.jpg'
import Shrabati from '../../Components/Riceimages/Sharbatisella.jpg'
import ShrabatiG from '../../Components/Riceimages/Sharbatigolden.jpg'
import SugandhaW from '../../Components/Riceimages/SugandhaWhite.jpg'
import White from '../../Components/Riceimages/White.jpg'
import Whiee from '../../Components/Riceimages/Whitee.jpg';
import BrokenR from '../../Components/Riceimages/PBroken.jpg';
import RBroken from '../../Components/Riceimages/RawBroken.jpg';
import Rw from '../../Components/Riceimages/Raww.jpg';
import Pb from '../../Components/Riceimages/Pb.jpg';
import Rb from '../../Components/Riceimages/Rb.jpg';
import BRice from '../../Components/Riceimages/Br.jpg';
import SwarnaR from '../../Components/Riceimages/SwarnaRaw.jpg';
import SwarP from '../../Components/Riceimages/Swarnap.jpg';
import SWM from '../../Components/Riceimages/SwarnaBrok.jpg';
import RBM from '../../Components/Riceimages/RawBroken100.jpg';
import PR from '../../Components/Riceimages/PRWhite.jpg';
import Ir5 from '../../Components/Riceimages/IR5Broken.jpg';
import Navbar from '@/Components/navbar/Navbar';




const OurProducts = () => {




    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <div>
            <Navbar/>
            

            <div className="about-1">
                <div className="container">
                    <div className="row">


                    </div>

                </div>
            </div>
            <div className="about-2">
                <div className="container">
                    <div className="row About_absou">
                        <div className="col-2">
                            <Image src={cor} alt="coriandarimage" className='cor_img' />
                        </div>
                        <div className="col-8 col-m-12 col-t-12 col-p-12">
                            <div className="slugs">
                                <h1 className='About_head'>Our Products</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <Image src={Ginger} alt="Gingerimage" className='ginger_img' />

                        </div>
                    </div>
                </div>
            </div>

            <div className="wrap-4">
                <div className="container">

                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6 col-m-12 col-t-12 ">

                            <div className="bloc-tabs ourSpice">
                                <button
                                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(1)}
                                >
                                    <div className="clients_img">
                                        <Image src={Spicmix} alt="Spices" /> <span>  Spices </span>
                                    </div>
                                </button>
                                <button
                                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(2)}
                                >
                                    <div className="clients_img">
                                        <Image src={Rice} alt="Rice" /> <span> Rice</span>
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
                                                                <Image src={Amchu} alt="Amchur" />
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
                                                                <Image src={Yell} alt="Yellow Chilli" />
                                                            </div>
                                                            <div class="product">
                                                                <span class="new">New</span>
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Yellow Chilli</h4>
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
                                                    <Link href="/our-products/spices/cinnamon-sticks/" class="read-more">Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Cardmom} alt="Green Cardamom" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Green Cardamom</h4>
                                                        </div>

                                                    </div>
                                                    <Link href="/our-products/spices/green-cardamom/" class="read-more" >Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Safron} alt="Saffron" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Saffron</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/saffron/" class="read-more" >Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Blackp} alt="Black Pepper" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Black Pepper</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/black-pepper/" class="read-more" >Read More</Link>
                                                </div>


                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Cumin} alt="Cumin" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Cumin</h4>
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
                                                    <Link href="/our-products/spices/kalounji/" class="read-more">Read More</Link>
                                                </div>
                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Fennel} alt="Fennel Seeds" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Fennel Seeds</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/fennel-seeds/" class="read-more" >Read More</Link>
                                                </div>
                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Corin} alt="Coriander Seeds" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Coriander Seeds</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/Coriander-Seeds/" class="read-more" >Read More</Link>
                                                </div>


                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Turm} alt="Turmeric" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Turmeric</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/turmeric/" class="read-more" >Read More</Link>
                                                </div>


                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Pome} alt="Pomegranate Seeds" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Pomegranate Seeds</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/pomegranate-seeds/" class="read-more">Read More</Link>
                                                </div>



                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Asaf} alt="Asafoetida" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Asafoetida</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/asafoetida/" class="read-more" >Read More</Link>
                                                </div>



                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Blackcr} alt="Black Cardamon" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Black Cardamon</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/black-cardamom/" class="read-more" >Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Bayleave} alt="Bay Leaves" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Bay Leaves</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/bay-leaves/" class="read-more">Read More</Link>
                                                </div>
                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Fengu} alt="Fenugreek Seeds" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Fenugreek Seeds</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/fenugreek-seeds/" class="read-more">Read More</Link>
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
                                                                <Image src={Clov} alt="Cloves" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Cloves</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/cloves/" class="read-more" >Read More</Link>
                                                </div>
                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Tama} alt="Tamarind" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Tamarind</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/tamarind/" class="read-more" >Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Trach} alt="Carom Seeds" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Carom Seeds</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/carom-seeds/" class="read-more">Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Dryc} alt="redchilli" style={{ width: "340px", height: "271px" }} />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Dry Red Chilli</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/spices/dry-red-chilli/" class="read-more" >Read More</Link>
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
                                                    <Link href="/our-products/rice/basmati/1121-white-sella/" class="read-more">Read More</Link>
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
                                                    <Link href="/our-products/rice/basmati/1121-steam/" class="read-more">Read More</Link>
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
                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={White} alt="1401 White" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">1401 White</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/basmati/1401-white/" class="read-more" >Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Whiee} alt="1409 White" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">1409 White</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/basmati/1409-white/" class="read-more">Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={BrokenR} alt="IR 64/36 Parboiled 5% Broken" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">IR 64/36 Parboiled 5% Broken</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/non-basmati/ir-64-36-parboiled-5-broken/" class="read-more" >Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={RBroken} alt="IR 64/36 Raw 25% Broken" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">IR 64/36 Raw 25% Broken</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/non-basmati/ir-64-36-raw-25-broken/" class="read-more">Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Rw} alt="IR 64/36 Raw 5% Broken" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">IR 64/36 Raw 5% Broken</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/non-basmati/ir-64-36-raw-5-broken/" class="read-more">Read More</Link>
                                                </div>
                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Pb} alt="IR8 Parboiled 5% Broken" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">IR8 Parboiled 5% Broken</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/non-basmati/ir8-parboiled-5-broken/" class="read-more" >Read More</Link>
                                                </div>
                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Rb} alt="IR8 Raw 5% Broken" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">IR8 Raw 5% Broken</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/non-basmati/ir-8-raw-5-broken/" class="read-more" >Read More</Link>
                                                </div>



                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={BRice} alt="IR8 Raw 25% Broken" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">IR8 Raw 25% Broken</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/non-basmati/ir-8-raw-25-broken/" class="read-more" >Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={SwarP} alt="Swarna Parboiled 5% Broken" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Swarna Parboiled 5% Broken</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/non-basmati/swarna-parboiled-5-broken/" class="read-more">Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={SwarnaR} alt="Swarna Raw 5% Broken" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Swarna Raw 5% Broken</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/non-basmati/swarna-raw-5-broken/" class="read-more" >Read More</Link>
                                                </div>

                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={SWM} alt="Swarna Raw 25% Broken" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Swarna Raw 25% Broken</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/non-basmati/swarna-raw-25-broken/" class="read-more" >Read More</Link>
                                                </div>
                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={RBM} alt="Raw 100% Broken" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Raw 100% Broken</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/non-basmati/raw-100-broken/" class="read-more" >Read More</Link>
                                                </div>
                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={Ir5} alt="Parboiled 100% Broken" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">Parboiled 100% Broken</h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/non-basmati/parboiled-100-broken/" class="read-more" >Read More</Link>
                                                </div>



                                                <div class="serviceBoxes">
                                                    <div class="service-content">
                                                        <div class="service-icon">
                                                            <div className="card_img">
                                                                <Image src={PR} alt="PR-14 White Sella" />
                                                            </div>
                                                        </div>
                                                        <div className="hedings">
                                                            <h4 clasName="card_head">PR-14 White Sella </h4>
                                                        </div>


                                                    </div>
                                                    <Link href="/our-products/rice/non-basmati/pr-14-white-sella/" class="read-more" >Read More</Link>
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

          
        </div>
    )
}

export default OurProducts;