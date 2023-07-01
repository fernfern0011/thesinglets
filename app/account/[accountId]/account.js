const Account = ({ account }) => {

    return (
        <section className="m-4 py-4">
            <div className="center">
                <h1 className="text-xl font-bold">{account?.accUsername}</h1>
                <p className="text-m font-bold">{account?.accEmail}</p>
            </div>
        </section>
    )
}

export default Account