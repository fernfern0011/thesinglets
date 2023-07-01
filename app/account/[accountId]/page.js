import Account from "./account";

const Page = async ({ params }) => {

    const accountByID = await fetch(`http://localhost:3500/api/account/getAccount/${params.accountId}`,
        { next: { revalidate: 2 } })
        .then((res) => res.json())

    return <Account account={accountByID} />
}

export default Page