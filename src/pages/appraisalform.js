import React from 'react'
import '../styles/contact.css'
import '../styles/appraisalform.css'
import Navbar from '../components/navbar'
import emailjs from 'emailjs-com'

function AppraisalForm() {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_fuesofr', 'template_bc6dhom', e.target, 'user_A4JTP5YDSYz7XWYPk0RHh')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        const submitBtn = document.querySelector('.submit-btn')
        submitBtn.value = 'Sent'
        submitBtn.style.backgroundColor = 'green'
    }

    return (
        <>
        <Navbar />
            <div className="rental-appraisal" id='freeappraisal'>
                <h1>Apply for your free rental appraisal</h1>
                <div className="appraisal-container">
                    <div className="form-wrapper">
                        <form className='form' onSubmit={sendEmail}>
                            <div className='form-field'>
                                <label>Name</label>
                                <input type="text" name='name'/>
                            </div>
                            <div className='form-field'>
                                <label>Email</label>
                                <input type="email" name='email' />
                            </div>
                            <div className='form-field'>
                                <label>Phone</label>
                                <input type="text" name='phone' />
                            </div>
                            <div className='form-field'>
                                <label>Address to be appraised</label>
                                <input type="text" name='address' />
                            </div>
                            <div className='form-field message'>
                                <label>Your message</label>
                                <textarea type="text" name='message' />
                            </div>
                            <div >
                                <input className='submit-btn' type="submit" value='Send' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppraisalForm
