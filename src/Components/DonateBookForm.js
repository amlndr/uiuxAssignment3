import React, { useState} from "react";
import '../App.css';

import firebase from '../firebase';
import {Link} from 'react-router-dom';

const db = firebase.firestore();


const DonateBookForm = ({history}) => {

    const [newTitle, setTitle] = useState('');
    const [newAuthor, setAuthor] = useState('');
    const [newISBN, setISBN] = useState('');
    const [newCond, setCond]=useState('');

    const [newName, setName]=useState('');
    const [newPhone, setPhone]=useState('');
    const [newEmail, setEmail]=useState('');
    const [newAddress, setAddress]=useState('')
    const [newDate,setDate]=useState('');

    const onCreate = (e)=>{
        e.preventDefault()

        db.collection("donate").add({
            title : newTitle,
            author : newAuthor,
            isbn : newISBN,
            condition : newCond,
            name : newName,
            phone : newPhone,
            address : newAddress,
            collectDate : newDate,
            status : "to be collected"
        });
        history.push('/yourdonations');

    }
    return (
        <>
        <div class=" text-center max-w-xl min-w-full mx-auto py-10 px-12 
             ">
            <h2 class=" tracking-tight text-gray-900 ">
                <Link to="/" class="block text-4xl text-indigo-500 hover:text-green-500">book<b>Donate</b></Link>
            </h2>
        
            <h2 class="font-bold text-xl mt-10">Let's donate!</h2>
            <p class="text-xs">
                Please fill in this form to donate your book. <br></br>
                We will happily collect your book from your home.
            </p>
        <div class= "flex justify-center">
            <div class="text-left  justify-center items-center ">
                <h1 class="font-bold text-lg mt-10 text-indigo-500">1. About Book</h1>
                <p class="text-xs">
                    Please tell us more about the book you want to donate
                </p>

                <form onSubmit ={onCreate}
                    class="block mt-5 space-y-4 ">
                    <div>
                        <label class="font-bold block">Title</label>
                        <input value = {newTitle}
                            onChange = {e => setTitle(e.target.value)}
                            class="rounded-lg bg-indigo-50 p-2 w-full ext-sm width-full"
                            type="text" id="bookTitle" name="bookTitle" 
                            placeholder="Title" />
                    </div>

                    <div>
                        <label class="font-bold block">Author</label>
                        <input value = {newAuthor}
                            onChange = {e => setAuthor(e.target.value)}
                            class="rounded-lg bg-indigo-50 p-2 w-full text-sm"
                            type="text" id="bookAuthor" name="bookAuthor" 
                            placeholder="Author" />
                    </div>

                    <div>
                        <label class="font-bold block">ISBN</label>
                        <input value = {newISBN}
                            onChange = {e => setISBN(e.target.value)}
                            class="rounded-lg bg-indigo-50 p-2 w-full text-sm"
                            type="text" id="isbn" name="isbn" 
                            placeholder="ISBN" />
                    </div>

                    <div>
                        <label class="font-bold block">Book Condition</label>
                        <select 
                            value={newCond} 
                            onChange = {e => {
                              const selected = e.target.value;
                              setCond(selected)
                            }} 
                            class="rounded-lg bg-indigo-50 p-2 w-full text-sm">
                            <option>New</option>
                            <option>Like New</option>
                            <option>Used</option>
                            <option>Very Used</option>
                        </select>
                    </div>

                    <h1 class="font-bold text-lg mt-10 text-indigo-500">2. About You</h1>
                <p class="text-xs">
                Please tell us your personal details so we can contact you 
further about your donation
                </p>

            
                    <div>
                        <label class="font-bold block">Full Name</label>
                        <input value = {newName}
                            onChange = {e => setName(e.target.value)}
                            class="rounded-lg bg-indigo-50 p-2 w-full ext-sm width-full"
                            type="text" id="name" name="name" 
                            placeholder="Your full name" />
                    </div>

                    <div>
                        <label class="font-bold block">Phone Number</label>
                        <input value = {newPhone}
                            onChange = {e => setPhone(e.target.value)}
                            class="rounded-lg bg-indigo-50 p-2 w-full text-sm"
                            type="text" id="phone" name="phone" 
                            placeholder="Your phone number" />
                    </div>

                    <div>
                        <label class="font-bold block">Email</label>
                        <input value = {newEmail}
                            onChange = {e => setEmail(e.target.value)}
                            class="rounded-lg bg-indigo-50 p-2 w-full text-sm"
                            type="text" id="email" name="email" 
                            placeholder="example@gmail.com" />
                    </div>

                    <div>
                        <label class="font-bold block">Home Address</label>
                        <input value = {newAddress}
                            onChange = {e => setAddress(e.target.value)}
                            class="rounded-lg bg-indigo-50 p-2 w-full text-sm"
                            type="text" id="address" name="address" 
                            placeholder="Please write your full address" />
                    </div>

                    <h1 class="font-bold text-lg mt-10 text-indigo-500">3. Collection Date</h1>
                <p class="text-xs">
                When can we collect your book donation?
                </p>

                <div>
                        <label class="font-bold block">Please choose a date.</label>
                        <input value = {newDate}
                            onChange = {e => setDate(e.target.value)}
                            class="rounded-lg bg-indigo-50 p-2 w-full text-sm"
                            type="date" id="collectDate" name="collecDate" 
                            placeholder="DD/MM/YYYY" />
                </div>
                    
                    <button 
                        class=" space-y-12 px-5  py-3 border 
                            border-transparent text-base font-medium rounded-md text-white bg-indigo-500 
                            hover:bg-green-500">
                Donate!
              </button>
                    
                </form>

         </div>
        

               
            </div>
            <div class="block text-center mt-10 inset-x-0 bottom-3 ">
            <p class="text-gray-300">by Nadira Amelia</p>
        </div>

          

        </div>

        
        </>
      
    )
  }

  
  export default DonateBookForm;