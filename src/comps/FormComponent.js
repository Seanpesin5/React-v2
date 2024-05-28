import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FormContext } from '../context/FormContext';
import '../css/Form.css';

const FormComponent = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { setFormData } = useContext(FormContext);
    const onSubmit = data => setFormData(data);

    const email = watch('email');

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        {...register('name', {
                            required: 'Name is required',
                            minLength: {
                                value: 2,
                                message: 'Name must be at least 2 letters long',
                            },
                            pattern: {
                                value: /^[A-Za-z\s]+$/,
                                message: 'Name must only contain English letters and spaces',
                            }
                        })}
                    />
                    {errors.name && <p className="error">{errors.name.message}</p>}
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                                message: 'Enter a valid email address',
                            }
                        })}
                    />
                    {errors.email && <p className="error">{errors.email.message}</p>}
                </div>

                <div className="form-group">
                    <label>Repeat Email:</label>
                    <input
                        type="email"
                        {...register('repeatEmail', {
                            required: 'Repeat Email is required',
                            validate: value => value === email || 'Emails do not match'
                        })}
                    />
                    {errors.repeatEmail && <p className="error">{errors.repeatEmail.message}</p>}
                </div>

                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 letters long',
                            }
                        })}
                    />
                    {errors.password && <p className="error">{errors.password.message}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormComponent;