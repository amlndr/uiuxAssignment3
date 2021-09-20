import React from 'react';
import '../App.css';

import {Link} from 'react-router-dom';

const YourDonations = () => {
    return (
        <>
        <div class=" text-center max-w-7xl mx-auto py-12 px-4 mt-12">
        <img src="https://cdn-icons-png.flaticon.com/512/3627/3627782.png"
         alt="books"
         class="flex inline-flex mb-4
         w-12 h-12"/>
          <h2 class=" tracking-tight text-gray-900 ">
            <Link to="/" class="block text-5xl text-indigo-500 hover:text-green-500">book<b>Donate</b></Link>
          </h2>
        </div>

        <div class="block mt-4 text-left ml-40 mr-40">
               <p> Thank you for donating with us.
                  <br></br><br></br>
                  
                  We will soon <b>contact you via email to confirm your donation</b> with us
                  and will <b>set an estimated time on when to collect your book</b> based on
                  the collection date you have chosen.
                  <br></br><br></br>
                  </p>
                  <Link to="/" class="block text-blue-500 hover:text-blue-900">
              <u> Go Back to mainpage</u></Link>

            </div>


        <div class="text-center absolute inset-x-0 bottom-3 ">
            <p class="text-gray-300">by Nadira Amelia</p>
        </div>
        </>
      
    )
  }

  
  export default YourDonations;