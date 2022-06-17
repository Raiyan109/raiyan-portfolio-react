import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tl03tem', 'template_dx3kt4x', '#contact-form', 'W_0i0So-npwUb6b5D')
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className='flex justify-center items-center'>

            <form className='w-full max-w-lg ' ref={form} onSubmit={sendEmail} id='contact-form'>
                <label className='block uppercase tracking-wide font-bold mb-2'>Name</label>
                <input
                    className='appearance-none block w-full '
                    type="text" name="user_name" />
                <label
                    className='block uppercase tracking-wide font-bold mb-2'
                >Email</label>
                <input
                    className='appearance-none block w-full '
                    type="email" name="user_email" />
                <label
                    className='block uppercase tracking-wide font-bold mb-2'
                >Message</label>
                <textarea
                    className='appearance-none block w-full '
                    name="message" />
                <input
                    className='btn btn-outline mt-3'
                    type="submit" value="Send" />
            </form>
        </div>


    );
};

export default Contact;