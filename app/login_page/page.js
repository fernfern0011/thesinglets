'use client'
import React, { useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import styles from '../../styles/login_page.module.css'
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'next/router';

export default function login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password);

        //make get request from router to get email and password, 
        //so will get the api to call and compare input email and if theres email existing in db
        //if email not in db, json send account not found 
        //if email found, check if password is correct
        //if both email and password correct, redirect back to landing page with session
        axios.get(`http://localhost:3500/api/account/getAccountByEmail/${email}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(({data}) => {
              console.log(data)
              console.log(data.accPassword)
              console.log(data.accEmail)

              if (data) {
                // Compare the input password with the password from the database
                if (password === data.accPassword) {
                  // Redirect to the landing page after successful login
                  router.push('/landing_page2');
                } 
                else {
                  alert('Incorrect password. Please try again.');
                }
              } 
              else {
                alert('Email not found. Please try again.');
              }
            })
            .catch((error) => {
                alert(error);
                console.log('ERROR: '+ error);
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
