
import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';

import { IoHome } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';



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
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';



export default function NonBasmati() {
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
                        <div className="col-8">
                            <div className="slugs">
                                <h1 className='About_head'>Non Basmati</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>


                                    <li><Link href="" style={{ color: "#EA4436", fontSize: "20px" }}>Non Basmati</Link></li>
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
                        <div className="col-4"></div>
                        <div className="col-4 col-p-12">
                            <h2 className="About_head" style={{ textAlign: "center" }}>Non Basmati Rice</h2></div>
                        <div className="col-4"></div>
                    </div>
                    <div className="row">

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
                                <Link href="/our-products/rice/non-basmati/ir-64-36-parboiled-5-broken/" class="read-more" >Read More</Link>
                            </div>

                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={RBroken} alt="IR 64/36 Raw 25% Broke" />
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
                                <Link href="/our-products/rice/non-basmati/ir-64-36-raw-5-broken/" class="read-more" >Read More</Link>
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
                                <Link href="/our-products/rice/non-basmati/ir8-parboiled-5-broken/" class="read-more">Read More</Link>
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
                                            <Image src={PR} alt="PR-14 White Sella " />
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
         <Counterup/>
         <Footer/>
        </div>
    )
}
