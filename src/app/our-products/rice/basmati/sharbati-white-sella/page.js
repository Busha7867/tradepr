

import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/images/spice-70.png';
import Green from '@/Components/Riceimages/Sharbatisella.jpg';
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';


export default function Sharbati() {
    return (
        <div>
            <Navbar />

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
                                <h1 className='About_head'>Sharbati White Sella</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/rice/" style={{ color: "#EA4436", fontSize: "20px" }}>Rice</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'> Sharbati White Sella</li>
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
                            <h2 className='Green_head About_head'>Sharbati White Sella</h2>
                            <p style={{ marginBottom: "2rem" }}>
                                Trade Pros is among the leading names when discussions are going on about <b>Sharbati White Sella
                                    rice exporters in India </b>. We offer the premium <b>Sharbati White Sella</b> which is known for its distinct
                                flavour and texture. Since this rice variety originated in the Indian subcontinent, we source it from
                                the rich plains of Punjab and Haryana. This long-grain rice undergoes a parboiling process, where the
                                rice is partially boiled in the husk before milling. This process helps retain the nutrients in the grain.
                                And that’s how we are able to retain its nutritious value. <b>Sharbati White Sella </b>rice is characterized
                                by its fluffy texture and delicate aroma. This makes it a popular choice for various dishes across the
                                Indian subcontinent and beyond.
                                <br />
                                <br />

                                Our <b>Sharbati White Sella </b>rice guarantees a delicious flavor every time, whether you&#39;re cooking
                                biryanis, pulaos, or just enjoying a bowl of steamed rice with your favorite dish. We have strict
                                quality control measures to preserve the purity, freshness, and taste. With Trade Pros, customers
                                can trust that they are receiving the best. Our effective distribution network guarantees that our
                                clients receive their purchases promptly, wherever they may be because we recognize the value of
                                prompt delivery and dependable service. With Trade Pros as your trusted partner, you can count on
                                smooth procurement and access to superior <b>Sharbati White Sella </b> rice at low pricing. If you want to
                                enjoy the true flavor of Sella rice, pick Trade Pros today.
                            </p>
                            <br />


                        </div>
                    </div>
                </div>
            </div>
            <Counterup />
            <Footer />
        </div>
    )
}

