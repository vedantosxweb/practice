import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface RegistrationFormData {
  fullName: string;
  email: string;
  password: string;
  age: number;
}

const defaultValues: RegistrationFormData = {
  fullName: 'Guest User',
  email: '',
  password: '',
  age: 18,
};

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({ defaultValues });

  const onSubmit: SubmitHandler<RegistrationFormData> = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div style={{ marginBottom: 12 }}>
          <label>Full Name:</label><br />
          <input
            type="text"
            {...register('fullName', {
              required: 'Full Name is required',
              minLength: { value: 3, message: 'Minimum 3 characters' },
            })}
          />
          {errors.fullName && (
            <div style={{ color: 'red', fontSize: 12 }}>{errors.fullName.message}</div>
          )}
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Email Address:</label><br />
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && (
            <div style={{ color: 'red', fontSize: 12 }}>{errors.email.message}</div>
          )}
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Password:</label><br />
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Minimum 6 characters' },
              validate: value =>
                /\d/.test(value) || 'Password must include at least one numeric digit',
            })}
          />
          {errors.password && (
            <div style={{ color: 'red', fontSize: 12 }}>{errors.password.message}</div>
          )}
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Age:</label><br />
          <input
            type="number"
            {...register('age', {
              required: 'Age is required',
              min: { value: 18, message: 'Minimum age is 18' },
              max: { value: 60, message: 'Maximum age is 60' },
              valueAsNumber: true,
            })}
          />
          {errors.age && (
            <div style={{ color: 'red', fontSize: 12 }}>{errors.age.message}</div>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
