import React from 'react';
import '../App.css';

import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <>
        <div class=" text-center max-w-7xl mx-auto py-12 px-4 mt-12">
        <img src="https://cdn-icons-png.flaticon.com/512/3627/3627782.png"
         alt="books"
         class="flex inline-flex mb-4
         w-12 h-12"/>
          <h2 class=" tracking-tight text-gray-900 ">
            <span class="block text-5xl text-indigo-500">book<b>Donate</b></span>
          </h2>
          <div class="block mt-20">
               <p> Donate your books with us and we’ll pick it up straight from your home.<br></br>
                Your books will be donated to libraries in rural areas that we have carefully selected.</p>
            </div>
          <div class=" items-center mt-16  ml-20 mr-20 p-30 space-x-10 m-50">
            
            <div class=" text-center flex inline-flex  rounded-md shadow">
              <Link to="/donatebook" class="flex inline-flex justify-center px-5 py-3 border 
              border-transparent text-base font-medium rounded-md text-white bg-indigo-500 
              hover:bg-green-500">
                I want to donate a book
              </Link>
            </div>
         
          </div>
        </div>

        <div class="text-center absolute inset-x-0 bottom-3 ">
            <p class="text-gray-300">by Nadira Amelia</p>
        </div>
        </>
      
    )
  }

  
  export default HomePage;