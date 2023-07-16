import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styles/registration_page.module.css';

const Registration = () => {
  // State variables
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [accounts, setAccount] = useState(null);

  useEffect(() => {});

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmation) {
      setErrorMessage('Password and Confirm Password do not match');
      return;
    }

    try {
      // Send a POST request to the registration endpoint
      const response = await axios.post('http://localhost:3500/api/account/createNewAccount', {
        accUsername: username,
        accEmail: email,
        accPassword: password,
      });

      // Handle the response
      console.log(response.data); // You can display a success message or perform any other actions here

      // Reset form fields
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmation('');

      // Optionally, you can update the state to show a success message or redirect the user to a success page
      // For example:
      // setAccount(response.data);
      // alert('Registration successful!');

    } catch (error) {
      console.error('Error during Registration:', error);
      setErrorMessage('An error occurred during registration.');
    }
  };

  console.log(accounts);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Register</h1>
      <p>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>
        <input
          type="text"
          id="username"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </p>
      <br />
      <p>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="text"
          id="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <br />
      <p>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          id="password"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <br />
      <p>
        <label htmlFor="confirmation" className={styles.label}>
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmation"
          className={styles.input}
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
        />
      </p>
      <br />
      <button type="submit" className={styles.button}>
        Register
      </button>
    </form>
  );
};

export default Registration;
