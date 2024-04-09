

import React from 'react';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/Riceimages/Super.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/Images/spice-70.png';
import Green from '@/Components/Riceimages/White.jpg';
import Navbar from '@/Components/navbar/Navbar';
import Form from '@/Components/Form';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';


export default function White(){
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
                <h1 className='About_head'>1401 White</h1>
                <ul className='About_slugs'>
                  <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                  <li><Link href="/our-products/" style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                  <li><Link href="/our-products/rice/" style={{ color: "#EA4436", fontSize: "20px" }}>Rice</Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>

                  <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='hide_proname'>1401 White</li>
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
              <h2 className='Green_head About_head'>1401 White</h2>
              <p style={{ marginBottom: "2rem" }}>
                1401 White Basmati Rice is usually desired over parboiled rice grains for its better dietary value. Notable for its long and narrow grain shape, this gluten-free Rice is a dependable supply of excessive protein and fibre. Low in calories and carbohydrates, this grade of Rice is considered a healthful staple eating regimen desire, particularly for overweight and diabetic persons. 1401 White Basmati Rice boosts digestion, aids in regulating blood sugar and nourishes the frame by offering essential nutrients.
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


