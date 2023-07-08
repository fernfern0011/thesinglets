// import styles from '../../styles/login_page.module.css'

// export default function login() {
//     return (
//         <main className={styles.main}>
//             <div className={styles.form}>
//                 <h1 className={styles.h1}><strong>Login</strong></h1>
                
//                 <form action="/example.html" method="POST">
//                 <p>
//                     <label className={styles.formLabel} htmlFor="email">Email</label><br />
//                     <input className={styles.formInput} type="text" name="email" id="email" />
//                 </p>
//                 <p>
//                     <label className={styles.formLabel} htmlFor="password">Password</label><br />
//                     <input className={styles.formInput} type="text" name="password" id="password" />
//                 </p>
//                 </form>
                
//                 <form className={styles.input}>
//                 <input className={`${styles.lowerButton} ${styles.inputHover}`} type="submit" value="LOGIN" style={{ width: '210px' }} />
//                 </form>
                
//                 <a className={styles.register} href="/registration_page">Register</a>
//             </div>
//         </main>
//     )
// }

// login_page.js
import React from 'react';
import styles from '/styles/login_page.module.css';

export default function LoginPage() {
  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <h1 className={styles.h1}>
          <strong>Login</strong>
        </h1>

        <form action="/example.html" method="POST">
          <p>
            <label className={styles.formLabel} htmlFor="email">
              Email
            </label>
            <br />
            <input className={styles.formInput} type="text" name="email" id="email" />
          </p>
          <p>
            <label className={styles.formLabel} htmlFor="password">
              Password
            </label>
            <br />
            <input className={styles.formInput} type="text" name="password" id="password" />
          </p>
        </form>

        <form className={styles.input}>
          <input className={`${styles.lowerButton} ${styles.inputHover}`} type="submit" value="LOGIN" style={{ width: '210px' }} />
        </form>

        <a className={styles.register} href="/registration_page">
          Register
        </a>
      </div>
    </main>
  );
}