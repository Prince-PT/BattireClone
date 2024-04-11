import React from 'react'
import insta from '../assets/Images/insta.png'
import facebook from '../assets/Images/facebook.png'
import twitter from '../assets/Images/twitter.png'
import linkedin from '../assets/Images/linkedin.png'
import yt from '../assets/Images/yt.png'



function Footer() {
  return (
    <div className="bg-black text-white h-100%">
          <div className="bg-black">
              <div className="flex flex-row justify-between mt-10 p-20">
                  <div className="text-6xl flex flex-col w-96 mr-12">Stay Informed About Battre</div>
                  <div className="mr-16"><input className="bg-gray-600 text-gray-200 p-3 w-[544px] border-none" type="email" placeholder="Your email ID" id=""></input><button className="p-3 bg-white text-black w-40 border-none">SUBSCRIBE</button>
                  </div>
              </div>
              <div className="w-[1550px] h-1 border-b-2 bg-slate-400 ml-16 mb-10"></div>
              <div className="flex flex-row justify-around mb-16">
                  <div className="flex flex-col w-56 "><p>Kasra No 351, 80 Feet Road<br></br> Vinayak City<br></br> Guru Marg, Sirsi Road<br></br>Neemera, Bindayaka,</p></div>
                  <div>
                      <ul>
                          <li className="text-slate-400">Models</li>
                          <li>Storie</li>
                          <li>One</li>
                          <li>Loev</li>
                      </ul>
                  </div>
                  <div>
                      <ul>
                          <li className="text-slate-400">Company</li>
                          <li>About</li>
                          <li>Blog</li>
                      </ul>
                  </div>
                  <div>
                      <ul>
                          <li className="text-slate-400">Quick Links</li>
                          <li>Become a Dealer</li>
                          <li>Locate a Dealer</li>
                          <li>Emagine</li>
                      </ul>
                  </div>
                  <div>
                      <ul>
                          <li className="text-slate-400"></li>
                          <li>Book a test Ride</li>
                          <li>Book Now</li>
                          <li>Contact</li>
                      </ul>
                  </div>
              </div>
              <div className="w-[1550px] h-1 border-b-2 bg-slate-400 ml-16 mb-10"></div>
          </div>
          <div className="flex flex-row justify-around text-gray-400 bg-black">
              <div>&#169 2023 Batt:RE. All rights reserved</div>
              <div>PRIVACY POLICY</div>
              <div>TERMS AND CONDITIONS</div>
              <div>
                  <ul className="flex flex-row gap-3">
                      <li><button><img src={insta} alt=""></img></button></li>
                      <li><button><img src={facebook} alt=""></img></button></li>
                      <li><button><img src={twitter} alt=""></img></button></li>
                      <li><button><img src={linkedin} alt=""></img></button></li>
                      <li><button><img src={yt} alt=""></img></button></li>
                  </ul>
              </div>
          </div>
      </div>
  )
}

export default Footer