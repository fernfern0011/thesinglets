import React from 'react';
import dynamic from 'next/dynamic';
import styles from '../../styles/registration_page.module.css';
import RegistrationForm from './RegistrationForm';

const DynamicRegistrationForm = dynamic(() => import('./RegistrationForm'), {
  ssr: false,
});

export default function Registration() {
  return (
    <main className={styles.main}>
      <div className={styles.form}>
        <h1 className={styles.title}>Register</h1>
        <RegistrationForm />
      </div>
    </main>
  );
}
