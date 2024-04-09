'use client';

import React from 'react';


import Image from 'next/image';
import Link from 'next/link';
import cor from '@/Components/Riceimages/pngegg.png';
import Ginger from '@/Components/images/5.png';
import { useEffect,useState } from 'react';
import { IoHome } from "react-icons/io5";

import axios from 'axios';
import Navbar from '@/Components/navbar/Navbar';
import Counterup from '@/Components/Counterup';
import Footer from '@/Components/Footer';


export default function Blog() {




    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get('https://trade-pros.org/blogs/wp-json/wp/v2/posts', {
                    params: {
                        per_page: 50,
                        _embed: true
                    }
                });
                setPosts(result.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

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
                        <div className="col-8 col-m-12 col-t-12 col-p-12">
                            <div className="slugs">
                                <h1 className='About_head'>Blog</h1>
                                <ul className='About_slugs'>
                                    <li><Link href="/" style={{ color: "#EA4436", fontSize: "20px" }}> <IoHome style={{ color: "#EA4436" }} /> Home </Link></li>
                                    <li style={{ color: "#EA4436", fontSize: "20px" }}>/</li>
                                    <li style={{ color: "#EA4436", fontSize: "20px", padding: "0 10px" }} className='aboutli'>Blog</li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-2">
                            <Image src={Ginger} alt="Gingerimage" className='ginger_img' style={{ width: "20%" }} />

                        </div>
                    </div>
                </div>
            </div>

            <div className="blogs1">
                <div class="container">
                    <div className="row">



                        {posts.map(post => (
                            <div key={post.id}>
                                <div class="card">
                                    <figure class="card__thumb">
                                        <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} class="card__image" width={300} height={100}/>
                                        <figcaption class="card__caption">
                                            <h2 class="card__title">{post.title.rendered}</h2>
                                            <p class="card__snippet" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.substring(0, 50) + '...' }}></p>
                                            <Link href={post.link} class="card__button" target='blank'>Read more</Link>
                                        </figcaption>
                                    </figure>
                                </div>



                            </div>
                        ))}





                    </div>
                </div>
            </div>
          <Counterup/>
          <Footer/>
        </div>

    )
};
 
