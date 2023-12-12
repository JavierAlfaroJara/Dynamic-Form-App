import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { submitForm } from '../redux/formSlice';

import './FieldSet.css';

interface FieldSetProps {
    fields: any[];
}

const FieldSet: React.FC<FieldSetProps> = ({ fields }) => {
    
    // Added react-hook-form hook
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const renderField = (field: any) => {

        switch (field.type) {

            // Added more cases based on your requirements and most used field types
            case 'text':
                return (
                    <div className='fieldColumn' key={field.id}>
                        <label htmlFor={field.id}>{field.placeholder}</label>
                        <input
                            type={field.type}
                            id={field.id}
                            placeholder={field.placeholder}
                            name={field.id}
                            required={field.required}
                            {...register(field.id, { required: field.required }) as any}
                        />
                        {errors[field.id] && <span>This field is required</span>}
                    </div>
                );
            case 'textarea':
                return (
                    <div className='fieldColumn' key={field.id}>
                        <label htmlFor={field.id}>{field.placeholder}</label>
                        <textarea
                            id={field.id}
                            name={field.id}
                            required={field.required}
                            {...register(field.id, { required: field.required }) as any}
                        />
                    {errors[field.id] && <span>This field is required</span>}
                    </div>
                );
            case 'number':
                return (
                    <div className='fieldColumn' key={field.id}>
                        <label htmlFor={field.id}>{field.placeholder}</label>
                        <input
                            type={field.type}
                            id={field.id}
                            placeholder={field.placeholder}
                            name={field.id}
                            required={field.required}
                            {...register(field.id, { required: field.required }) as any}
                        />
                    {errors[field.id] && <span>This field is required</span>}
                    </div>
                );
            case 'email':
                return (
                    <div className='fieldColumn' key={field.id}>
                        <label htmlFor={field.id}>{field.placeholder}</label>
                        <input
                            type={field.type}
                            id={field.id}
                            placeholder={field.placeholder}
                            name={field.id}
                            required={field.required}
                            {...register(field.id, { required: field.required }) as any}
                        />
                    {errors[field.id] && <span>This field is required</span>}
                    </div>
                );
            case 'password':
                return (
                    <div className='fieldColumn' key={field.id}>
                        <label htmlFor={field.id}>{field.placeholder}</label>
                        <input
                            type={field.type}
                            id={field.id}
                            placeholder={field.placeholder}
                            name={field.id}
                            required={field.required}
                            {...register(field.id, { required: field.required }) as any}
                        />
                    {errors[field.id] && <span>This field is required</span>}
                    </div>
                );
            case 'select':
                return (
                    <div className='fieldColumn' key={field.id}>
                        <label htmlFor={field.id}>{field.placeholder}</label>
                        <select
                            id={field.id}
                            name={field.id}
                            required={field.required}
                            {...register(field.id, { required: field.required }) as any}
                        >
                            {field.options.map((option: string) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    {errors[field.id] && <span>This field is required</span>}
                    </div>
                );
            case 'checkbox':
                return (
                    <div className='fieldColumn' key={field.id}>
                        <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            required={field.required}
                            {...register(field.id, { required: field.required }) as any}
                        />
                        <label htmlFor={field.id}>{field.placeholder}</label>
                    {errors[field.id] && <span>This field is required</span>}
                    </div>
                );
            case 'date':
                return (
                    <div className='fieldColumn' key={field.id}>
                        <label htmlFor={field.id}>{field.placeholder}</label>
                        <input
                            type={field.type}
                            id={field.id}
                            placeholder={field.placeholder}
                            name={field.id}
                            required={field.required}
                            {...register(field.id, { required: field.required }) as any}
                        />
                    {errors[field.id] && <span>This field is required</span>}
                    </div>
                );
            case 'radio':
                return (
                    <div className='fieldColumn' key={field.id}>
                        <label htmlFor={field.id}>{field.placeholder}</label>
                        {field.options.map((option: string) => (
                            <div key={option}>
                                <input
                                    type={field.type}
                                    id={option}
                                    name={field.id}
                                    required={field.required}
                                    {...register(field.id, { required: field.required }) as any}
                                />
                                <label htmlFor={option}>{option}</label>
                            </div>
                        ))}
                    {errors[field.id] && <span>This field is required</span>}
                    </div>
                );
            default:
                return null;
        }
    }

    const dispatch = useDispatch();

    // Added onSubmit function
    const onSubmit = (data: any) => {
        dispatch(submitForm(data));

        // Redirect to thank you page
        navigate('/thank-you');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
                <div className='fieldRow' key={index}>
                    {Array.isArray(field) ? 
                        field.map((subField) => renderField(subField))
                        :
                        renderField(field)
                    }
                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
};

export default FieldSet;