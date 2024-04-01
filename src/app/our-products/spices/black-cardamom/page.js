'use client';

import React from 'react';
import cor from '@/Components/images/8.png';
import Ginger from '@/Components/images/5.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/images/spice-70.png';
import BlackCardamonimg from '@/Components/images/Blackcr.jpg';
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';
import Spiceform from '@/Components/Spiceform';






const BlackCardamon = () => {
    return (
        <div>
            <Navbar />
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
                        <div className="col-8 col-m-12 col-t-12">
                            <div className="slugs">
                                <h1 className='About_head'>Black Cardamom</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>

                                    <li><Link href="/our-products/spices/" style={{ color: "#EA4436", fontSize: "20px" }}>Spices</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>Black Cardamom</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <Image src={Ginger} alt="Gingerimage" className='ginger_img' />

                        </div>
                    </div>
                </div>
            </div>
            <div className="green1">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-m-12 col-t-12">
                            <Image src={Circ} alt="circleimage" className="circimage green_back" />
                            <div className="green_c">
                                <Image src={BlackCardamonimg} alt="circleimage" className="green_cardm" />
                            </div>

                        </div>
                        <div className="col-6 col-m-12 col-t-12">
                            <h2 className='Green_head About_head'>Black Cardamom Spices</h2>
                            <p>
                                Trade Pros is one of the distinguished spice traders and black cardamom spices suppliers in India.
                                We present the finest quality black cardamom spices which are also known as Badi elaichi or Kali
                                elaichi in local parlance. The indispensable role in creating signature dishes across Indian cuisine,
                                Black Cardamom spices trace their origins to the Eastern Himalayas region, where wild species of
                                this aromatic spice still flourish. Black Cardamoms are packed within dark brown to black seed pods
                                and have a unique Smokey taste due to the thorough drying process. This taste is different and adds
                                depth &amp; to dishes which takes them to new levels of sensory satisfaction. It is a staple ingredient in
                                numerous traditional dishes, and it imparts a rich and earthy aroma that is unmistakable. Whether
                                used in savoury curries, fragrant biryanis, or rich desserts, it adds a strong and fascinating flavour to
                                each meal.
                                <br />
                                <br />
                                Since we are at the top of the chart of Black Cardamom spices suppliers in India we prioritize quality.
                                The Black Cardamom we offer is a gastronomic tradition of India. From the bustling kitchens of home
                                cooks to the esteemed tables of renowned chefs, our versatile spice continues to leave an indelible
                                mark. As mentioned earlier, we prioritize quality at Trade Pros and ensure that each batch of Black
                                Cardamom spices meets stringent standards. We source from the finest producers and meticulously
                                process it to preserve its natural aroma and flavour.
                                <br />
                                <br />
                                Our Black Cardamom spices are proof of the rich tapestry of flavours that define Indian cuisine. With
                                Trade Pros as your trusted black cardamom exporters in India, you will get unparalleled quality
                                Indian spices as well as international spices. If you want the best black cardamom spices at
                                reasonable prices in India, then Trade Pros is your destination.

                            </p>
                            <br />
                            <br />


                        </div>
                    </div>
                </div>
            </div>
            <Spiceform/>
            <Counterup/>
            <Footer/>
        </div>
    )
}

export default BlackCardamon;