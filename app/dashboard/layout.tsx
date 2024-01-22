import SideNav from "../ui/dashboard/sidenav";

export default function DashboardLayout({children}:{children:React.ReactNode}){
    return(
        <>
            <div className="flex flex-col md:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64">
                    <SideNav></SideNav>
                </div>
                <div className="p-6 md:p-12 flex-grow md:overflow-y-auto">
                    {children}
                </div>
            </div>
        </>
    )
}