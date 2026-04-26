"use client"
import { DataTable } from '@/components/shared/data-table'
import React from 'react'

function Admin() {

    const columns = [
        {
            key: "name",
            label: "Admin Name",
            className: "text-gray-600",
        },
        {
            key: "email",
            label: "Admin email",
            className: "text-gray-600",
        },
        {
            key: "status",
            label: "Status",
            render: (row: any) => (
                <div className={`font-medium ${row.status === "Active" ? "bg-[#D9F9EB] text-[#3B6A56]" : "bg-[#FDDED2] text-[#FA4B08]"} px-2 py-1 rounded-full w-fit`}>
                    {row.status === "Active" ? "Active" : "Deactivated"}
                </div>
            )
        },
    ]

    const data = [
        { id: "1", name: "John Doe", email: "john.doe@example.com", status: "Active" },
        { id: "2", name: "Mary Johnson", email: "mary.johnson@example.com", status: "Deactivated" },
        { id: "3", name: "David Smith", email: "david.smith@example.com", status: "Active" },
        { id: "4", name: "Linda Brown", email: "linda.brown@example.com", status: "Deactivated" },
        { id: "5", name: "Michael Williams", email: "michael.williams@example.com", status: "Active" },
        { id: "6", name: "Sarah Davis", email: "sarah.davis@example.com", status: "Deactivated" },
        { id: "7", name: "James Wilson", email: "james.wilson@example.com", status: "Active" },
        { id: "8", name: "Patricia Taylor", email: "patricia.taylor@example.com", status: "Deactivated" },
        { id: "9", name: "Robert Anderson", email: "robert.anderson@example.com", status: "Active" },
        { id: "10", name: "Jennifer Thomas", email: "jennifer.thomas@example.com", status: "Deactivated" },
    ];

    const handleMenuClick = (row: any) => {
        console.log("Menu clicked for row:", row);
    }
    return (
        <div className='h-screen'>
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className='font-bold text-2xl'>Events</h1>
                    <p className='text-gray-500'>Showing data over the past 30 days</p>
                </div>
                <div className='bg-[#6F87F8] cursor-pointer text-white px-4 py-2 rounded-3xl w-fit'>Add Admin</div>
            </div>
            <DataTable
                columns={columns}
                data={data}
                showMenu
                onMenuClick={handleMenuClick}
            />
        </div>
    )
}

export default Admin