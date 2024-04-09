
import React from 'react';
import cor from '@/Components/images/8.png';
import Ginger from '@/Components/images/5.png';
import Link from 'next/link';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/images/spice-70.png';
import Saffronimg from '@/Components/images/Saffron.jpg'
import Image from 'next/image';
import Navbar from '@/Components/navbar/Navbar';
import Form from '@/Components/Form';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';



export default function Saffron(){
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
                                <h1 className='About_head'>Saffron</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>

                                    <li><Link href="/our-products/spices/" style={{ color: "#EA4436", fontSize: "20px" }}>Spices</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>Saffron</li>
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
                        <div className="col-6 col-m-12 col-t-12" >
                            <Image src={Circ} alt="circleimage" className="circimage green_back" />
                            <div className="green_c">
                                <Image src={Saffronimg} alt="circleimage" className="green_cardm" />
                            </div>

                        </div>
                        <div className="col-6 col-m-12 col-t-12">
                            <h2 className='Green_head About_head'>Saffron</h2>
                            <p>
                                Saffron, golden-coloured, smelly stigmas of the autumn crocus, can be dried and used as a spice to flavour ingredients and as a dye to colour ingredients and different products. The term “saffron” applies to the flower’s thread-like system known as the stigma. Saffron has a strong, distinguished aroma and a sour flavour and is used to colour and flavour many Mediterranean and Asian dishes, particularly rice and fish, and English, Scandinavian, and Balkan bread. While saffron’s starting place continues to be debated, it probably originated in Iran. There, it became respected for its medicinal properties.
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
export function generateMetadata({ params }) {
    return {
        title: "Best Saffron Spices Suppliers in India",
        description: "Trade Pros is one of the best saffron spices suppliers in India. If you need top-grade saffron in India at a reasonable price, connect with us.",
        alternates: {
            canonical: `${"https://trade-pros.org/our-products/spices/saffron/"}`,
  
  
        },
        ogLocale: "en_US",
        ogType: "article",
        ogTitle: "Saffron",
        ogDescription: "We are a trusted amchur powder &amp; whole trader and supplier that has been serving in the market for years. So, if you are looking for the same. Connect with us!",
        ogUrl: "https://trade-pros.org/our-products/spices/saffron/",
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
  