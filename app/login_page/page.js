'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from '../../styles/login_page.module.css'
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, useNavigate, Redirect } from 'react-router-dom';
import sessionStorage from '../../sessionStorage';
import { useRouter } from "next/navigation";

//function for session timing after successful login
// function isSessionExpired() {
//   const sessionStartTime = parseInt(localStorage.getItem('sessionStartTime'));
//   const sessionDurationMinutes = parseInt(localStorage.getItem('sessionDurationMinutes'));
//   const currentTime = new Date().getTime();

//   const elapsedTimeMinutes = (currentTime - sessionStartTime) / (1000 * 60); // Convert milliseconds to minutes

//   return elapsedTimeMinutes >= sessionDurationMinutes;
// }


export default function login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

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
      .then(({ data }) => {
        console.log(data)
        console.log(data.accPassword)
        console.log(data.accEmail)

        // return data ? password === data.accPassword ? router.push('/landing_page2') 
        // : alert('Incorrect password. Please try again.') 
        // : alert('Email not found. Please try again.');

        if (data) {
          // Compare the input password with the password from the database
          if (password === data.accPassword) { 
            // If login is successful
            // const sessionStartTime = new Date().getTime();
            // const sessionDurationMinutes = 60;
            // localStorage.setItem('sessionStartTime', sessionStartTime);
            // localStorage.setItem('sessionDurationMinutes', sessionDurationMinutes);
            localStorage.setItem('userEmail', email);
            console.log(localStorage.getItem('userEmail'));
            // console.log(localStorage.getItem('sessionDurationMinutes'));
            // console.log(localStorage.getItem('sessionStartTime'));

            // Redirect to the landing page after successful login
            router.push('/about');

            // navigate('/about');
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
        console.log('ERROR: ' + error);
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
