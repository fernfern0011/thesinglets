import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useClient } from 'react-ssr-client';
import styles from '../../styles/login_page.module.css'

export default function login() {
    useClient(); // Mark the component as a client component
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Make a POST request to your login API endpoint
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server
                if (data.success) {
                    // Redirect the user to the desired page
                    router.push('/landing_page2');
                } else {
                    // Show an error message to the user
                    console.log('Login failed. Please try again.');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <main className={styles.main}>
            <div className={styles.form}>
                <h1 className={styles.h1}><strong>Login</strong></h1>

                <form onSubmit={handleSubmit}>
                    <p>
                        <label className={styles.formLabel} htmlFor="email">Email</label><br />
                        <input
                            className={styles.formInput}
                            type="text"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </p>
                    <p>
                        <label className={styles.formLabel} htmlFor="password">Password</label><br />
                        <input
                            className={styles.formInput}
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </p>
                {/* </form> */}

                {/* <form className={styles.input}> */}
                <input
                    className={`${styles.lowerButton} ${styles.inputHover}`}
                    type="submit"
                    value="LOGIN"
                    style={{ width: '210px' }}
                />
            </form>

            <a className={styles.register} href="/registration_page">Register</a>
        </div>
        </main >
    )
}
