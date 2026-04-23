import React, { useRef } from 'react';

function FeedbackForm() {
  const nameRef = useRef();
  const feedbackRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log values without causing re-render
    console.log('Name:', nameRef.current.value);
    console.log('Feedback:', feedbackRef.current.value);
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Name:</label><br />
          <input type="text" ref={nameRef} />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Feedback:</label><br />
          <textarea ref={feedbackRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
