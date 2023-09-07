import React, {useState, useEffect, useCallback} from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';

function Contact(props) {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();

    const [isPostSuccessful, setIsPostSuccessful] = useState(false)
    
    const resetForm = useCallback(() => {
        reset({
            firstname: "",
            lastname: "",
            email: "",
            message: ""
        });
    }, [reset])

    const onSubmit = (data) => {
        const payload = JSON.stringify(data)
        axios.post('https://webhook.site/6bafa11c-c2fe-4678-9396-fb1547534a2f', payload)
        .then((response) => {
            setIsPostSuccessful(true)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        if (!isPostSuccessful){ return }

        resetForm();
        
        const timer = setTimeout(() => {
            setIsPostSuccessful(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [isPostSuccessful, resetForm])

    return (
        <div className="p-5 bg-light text-dark">
            <div className="container">
                <form className="row g-3 p-3 rounded-4" style={{backgroundColor: "#ecf0f1"}} onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6">
                        <label htmlFor="inputFirstname4" className="form-label">Firstname</label>
                        <input type="Firstname" name='firstname' className="form-control" id="inputFirstname4" 
                        {...register('firstname', { required: "Firstname is required"})}/>

                        {errors.firstname &&
                            <div className="mt-2 d-block invalid-feedback">
                                {errors.firstname.message}
                            </div>
                        }
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputLastname4" className="form-label">Lastname</label>
                        <input type="Lastname" name='lastname' className="form-control" id="inputLastname4" 
                        {...register('lastname', {required: "Lastname is required"})}/>

                        {errors.lastname &&
                            <div className="mt-2 d-block invalid-feedback">
                                {errors.lastname.message}
                            </div>
                        }
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail" name='email'
                        {...register('email', {
                            required: "Email is required", 
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Entered value does not match email format"
                            }
                        })}/>

                        {errors.email &&
                            <div className="mt-2 d-block invalid-feedback">
                                {errors.email.message}
                            </div>
                        }
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputMessage" className="form-label">Message</label>
                        <textarea name="message" className="form-control" id="inputMessage" cols="30" rows="4" 
                        {...register('message', {required: "Message is required"})}></textarea>

                        {errors.message &&
                            <div className="mt-2 d-block invalid-feedback">
                                {errors.message.message}
                            </div>
                        }
                    </div>
                    <div className="col-12">
                        <button type="submit" disabled={isSubmitSuccessful} className="btn btn-primary text-uppercase">
                            Send
                            { isPostSuccessful && <>&emsp;<i className="fa-solid fa-check"></i></> }
                            { isSubmitSuccessful && <>&emsp;<i className="fa-solid fa-circle-notch fa-spin"></i></> }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;