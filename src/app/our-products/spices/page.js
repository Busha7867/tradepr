

import React from 'react';
import cor from '@/Components/images/8.png';
import Ginger from '@/Components/images/5.png';
import Link from 'next/link';
import { IoHome } from "react-icons/io5";
import Cumin from '@/Components/images/Cummin.jpg';
import Cardmom from '@/Components/images/Cardmom.jpg';

import Safron from '@/Components/images/Saffron.jpg';
import Blackp from '@/Components/images/BlackPepper.jpg';
import Kalaunji from '@/Components/images/Kalounji.jpg';
import Fennel from '@/Components/images/Fennel.jpg';
import Corin from '@/Components/images/Coriander.jpg';
import Turm from '@/Components/images/turmeric.jpg';
import Pome from '@/Components/images/Pome.jpg';
import Asaf from '@/Components/images/Asaf.jpg';
import Blackcr from '@/Components/images/Blackcr.jpg';
import Bayleave from '@/Components/images/BayLeave.jpg';
import Fengu from '@/Components/images/Fenu.jpg';
import Mseeds from '@/Components/images/Mustseeds.jpg';
import Clov from '@/Components/images/Cloves.jpg';
import Tama from '@/Components/images/Tama.jpg';
import Trach from '@/Components/images/Trachy.jpg';
import Amchu from '@/Components/images/Amchur.jpg';
import Cinm from '@/Components/images/Cinnamon.jpg';
import Yell from '@/Components/images/yellow.jpg';
import Dryc from '@/Components/images/dry-chilly.jpg';

import Image from 'next/image';

import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';




export default function Spices() {
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
                        <div className="col-8 col-m-12 col-t-12 col-p-12">
                            <div className="slugs">
                                <h1 className='About_head'>Spices</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li><Link href="" style={{ color: "#EA4436", fontSize: "20px" }}>Spices</Link></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <Image src={Ginger} alt="Gingerimage" className='ginger_img' />

                        </div>
                    </div>
                </div>
            </div>
            <div className="Spice1">
                <div className="container">
                    <div className="row">

                        <div className="content_box">
                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Amchu} alt="Amchur" />
                                        </div>
                                        <div class="product">
                                            <span class="new">New</span>
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Amchur</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/amchur/" class="read-more">Read More</Link>
                            </div>

                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Yell} alt="Yellow Chilli" />
                                        </div>
                                        <div class="product">
                                            <span class="new">New</span>
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Yellow Chilli</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/yellow-chilli/" class="read-more" >Read More</Link>
                            </div>


                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Cinm} alt="Cinnamon Sticks" />
                                        </div>
                                        <div class="product">
                                            <span class="new">New</span>
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Cinnamon Sticks</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/cinnamon-sticks/" class="read-more">Read More</Link>
                            </div>

                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Cardmom} alt="Green Cardamom" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Green Cardamom</h4>
                                    </div>

                                </div>
                                <Link href="/our-products/spices/green-cardamom/" class="read-more">Read More</Link>
                            </div>

                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Safron} alt="Saffron" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Saffron</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/saffron/" class="read-more" >Read More</Link>
                            </div>

                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Blackp} alt="Black Pepper" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Black Pepper</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/black-pepper/" class="read-more">Read More</Link>
                            </div>


                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Cumin} alt="Cumin" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Cumin</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/cumin-seeds/" class="read-more" >Read More</Link>
                            </div>



                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Kalaunji} alt="Kalounji" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Kalonji</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/kalounji/" class="read-more" >Read More</Link>
                            </div>
                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Fennel} alt="Fennel Seeds" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Fennel Seeds</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/fennel-seeds/" class="read-more">Read More</Link>
                            </div>
                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Corin} alt="Coriander Seeds" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Coriander Seeds</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/coriander-seeds/" class="read-more" >Read More</Link>
                            </div>


                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Turm} alt="Turmeric" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Turmeric</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/turmeric/" class="read-more" >Read More</Link>
                            </div>


                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Pome} alt="Pomegranate Seeds" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Pomegranate Seeds</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/pomegranate-seeds/" class="read-more" >Read More</Link>
                            </div>



                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Asaf} alt="Asafoetida spice" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Asafoetida</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/asafoetida/" class="read-more" >Read More</Link>
                            </div>



                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Blackcr} alt="black caedamon" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Black Cardamom</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/black-cardamom/" class="read-more" >Read More</Link>
                            </div>

                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Bayleave} alt="bay leaves" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Bay Leaves</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/bay-leaves/" class="read-more" >Read More</Link>
                            </div>
                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Fengu} alt="Fenugreek seeds" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Fenugreek Seeds</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/fenugreek-seeds/" class="read-more" >Read More</Link>
                            </div>
                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Mseeds} alt="Mustard seeds" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Mustard Seeds</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/mustard-seeds/" class="read-more" >Read More</Link>
                            </div>
                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Clov} alt="cloves" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Cloves</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/cloves/" class="read-more" >Read More</Link>
                            </div>
                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Tama} alt="Tamarind " />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Tamarind</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/tamarind/" class="read-more" >Read More</Link>
                            </div>

                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Trach} alt="carom seeds" />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Carom Seeds</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/carom-seeds/" class="read-more" >Read More</Link>
                            </div>

                            <div class="serviceBoxes">
                                <div class="service-content">
                                    <div class="service-icon">
                                        <div className="card_img">
                                            <Image src={Dryc} alt="redchilli" style={{ width: "340px", height: "271px" }} />
                                        </div>
                                    </div>
                                    <div className="hedings">
                                        <h4 clasName="card_head">Dry Red Chilli</h4>
                                    </div>


                                </div>
                                <Link href="/our-products/spices/dry-red-chilli/" class="read-more" >Read More</Link>
                            </div>








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
        title: "Wholesale Bulk Spices Suppliers in india",
        description: "We provide premium-quality commodities worldwide. Trade Pros is one of the best wholesale bulk spices suppliers in India. Contact us today.",
        alternates: {
            canonical: `${"https://trade-pros.org/our-products/spices/"}`,


        },
        ogLocale: "en_US",
        ogType: "article",
        ogTitle: "Global Presence",
        ogDescription: "We are the best commodity trading company in the international commodity market. Source with the finest traders with exceptional quality and expertise.",
        ogUrl: "https://trade-pros.org/our-products/",
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
