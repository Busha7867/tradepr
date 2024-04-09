
import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '.@/Components/Images/spice-70.png';
import Green from '@/Components/Riceimages/PRWhite.jpg';
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';



export default function PRWhiteSella () {
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
                                <h1 className='About_head'>PR-14 White Sella</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/rice/" style={{ color: "#EA4436", fontSize: "20px" }}>Rice</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>
                                        PR-14 White Sella</li>
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
                                PR-14 White Sella</h2>
                            <p style={{ marginBottom: "2rem" }}>
                                Introducing <b>PR-14 White Sella </b> rice – a premium grade rice variety renowned for its exceptional
                                quality and taste. Trade Pros has become one of the leading <b> PR-14 White Sella rice distributors in
                                India </b>. We are known for unparalleled service and top-notch spices and rice in India and across the
                                globe.
                                <br />
                                <br />
                                Our <b> PR-14 White Sella </b>rice is renowned for its long grains and aromatic fragrance. The fluffy texture
                                makes our rice a preferred choice for households as well as restaurants across the country and the
                                globe. The unique processing method involves parboiling the rice, which enhances its nutritional
                                profile and results in grains that remain separate and non-sticky after cooking. As one of the premier
                               <b> PR-14 White Sella rice distributors in India </b>, Trade Pros sourcing the finest quality rice directly from
                                trusted growers and processors. Our quality control measures preserve the purity, freshness, and
                                taste. With Trade Pros, customers can trust that they are receiving the best.
                                <br />
                                <br />
                                No matter if you want to prepare biryanis, or pulaos, or simply enjoy a bowl of steamed rice with
                                your favorite curry, our <b> PR-14 White Sella </b> rice promises a delightful taste every time. Understanding
                                the importance of timely delivery and reliable service, our efficient distribution network makes sure
                                that our customers receive their orders swiftly, no matter where they are. With Trade Pros as your
                                trusted partner, you can rest assured of easy procurement and access to premium PR-14 White Sella
                                rice at competitive prices. If you want to experience the real taste of PR-14 White Sella rice then
                                choose Trade Pros and elevate your culinary creations to new heights.
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



