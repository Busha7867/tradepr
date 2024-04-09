

import React from 'react';
import cor from '@/Components/images/8.png';
import Ginger from '@/Components/images/5.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/images/spice-70.png';
import RedChilliimg from '@/Components/images/dry-chilly.jpg';
import Navbar from '@/Components/navbar/Navbar';
import Form from '@/Components/Form';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';

export default function RedChilli () {
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
                        <div className="col-8 cokl-m-12 col-t-12">
                            <div className="slugs">
                                <h1 className='About_head'>Dry Red Chilli</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>

                                    <li><Link href="/our-products/spices/" style={{ color: "#EA4436", fontSize: "20px" }}>Spices</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>Dry Red Chilli</li>
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
                                <Image src={RedChilliimg} alt="circleimage" className="green_cardm" />
                            </div>

                        </div>
                        <div className="col-6 col-m-12 col-t-12">
                            <h2 className='Green_head About_head'>Dry Red Chilli</h2>
                            <p>
                                Dry chilli is a condiment that provides spice and colour to meals. It has antibiotic properties and additionally acts as an ache killer. It presents comfort from lung disease. Chillies are very in vitamins A & C
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
        title: "Dry Red Chilli Exporters From India - Trade-Pros ",
        description: "Get the world-famous & high-quality Indian red chilli from Trade Pros at the most reasonable rates. Contact Trade Pros for world-class spices & rice.",
        alternates: {
            canonical: `${"https://trade-pros.org/our-products/spices/dry-red-chilli/"}`,
  
  
        },
        ogLocale: "en_US",
        ogType: "article",
        ogTitle: "Dry-Red-Chilli",
        ogDescription: "We are a trusted amchur powder &amp; whole trader and supplier that has been serving in the market for years. So, if you are looking for the same. Connect with us!",
        ogUrl: "https://trade-pros.org/our-products/spices/dry-red-chilli/",
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