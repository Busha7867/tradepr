
import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/Images/spice-70.png';
import Green from '@/Components/Riceimages/Rb.jpg';
import Navbar from '@/Components/navbar/Navbar';
import Form from '@/Components/Form';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';


export default function IR8Raw() {
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
                                <h1 className='About_head'>IR8 Raw 5% Broken</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/rice/" style={{ color: "#EA4436", fontSize: "20px" }}>Rice</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>
                                        IR8 Raw 5% Broken </li>
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
                                You can improve your culinary experience with Trade Pros&#39; premium <b>IR8 Parboiled 5% Broken </b> Rice.
                                Trade Pros have been in the industry of spice and pulses trading for years. We are one of the most
                                prominent <b>IR8 parboiled 5% broken rice traders in India </b>. We are renowned for the pinnacle of
                                quality in the heart of India. Trade Pros source from the finest fields of the Indian sub-continent. Our
                                rice embodies the rich heritage and superior taste that Indian cuisine enthusiasts crave.
                                <br />
                                <br />
                                Our <b>IR8 parboiled 5% broken </b> rice is crafted to perfection using innovative parboiling procedures.
                                This process preserves essential nutrients while providing a pleasing texture that lures with each
                                bite. Each serving guarantees unmatched purity and uniformity with just 5% broken grains,
                                guaranteeing a royal eating experience.
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

export function generateMetadata({ params }) {
    return {
        title: "IR8 Raw 5% Broken rice traders in India - Trade-Pros ",
        description: "Choose Trade Pros and get IR Raw 5% Broken rice that is pure in terms of quality, aroma, hygienic packing, and nutritional value.",
        alternates: {
            canonical: `${"https://trade-pros.org/our-products/rice/non-basmati/ir-8-raw-5-broken/"}`,


        },
        ogLocale: "en_US",
        ogType: "article",
        ogTitle: "ir-8-raw-5-broken  ",
        ogDescription: "The wide range of non-basmati rice that we offer, are nutrient-rich, packed hygienically, and processed nicely. Connect to Trade Pros to get your batch now.",
        ogUrl: "https://trade-pros.org/our-products/rice/non-basmati/ir-8-raw-5-broken/",
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
