'use client'
import { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        access_key: 'cf3e4082-630c-4852-b1c2-092f12c61ac8', // Private
    });

    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const [submitStatus, setSubmitStatus] = useState(null); // useState to conditionally display form submission status
    const [submitting, setSubmitting] = useState(false);

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
            setSubmitting(true);
            // API call to submit form
            const response = await axios.post('https://api.web3forms.com/submit', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Clear form fields righy after gettting a response
            setFormData({
                name: '',
                email: '',
                message: '',
            });

            const result = response.data;
            if (result.success) {
                //console.log(result);
                setSubmitStatus('success'); // Gives user success confirmation for 3 seconds
                setTimeout(() => {
                    setSubmitStatus(null);
                }, 3000);
                setSubmitting(false);
            } else {
                //console.error(result);
                setSubmitStatus('error');
                // Handle form submission errors.
                setTimeout(() => {
                    setSubmitStatus(null);  // Gives user error message for 3 seconds
                }, 3000);
                setSubmitting(false);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Add code here to handle network errors.
            setSubmitStatus('error');
            setSubmitting(false);
            setFormData({
                name: '',
                email: '',
                message: '',
            });
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
                        required={true}
                    />
                    <input
                        className='block h-8 rounded-xl'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required={true}
                    />
                    <textarea
                        className='block h-28 rounded-xl'
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        required={true}

                    ></textarea>
                </div>

                <div className='flex flex-col gap-5 md:gap10 md:flex-row place-content-evenly'>
                    {/* GOOGLE reCAPTCHA */}
                    <ReCAPTCHA sitekey='6LfhPnIoAAAAAKg9bLqfDj1i_VpLM3XrOU7QKrRX' onChange={handleRecaptchaChange} />
                    <button disabled={submitting} className='btn btn-outline btn-primary' type="submit" onClick={console.log('click')}>
                        {submitting === true ? "Submitting..." : "Submit Form" /* Let user know form is being submitted */}
                    </button>
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