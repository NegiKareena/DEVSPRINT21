import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // Replace with your submission logic
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className='mt-4 space-y-2'>
                        <label className="block text-gray-700">Name</label>
                        <input 
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-3 py-2 border rounded-md outline-none"
                            {...register("name", { required: "This field is required" })}
                        />
                        {errors.name && (
                            <span className="text-sm text-red-500">{errors.name.message}</span>
                        )}
                    </div>

                    <div className='mt-4 space-y-2'>
                        <label className="block text-gray-700">Email</label>
                        <input 
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border rounded-md outline-none"
                            {...register("email", { required: "This field is required" })}
                        />
                        {errors.email && (
                            <span className="text-sm text-red-500">{errors.email.message}</span>
                        )}
                    </div>

                    <div className='mt-4 space-y-2'>
                        <label className="block text-gray-700">Message</label>
                        <textarea 
                            placeholder="Enter your message"
                            className="w-full px-3 py-2 border rounded-md outline-none"
                            {...register("message", { required: "This field is required" })}
                        />
                        {errors.message && (
                            <span className="text-sm text-red-500">{errors.message.message}</span>
                        )}
                    </div>

                    <div className="flex justify-between items-center">
                        <button type="submit" className="bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200">
                            Submit
                        </button>
                        <Link to="/" className="text-blue-500 hover:underline">Go to Home</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
