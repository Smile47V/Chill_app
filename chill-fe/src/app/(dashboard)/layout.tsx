"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    return (
        <section className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 bg-[#6F87F8] text-white p-4 hidden md:block">
                <div className="relative w-40 h-28">
                    <Image
                        src="/dashboard/logo.png"
                        alt="Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <nav className="flex flex-col justify-between gap-6 text-[#FFFFFF]">
                    <Link href="/dashboard" className={pathname === "/dashboard" ? "bg-[#647ADF] p-2" : ""}>dashboard</Link>
                    <Link href="/user" className={pathname === "/user" ? "text-blue-500 font-bold" : ""}>User</Link>
                    <Link href="/events" className={pathname === "/events" ? "text-blue-500 font-bold" : ""}>events</Link>
                    <Link href="/requests" className={pathname === "/requests" ? "text-blue-500 font-bold" : ""}>Requests</Link>
                    <Link href="/financials" className={pathname === "/financials" ? "text-blue-500 font-bold" : ""}>Financials</Link>
                    <Link href="/admin" className={pathname === "/admin" ? "text-blue-500 font-bold" : ""}>Admin Management</Link>
                    <Link href="/report" className={pathname === "/report" ? "text-blue-500 font-bold" : ""}>Report</Link>
                    <Link href="/advert" className={pathname === "/advert" ? "text-blue-500 font-bold" : ""}>Advert</Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {children}
            </main>
        </section>
    );
}