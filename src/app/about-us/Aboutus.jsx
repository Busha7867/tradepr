


import React from 'react';
import Navbar from '@/Components/navbar/Navbar';



import Image from 'next/image';
import Cor from '../../Components/images/8.png';
import { IoHome } from 'react-icons/io5';
import Link from 'next/link';
import Ginger from '../../Components/images/5.png';
import Vis from '../../Components/images/Vision.png';
import Mis from '../../Components/images/me.png';
import On from '../../Components/images/4.jpg';
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { RiCustomerService2Line } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { TfiWrite } from "react-icons/tfi";
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';







export default function About() {
    return (



        <>




            <Navbar />
            <div className="about-1">
                <div className="container">
                    <div className="row">

                    </div>
                </div>
            </div>
            <div className="about-2">
                <div className="container">
                    <div className="row About_absou ">
                        <div className="col-2">
                            <Image src={Cor} alt="coriandarimage" className='cor_img' />

                        </div>
                        <div className="col-7 col-m-12 col-t-12 col-p-12">
                            <div className="slugs">
                                <h1 className='About_head'>About US</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>

                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='aboutli'> About us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <Image src={Ginger} alt="Gingerimage" className='ginger_img' style={{ width: "20%" }} />

                        </div>
                    </div>
                </div>
            </div>
            <div className="about-3">
                <div className="container">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4 col-m-12 col-t-12 col-p-12">
                            <h2 className='ab_heading'>Our History</h2>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 col-m-12 col-t-12 col-p-12 col-l-12">
                            <p className='para_hed'>With our extensive experience in trading, especially agricultural commodities and spices, and our reputation as one of India’s top commodity trading companies, Trade Pros find the ideal customers for your goods. We are globally connected to the international commodity markets. You can directly procure & export Indian spices, rice (multiple varieties), and other products to any continent through us. Trade-Pros always think the customer is king, and we have an extremely reliable and open working process. We have a team of experts & professionals who analyze the market daily, so we always serve you with updated information. Our team of experts is all ears to listen to your needs and assist with prompt solutions.

                            </p>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
            <div className="about-4" style={{ padding: "40px 0 75px 0" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6 col-m-12 col-t-12 col-p-12">
                            <h2 className='ab_heading'>COMMITMENT TO QUALITY</h2>
                        </div>
                        <div className="col-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-5 col-m-12 col-t-12 col-p-12">
                            <div className="Element_box">
                                <div className="vison_icon" style={{ textAlign: "center" }}>
                                    <span><Image src={Vis} alt="icon" /></span>
                                </div>
                                <h3 style={{ color: "#fff", textAlign: "Center", padding: "15px" }}>Our Vision</h3>
                                <p>To optimize the natural resources to provide the best quality and high stability, meeting the exact requirement for usage of large–scale or mid-scale projects for exporting into the world market. We are committed to delivering what we promise with a group of a dynamic and efficient team.</p>
                            </div>
                        </div>
                        <div className="col-5 col-m-12 col-t-12 col-p-12">
                            <div className="Element_box2">
                                <div className="vison_icon" style={{ textAlign: "center" }}>
                                    <span><Image src={Mis} alt="icon" /></span>
                                </div>
                                <h3 style={{ color: "#fff", textAlign: "Center", padding: "15px" }}>Our Mission</h3>
                                <p>To be a dependable agro-export company in India and turn the food commodity supply chain into an integrated and effective ecosystem that generates value for all parties, from the primary producer to the final consumer.</p>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
            </div>
            <div className="about-5" style={{ margin: "60px 0" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-m-12 col-t-12 col-p-12">

                            <Image src={On} alt="Spiceimages" className='about_imgspice' />
                        </div>
                        <div className="col-6 col-m-12 col-t-12 col-p-12">

                            <div className="Strive_box">
                                <h3 style={{
                                    padding: "25px",
                                    color: "#fff"
                                }}>What do we strive for?</h3>
                                <p style={{ padding: " 0 27px 61px" }}>
                                    Our goal is to provide an all-inclusive agri-commodity trade facilitation solution that reduces risk, eliminates waste, and creates value at every point of the post-harvest supply chain. We provide multi-stakeholder platforms with technology for inclusive modern marketplaces that encourage secure trade. By utilizing cutting-edge technology and abiding by best practices, we work to assure maximum security and complete transparency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-6">
                <div className="container">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4 col-m-12 col-t-12 col-p-12">
                            <h2 className='ab_heading'>Our Desirability</h2>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    <div className="row" style={{ paddingBottom: "40px" }}>
                        <div className="col-3 col-m-12 col-t-6 col-p-6">
                            <div className="serviceBox">
                                <div className="service-icon">
                                    <span><i><LiaBusinessTimeSolid /></i></span>
                                </div>
                                <h3 className="title">Business Ethics & Responsibility</h3>
                                <p className="description">Uphold our code of conduct and moral principles, practice good governance, and encourage accountability and ethical decision-making.</p>
                            </div>
                        </div>

                        <div className="col-3 col-m-12 col-t-6 col-p-6">
                            <div className="serviceBox">
                                <div className="service-icon">
                                    <span><i><RiCustomerService2Line /></i></span>
                                </div>
                                <h3 className="title">Customers receive value</h3>
                                <p className="description">We work hard to develop a customer experience that consistently fulfills our brand promise.</p>
                            </div>
                        </div>

                        <div className="col-3 col-m-12 col-t-6 col-p-6">
                            <div className="serviceBox">
                                <div className="service-icon">
                                    <span><i><VscWorkspaceTrusted /></i></span>
                                </div>
                                <h3 className="title">Integrity</h3>
                                <p className="description">Without sacrificing the truth in relationships, act with integrity and honor.</p>
                            </div>
                        </div>

                        <div className="col-3 col-m-12 col-t-6 col-p-6">
                            <div className="serviceBox">
                                <div className="service-icon">
                                    <span><i ><TfiWrite /></i></span>
                                </div>
                                <h3 className="title">Responsibility & Accountability</h3>
                                <p className="description">Accept accountability for your experience, judgment, and policies.</p>
                            </div>
                        </div>

                    </div>

                </div>










            </div>
            <Counterup />
            <Footer />

        </>

    )

}

