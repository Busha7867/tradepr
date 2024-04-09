
'use client';

import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';
import Link from 'next/link';
import { IoHome } from "react-icons/io5";






import WhiteR from "@/Components/Riceimages/WhiteSella.jpg";
import SteamR from "@/Components/Riceimages/Steammin.jpg";
import Golden from '@/Components/Riceimages/GoldenSella.jpg'
import Shrabati from '@/Components/Riceimages/Sharbatisella.jpg'
import ShrabatiG from '@/Components/Riceimages/Sharbatigolden.jpg'
import SugandhaW from '@/Components/Riceimages/SugandhaWhite.jpg'
import White from '@/Components/Riceimages/White.jpg'
import Whiee from '@/Components/Riceimages/Whitee.jpg';

import BrokenR from '@/Components/Riceimages/PBroken.jpg';
import RBroken from '@/Components/Riceimages/RawBroken.jpg';
import Rw from '@/Components/Riceimages/Raww.jpg';
import Pb from '@/Components/Riceimages/Pb.jpg';
import Rb from '@/Components/Riceimages/Rb.jpg';
import BRice from '@/Components/Riceimages/Br.jpg';
import SwarnaR from '@/Components/Riceimages/SwarnaRaw.jpg';
import SwarP from '@/Components/Riceimages/Swarnap.jpg';
import SWM from '@/Components/Riceimages/SwarnaBrok.jpg';
import RBM from '@/Components/Riceimages/RawBroken100.jpg';
import PR from '@/Components/Riceimages/PRWhite.jpg';
import Ir5 from '@/Components/Riceimages/IR5Broken.jpg';

import Image from 'next/image';

import { useState } from "react";

import ric from '@/Components/images/rice.png';
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';

export default function Rice () {


    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <div>
          <Navbar/>
            <div className="rice-1 ricebanner">
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
                        <div className="col-8 col-m-12 col-t-12 col-l-12 col-p-12">
                            <div className="slugs">
                                <h1 className='About_head'>Rice</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>


                                    <li><Link href="" style={{ color: "#EA4436", fontSize: "20px" }}>Rice</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <Image src={Ginger} alt="Gingerimage" className='ginger_img' />

                        </div>
                    </div>
                </div>
            </div>
            <div className="basmati1">
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
                                        <Image src={ric} alt="basmati" /><span>  Basmati </span>
                                    </div>
                                </button>
                                <button
                                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                    onClick={() => toggleTab(2)}
                                >
                                    <div className="clients_img">
                                        <Image src={ric} alt="non-basmati" /> <span> Non Basmati</span>
                                    </div>
                                </button>

                            </div>
                        </div>
                        <div className="col-3"></div>
                    </div>



                    <div className="row">
                        <div className="col-12 col-m-12 col-t-12">

                            <div className="content-tabs">


                                <div
                                    className={toggleState === 1 ? "content  active-content" : "content"}
                                >
                                    <div className="content_box">


                                        <div class="serviceBoxes">
                                            <div class="service-content">
                                                <div class="service-icon">
                                                    <div className="card_img">
                                                        <Image src={WhiteR} alt="Whiterice" />
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
                                                        <Image src={SteamR} alt="Steamrice" />
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
                                            <Link href="/our-products/rice/basmati/sharbati-golden-sella/" class="read-more">Read More</Link>
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
                                            <Link href="/our-products/rice/basmati/sugandha-white-sella/" class="read-more">Read More</Link>
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
                                            <Link href="/our-products/rice/basmati/1409-white/" class="read-more" >Read More</Link>
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
                                                        <Image src={BrokenR} alt="IR 64/36 Parboiled 5% Broken" />
                                                    </div>
                                                </div>
                                                <div className="hedings">
                                                    <h4 clasName="card_head">IR 64/36 Parboiled 5% Broken</h4>
                                                </div>


                                            </div>
                                            <Link href="/our-products/rice/non-basmati/ir-64-36-parboiled-5-broken/" class="read-more">Read More</Link>
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
                                            <Link href="/our-products/rice/non-basmati/ir-64-36-raw-25-broken/" class="read-more" >Read More</Link>
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
                                            <Link href="/our-products/rice/non-basmati/swarna-parboiled-5-broken/" class="read-more" >Read More</Link>
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
                                            <Link href="/our-products/rice/non-basmati/pr-14-white-sella/" class="read-more">Read More</Link>
                                        </div>









                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
      <Counterup/>
      <Footer/>

        </div>
    )
}

