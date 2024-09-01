// src/ComedyForm.js

import React, { useState } from 'react';
import axios from 'axios';

const ComedyForm = () => {
  const [theme, setTheme] = useState('');
  const [script, setScript] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setTheme(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

    try {
      const response = await axios.post('http://localhost:5001/generate-script', { theme });
      setScript(response.data.script);
    } catch (error) {
      console.error('Error generating script:', error);
      setError('Failed to generate script. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a theme for your comedy show:
          <input type="text" value={theme} onChange={handleChange} required />
        </label>
        <button type="submit">Generate Script</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {script && (
        <div>
          <h2>Generated Comedy Script</h2>
          <p>{script}</p>
        </div>
      )}
    </div>
  );
};

export default ComedyForm;
