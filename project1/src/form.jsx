import React, { useState, useRef } from "react";


function Form(props) {

    const passwordInput = useRef();

    const [user, setUser] = useState(
        {
            name: '',
            email: '',
            phoneNumber: '',
            phoneType: '',
            staff: '',
            bio: '',
            emailNotifs: ''
        }
    );

    const [errors, setErrors] = useState([]);

    const validate = () => {
        let errors = [];

        if (!user.name) {
            errors.push("Name cannot be empty");
        }

        if (!user.email){
            
            const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (!user.email.match(emailFormat)){
                errors.push("Email must be properly formated");
            }
        }
        if (!user.phoneNumber){
            if (!user.phoneNumber.match(/([0-9]{3})[\.-]?([0-9]{3})[\.-]?([0-9]{4})$/)){
                errors.push("Phone number must be 10 digits");
            }
        }   

        
            if (!user.phoneType){

            }
         
        
    }

    const handleChange = (field) =>{
        return (e) =>{
            const newObj = Object.assign({}, user, {[field]: e.target.value})
            setUser(newObj)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = validate();

        console.log(user);

        if (errors.length) {
            setErrors(errors);
        };
    };

    const showErrors = () => {
        if (!errors.length) return null;

        return (
            <ul>
                {errors.map((error, i) => <li key={i}>{error}</li>)}
            </ul>
        )
    };

    return (
        <div>
            {/* {showErrors()} */}

            <label htmlFor="name">Name: 
                <input type="text" id="name" value={user.name} onChange={handleChange('name')}/>
            </label>

            <label htmlFor="email">Email: 
                <input type="email" id="email" value={user.email} onChange={handleChange('email')}/>
            </label>

            <label htmlFor="phone">Phone Number: 

                <input type="tel" id="phone" name="phone"
                    pattern="([0-9]{3})[\.-]?([0-9]{3})[\.-]?([0-9]{4})$"
                    required 
                    onChange={handleChange('phoneNumber')}/>

            </label>

            <label htmlFor="phoneType">Name: 
                <select name="phoneType" id="phoneType" onChange={handleChange("phoneType")}>

                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Mobile">Mobile</option>
                </select>
            </label>

            <label htmlFor="instructor">Instructor 
                <input name="staff" id="instructor" type="radio" />
            </label>

            <label htmlFor="student">Student
                <input name="staff" id="student" type="radio" />
            </label>

            <label htmlFor="bio">Bio
                <textarea name="bio" id="bio" rows="4" cols="50">{user.bio}</textarea>
            </label>

            <label htmlFor="emailNotifications"> Would you like to sign up for email notifications?
                <input type="checkbox" id ="emailNotifications" name="emailNotifications" />
            </label>

            <button>Submit</button>

        </div>
    )

}

export default Form;