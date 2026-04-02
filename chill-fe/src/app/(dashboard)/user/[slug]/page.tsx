"use client";
import { DataTable } from "@/components/shared/data-table";
import Image from "next/image";
import { useState } from "react";
import { filterByDateRange } from "../../component/global/datePicker";

function Page() {

    const [date, setDate] = useState<Date | undefined>()

    const [dateRange, setDateRange] = useState<{
        from?: Date
        to?: Date
    }>({})

    const columns =
        [
            {
                key: "eventName",
                label: "Name",
                className: "text-gray-600",
            },
            {
                key: "dateCreated",
                label: "Date",
                className: "text-gray-600",
            },
            {
                key: "eventType",
                label: "event Type",
                render: (row: any) => (
                    <div className={`px-2 py-1 rounded-2xl w-fit  ${row.eventType === "public" ? "bg-green-100 text-green-700" : "bg-[#D2DAFD] text-black"}`}>
                        {row.eventType}
                    </div>
                )
            },
            {
                key: "buget",
                label: "Buget",
                className: "text-gray-600",
            },
            {
                key: "status",
                label: "Status",
                render: (row: any) => (
                    <div className={`px-2 py-1 rounded-2xl w-fit  ${row.status === "active" ? "bg-green-100 text-green-700" : row.status === "pending" ? "bg-yellow-100 text-yellow-700" : row.status === "declined" ? "bg-red-100 text-red-700" : "bg-gray-100 text-green-700"}`}>
                        {row.status}
                    </div>
                )
            },
        ]

    const data = [
        {
            eventName: "Tech Conference Lagos",
            dateCreated: "2026-01-12",
            eventType: "public",
            buget: 500000,
            status: "active",
        },
        {
            eventName: "Private Birthday Party",
            dateCreated: "2026-02-03",
            eventType: "private",
            buget: 150000,
            status: "completed",
        },
        {
            eventName: "Startup Pitch Night",
            dateCreated: "2026-01-25",
            eventType: "public",
            buget: 300000,
            status: "pending",
        },
        {
            eventName: "Wedding Ceremony",
            dateCreated: "2026-03-10",
            eventType: "private",
            buget: 1200000,
            status: "active",
        },
        {
            eventName: "Music Festival",
            dateCreated: "2026-02-14",
            eventType: "public",
            buget: 2000000,
            status: "pending",
        },
        {
            eventName: "Corporate Meetup",
            dateCreated: "2026-01-18",
            eventType: "private",
            buget: 400000,
            status: "completed",
        },
        {
            eventName: "Art Exhibition",
            dateCreated: "2026-03-01",
            eventType: "public",
            buget: 250000,
            status: "active",
        },
        {
            eventName: "Charity Gala",
            dateCreated: "2026-02-20",
            eventType: "public",
            buget: 800000,
            status: "pending",
        },
        {
            eventName: "School Graduation",
            dateCreated: "2026-01-30",
            eventType: "private",
            buget: 600000,
            status: "completed",
        },
        {
            eventName: "Hackathon 2026",
            dateCreated: "2026-03-05",
            eventType: "public",
            buget: 700000,
            status: "active",
        },
        {
            eventName: "Family Reunion",
            dateCreated: "2026-02-08",
            eventType: "private",
            buget: 200000,
            status: "canceled",
        },
        {
            eventName: "Fashion Show",
            dateCreated: "2026-01-22",
            eventType: "public",
            buget: 900000,
            status: "completed",
        },
        {
            eventName: "Business Seminar",
            dateCreated: "2026-03-11",
            eventType: "public",
            buget: 350000,
            status: "pending",
        },
        {
            eventName: "Engagement Party",
            dateCreated: "2026-02-27",
            eventType: "private",
            buget: 180000,
            status: "active",
        },
        {
            eventName: "Coding Bootcamp",
            dateCreated: "2026-01-15",
            eventType: "public",
            buget: 450000,
            status: "completed",
        },
        {
            eventName: "Gaming Tournament",
            dateCreated: "2026-03-07",
            eventType: "public",
            buget: 300000,
            status: "active",
        },
        {
            eventName: "Religious Gathering",
            dateCreated: "2026-02-12",
            eventType: "public",
            buget: 100000,
            status: "pending",
        },
        {
            eventName: "Product Launch",
            dateCreated: "2026-01-28",
            eventType: "public",
            buget: 750000,
            status: "completed",
        },
        {
            eventName: "Baby Shower",
            dateCreated: "2026-02-18",
            eventType: "private",
            buget: 120000,
            status: "active",
        },
        {
            eventName: "Sports Competition",
            dateCreated: "2026-03-09",
            eventType: "public",
            buget: 650000,
            status: "pending",
        },
        {
            eventName: "Photography Workshop",
            dateCreated: "2026-01-19",
            eventType: "public",
            buget: 220000,
            status: "completed",
        },
        {
            eventName: "Cooking Class",
            dateCreated: "2026-02-06",
            eventType: "private",
            buget: 90000,
            status: "active",
        },
        {
            eventName: "Dance Competition",
            dateCreated: "2026-03-02",
            eventType: "public",
            buget: 500000,
            status: "pending",
        },
        {
            eventName: "Movie Premiere",
            dateCreated: "2026-02-25",
            eventType: "public",
            buget: 1000000,
            status: "completed",
        },
        {
            eventName: "Book Launch",
            dateCreated: "2026-01-14",
            eventType: "public",
            buget: 270000,
            status: "active",
        },
        {
            eventName: "Yoga Retreat",
            dateCreated: "2026-03-06",
            eventType: "private",
            buget: 300000,
            status: "pending",
        },
        {
            eventName: "Tech Workshop",
            dateCreated: "2026-02-10",
            eventType: "public",
            buget: 400000,
            status: "completed",
        },
        {
            eventName: "Networking Event",
            dateCreated: "2026-01-26",
            eventType: "public",
            buget: 320000,
            status: "active",
        },
        {
            eventName: "Awards Night",
            dateCreated: "2026-03-12",
            eventType: "public",
            buget: 850000,
            status: "pending",
        },
        {
            eventName: "Community Meetup",
            dateCreated: "2026-02-22",
            eventType: "public",
            buget: 150000,
            status: "declined",
        },
    ];

    const filteredData = filterByDateRange(data, dateRange, "dateCreated")
    const handleMenuClick = (row: any) => {
        console.log("Menu clicked for row:", row);
    }
    return (

        <div>
            <div className="border border-gray-200">
                <div className="flex flex-row w-full justify-between bg-gray-200 p-4 rounded-lg ">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl font-bold">Name: John Doe</h2>
                        <p className="text-gray-800">Email: john.doe@example.com</p>
                        <div className="text-white bg-[#0F973D] h-fit w-fit px-3 py-1 rounded-2xl  hover:bg-red-50">Active</div>
                    </div>

                    <button className="text-[#FF383C] bg-[#FFFFFF] border border-red-600 h-fit px-3 py-1 rounded-2xl  hover:bg-red-50">
                        Deactivate User
                    </button>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4 px-12">
                    <div className="flex flex-col gap-2  p-4 rounded-lg">
                        <h3 className=" text-gray-700 ">Registration date</h3>
                        <p className=" text-gray-800 font-semibold">1,234</p>
                    </div>
                    <div className="flex flex-col gap-2  p-4 rounded-lg">
                        <h3 className="text-gray-700 ">Email address</h3>
                        <p className=" text-gray-800 font-semibold">567</p>
                    </div>
                    <div className="flex flex-col gap-2  p-4 rounded-lg">
                        <h3 className="text-gray-700 ">Phone number</h3>
                        <p className="text-gray-800 font-semibold">$12,345</p>
                    </div>
                    <div className="flex flex-col gap-2  p-4 rounded-lg">
                        <h3 className="text-gray-700">Social Media</h3>
                        <p className="text-gray-800 font-semibold">89</p>
                    </div>
                </div>
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

    );
}

export default Page;