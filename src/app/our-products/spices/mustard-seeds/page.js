'use client';

import React from 'react';
import cor from '@/Components/images/8.png';
import Ginger from '@/Components/images/5.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/images/spice-70.png';
import MustardSeedimg from '@/Components/images/Mustseeds.jpg'
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';
import Spiceform from '@/Components/Spiceform';

const MustardSeeds = () => {
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
                <h1 className='About_head'>Mustard Seeds</h1>
                <ul className='About_slugs'>
                  <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                  <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>

                  <li><Link href="/our-products/spices/" style={{ color: "#EA4436", fontSize: "20px" }}>Spices</Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                  <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>Mustard Seeds</li>
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
                <Image src={MustardSeedimg} alt="circleimage" className="green_cardm" />
              </div>

            </div>
            <div className="col-6 col-m-12 col-t-12">
              <h2 className='Green_head About_head'>Mustard Seeds</h2>
              <p>
                Trade Pros brings you the finest Mustard Seeds from the lush fields of India. We are a top mustard
                seeds exporters from India that deliver the highest quality Mustard Seeds as well as other spices
                that are necessary for your kitchen. Trade Pros source mustard seeds from India&#39;s lush soils, which
                are known for producing some of the world&#39;s greatest spices. We offer the best quality mustard
                seeds, that are full of flavour and aroma. Our strict quality control guarantees that each seed
                reaches you whole, clean, and brimming with flavour.
              </p>
              <br />
              <h3 className='green_subhead Green_head About_head'>Rich Flavour Profile</h3>
              <p>
                Our mustard seeds are like small cooking treasures; they have a powerful flavour that can take your
                meals to new heights. Whether you&#39;re preparing traditional Indian food or experimenting with exotic
                flavours mustard seeds from Trade Pros are the perfect fit for every kitchen. Even if you simply want
                to enrich your daily dishes, our mustard seeds give a distinct nutty and aromatic flavour that will
                leave your taste buds wanting more. You can use our seeds in a wide range of cuisines. It adds a
                distinct texture and flavour to a variety of dishes, including pickles, chutneys, marinades, and sauces.
                The possibilities are limitless, making them a fixture in kitchens all around the world.
              </p>
              
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

export default MustardSeeds;