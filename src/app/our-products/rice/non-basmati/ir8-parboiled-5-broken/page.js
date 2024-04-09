
import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/Images/spice-70.png';
import Green from '@/Components/Riceimages/Pb.jpg';
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';





export default function IR8paraboil () {
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
                                <h1 className='About_head'>IR8 Parboiled 5% Broken</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/rice/" style={{ color: "#EA4436", fontSize: "20px" }}>Rice</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>


                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>
                                        IR8 Parboiled 5% Broken</li>
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
                                IR8 Parboiled 5% Broken</h2>
                            <p style={{ marginBottom: "2rem" }}>
                                IR 8 Raw 5% Broken is primarily cultivated in the Gujarat Region of India. This has been fed on a vast scale in South African places. IR 8 is lengthy grain rice, generally cultivated in Gujarat place. IR 8 Raw 5% Broken is silky and wiped clean parboiled Rice.

                            </p>
                            <h3 className='green_subhead Green_head About_head'>Why Choose Trade Pros?</h3>
                            <p>
                                Our greatness goes beyond the product itself. Transparency, traceability, and sustainability are our
                                top priorities across the supply chain. We make sure that each grain of rice fulfills the highest quality
                                and ethical sourcing requirements. Whether you&#39;re a culinary enthusiast, a restaurateur looking to
                                wow discriminating customers, or a home cook looking to improve your recipes.
                                <br />
                                <br />
                                 Trade Pros&#39; <b> IR8
                                parboiled 5% broken </b>rice is the ideal ingredient for success. Expect nothing less than excellence in
                                every dish, from fragrant biryanis to hearty rice bowls and everything in between. Trade Pros is a
                                trusted source of premium rice and spices. You can experience the difference that quality makes in
                                your kitchen and indulge in the unmatched flavour, texture, and nutritional value of our <b>IR8
                                parboiled 5% broken rice </b>.
                            </p>
                            <br />
                            <br />

                        </div>
                    </div>
                </div>
            </div>
            <Counterup/>
            <Footer/>
        </div>
    )
}
export function generateMetadata({ params }) {
    return {
        title: "IR8 Parboiled 5% Broken Rice Traders in India ",
        description: "Connect to Trade Pros and access pure yield of silky long-grained IR8 Parboiled 5% Broken rice, the farm fresh batch of which is sold by Trade Pros.",
        alternates: {
            canonical: `${"https://trade-pros.org/our-products/rice/non-basmati/ir8-parboiled-5-broken/"}`,


        },
        ogLocale: "en_US",
        ogType: "article",
        ogTitle: "sharbati-white-sella  ",
        ogDescription: "Connect to Trade Pros and access pure yield of silky long-grained IR8 Parboiled 5% Broken rice, the farm fresh batch of which is sold by Trade Pros.",
        ogUrl: "https://trade-pros.org/our-products/rice/non-basmati/ir8-parboiled-5-broken/",
        ogSiteName: "Trade-Pros",
        articlePublisher: "https://www.facebook.com/tradepross",
        articleModifiedTime: "2023-09-05T06:27:42+00:00",
        ogImage: "https://trade-pros.org/wp-content/uploads/2022/11/logo.png",
        twitterCard: "summary_large_image",
        twitterSite: "@trade_pross",
        twitterLabel1: "Est. reading time",
        twitterData1: "28 minute"
    }
}

