


import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/images/spice-70.png';
import Link from 'next/link';
import Image from 'next/image';
import Green from '@/Components/Riceimages/Sugandha-Basmati.png';
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';



export default function SugandhaWhite () {
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
                <h1 className='About_head'>Sugandha White Sella</h1>
                <ul className='About_slugs'>
                  <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                  <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                  <li><Link href="/our-products/rice/" style={{ color: "#EA4436", fontSize: "20px" }}>Rice</Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                  <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>Sugandha White Sella</li>
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
              <h2 className='Green_head About_head'>Sugandha White Sella</h2>
              <p style={{ marginBottom: "2rem" }}>

                Trade Pros stands out as the premier destination for premium spices and among the leading <b> Sugandha White Sella rice traders in India </b>. Our Sugandha White Sella rices remarkable quality and great taste make it a household favourite across the country. Trade Pros guarantees that consumers have access to the best grains available.
                <br />
                <br />
                Our Sugandha White Sella rice possesses a distinctiveness. That makes it highly coveted among rice lovers. It has a delightful aroma. The sweet fragrance fills the kitchen as it cooks. The long grains remain separate and fluffy when cooked. Our Sugandha White Sella rice offers a pleasing texture and elegant appearance to dishes. Aside from the physical attributes, our rice is superior in taste. Trade pros Sugandha white Sella rice is a favourite among chefs and home cooks in Indian kitchens as well as worldwide. Long grains, great flavour, adaptability, and nutritional advantages have earned it a place as a staple component in Indian and global cooking.

              </p>
              <h3 className='green_subhead Green_head About_head'>Sourced From the Finest Producers
              </h3>
              <p>
                Since we are among the premier <b>Sugandha White Sella exporters from India </b>, thats why we only source the best grains from trusted suppliers in India. That means a guarantee of unmatched quality with every purchase. Our comprehensive quality control techniques make sure that each grain meets the highest standards throughout the growing and packaging processes.
                In addition to quality, Trade Pros also offers competitive prices which makes premium Sugandha White Sella rice accessible to all. We believe that everyone deserves to enjoy the finest ingredients.  So, we strive to offer value without compromising on quality.

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



