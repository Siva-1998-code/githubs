import React, { useState } from 'react';



const Login = () => {
    const [formState, setFormState] = useState({
        name: '',
        password: ''
    });
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};
        if (!formState.name.trim()) {
            errors.name = 'Name is required';
        }
        else if (!/^[A-Z][a-z][A-Za-z]+$/.test(formState.name)) {
            errors.name = 'First letter is capital and Enter alphabets only';
        }
        else {
            errors.name = ' ';
        }

        if (!formState.password.trim()) {
            errors.password = 'Password is required';
        } else if (formState.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }
        return errors;
    };

    const handleSubmit = e => {
        e.preventDefault();
        const errors = validateForm();
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            // submit the form data
            console.log(formState);
        }
    };

    const handleChange = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
                <span className="fa fa-sign-in me-1"></span> Login
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-google me-2"></span> Sign up With Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span> Sign up With Facebook
                            </button>
                            <form onSubmit={handleSubmit} className="from" autoComplete='off'>
                                <div className="from-group mb-3">
                                    <label htmlFor="name" className="form-label">User Name:</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder='Enter User Name'
                                        value={formState.name}
                                        onChange={handleChange}
                                    />
                                    {errors.name && <span>{errors.name}</span>}
                                </div>

                                <div className="from-group mb-3">
                                    <label htmlFor="password" className="form-label">Password:</label>
                                    <input
                                        className="form-control"
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder='Enter Password'
                                        value={formState.password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && <span>{errors.password}</span>}
                                </div>
                                <button type="submit" className='btn btn-primary'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login