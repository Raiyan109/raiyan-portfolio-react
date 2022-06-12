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

    // const { register, formState: { errors }, handleSubmit } = useForm();

    // const onSubmit = data => {
    //     console.log(data);

    //     emailjs.sendForm('gmail', 'template_dx3kt4x', form.current, 'W_0i0So-npwUb6b5D')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });

    // };

    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <label>Name</label>
        //     <input type="text" name="user_name"
        //         {...register("name", {
        //             required: {
        //                 value: true,
        //                 message: 'Name is Required'
        //             }
        //         })} />
        //     <label>Email</label>
        //     <input type="email" name="user_email"
        //         {...register("email", {
        //             required: {
        //                 value: true,
        //                 message: 'Email is Required'
        //             },
        //             pattern: {
        //                 value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
        //                 message: 'Provide a valid email'
        //             }
        //         })}
        //     />
        //     <label>Message</label>
        //     <textarea name="message"
        //         {...register("message", {
        //             required: {
        //                 value: true,
        //                 message: 'message is Required'
        //             }
        //         })}
        //     />
        //     <input type="submit" value="Send" />
        // </form>
        <form ref={form} onSubmit={sendEmail} id='contact-form'>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};

export default Contact;