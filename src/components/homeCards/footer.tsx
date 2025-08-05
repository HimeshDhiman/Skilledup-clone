'use client';



import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  X,
} from 'lucide-react';
import Link from 'next/link';
import FlipLink from '../ui/text-effect-flipper';

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0F] text-muted-foreground  text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <div className="mb-4">
            <img src="/images/footer-logo.png" alt="SkilledUp Logo" className="h-10" />
          </div>
          <p className="text-gray-300 mb-4">
            Are you ready to embark on a transformative journey into the world of Information Technology?
            Look no further! Skilled Up is your trusted partner in delivering top-notch Technology training that empowers
            individuals and organizations to harness the true potential of technology.
          </p>
          <Link href="#" className="text-blue-400 hover:underline">Read More..</Link>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Category</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">Data Science</Link></li>
            <li><Link href="#">Free Course</Link></li>
            <li><Link href="#">MasterClass</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">About us</Link></li>
            <li><Link href="#">F.A.Q</Link></li>
            <li><Link href="#">Term & Conditions</Link></li>
            <li><Link href="#">Privacy & Policy</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Download Certificate</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
          <p className="text-white font-semibold text-md mb-2">Head Office</p>
          <p className="text-gray-300">
            E8, Sector 3, Noida, Uttar Pradesh, India <br />
            (Near Sector 16 Metro Station)
          </p>
          <p className="mt-2 text-gray-300">support@skilledup.tech</p>
          <p className="mt-1 text-gray-300">+91 1204131330</p>
          <p className="text-gray-300">+91 9810421790</p>
          <div className="flex gap-3 mt-3 text-white">
            <a href="#"><Facebook size={18} /></a>
            <a href="#"><Twitter size={18} /></a>
            <a href="#"><Instagram size={18} /></a>
            <a href="#"><Youtube size={18} /></a>
          </div>
        </div>
      </div>

      <div className="bg-[#0B0B0F] text-muted-foreground py-4 px-6 flex flex-col md:flex-row justify-between items-center  text-xs">
        <p className="mb-2 md:mb-0">
          © Copyright <span className="font-semibold text-white">skilledUp</span>. All Rights Reserved | Designed by <span className="text-white font-semibold">skilledUp</span>
        </p>
        <div className="bg-[#0B0B0F] text-muted-foreground flex gap-4">
          <Link href="#">Term of Use</Link>
          <Link href="#">Privacy Policy</Link>
        </div>



        <div className='bg-[#0B0B0F] text-gray-200'>
           <FlipLink href='https://www.linkedin.com/company/iskilledup/'> LinkedIn</FlipLink>
        <FlipLink href='https://www.instagram.com/iskilledup/'>Instagram</FlipLink>
        <FlipLink href='https://x.com/IskilledUp'>Twitter</FlipLink>
        <FlipLink href=' https://www.facebook.com/iskilledup/'>Facebook</FlipLink>
       


        </div>




       
      </div>





    </footer>
  );
}