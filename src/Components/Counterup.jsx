'use client';

import React from 'react';
import { useState } from 'react';

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Visit from '../Components/images/visitor.png';
import Quer from '../Components/images/query.png';
import Coro from '../Components/images/coronavirus.png';
import Image from 'next/image';




const Counterup = () => {


    const [counterOn, setCounterOn] = useState(false);


    return (
        <div className="wrappC">

        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
            <div className="flex grid">
                <div className='counter'>
                    <Image src={Visit} alt="Visitors image" className="counter_icons" />

                    {counterOn && <CountUp start={0} end={4744} duration={3} delay={0} />}
                    &nbsp;
                   <span> + </span>
                    <br />
                    <span className='counter-span'>No. of Visitors</span>




                </div>
                <div className='counter'>
                    <Image src={Quer} alt="Query image" className="counter_icons counicon2" />
                    {counterOn && <CountUp start={0} end={
                        682} duration={5} delay={0} />}


                    &nbsp;
                    <span>+</span>
                    <br />
                    <span className='counter-span'>Queries Till Now</span>





                </div>
                <div className='counter'>
                    <Image src={Coro} alt="Countries image" className="counter_icons counicon3" />

                    {counterOn && <CountUp start={0} end={
                        8} duration={8} delay={0} />}
                    &nbsp;

                  <span> + </span>
                    <br />
                    <span className='counter-span'>Countries Serving</span>






                </div>

            </div>
        </ScrollTrigger>
        </div>
    )
}

export default Counterup;