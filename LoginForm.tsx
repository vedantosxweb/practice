import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface LoginFormData {
  email: string;
  password: string;
}

const correctCredentials = {
  email: 'user@example.com',
  password: 'password123',
};

const LoginForm: React.FC = () => {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<LoginFormData>();
  const [backendError, setBackendError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    setBackendError(null);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (
      data.email === correctCredentials.email &&
      data.password === correctCredentials.password
    ) {
      console.log('Login successful!');
    } else {
      setError('root', { type: 'backend', message: 'Invalid email or password' });
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
            })}
          />
          {errors.password && (
            <div style={{ color: 'red', fontSize: 12 }}>{errors.password.message}</div>
          )}
        </div>
        {errors.root && (
          <div style={{ color: 'red', fontSize: 13, marginBottom: 12 }}>{errors.root.message}</div>
        )}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
