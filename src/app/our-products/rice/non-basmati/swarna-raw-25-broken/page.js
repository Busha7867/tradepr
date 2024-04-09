
import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/Images/spice-70.png';
import Green from '@/Components/Riceimages/SwarnaBrok.jpg';
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';


export default function SwarnaRaw25() {
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
                                <h1 className='About_head'>Swarna Raw 25% Broken</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/rice/" style={{ color: "#EA4436", fontSize: "20px" }}>Rice</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>
                                        Swarna Raw 25% Broken</li>
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
                        <div className="col-6 col-m-1 col-t-12">
                            <h2 className='Green_head About_head'>
                                Swarna Raw 25% Broken</h2>
                            <p style={{ marginBottom: "2rem" }}>
                                Swarna Raw 25% Broken refers to a specific variety of rice known for its characteristics. &quot;Swarna&quot; is
                                the type or variety of rice, while &quot;Raw&quot; indicates that the rice has not undergone any parboiling
                                process. &quot;25% Broken&quot; signifies that 25% of the grains are broken during the milling process, which is
                                a common grading standard in the rice industry. Trade Pros is listed among the leading Swarna Raw
                                25% Broken rice suppliers in India, offering unparalleled quality.
                                <br />
                                <br />

                                This type of rice is often used in dishes where a softer texture or quicker cooking time is desired,
                                such as rice pudding or congee. It still retains much of the nutritional value and flavor of whole-grain
                                rice despite the broken grains. Since we source the finest grains, we make sure that every batch of
                                Swarna Raw 25% Broken rice meets the standards of purity and freshness. We know the significance
                                of consistency and perfection in every grain, which is why we choose and prepare our rice to provide
                                a product that exceeds expectations.
                                <br />
                                <br />
                                With Trade Pros, customers can trust in the superior quality and taste of our Swarna Raw 25%
                                Broken rice. Whether it&#39;s for home-cooked meals or large-scale events, our rice doesn’t lose its
                                flavour, texture, and nutritional value. We prioritize customer satisfaction and extend beyond just
                                providing a product. Furthermore, Trade Pros offers competitive pricing and reliable service, making
                                us the preferred choice for discerning customers across India. When it comes to Swarna Raw 25%
                                Broken Rice, you can trust us for unparalleled quality, reliability, and value.

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


