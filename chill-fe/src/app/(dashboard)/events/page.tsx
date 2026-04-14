"use client"

import React from 'react'
import Card from "@/app/(dashboard)/component/card";
import { DataTable } from "@/components/shared/data-table"
import { useRouter } from "next/navigation";



function Event() {

    const columns = [
        {
            key: "name",
            label: "Event name",
            render: (row: any) => (<div className="font-medium text-[#101928]"> {row.name} </div>),
        },
        {
            key: "date",
            label: "Date created",
            className: "text-gray-600",
        },
        {
            key: "type",
            label: "Event type",
            render: (row: any) => (<div className={`${row.type === "public" ? "bg-[#D9F9EB] text-[#3B6A56]" : "bg-[#D2DAFD] text-[#272F57]"} px-4 w-fit rounded-2xl`}> {row.type} </div>),

        },
        {
            key: "buget",
            label: "Budget",
            className: "text-gray-600",
        },
        {
            key: "status",
            label: "Status",
            className: "text-gray-600",
        },
    ]
    const data = [
        { id: "1", name: "Tech Conference 2026", date: "2026-01-05", type: "public", buget: 500000, status: "active" },
        { id: "2", name: "Wedding Ceremony", date: "2026-01-10", type: "private", buget: 1200000, status: "pending" },
        { id: "3", name: "Startup Pitch Night", date: "2026-01-12", type: "public", buget: 300000, status: "complete" },
        { id: "4", name: "Birthday Party", date: "2026-01-15", type: "private", buget: 150000, status: "active" },
        { id: "5", name: "Music Festival", date: "2026-01-20", type: "public", buget: 2000000, status: "pending" },

        { id: "6", name: "Corporate Meetup", date: "2026-01-22", type: "private", buget: 400000, status: "declined" },
        { id: "7", name: "Art Exhibition", date: "2026-01-25", type: "public", buget: 350000, status: "active" },
        { id: "8", name: "Community Outreach", date: "2026-01-28", type: "public", buget: 100000, status: "complete" },
        { id: "9", name: "Private Dinner", date: "2026-02-01", type: "private", buget: 80000, status: "canceled" },
        { id: "10", name: "Hackathon Lagos", date: "2026-02-03", type: "public", buget: 600000, status: "active" },

        { id: "11", name: "Church Program", date: "2026-02-05", type: "public", buget: 250000, status: "pending" },
        { id: "12", name: "Fashion Show", date: "2026-02-08", type: "public", buget: 900000, status: "complete" },
        { id: "13", name: "Team Retreat", date: "2026-02-10", type: "private", buget: 700000, status: "active" },
        { id: "14", name: "Product Launch", date: "2026-02-12", type: "public", buget: 1500000, status: "pending" },
        { id: "15", name: "Movie Premiere", date: "2026-02-15", type: "public", buget: 1100000, status: "declined" },

        { id: "16", name: "Family Reunion", date: "2026-02-18", type: "private", buget: 200000, status: "complete" },
        { id: "17", name: "Coding Bootcamp", date: "2026-02-20", type: "public", buget: 450000, status: "active" },
        { id: "18", name: "Sports Tournament", date: "2026-02-22", type: "public", buget: 750000, status: "pending" },
        { id: "19", name: "Networking Event", date: "2026-02-25", type: "public", buget: 300000, status: "active" },
        { id: "20", name: "Private Workshop", date: "2026-02-27", type: "private", buget: 500000, status: "canceled" },

        { id: "21", name: "Seminar on AI", date: "2026-03-01", type: "public", buget: 650000, status: "complete" },
        { id: "22", name: "Engagement Party", date: "2026-03-03", type: "private", buget: 220000, status: "pending" },
        { id: "23", name: "Charity Gala", date: "2026-03-05", type: "public", buget: 1800000, status: "active" },
        { id: "24", name: "Book Launch", date: "2026-03-08", type: "public", buget: 200000, status: "complete" },
        { id: "25", name: "Startup Meetup", date: "2026-03-10", type: "public", buget: 350000, status: "declined" },

        { id: "26", name: "Garden Party", date: "2026-03-12", type: "private", buget: 120000, status: "active" },
        { id: "27", name: "Business Summit", date: "2026-03-15", type: "public", buget: 2000000, status: "pending" },
        { id: "28", name: "Youth Conference", date: "2026-03-18", type: "public", buget: 550000, status: "complete" },
        { id: "29", name: "Gaming Tournament", date: "2026-03-20", type: "public", buget: 300000, status: "active" },
        { id: "30", name: "VIP Dinner", date: "2026-03-22", type: "private", buget: 900000, status: "canceled" },

        { id: "31", name: "Investor Meeting", date: "2026-03-25", type: "private", buget: 1000000, status: "pending" },
        { id: "32", name: "Cultural Festival", date: "2026-03-27", type: "public", buget: 1700000, status: "active" },
        { id: "33", name: "Training Session", date: "2026-03-29", type: "private", buget: 250000, status: "complete" },
        { id: "34", name: "Exhibition Fair", date: "2026-04-01", type: "public", buget: 600000, status: "pending" },
        { id: "35", name: "Comedy Night", date: "2026-04-03", type: "public", buget: 400000, status: "active" },

        { id: "36", name: "Private Coaching", date: "2026-04-05", type: "private", buget: 150000, status: "declined" },
        { id: "37", name: "Award Ceremony", date: "2026-04-07", type: "public", buget: 1300000, status: "complete" },
        { id: "38", name: "Brunch Meetup", date: "2026-04-09", type: "private", buget: 100000, status: "active" },
        { id: "39", name: "Developer Conference", date: "2026-04-10", type: "public", buget: 2100000, status: "pending" },
        { id: "40", name: "Fitness Bootcamp", date: "2026-04-11", type: "public", buget: 300000, status: "complete" },

        { id: "41", name: "Photography Workshop", date: "2026-04-12", type: "public", buget: 200000, status: "active" },
        { id: "42", name: "Luxury Dinner", date: "2026-04-13", type: "private", buget: 950000, status: "pending" },
        { id: "43", name: "Open Mic Night", date: "2026-04-14", type: "public", buget: 120000, status: "complete" },
        { id: "44", name: "Leadership Seminar", date: "2026-04-15", type: "public", buget: 500000, status: "active" },
        { id: "45", name: "Anniversary Party", date: "2026-04-16", type: "private", buget: 300000, status: "canceled" },

        { id: "46", name: "Startup Demo Day", date: "2026-04-17", type: "public", buget: 800000, status: "pending" },
        { id: "47", name: "Team Building Event", date: "2026-04-18", type: "private", buget: 450000, status: "active" },
        { id: "48", name: "Health Awareness Campaign", date: "2026-04-19", type: "public", buget: 600000, status: "complete" },
        { id: "49", name: "Music Concert", date: "2026-04-20", type: "public", buget: 2500000, status: "pending" },
        { id: "50", name: "Private Strategy Meeting", date: "2026-04-21", type: "private", buget: 700000, status: "declined" },
    ];

    const router = useRouter();
    const handleMenuClick = (row: any) => {
        router.push(`/events/${row.name.toLowerCase().replace(/\s+/g, "-")}`)
    }
    return (
        <div>
            <div className="mb-8">
                <h1 className='font-bold text-2xl'>Events</h1>
                <p className='text-gray-500'>Showing data over the past 30 days</p>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
                <Card
                    title=" Total Events Created"
                    description="6,000"
                    imageUrl="/users/icon.png"
                    color="green"
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
                data={data}
                showMenu
                onMenuClick={handleMenuClick}
            />
        </div>
    )
}

export default Event