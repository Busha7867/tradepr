
import React from 'react';
import cor from '@/Components/images/8.png';
import Ginger from '@/Components/images/5.png';
import Link from 'next/link';
import Image from 'next/image';
import { IoHome } from "react-icons/io5";
import Circ from '@/Components/images/spice-70.png';
import Cumminimg from '@/Components/images/Cummin.jpg'
import Navbar from '@/Components/navbar/Navbar';
import Form from '@/Components/Form';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';

export default function CuminSeeds() {
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
                <h1 className='About_head'>Cumin Seeds</h1>
                <ul className='About_slugs'>
                  <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                  <li><Link href="/our-products/"style={{ color: "#EA4436", fontSize: "20px" }}>Our Products</Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
              
                  <li><Link href="/our-products/spices/" style={{ color: "#EA4436", fontSize: "20px" }}>Spices</Link></li>
                  <li style={{ color: "#EA4436", fontSize: "20px" }} className='hide_proname'>/</li>
                  <li style={{ color: "#EA4436", fontSize: "20px", padding:"0 10px" }} className='hide_proname'>Cumin Seeds</li>
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
                <Image src={Cumminimg} alt="circleimage" className="green_cardm" />
              </div>

            </div>
            <div className="col-6 col-m-12 col-t-12">

              <h2 className='Green_head About_head'>Cumin Seeds</h2>
              <p>
                Cumin is a spice that comes from the Cuminum cyminum plant. It is local to Asia, Africa, and Europe. Cumin, also spelled cummin, is an annual plant of the parsley’s circle of relatives (Apiaceae) and the spice product of its seed like culmination. However, humans all across the international use it to taste meals. Cumin lends its extraordinary taste to chilli, tamales and diverse Indian curries. Its flavor has been defined as earthy, nutty, highly spiced and warm.
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


