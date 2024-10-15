import React from 'react';
import  Card from './Card'
import Jmpa from "../assets/jpma.png"
import html from "../assets/html-5.png"
import Library from "../assets/library.png"
import  "../styles/FeaturedProjects.css"
import  WETALK from "../assets/wetalk.png"
import  Firebase from "../assets/firebase.png"
import css from "../assets/css-3.png"
import sass from "../assets/sass.png"
import reactsvg from "../assets/react.svg"
import jquery from "../assets/j.png"
import php from "../assets/php.png"
import  driveechange from "../assets/driveexchange.jpg"
import  kotlin from "../assets/kotlin.png"
function FeaturedProjects(props) {
    return (
   <>
       <section className="featuredproject">
           <header className="ft" id="section2">Featured Project
           </header>
           <header className="ft"><span>_selected projects</span></header>
           <div className="gridcontainer">
               <Card image={WETALK}  title={"WeTalk "}
                     description="A simple chat app,  Connect with friends and family instantly, share messages, and stay in touch effortlessly"
                     logo1={Firebase}
                     logo2={reactsvg}
                     logo3={sass}
                     logo4={css}
               />
               <Card image={Library}  title={"ISPSC Library"}
                     description="Introducing a streamlined library solution designed to efficiently manage a vast collection of ebooks and e-journals"
                     logo1={html}
                     logo2={css}
                     logo3={jquery}
                     logo4={php}




               />
               <Card image={driveechange}  title={"DriveExchange"}
                     description="Welcome to DriveExchange, your go-to platform for effortlessly buying and selling vehicles, offering a seamless experience for both buyers and sellers alike."
                     logo1={kotlin }
                     logo2={Firebase}




               />

           </div>
       </section>

   </>
    );
}

export default FeaturedProjects;