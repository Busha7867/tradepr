
import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '.@/Components/Riceimages/Super.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/images/spice-70.png';
import Green from '@/Components/Riceimages/PBroken.jpg';
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';



export default function Parboiled() {
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
                                <h1 className='About_head'>IR 64/36 Parboiled 5% Broken</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/rice/" style={{ color: "#EA4436", fontSize: "20px" }}>Rice</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>IR 64/36 Parboiled 5% Broken</li>
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
                            <h2 className='Green_head About_head'>IR 64/36 Parboiled 5% Broken</h2>
                            <p style={{ marginBottom: "2rem" }}>

                                The <b>IR 64/36 Parboiled 5% Broken </b> from Trade Pros, is the peak of Indian parboiled rice quality. This
                                semi-dwarf variety is the result of rigorous breeding which combines the greatest qualities of its
                                ancestors to produce grain with both high yield and early maturity.
                                IR 64/36 Parboiled 5% was created by cross-breeding IR 8 with 13 unique strains from six countries:
                                India, Indonesia, China, Vietnam, the Philippines, and the United States. Broken quickly acquired an
                                international reputation for its exceptional performance in the agriculture industry. The confluence
                                of these efforts has driven IR 64/36 to become one of the world&#39;s most commonly farmed types in a
                                surprisingly short period.
                                <br />
                                <br />
                                Each grain of <b> IR 64/36 Parboiled 5% Broken </b>is precision-crafted and goes through a painstaking
                                process of double polishing and thorough cleaning to ensure it meets high international standards. A
                                dependable and robust crop alternative is given to farmers by this strict quality control, which also
                                reduces the inherent hazards connected with rice growing.
                                <br />
                                <br />
                                Our pulses and spices have received widespread support from agricultural extension organizations
                                and have made their way into the fields of farmers in many locales. With its unique scent and
                                freshness, <b>IR 64/36 Parboiled 5% Broken </b> promises to tantalize the taste. Its exquisite flavour, along
                                with ease of digestion and preparation, makes it a popular option among sophisticated customers
                                looking for both cleanliness and nutritional content.
                                <br />
                                <br />
                                IR 64/36 Parboiled 5% Broken embodies health and wellness benefits, offering a wholesome
                                alternative to conventional rice varieties. This premium offering from Trade Pros epitomizes the
                                epitome of quality and reliability in the Indian parboiled rice market. We are among the most
                                trusted <b>IR 64/36 Parboiled 5% Broken rice traders in India </b>, so you don’t have to worry about the
                                quality and other services.
                            </p>


                        </div>
                    </div>
                </div>
            </div>
            <Counterup />
            <Footer />
        </div>
    )
}
