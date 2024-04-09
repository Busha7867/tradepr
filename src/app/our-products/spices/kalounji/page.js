

import React from 'react';
import cor from '@/Components/images/8.png';
import Ginger from '@/Components/images/5.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/images/spice-70.png';
import Kalounjiimg from '@/Components/images/Kalounji.jpg';
import Form from '@/Components/Form';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';
import Navbar from '@/Components/navbar/Navbar';




export default function Kalounji(){
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
                <h1 className='About_head'>Kalonji</h1>
                <ul className='About_slugs'>
                  <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                  <li><Link href="/our-products/"style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
              
                  <li><Link href="/our-products/spices/" style={{ color: "#EA4436", fontSize: "20px" }}>Spices</Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                  <li style={{ color: "#EA4436", fontSize: "20px", padding:"0 10px" }} className='hide_proname'>Kalonji</li>
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
                <Image src={Kalounjiimg} alt="circleimage" className="green_cardm" />
              </div>

            </div>
            <div className="col-6 col-m-12 col-t-12">
              <h2 className='Green_head About_head'>Kalonji</h2>
              <p>
              It is also referred to as black cumin. Kalonji belongs to the buttercup’s circle of relatives of flowering flora. In India, every dish is incomplete without spices. ”Kalonji,” also referred to as black cumin, is a famous herb in each kitchen. It produces a fruit with seeds used as a flavorful spice in many cuisines. t is a delicious spice with its candy and nutty taste.
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
      title: "Kalounji spices exported from india - Trade-Pros ",
      description: "We are a leading spice trader in India, offering a diverse range of spices and Kalonji seeds. Choose Trade Pros for unbeatable spice quality.",
      alternates: {
          canonical: `${"https://trade-pros.org/our-products/spices/kalounji/"}`,


      },
      ogLocale: "en_US",
      ogType: "article",
      ogTitle: "Kalounji",
      ogDescription: "We are a trusted amchur powder &amp; whole trader and supplier that has been serving in the market for years. So, if you are looking for the same. Connect with us!",
      ogUrl: "https://trade-pros.org/our-products/spices/kalounji/",
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