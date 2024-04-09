
import React from 'react';
import cor from '@/Components/images/8.png';
import Ginger from '@/Components/images/5.png';

import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/images/spice-70.png';
import Clovesimg from '@/Components/images/Cloves.jpg';
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';
import Spiceform from '@/Components/Spiceform';




export default function Cloves() {
  return (
    <div>
    <Navbar/>
    
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
                <h1 className='About_head'>Cloves</h1>
                <ul className='About_slugs'>
                  <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                  <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>


                  <li><Link href="/our-products/spices/" style={{ color: "#EA4436", fontSize: "20px" }}>Spices</Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                  <li
                    style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>Cloves</li>
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
                <Image src={Clovesimg} alt="circleimage" className="green_cardm" />
              </div>

            </div>
            <div className="col-6 col-m-12 col-t-12">
              <h2 className='Green_head About_head'>Cloves</h2>
              <p>
                Trade Pros presents the finest quality cloves spices sourced from the lush plantations of the Indian
                subcontinent. Rich aroma and bold flavour are one of the primary reasons that our cloves are the
                best in the industry. Trade Pros is a leading spices trader and cloves spices exporter in India, offering
                a diverse variety of spices and grains in India along with exporting them into the international
                market.
                <br />
                <br />
                Our cloves are handpicked at the peak of ripeness and subjected to stringent quality inspections to
                guarantee that only the best specimens reach your kitchen. Each clove is meticulously examined to
                ensure that it meets our strict requirements, leading to a product devoid of contaminants and of the
                highest quality. Grown in the ideal Indian climate and soil conditions, our cloves offer a distinctive
                flavour profile. This brings depth and complexity to a variety of culinary creations. Whether used
                whole or ground, they infuse dishes with a warm and spicy sweetness that tantalizes the taste buds.
                The cloves spices we offer are a staple in sweet and savoury dishes which is why they are a must-
                have ingredient in any kitchen. Our cloves provide a distinct flavour to a wide range of meals for
                savoury curries and stews as well as luscious sweets and baked goods.
                <br />
                <br />
                Our cloves have health advantages in addition to their culinary purposes. They&#39;re high in
                antioxidants and important minerals. They have anti-inflammatory and antibacterial effects, which
                improve general health. Whether used in teas, infusions, or topical treatments, our cloves have long
                been valued for their therapeutic virtues. They are an excellent supplement to any holistic wellness
                practice.
                <br />
                <br />
                Because Trade Pros is a well-known spice dealer and Cloves spices exporters in India, we provide
                high-quality cloves spices to consumers across India and beyond. Our commitment to quality
                extends across our operations, from sourcing and processing to packaging and delivery. Trade Pros
                guarantees that you will receive the highest grade of cloves that nature has to offer. The high quality
                and unrivaled aroma of Trade Pros cloves is going to take your culinary creations to new heights.
              </p>
              <br />
              <br />

          
            </div>
          </div>
        </div>
      </div>
      <Spiceform/>
   <Counterup/>
   <Footer/>
    </div>
  )
}



export function generateMetadata({ params }) {
  return {
      title: "Cloves  spices exported from india - Trade-Pros",
      description: "When all you seek, is the pinch of perfection in spices like cloves that unleash culinary magic, it’s then when experts like us matter. Connect with us to get your batch today!",
      alternates: {
          canonical: `${"https://trade-pros.org/our-products/spices/cloves/"}`,


      },
      ogLocale: "en_US",
      ogType: "article",
      ogTitle: "Amchur (Powder &amp; Whole)",
      ogDescription: "We are a trusted amchur powder &amp; whole trader and supplier that has been serving in the market for years. So, if you are looking for the same. Connect with us!",
      ogUrl: "https://trade-pros.org/our-products/spices/cloves//",
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
