'use client';
import React from 'react';
import cor from '@/Components/images/8.png';
import Ginger from '@/Components/images/5.png';
import Link from 'next/link';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/images/spice-70.png';
import BlackPepperimg from '@/Components/images/BlackPepper.jpg';
import Image from 'next/image';
import Navbar from '@/Components/navbar/Navbar';
import Form from '@/Components/Form';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';



const BlackPepper = () => {
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
                                <h1 className='About_head'>Black Pepper</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>

                                    <li><Link href="/our-products/spices/" style={{ color: "#EA4436", fontSize: "20px" }}>Spices</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>
                                    <li
                                        style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>Black Pepper</li>
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
                                <Image src={BlackPepperimg} alt="circleimage" className="green_cardm" />
                            </div>

                        </div>
                        <div className="col-6 col-m-12 col-t-12">
                            <h2 className='Green_head About_head'>Black Pepper</h2>
                            <p>
                                Black pepper has a pointy and mildly highly spiced taste that goes properly with many dishes. It is local to the Malabar Coast of India and is one of the earliest spices regarded. It’s made by grinding peppercorns, which can be dried berries from the vine Piper nigrum. Widely used as a spice across the international, pepper has a confined usage in medication as a carminative and a stimulant of gastric secretions.
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

export default BlackPepper;