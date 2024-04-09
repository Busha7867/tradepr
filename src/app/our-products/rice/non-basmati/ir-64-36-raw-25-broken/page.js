
import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/Images/spice-70.png';
import Green from '@/Components/Riceimages/RawBroken.jpg';
import Navbar from '@/Components/navbar/Navbar';
import Form from '@/Components/Form';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';



export default function Rb() {
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
                                <h1 className='About_head'>IR 64/36 Raw 25% Broken</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/rice/" style={{ color: "#EA4436", fontSize: "20px" }}>Rice</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>
                                        IR 64/36 Raw 25% Broken</li>
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
                                IR 64/36 Raw 25% Broken</h2>
                            <p style={{ marginBottom: "2rem" }}>
                            IR 64/36 Raw 25% Broken is white rice broadly famed Indian rice range. Rice is understood for its lengthy grain and authentic Cooking in the non-basmati category. Non-basmati rice is globally acclaimed for its authentic flavour and excessive dietary value.
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
        title: "IR 64/36 Raw 25% Broken rice traders in India - Trade-Pros",
        description: "The IR 64/36 Raw 25% Broken rice is one of the finest to cook in the non-basmati rice category. Get a fresh pack at Trade Pros and taste superior quality today.",
        alternates: {
            canonical: `${"https://trade-pros.org/our-products/rice/non-basmati/ir-64-36-raw-25-broken/"}`,


        },
        ogLocale: "en_US",
        ogType: "article",
        ogTitle: "1121-golden-sella",
        ogDescription: "The IR 64/36 Raw 25% Broken rice is one of the finest to cook in the non-basmati rice category. Get a fresh pack at Trade Pros and taste superior quality today.",
        ogUrl: "https://trade-pros.org/our-products/rice/non-basmati/ir-64-36-raw-25-broken/",
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
