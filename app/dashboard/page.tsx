import Link from "next/link";

export const metadata = {
    title: "dashboard"
}

export default function Dashboard(){
    return (
       <>
        <h2 className="text-4xl text-center text-purple-500 p-8">Dashboard page</h2>
        <Link href={"/dashboard/invoices"}>Invoices</Link>
        <Link href={"/dashboard/customers"}>Customers</Link>
       </>
    )
}