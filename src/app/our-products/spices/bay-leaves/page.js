'use client';
import React from 'react';
import cor from '@/Components/images/8.png';
import Ginger from '@/Components/images/5.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/images/spice-70.png';
import BayLeaveimg from '@/Components/images/BayLeave.jpg';
import Navbar from '@/Components/navbar/Navbar';
import Form from '@/Components/Form';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';

const BayLeaves = () => {
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
                        <div className="col-8 col-m-12 col-t-12">
                            <div className="slugs">
                                <h1 className='About_head'>Bay Leaves</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} >/</li>

                                    <li><Link href="/our-products/spices/" style={{ color: "#EA4436", fontSize: "20px" }}>Spices</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>


                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>Bay Leaves</li>
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
                                <Image src={BayLeaveimg} alt="circleimage" className="green_cardm" />
                            </div>

                        </div>
                        <div className="col-6 col-m-12 col-t-12">
                            <h2 className='Green_head About_head'>Bay Leaves</h2>
                            <p>
                                The bay leaf is a fragrant leaf normally utilized in cooking. Bay leaves are to be completely—sparkling or dried—or floored into a powder. It can be used completely, both dried or sparkling, wherein it is eliminated from the dish before consumption or much less normally utilized in floor shape. The leaves are brought to slow-cooked recipes, soups, sauces, and stews. It also comes from numerous species of tree, the bay laurel and the California bay tree being the most common. They have a floral and natural heady fragrance harking back to oregano and thyme and are used more frequently than other herbs.
                            </p>

                          <Form/>
                        </div>
                    </div>
                </div>
            </div>
       <Counterup/>
       <Footer/>
        </div>
    )
}

export default BayLeaves;