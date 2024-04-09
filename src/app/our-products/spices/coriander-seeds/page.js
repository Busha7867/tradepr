import React from 'react';
import cor from '@/Components/images/8.png';
import Ginger from '@/Components/images/5.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/images/spice-70.png';
import Kalounjiimg from '@/Components/images/Coriander.jpg';
import Navbar from '@/Components/navbar/Navbar';
import Form from '@/Components/Form';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';


export default function Corindarseeds () {
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
                                <h1 className='About_head'>Coriander Seeds</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>


                                    <li><Link href="/our-products/spices/" style={{ color: "#EA4436", fontSize: "20px" }}>Spices</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>


                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>Coriander Seeds</li>
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
                                <Image src={Kalounjiimg} alt="circleimage" className="green_cardm" />
                            </div>

                        </div>
                        <div className="col-6 col-m-12 col-t-12">
                            <h2 className='Green_head About_head'>Coriander Seeds</h2>
                            <p>
                                Coriander seed is regarded for its huge variety of recuperation residences. Coriander seeds are plump and brown and have a whole hollow space that bears vital oils that lend to the dishes’ flavour while cooking. The seeds can also use in opposition to intestinal parasites. All components of this plant are edible; however, the sparkling leaves and the dried seeds (as a spice) are the most historically utilized in cooking. Other research has established its efficacy as larvicidal, bactericidal, and fungicidal. The seeds have a lemony citrus flavour while crushed because of terpenes linalool and pinene.
                            </p>
                            <Form />
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
        title: "Coriander Seeds spices Manufacturer in India",
        description: "Trade Pros is your gateway to top-quality coriander seeds and premium spices. We are the best coriander seeds manufacturer in India. Contact us for more information.",
        alternates: {
            canonical: `${"https://trade-pros.org/our-products/spices/coriander-seeds/"}`,
  
  
        },
        ogLocale: "en_US",
        ogType: "article",
        ogTitle: "Amchur (Powder &amp; Whole)",
        ogDescription: "We are a trusted amchur powder &amp; whole trader and supplier that has been serving in the market for years. So, if you are looking for the same. Connect with us!",
        ogUrl: "https://trade-pros.org/our-products/spices/coriander-seeds/",
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
  