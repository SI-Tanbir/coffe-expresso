import React from "react";
import cupfooter from "../../images/more/logo1.png";
import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { Link, } from 'react-router-dom';




const Footer = () => {
  return (
    <div className="flex p-10 bg-slate-200">

      <div className="w-[50%] ml-10">
      {/* left side start */}
      <img src={cupfooter} className="w-[80px]" alt="" />
      <p>Espresso Emporium</p>
      <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
      <div className="flex text-3xl">
      <MdOutlineFacebook></MdOutlineFacebook>
    <FaXTwitter></FaXTwitter>
    <FaInstagram></FaInstagram>
    <FaLinkedin></FaLinkedin>

      </div>

      <p className="font-ranch text-2xl">Get in Touch</p>
      <p className="flex text"><FaPhone></FaPhone>+88 01533 333 333 </p>
      <p className="flex text"><IoMdMail></IoMdMail>info@gmail.com</p>
      <p className="flex text"><IoLocation></IoLocation>72, Wall street, King Road, Dhaka</p>
  

      
      </div>




    <div className="w-[40%]">
    {/* right side  */}

    <p className="text-4xl font-ranch ">Connect With Us</p>

    <div className="space-y-2">

    <input
  type="text"
  placeholder="Name"
  className="input input-bordered input-sm w-full max-w-xs" />
  <br />

  <input
  type="text"
  placeholder="Email"
  className="input input-bordered input-sm w-full max-w-xs" />
  <br />

<input
  type="text"
  placeholder="Messages"
  className="input input-bordered input-lg w-full max-w-xs" />
<br />
<button className="btn border bg-gray-50 border-[#3b270f88]">Send Messages</button>

<Link className="btn mr-2 bg-blue-600" to='/signup'>Signup</Link>
<Link className="btn bg-amber-800" to='/login'>Login</Link>


    </div>
   

    </div>

    </div>
  );
};

export default Footer;
