'use client'
import { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        access_key: 'cf3e4082-630c-4852-b1c2-092f12c61ac8', // Replace with your actual access key
    });

    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [submitStatus, setSubmitStatus] = useState(null); // useState to conditionally display form submission status

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!recaptchaValue) {
            alert("Please complete the reCAPTCHA.");
            return;
        }

        try {
            const response = await axios.post('https://api.web3forms.com/submit', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const result = response.data;
            if (result.success) {
                console.log(result);
                setSubmitStatus('success');
                // Clear form fields and reset submission status after 3 seconds
                setTimeout(() => {
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    });
                    setSubmitStatus(null);
                }, 3000);
            } else {
                console.error(result);
                setSubmitStatus('error');
                // Handle form submission errors.
                // Clear form fields and reset submission status after 3 seconds
                setTimeout(() => {
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    });
                    setSubmitStatus(null);
                }, 3000);

            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Add code here to handle network errors.
            setSubmitStatus('error');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-5 pb-5'>
                    <input
                        className='block h-8 rounded-xl '
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                    />
                    <input
                        className='block h-8 rounded-xl'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    <textarea
                        className='block h-28 rounded-xl'
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        required
                    ></textarea>
                </div>

                <div className='flex flex-col gap-5 md:gap10 md:flex-row place-content-evenly'>
                    {/* GOOGLE reCAPTCHA */}
                    <ReCAPTCHA sitekey='6LfhPnIoAAAAAKg9bLqfDj1i_VpLM3XrOU7QKrRX' onChange={handleRecaptchaChange} />
                    <button className='btn btn-outline btn-primary' type="submit" onClick={() => console.log('Click')}>Submit Form</button>
                </div>

                {/* Conditional success or error message */}
                {submitStatus === 'success' && (
                    <div className="alert alert-success">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>Your form has been submitted successfully!</span>
                    </div>
                )}
                {submitStatus === 'error' && (
                    <div className="alert alert-danger">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                        <span>There was an error. Please try again later.</span>
                    </div>
                )}
            </form>
        </div>
    );
}