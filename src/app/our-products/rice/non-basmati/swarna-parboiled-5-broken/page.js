

import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/Images/spice-70.png';
import Green from '@/Components/Swarnap.jpg';
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';



export default function Swarna() {
    return (
        <div>
         <Navbar/>
            <div className="rice-1">
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
                                <h1 className='About_head'>Swarna Parboiled 5% Broken</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/rice/" style={{ color: "#EA4436", fontSize: "20px" }}>Rice</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>
                                        Swarna Parboiled 5% Broken</li>
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
                                <Image src={Green} alt="circleimage" className="green_cardm" />
                            </div>

                        </div>
                        <div className="col-6 col-m-12 col-t-12">
                            <h2 className='Green_head About_head'>
                                Swarna Parboiled 5% Broken</h2>
                            <p style={{ marginBottom: "2rem" }}>
                                <b>Swarna Parboiled 5% Broken </b>rice is a variety of rice that undergoes a parboiling process before
                                milling. It originated in India and is mostly farmed in the states of West Bengal, Uttar Pradesh, and
                                Punjab. The &quot;5% Broken&quot; designation refers to the percentage of broken grains in the rice that
                                indicates its quality. When it comes to Swarna Parboiled 5% Broken rice variety, Trade Pros reigns
                                supreme as among the best <b> Swarna Parboiled 5% Broken rice traders in India </b>.
                                <br />
                                <br />
                                Each grain is selected for its distinct scent, pearly-white sheen, and fluffy texture after being grown
                                in the rich plains of India. We take great care in selecting only the finest <b>Swarna Parboiled 5%
                                Broken </b> rice for our customers. If you want to enjoy the delicate and nutty taste that enriches your
                                meal, Trade Pros is your destination. The unrivaled quality is the result of years of experience and
                                unrelenting devotion to betterment.
                                <br />
                                <br />
                                Parboiling involves partially boiling the rice grains while they are still in the husk. This process helps
                                retain the nutrients present in the outer layers of the grain, resulting in a more nutritious end
                                product compared to white rice. Additionally, parboiling makes the rice less prone to breakage
                                during milling and cooking. The golden colour and firm texture of our <b>Swarna Parboiled 5% Broken </b>
                                rice, make it more premium and richer looking. It is a popular choice across India and other parts of
                                the world. The versatility and nutritional benefits it offers are incomparable. Trust Trade Pros to
                                provide you with the best <b> Swarna Parboiled 5% Broken </b> rice available on the market.

                            </p>

                 
                        </div>
                    </div>
                </div>
            </div>
          <Counterup/>
          <Footer/>
        </div>
    )
}

