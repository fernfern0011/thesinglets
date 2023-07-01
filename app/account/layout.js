import Accounts from "./accounts";

const AccountLayout = async ({ children }) => {
    return (
        <section className="flex">
            <aside className="w-1/4">
                <Accounts />
            </aside>
            <main>{children}</main>
        </section>
    )
}

export default AccountLayout