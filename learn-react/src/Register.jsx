import { em } from "framer-motion/client";
import { useState } from "react";

function Register() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        hobbies: []
    });

    const [errors, setErrors] = useState({});

    console.log('FormData: ', formData);

    function handleChange(event){
        const {name, value, type, checked} = event.target;
        validateInput(name, value);
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (checked ? [...prev.hobbies, value] : prev.hobbies.filter(hobby => hobby !== value)) : value
        }))
       
    }

    function validateInput(name, value){
        if(name === 'fullName'){
            if(!value){
                setErrors(prev => ({
                    ...prev,
                    fullName: 'Full name is required'
                }))
            }else if(value.length < 5){
                setErrors(prev => ({
                    ...prev,
                    fullName: 'Full name must be at least 5 characters long'
                }))
            }else{
               setErrors(prev => ({
                    ...prev,
                    fullName: ''
                }))
            }
        }

        if(name === 'email'){
            if(!value){
                setErrors(prev => ({
                    ...prev,
                    email: 'Email is required'
                }))
            }
            else if(!/\S+@\S+\.\S+/.test(value)){
                setErrors(prev => ({
                    ...prev,
                    email: 'Email is invalid'
                }))
            }
            else{
                setErrors(prev => ({
                    ...prev,
                    email: ''
                }))
            }
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log('Form submitted: ', formData);
    }

    return (
        <>
            <h1 className="font-bold">Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input className="border-1" type="text" id="fullName"v name="fullName" onChange={handleChange} placeholder="John Smith" required/>
                    {
                        errors.fullName && <p className="text-red-500">{errors.fullName}</p>
                    }
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input className="border-1" type="email" id="email" name="email" onChange={handleChange} />
                    {
                        errors.email && <p className="text-red-500">{errors.email}</p>
                    }
                </div>
                <div>
                    <label> Hobbies</label>
                    <input type="checkbox" id="hobby1" name="hobbies" value="Reading" onChange={handleChange} />
                    <label htmlFor="hobby1">Reading</label>
                    <input type="checkbox" id="hobby2" name="hobbies" value="Traveling" onChange={handleChange} />
                    <label htmlFor="hobby2">Traveling</label>
                    <input type="checkbox" id="hobby3" name="hobbies" value="Cooking" onChange={handleChange} />
                    <label htmlFor="hobby3">Cooking</label>
                    <input type="checkbox" id="hobby4" name="hobbies" value="Sports" onChange={handleChange} />
                    <label htmlFor="hobby4">Sports</label>
                    {
                        errors.hobbies && <p className="text-red-500">{errors.hobbies}</p>
                    }
                </div>

                <div>
                    <label>Country</label>
                    <select name="country" id="country" onChange={handleChange}>
                        <option value={'Canada'}>Canada</option>
                        <option value={'Ireland'}>Ireland</option>
                        <option value={'Germany'}>Germany</option>
                        <option value={'South Africa'}>South Africa</option>
                    </select>
                    {
                        errors.country && <p className="text-red-500">{errors.country}</p>
                    }
                </div>
                <button type="submit" className="mt-5 bg-[#000000] p-3 rounded-lg text-white">Register</button>
            </form>
        </>
    )
}

export default Register;