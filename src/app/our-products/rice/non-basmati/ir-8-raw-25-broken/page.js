import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/Images/spice-70.png';
import Green from '@/Components/Riceimages/RawBroken.jpg';
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';


export default function IR8Raw25() {
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
                                <h1 className='About_head'>IR8 Raw 25% Broken</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/rice/" style={{ color: "#EA4436", fontSize: "20px" }}>Rice</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>
                                        IR8 Raw 25% Broken</li>
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
                                IR8 Raw 25% Broken</h2>
                            <p style={{ marginBottom: "2rem" }}>
                                Trade Pros stands out as the leading supplier of <b>IR8 raw 25% broken </b>rice in India. But what makes
                                them the best choice for your business? Let&#39;s delve deeper and discover why Trade Pros should be
                                your trusted partner for delicious <b>IR8 raw 25% broken rice </b>.
                                <br />
                                <br />
                                We source our produce from the finest paddy fields across India. That’s the reason behind our
                                consistent quality and purity. Our selection process guarantees each grain meets stringent standards
                                for size, colour, and texture. The rice cooks evenly and delivers a consistent taste.

                            </p>
                            <h3 className='green_subhead Green_head About_head'>Services Around the Globe</h3>
                            <p>
                                Since Trade Pros is one of the leading IR8 Raw 25% Broken rice traders in India, so we understand
                                the international demand. Our huge network of partners and logistics expertise enables us to deliver
                                your order efficiently, no matter your location. It doesn’t matter, whether you are a local restaurant,
                                a large-scale food manufacturer, or an international exporter, Trade Pros is here to fulfill all your
                                needs.  We prioritize ethical sourcing techniques, which is why we work with farmers who value sustainable
                                agriculture. All of our partners guarantee that the rice is farmed using eco-friendly techniques with
                                minimal environmental effects. We are accessible around-the-clock to handle your questions and
                                issues so that everything goes well.
                            
                              
                                <br />
                                <br />
                                While IR8 Raw 25% Broken Rice is our specialty, we offer a diverse range of other rice varieties too.
                                We are your trusted partner for spices as well. Our quality, sustainability, and customer service are a
                                winning combination that guarantees your business success. Remember, for premium IR8 Raw 25%
                                Broken rice and exceptional
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
        title: "IR8 Raw 25% Broken Rice Traders in India | Trade-Pros ",
        description: "Buy top IR8 Raw 25% Broken Rice in India from Trade Pros the best supplier of IR8 Raw 25% Broken Rice. We offer the best-in-class rice and spices in India",
        alternates: {
            canonical: `${"https://trade-pros.org/our-products/rice/non-basmati/ir-8-raw-25-broken/"}`,


        },
        ogLocale: "en_US",
        ogType: "article",
        ogTitle: "sharbati-white-sella  ",
        ogDescription: "Buy top IR8 Raw 25% Broken Rice in India from Trade Pros the best supplier of IR8 Raw 25% Broken Rice. We offer the best-in-class rice and spices in India",
        ogUrl: "https://trade-pros.org/our-products/rice/non-basmati/ir-8-raw-25-broken/",
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
