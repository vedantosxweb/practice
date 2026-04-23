import React, { useState } from 'react';

function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({ name: false, email: false, password: false });

  const emailValid = email.includes('@');
  const passwordValid = password.length >= 6;
  const nameValid = name.trim().length > 0;
  const formValid = emailValid && passwordValid && nameValid;

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    alert('Form submitted!');
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            onBlur={() => handleBlur('name')}
          />
          {touched.name && !nameValid && (
            <div style={{ color: 'red', fontSize: 12 }}>Name is required.</div>
          )}
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onBlur={() => handleBlur('email')}
          />
          {touched.email && !emailValid && (
            <div style={{ color: 'red', fontSize: 12 }}>Email must contain @</div>
          )}
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onBlur={() => handleBlur('password')}
          />
          {touched.password && !passwordValid && (
            <div style={{ color: 'red', fontSize: 12 }}>Password must be at least 6 characters</div>
          )}
        </div>
        <button type="submit" disabled={!formValid} style={{ padding: '6px 16px' }}>
          Submit
        </button>
      </form>
      <div style={{ marginTop: 24, background: '#f9f9f9', padding: 12, borderRadius: 4 }}>
        <h4>Live Preview:</h4>
        <div><strong>Name:</strong> {name}</div>
        <div><strong>Email:</strong> {email}</div>
        <div><strong>Password:</strong> {password}</div>
      </div>
    </div>
  );
}

export default SignupForm;
