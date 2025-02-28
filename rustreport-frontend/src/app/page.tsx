import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/sidebar";
import ProfileDropdown from "@/components/profile-dropdown";
import ReportsTable from "@/components/reports-table";
import {getAuthOptions} from "@/app/auth";

export default async function DashboardPage() {
    const session = await getServerSession(getAuthOptions());

    if (!session) {
        redirect("/auth/signin");
    }

    return (
        <div className="min-h-screen bg-gray-900 flex">
            {/* Sidebar */}
            <Sidebar />
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-gray-900 p-4 flex justify-end">
                    <ProfileDropdown user={session.user.steam} />
                </header>
                {/* Reports Table */}
                <main className="flex-1 p-8">
                    <ReportsTable />
                </main>
            </div>
        </div>
    );
}