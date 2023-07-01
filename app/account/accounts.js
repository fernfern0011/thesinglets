'use client'
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Accounts() {
    const [accounts, setAccount] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:3500/api/account/getAllAccounts')
            .then((res) => res.json())
            .then((accounts) =>
                setAccount(accounts))
        setLoading(false)
    }, [accounts])

    if (isLoading) return <p>Loading...</p>

    return (
        <section className="fixed h-full w-1/4 bg-stone-800">
            <div className="center py-4">
                <h2 className="mb-4 text-xl font-medium text-white">
                    Accounts
                </h2>
                <ul className="flex flex-col text-sm text-white">
                    {accounts?.map(account => (
                        <li key={account._id}>
                            <Link href={`/account/${account._id}`}>{account.accUsername}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}