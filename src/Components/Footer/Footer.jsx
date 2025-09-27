import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className='bg-black px-20 pt-20 pb-8 mt-20'>
            <div className='grid gap-20 lg:grid-cols-5 md:grid-cols-2'>
                <div>
                    <h1 className='font-bold text-2xl'>CS — Ticket System</h1>
                    <p className='max-w-[400px] mt-4 mr-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-2xl'>Company</h1>
                    <a href="#">About Us</a>
                    <a href="#">Our Mission</a>
                    <a href="#">Contact Saled</a>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-2xl'>Services</h1>
                    <a href="#">Products & Services</a>
                    <a href="#">Customer Stories</a>
                    <a href="#">Download Apps</a>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-2xl'>Information</h1>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Join Us</a>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-2xl'>Social Links</h1>
                    <a href="#"><FontAwesomeIcon icon={faXTwitter} /> @CS — Ticket System</a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} className='text-blue-600' /> @CS — Ticket System</a>
                    <a href="#"><FontAwesomeIcon icon={faFacebook} className='text-blue-600' /> @CS — Ticket System</a>
                    <a href="#"><FontAwesomeIcon icon={faEnvelope} className="text-red-500" /> support@cst.com</a>
                </div>
            </div>
            <div className='border-t-2 border-[#E5E7EB10] w-11/12 mx-auto mt-20'>
                <p className='text-center mt-8'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;