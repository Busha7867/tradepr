import React from 'react';
import cor from '@/Components/images/8.png';
import Ginger from '@/Components/images/5.png';
import Link from 'next/link';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/images/spice-70.png';
import FennelSeedimg from '@/Components/images/Fennel.jpg';

import Image from 'next/image';
import Navbar from '@/Components/navbar/Navbar';
import Form from '@/Components/Form';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';



export default function FennelSeeds (){
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
                                <h1 className='About_head'>Fennel Seeds</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>

                                    <li><Link href="/our-products/spices/" style={{ color: "#EA4436", fontSize: "20px" }}>Spices</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>Fennel Seeds</li>
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
                                <Image src={FennelSeedimg} alt="circleimage" className="green_cardm" />
                            </div>

                        </div>
                        <div className="col-6 col-m-12 col-t-12">
                            <h2 className='Green_head About_head'>Fennel Seeds</h2>
                            <p>
                                Fennel Seeds are also referred to as Foeniculum vulgare. They frequently devour fennel seeds after each meal for quicker digestion and refreshment. However, these tiny seeds aren’t only for refreshment functions but also important for medicinal and culinary practices. Fennel flora is inexperienced and white, with feathery leaves and yellow flowers. They are regarded as providing a huge variety of dietary residences that enhance fitness. Yet, the taste of the seeds is stronger because of their effective vital oils.
                            </p>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
            <Counterup />
            <Footer />
        </div>
    )
}

