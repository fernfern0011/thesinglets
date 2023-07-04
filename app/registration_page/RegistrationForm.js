import React from 'react';
import styles from '../../styles/registration_page.module.css';

export default function RegistrationForm() {
  // State variables
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmation, setConfirmation] = React.useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform registration API request
    fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
        confirmation,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Display registration success message
        alert('Registration successful');
        // Reset form fields
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmation('');
      })
      .catch((error) => {
        console.error('Registration failed:', error);
        // Display registration error message
        alert('Registration failed');
      });
  };

  return (
    <form className={styles.registrationForm} onSubmit={handleSubmit}>
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

      <button type="submit" className={styles.button}>
        Register
      </button>
    </form>
  );
}
