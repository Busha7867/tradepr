import React from 'react';
import cor from '@/Components/images/8.png';
import Ginger from '@/Components/images/5.png';

import { IoHome } from "react-icons/io5";
import Circ from '@/Components/images/spice-70.png';
import Cinnamonimg from '@/Components/images/Cinnamon.jpg';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/Components/navbar/Navbar';
import Form from '@/Components/Form';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';


export default function Cinnamon(){
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
                                <h1 className='About_head'>Cinnamon Sticks</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/spices/" style={{ color: "#EA4436", fontSize: "20px" }}>Spices</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>



                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'> Cinnamon Sticks</li>
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
                                <Image src={Cinnamonimg} alt="circleimage" className="green_cardm" />
                            </div>

                        </div>
                        <div className="col-6 col-m-12 col-t-12">
                            <h2 className='Green_head About_head'>Cinnamon Sticks</h2>
                            <p>
                                Cinnamon sticks are quills made from the bark of cinnamon trees that are typically 4 to 5 inches long. They are highly valued for their sweet, warming, and fragrant flavour. These sticks are used in both sweet and savoury foods to provide a unique, aromatic flavour, as well as in different beverages and sweets.
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

