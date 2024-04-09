
import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/Images/spice-70.png';
import Green from '@/Components/Riceimages/IR5Broken.webp';
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';


export default function Paraboil (){
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
                                <h1 className='About_head'>
                                    Parboiled 100% Broken</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="/our-products/rice/" style={{ color: "#EA4436", fontSize: "20px" }}>Rice</Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>
                                        Parboiled 100% Broken</li>
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

                                Parboiled
                                100% Broken Rice in India</h2>
                            <p style={{ marginBottom: "2rem" }}>
                                Trade Pros in India is your trusted partner for the finest <b> Parboiled 100% Broken rice </b>. We have been
                                in the spice industry for years. We have been the leading traders of spices and pulses in India for
                                years. Our <b> Parboiled 100% Broken rice </b> is a cuisine gem that adds a touch of sophistication to your
                                meals. The quality we offer at Trade Pros is exceptional because we source our rice from the best
                                paddy fields in the Indian subcontinent. Our rice goes through a careful parboiling procedure to
                                improve its texture, flavour, and nutrients. We believe in providing nothing but the finest for our
                                consumers, and our Parboiled 100% Broken rice demonstrates the quality we offer.
                                <br />
                                <br />
                                As among the top <b> Parboiled 100% Broken rice traders in India </b>, we have the versatility that your
                                kitchen wants. You can prepare biryanis, pulavs, or a simple bowl of fluffy rice, and have a delightful
                                dining experience with our handfully curated rice. The parboiling process ensures that the rice grains
                                retain their shape and remain separate when cooked which provides a perfect foundation for a
                                variety of dishes.

                            </p>
                            <h3 className='green_subhead Green_head About_head'>Trade Pros Assurance of Nutrient-Rich Goodness</h3>
                            <p>
                                The exceptional taste and texture of our Parboiled 100% Broken rice is not the only thing that sets it
                                apart. We prioritize their nutritional value as well. Our rice is packed with essential nutrients and
                                dietary fiber. This rice variant is a healthy choice for those looking to maintain a balanced diet. You
                                can enjoy a wholesome meal without compromising on taste or nutrition when you choose to buy
                                from us. We prioritize quality and customer satisfaction. Our Parboiled 100% Broken rice undergoes
                                rigorous quality checks to ensure that it meets the highest standards.
                                Whether you&#39;re a professional chef or a home cook, our rice is the secret ingredient that will
                                transform ordinary meals into extraordinary culinary creations. So, if you want to buy then buy with
                                us. Being one of the best Parboiled 100% Broken rice exporters in India, we will offer you the best
                                price in the industry.
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


