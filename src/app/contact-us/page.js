'use client';

import React from 'react';

import Link from 'next/link';
import Image from 'next/image';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';
import { IoHome } from "react-icons/io5";
import { Component } from 'react';
import Head from 'next/head';


import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';
import Recaptcha from '@/Components/Recaptcha';
import '@/app/form.css';
import { FaMobileAlt } from "react-icons/fa";




class Contact extends Component {



    constructor(props) {
        super(props);
        this.state = {
            fullname: '',
            phone: '',
            email: '',
            query: '',
            recaptchaToken: ''

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    onSubmit = (e) => {
        e.preventDefault();

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {

        event.preventDefault();

        const { fullname, phone, email, query } = this.state;

        let formData = new FormData();
        formData.append('fullname', fullname);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('query', query);

        axios.post('https://trade-pros.org/TradeEmail/ContactUsEmail.php', formData)
            .then(response => {
                alert('Thank you for contacting us! Email sent successfully!');
                window.location.reload();
            })
            .catch(error => {
                // console.log(error);
                // // Display an error message
                alert('Error sending email!');
                window.location.reload();
            });
    }


    render() {
        return (

            <div>
                <Head>
                    <title>Contact Us | Your awesome app</title>
                    <meta name="description" content="Describe in 160-200 characters about your awesome app contact page" />
                </Head>
                <Navbar />


                <div className=" contactback">
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
                                    <h1 className='About_head'>Contact Us</h1>
                                    <ul className='About_slugs'>
                                        <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                        <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>


                                        <li><Link href="" style={{ color: "#EA4436", fontSize: "20px" }}>Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-2">
                                <Image src={Ginger} alt="Gingerimage" className='ginger_img' />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="basmati1">
                    <div className="container">
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-4 col-m-12 col-t-12">
                                <h2 className='About_head' style={{ textAlign: "center", marginBottom: "35px" }} >Reach Out To Us</h2>
                            </div>
                            <div className="col-4"></div>
                        </div>
                        <div className="row">
                            <div className="col-6 col-m-12 col-t-12">


                                <div className="form_block contactforms" style={{ padding: "" }}>
                                    <h3 className='form_head'>Write your enquiry here and send us</h3>
                                    <form action="" className='form contactform' onSubmit={this.handleSubmit}>
                                        <div className="inputWithIcon">
                                            <FaUser className='ficon' />

                                            <input type="text" placeholder="Full Name" name="fullname" required onChange={this.handleChange} />



                                        </div>

                                        <div className="inputWithIcon">
                                            <FaPhoneAlt className='ficon' />
                                            <input type="number" placeholder="Phone Number" name="phone" required onChange={this.handleChange} />

                                        </div>

                                        <div className="inputWithIcon">
                                            <IoIosMail className='ficon' />
                                            <input type="email" placeholder="Email" name="email" required onChange={this.handleChange} />
                                            <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
                                        </div>


                                        <div className="inputWithIcon">
                                            <textarea placeholder="Write Your Query " name="query" rows="4" style={{ padding: "10px", width: "100%" }} onChange={this.handleChange}></textarea>
                                            {/* <i className="fa fa-message fa-lg fa-fw" aria-hidden="true"></i> */}

                                        </div>
                                        <div className="inputWithIcon">
                                            <Recaptcha onToken={this.onToken} />

                                        </div>

                                        <div className="inputWithIcon">
                                            <button type="submit" className='Form_btn' style={{ width: "100%" }}><span>Send Enquiry </span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-6 col-m-12 col-t-12">

                                <div className="serviceBoxx" style={{ padding: "80px 20px" }}>
                                    <div className="service-icon">
                                        <span><FaMobileAlt className='mob-icon' /></span>
                                    </div>
                                    <div className="service-contentt">
                                        <h3 className="title">Call Us</h3>
                                        <div className="description">
                                            <ul className='contact_list'>
                                                <li><a href="tel:+918383809064">+91-838 380 9064  (Amandeep Singh)</a></li>
                                                <li><a href="tel:+917701967040 ">+91-770 196 7040   (Gaurav Chopra)</a></li>

                                                <li><a href="tel:+919999182339">+91-999 918 2339</a></li>
                                                <br />
                                                <li><a href="mailto:sales@trade-pros.org">  <IoIosMail /> sales@trade-pros.org</a> <br /> <span style={{ fontSize: "18px ", color: "#F67712" }}>Write us </span></li>

                                            </ul></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row" id='contact'>
                            <div className="col-3 col-m-12 col-mp-12 col-t-6">
                                <div className="serviceBoxs">
                                    <h3 className="title">INDIA</h3>
                                    <div className="service-icon">
                                        <span><i aria-hidden="true" className="fas fa-map-marker-alt"></i></span>
                                    </div>
                                    <p className="description">C-49, Ground Floor, Sector 10, Noida, India - 201301</p>
                                </div>
                            </div>
                            <div className="col-3 col-m-12 col-mp-12 col-t-6">
                                <div className="serviceBoxs" id="europe">
                                    <h3 className="title">EUROPE

                                    </h3>
                                    <div className="service-icon">
                                        <span><i aria-hidden="true" className="fas fa-map-marker-alt"></i></span>
                                    </div>
                                    <p className="description">UL, Polwiejska 17/26,61-888 Poznan, Poland</p>
                                </div>
                            </div>
                            <div className="col-3 col-m-12 col-mp-12 col-t-6">
                                <div className="serviceBoxs">
                                    <h3 className="title">UAE</h3>
                                    <div className="service-icon">
                                        <span><i aria-hidden="true" className="fas fa-map-marker-alt"></i></span>
                                    </div>
                                    <p className="description">
                                        Xpro Services - Fzco: 29318-00 Ifza Business Park, DDP UAE</p>
                                </div>
                            </div>
                            <div className="col-3 col-m-12 col-mp-12 col-t-6">
                                <div className="serviceBoxs">
                                    <h3 className="title">AFRICA</h3>
                                    <div className="service-icon">
                                        <span><i aria-hidden="true" className="fas fa-map-marker-alt"></i></span>
                                    </div>
                                    <p className="description">BP 1858 Abidjan 04, Abidjan, Plateau Boulevard De La Rebublique, Jeceda Cote D ivoire, West Africa</p>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
                <div className="contact_map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3179907421736!2d77.32944107457106!3d28.590235736001894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4ffdba6756b%3A0x51ac226a0999fb72!2sC%20Block%2C%20Sector%2010%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1701340129659!5m2!1sen!2sin" style={{ width: "100%", height: "400px" }}></iframe>

                </div>

                <Counterup />
                <Footer />

            </div>

        )
    }



}

export default Contact;