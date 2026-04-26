"use client"
import React, { useState } from 'react'
import Card from '../component/card'
import { DataTable } from "@/components/shared/data-table";
import { filterByDateRange } from "../component/global/datePicker";

function Financials() {

    const [date, setDate] = useState<Date | undefined>()

    const [dateRange, setDateRange] = useState<{
        from?: Date
        to?: Date
    }>({})

    const columns = [
        {
            key: "date",
            label: "Date",
            className: "text-gray-600",
        },
        {
            key: "transaction",
            label: "Transaction Id",
            className: "text-gray-600",
        },
        {
            key: "amount",
            label: "Amount ",
            className: "text-gray-600",
        },
        {
            key: "payment",
            label: "Payment Type",
            className: "text-gray-600",
        },
        {
            key: "status",
            label: "Status",
            render: (row: any) => (
                <div className={`font-medium ${row.status === "incoming" ? "bg-[#D9F9EB] text-[#3B6A56]" : "bg-[#FDDED2] text-[#FA4B08]"} px-2 py-1 rounded-full w-fit`}>
                    {row.status === "incoming" ? "Incoming" : "Outgoing"}
                </div>
            )
        },
    ]

    const data = [
        { id: "1", date: "2026-04-01", transaction: "#10234", amount: 45000, type: "public", payment: "registration", status: "incoming" },
        { id: "2", date: "2026-04-02", transaction: "#58321", amount: 120000, type: "private", payment: "vendor", status: "outgoing" },
        { id: "3", date: "2026-04-03", transaction: "#76452", amount: 78000, type: "public", payment: "completion", status: "incoming" },
        { id: "4", date: "2026-04-04", transaction: "#88901", amount: 25000, type: "private", payment: "refund", status: "outgoing" },
        { id: "5", date: "2026-04-05", transaction: "#34567", amount: 99000, type: "public", payment: "vendor", status: "outgoing" },

        { id: "6", date: "2026-04-06", transaction: "#11223", amount: 67000, type: "private", payment: "registration", status: "incoming" },
        { id: "7", date: "2026-04-07", transaction: "#99887", amount: 150000, type: "public", payment: "completion", status: "incoming" },
        { id: "8", date: "2026-04-08", transaction: "#77665", amount: 43000, type: "private", payment: "refund", status: "outgoing" },
        { id: "9", date: "2026-04-09", transaction: "#55443", amount: 82000, type: "public", payment: "vendor", status: "outgoing" },
        { id: "10", date: "2026-04-10", transaction: "#22119", amount: 56000, type: "private", payment: "registration", status: "incoming" },

        { id: "11", date: "2026-04-11", transaction: "#66332", amount: 72000, type: "public", payment: "completion", status: "incoming" },
        { id: "12", date: "2026-04-12", transaction: "#90909", amount: 38000, type: "private", payment: "refund", status: "outgoing" },
        { id: "13", date: "2026-04-13", transaction: "#12345", amount: 140000, type: "public", payment: "vendor", status: "outgoing" },
        { id: "14", date: "2026-04-14", transaction: "#67890", amount: 61000, type: "private", payment: "registration", status: "incoming" },
        { id: "15", date: "2026-04-15", transaction: "#45678", amount: 88000, type: "public", payment: "completion", status: "incoming" },

        { id: "16", date: "2026-04-16", transaction: "#33221", amount: 27000, type: "private", payment: "refund", status: "outgoing" },
        { id: "17", date: "2026-04-17", transaction: "#77889", amount: 93000, type: "public", payment: "vendor", status: "outgoing" },
        { id: "18", date: "2026-04-18", transaction: "#44556", amount: 52000, type: "private", payment: "registration", status: "incoming" },
        { id: "19", date: "2026-04-19", transaction: "#66778", amount: 101000, type: "public", payment: "completion", status: "incoming" },
        { id: "20", date: "2026-04-20", transaction: "#88990", amount: 30000, type: "private", payment: "refund", status: "outgoing" },

        { id: "21", date: "2026-04-21", transaction: "#54321", amount: 76000, type: "public", payment: "vendor", status: "outgoing" },
        { id: "22", date: "2026-04-22", transaction: "#67812", amount: 47000, type: "private", payment: "registration", status: "incoming" },
        { id: "23", date: "2026-04-23", transaction: "#78123", amount: 89000, type: "public", payment: "completion", status: "incoming" },
        { id: "24", date: "2026-04-24", transaction: "#89234", amount: 35000, type: "private", payment: "refund", status: "outgoing" },
        { id: "25", date: "2026-04-25", transaction: "#90345", amount: 115000, type: "public", payment: "vendor", status: "outgoing" },

        { id: "26", date: "2026-04-26", transaction: "#21456", amount: 66000, type: "private", payment: "registration", status: "incoming" },
        { id: "27", date: "2026-04-27", transaction: "#32567", amount: 134000, type: "public", payment: "completion", status: "incoming" },
        { id: "28", date: "2026-04-28", transaction: "#43678", amount: 29000, type: "private", payment: "refund", status: "outgoing" },
        { id: "29", date: "2026-04-29", transaction: "#54789", amount: 98000, type: "public", payment: "vendor", status: "outgoing" },
        { id: "30", date: "2026-04-30", transaction: "#65890", amount: 54000, type: "private", payment: "registration", status: "incoming" },

        { id: "31", date: "2026-05-01", transaction: "#76901", amount: 87000, type: "public", payment: "completion", status: "incoming" },
        { id: "32", date: "2026-05-02", transaction: "#87012", amount: 31000, type: "private", payment: "refund", status: "outgoing" },
        { id: "33", date: "2026-05-03", transaction: "#98123", amount: 122000, type: "public", payment: "vendor", status: "outgoing" },
        { id: "34", date: "2026-05-04", transaction: "#19234", amount: 49000, type: "private", payment: "registration", status: "incoming" },
        { id: "35", date: "2026-05-05", transaction: "#20345", amount: 95000, type: "public", payment: "completion", status: "incoming" },

        { id: "36", date: "2026-05-06", transaction: "#31456", amount: 26000, type: "private", payment: "refund", status: "outgoing" },
        { id: "37", date: "2026-05-07", transaction: "#42567", amount: 108000, type: "public", payment: "vendor", status: "outgoing" },
        { id: "38", date: "2026-05-08", transaction: "#53678", amount: 58000, type: "private", payment: "registration", status: "incoming" },
        { id: "39", date: "2026-05-09", transaction: "#64789", amount: 143000, type: "public", payment: "completion", status: "incoming" },
        { id: "40", date: "2026-05-10", transaction: "#75890", amount: 34000, type: "private", payment: "refund", status: "outgoing" },

        { id: "41", date: "2026-05-11", transaction: "#86901", amount: 99000, type: "public", payment: "vendor", status: "outgoing" },
        { id: "42", date: "2026-05-12", transaction: "#97012", amount: 62000, type: "private", payment: "registration", status: "incoming" },
        { id: "43", date: "2026-05-13", transaction: "#08123", amount: 87000, type: "public", payment: "completion", status: "incoming" },
        { id: "44", date: "2026-05-14", transaction: "#19235", amount: 41000, type: "private", payment: "refund", status: "outgoing" },
        { id: "45", date: "2026-05-15", transaction: "#29346", amount: 120000, type: "public", payment: "vendor", status: "outgoing" },

        { id: "46", date: "2026-05-16", transaction: "#39457", amount: 57000, type: "private", payment: "registration", status: "incoming" },
        { id: "47", date: "2026-05-17", transaction: "#49568", amount: 136000, type: "public", payment: "completion", status: "incoming" },
        { id: "48", date: "2026-05-18", transaction: "#59679", amount: 28000, type: "private", payment: "refund", status: "outgoing" },
        { id: "49", date: "2026-05-19", transaction: "#69780", amount: 91000, type: "public", payment: "vendor", status: "outgoing" },
        { id: "50", date: "2026-05-20", transaction: "#79891", amount: 64000, type: "private", payment: "registration", status: "incoming" },
    ];


    const filteredData = filterByDateRange(data, dateRange, "date")
    const handleMenuClick = (row: any) => {
        console.log("Menu clicked for row:", row);
    }
    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className='font-bold text-2xl'>Events</h1>
                    <p className='text-gray-500'>Showing data over the past 30 days</p>
                </div>
                <div className='bg-[#6F87F8] text-white px-4 py-2 rounded-3xl w-fit'>Set commission</div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-3 w-[80%] gap-3 mb-8">
                <Card
                    title=" Total Events Created"
                    description="6,000"
                    imageUrl="/users/icon.png"
                    color="green"
                    customClassName='bg-gradient-to-b from-[#84ECBF] to-white'
                />

                <Card
                    title="Events Pending Approval"
                    description="1,234"
                    imageUrl="/users/icon.png"
                    color="amber-50"
                />

                <Card
                    title="Events Pending Approval"
                    description="1,234"
                    imageUrl="/users/icon.png"
                    color="amber-50"
                />
            </div>

            <DataTable
                columns={columns}
                data={filteredData}
                showMenu
                onMenuClick={handleMenuClick}
                showDatePicker
                dateRange={dateRange}
                onDateChange={setDateRange}
                onClearDate={() => setDateRange({})}
            />
        </div>
    )
}

export default Financials