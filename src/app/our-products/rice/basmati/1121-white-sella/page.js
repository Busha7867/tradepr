import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/Images/spice-70.png';
import Green from '@/Components/Riceimages/white-sella.jpg';
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';


export default function WhiteSella () {
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
                <h1 className='About_head'>1121 White Sella</h1>
                <ul className='About_slugs'>
                  <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                  <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                  <li><Link href="/our-products/rice/" style={{ color: "#EA4436", fontSize: "20px" }}>Rice</Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>


                  <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>1121 White Sella</li>
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
              <h2 className='Green_head About_head'>1121 White Sella</h2>
              <p style={{ marginBottom: "2rem" }}>
                For the unparalleled quality and exquisite taste of 1121 White Sella rice that is sourced and
                delivered to perfection, you can choose Trade Pros. We are the finest spices destination for spices,
                pulses, and 1121 White Sella rice traders in India. At Trade Pros, we are a trusted name in the
                industry. We provide the finest quality rice to culinary enthusiasts for restaurants as well as home
                cooks.
                <br />
                <br />
                Our 1121 White Sella rice is carefully selected from the best fields across the Indian sub-continent.
                We guarantee superior taste. Additionally, the aroma and texture in every grain that you will get, is
                unbeatable. We use unique procedures to retain the rice&#39;s inherent nutrients while increasing its
                firmness and lengthening. This process brings in a delicious eating experience with each dish.
              </p>

              <h3 className='green_subhead Green_head About_head'>We Prioritize Quality!</h3>
              <p>
                Quality is our top priority at Trade Pros. Every grain of our rice meets the highest standards of
                quality. Our 1121 White Sella rice offers unparalleled purity and uniformity which makes it an
                excellent choice for a variety of dishes, especially biryani.
                <br />
                <br />
                Whether you&#39;re preparing a fragrant biryani, a hearty pilaf, or a simple rice bowl, Trade Pros&#39; 1121
                White Sella rice is sure to impress. With its delicate flavour, fluffy texture, and outstanding cooking
                qualities, our rice takes any meal to new heights of excellence. You should choose Trade Pros for the
                best 1121 White Sella rice in India. If you want to experience the difference in quality, we are your
                partner.
              </p>
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
        title: "1121 White Sella Rice Traders in India - Trade-Pros ",
        description: "For anyone who is looking for 1121 White Sella long grain aromatic rice, Trade Pros is best choice as we have the finest quality rice available in the world",
        alternates: {
            canonical: `${"https://trade-pros.org/our-products/rice/basmati/1121-white-sella/"}`,


        },
        ogLocale: "en_US",
        ogType: "article",
        ogTitle: "1121-white-sella",
        ogDescription: "We are a trusted amchur powder &amp; whole trader and supplier that has been serving in the market for years. So, if you are looking for the same. Connect with us!",
        ogUrl: "https://trade-pros.org/our-products/rice/basmati/1121-white-sella/",
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

