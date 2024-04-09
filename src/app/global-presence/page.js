import React from 'react';
import Image from 'next/image';
import cor from '@/Components/images/8.png';
import Ginger from '@/Components/Riceimages/Super.png';
import Link from 'next/link';
import { IoHome } from "react-icons/io5";
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';

export default function Global() {
    return (
        <div>
            <Navbar />
            <div className="globalpresence">
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
                        <div className="col-8 col-m-12 col-p-12">
                            <div className="slugs">
                                <h1 className='About_head'>Global Presence</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>


                                    <li><Link href="" style={{ color: "#EA4436", fontSize: "20px" }}>Global Presence</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <Image src={Ginger} alt="Gingerimage" className='ginger_img' />

                        </div>
                    </div>
                </div>
            </div>
            <div className="about-3">
                <div className="container">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4 col-m-12 col-p-12">
                            <h2 className='ab_heading '>Global Presence</h2></div>



                        <div className="col-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10 col-m-12">
                            <p className='glob_para'>Trade Pros is one of the top-ranking businesses in the import-export industry. Our attention is constantly focused on quality control, cutting-edge equipment, excellent processing, first-rate infrastructure, a skilled workforce, personalized packaging, and the warehousing division. Our rapidly expanding business is adept at meeting the expanding client demand globally.</p>
                        </div>
                        <div className="col-1"></div>
                    </div>

                </div>
            </div>
            <div className="worldmap">
                <div className="container">

                    <div className="row">
                        <div className="col-12">
                            <div className="world_map">

                                <div className="pin usa">

                                    <a href='/contact-us/'><span>Poland</span></a>
                                </div>
                                <div className="pin france">

                                    <a href='/contact-us/'><span className="Spains">West Africa</span></a>
                                </div>
                                <div className="pin uae">

                                    <a href='/contact-us/'><span>UAE</span></a>
                                </div>
                                <div className="pin uk">

                                    <a href='/contact-us/'><span>India</span></a>
                                </div>


                            </div>
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
        title: "international commodity market - Trade-Pros ",
        description: "We are the best commodity trading company in the international commodity market. Source with the finest traders with exceptional quality and expertise.",
        alternates: {
            canonical: `${"https://trade-pros.org/global-presence/"}`,
        

        },
        ogLocale: "en_US",
        ogType: "article",
        ogTitle: "Global Presence",
        ogDescription: "We are the best commodity trading company in the international commodity market. Source with the finest traders with exceptional quality and expertise.",
        ogUrl: "https://trade-pros.org/global-presence/",
        ogSiteName: "Trade-Pros",
        articlePublisher: "https://www.facebook.com/tradepross",
        articleModifiedTime: "2023-09-05T06:27:42+00:00",
        ogImage: "https://trade-pros.org/wp-content/uploads/2023/09/global-presence.jpg",
        twitterCard: "summary_large_image",
        twitterSite: "@trade_pross",
        twitterLabel1: "Est. reading time",
        twitterData1: "1 minute"
    }
}
