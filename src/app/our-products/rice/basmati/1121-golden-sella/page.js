



import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/images/spice-70.png';
import Green from '@/Components/Riceimages/GoldenSella.jpg';
import Form from '@/Components/Form';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/navbar/Navbar';



export default function GoldenSella() {
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
                <h1 className='About_head'>1121 Golden Sella</h1>
                <ul className='About_slugs'>
                  <li><Link  href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                  <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                  <li><Link href="/our-products/rice/" style={{ color: "#EA4436", fontSize: "20px" }}>Rice</Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                  <li style={{ color: "#EA4436", fontSize: "20px",padding:"0 10px" }} className='hide_proname'>1121 Golden Sella</li>
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
              <h2 className='Green_head About_head'>1121 Golden Sella</h2>
              <p style={{marginBottom:"2rem"}}>
              Golden Sella basmati rice has the delicious flavour and visible enchantment of natural Basmati, with stepped-forward retaining capacity and resilience to over-cooking. It is parboiled with signature Basmati in its husk, a very herbal system, allowing you to prepare dinner and stir this Rice without dropping the texture.
              </p>

      <Form/>
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
        title: "1121 Golden Sella Rice Traders in India | Trade-Pros",
        description: "We are one of the top 1121 golden sella rice traders in India, which proves to be the best grade for cooking and a great source of vitamins. Contact Us",
        alternates: {
            canonical: `${"https://trade-pros.org/our-products/rice/basmati/1121-golden-sella/"}`,


        },
        ogLocale: "en_US",
        ogType: "article",
        ogTitle: "1121-golden-sella",
        ogDescription: "We are a trusted amchur powder &amp; whole trader and supplier that has been serving in the market for years. So, if you are looking for the same. Connect with us!",
        ogUrl: "https://trade-pros.org/our-products/rice/basmati/1121-golden-sella/",
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
