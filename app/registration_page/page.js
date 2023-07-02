import styles from '../../styles/registration_page.module.css'

export default function Registration() {
    return (
        <main className={styles.main}>
            <div className={styles.form}>

                <h1 className={styles.title} >Register</h1>

                <form action="/example.html" method="POST" class='regis'>
                    <p>
                        <label className={styles.label} for="username">Username</label><br />
                        <input className={styles.input} type="text" name="username" id="username" />
                    </p>
                    <p>
                        <label className={styles.label} for="email">Email</label><br />
                        <input className={styles.input} type="text" name="email" id="email" />
                    </p>
                    <p>
                        <label className={styles.label} for="password">Password</label><br />
                        <input className={styles.input} type="text" name="password" id="password" />
                    </p>
                    <p>
                        <label className={styles.label} for="confirmation">Confirm Password</label><br />
                        <input className={styles.input} type="text" name="confirmation" id="confirmation" />
                    </p>
                </form>
                <form className={styles.submit}>
                    <input type="submit" value="REGISTER" className={styles.lowerButton} style={{ width: '210px' }} />
                </form>
            </div>
        </main>
    )
}
