"use client"
import { DataTable } from '@/components/shared/data-table';
import { useRouter } from "next/navigation";

function Request() {

    const columns = [
        {
            key: "date",
            label: "Date",
            render: (row: any) => (
                <div className="font-medium text-[#101928]">
                    {row.date}
                </div>
            ),
        },
        {
            key: "event",
            label: "Event",
            render: (row: any) => (
                <div className="font-medium text-[#101928]">
                    {row.event}
                </div>
            ),
        },
        {
            key: "requester",
            label: "Requester",
            className: "text-gray-600",
        },
        {
            key: "amount",
            label: "Amount",
            className: "text-gray-600",
        },
    ]
    const data = [
        { date: "2023-05-12", event: "Tech Conference", requester: "John Doe", amount: 120000 },
        { date: "2024-11-03", event: "Wedding Ceremony", requester: "Mary Johnson", amount: 500000 },
        { date: "2022-08-21", event: "Music Festival", requester: "David Smith", amount: 250000 },
        { date: "2025-01-15", event: "Corporate Meetup", requester: "Sarah Williams", amount: 180000 },
        { date: "2023-03-09", event: "Birthday Party", requester: "James Brown", amount: 90000 },
        { date: "2024-06-30", event: "Startup Pitch", requester: "Michael Lee", amount: 300000 },
        { date: "2022-12-11", event: "Hackathon", requester: "Chris Evans", amount: 200000 },
        { date: "2025-09-18", event: "Art Exhibition", requester: "Sophia Davis", amount: 150000 },
        { date: "2023-07-27", event: "Charity Gala", requester: "Daniel Wilson", amount: 600000 },
        { date: "2024-02-14", event: "Valentine Dinner", requester: "Emma Taylor", amount: 75000 },
        { date: "2022-10-05", event: "School Graduation", requester: "Olivia Moore", amount: 220000 },
        { date: "2025-04-22", event: "Earth Day Event", requester: "Liam Anderson", amount: 130000 },
        { date: "2023-09-13", event: "Gaming Tournament", requester: "Noah Thomas", amount: 95000 },
        { date: "2024-12-01", event: "Christmas Party", requester: "Ava Jackson", amount: 400000 },
        { date: "2022-06-17", event: "Cooking Class", requester: "Isabella White", amount: 80000 },
        { date: "2025-02-28", event: "Business Seminar", requester: "William Harris", amount: 275000 },
        { date: "2023-01-08", event: "New Year Bash", requester: "Mia Martin", amount: 350000 },
        { date: "2024-07-19", event: "Fashion Show", requester: "Lucas Thompson", amount: 500000 },
        { date: "2022-11-23", event: "Thanksgiving Dinner", requester: "Charlotte Garcia", amount: 120000 },
        { date: "2025-06-10", event: "Tech Workshop", requester: "Ethan Martinez", amount: 160000 },
        { date: "2023-04-04", event: "Photography Workshop", requester: "Amelia Robinson", amount: 70000 },
        { date: "2024-08-29", event: "Dance Competition", requester: "Benjamin Clark", amount: 210000 },
        { date: "2022-09-16", event: "Book Launch", requester: "Harper Rodriguez", amount: 125000 },
        { date: "2025-03-03", event: "Product Launch", requester: "Henry Lewis", amount: 450000 },
        { date: "2023-10-25", event: "Halloween Party", requester: "Evelyn Lee", amount: 95000 },
        { date: "2024-01-20", event: "Networking Event", requester: "Alexander Walker", amount: 175000 },
        { date: "2022-07-07", event: "Community Meetup", requester: "Abigail Hall", amount: 60000 },
        { date: "2025-08-14", event: "Sports Competition", requester: "Sebastian Allen", amount: 300000 },
        { date: "2023-02-11", event: "Engagement Party", requester: "Ella Young", amount: 110000 },
        { date: "2024-05-05", event: "Cinco de Mayo Event", requester: "Jack Hernandez", amount: 200000 },
        { date: "2022-03-30", event: "Spring Festival", requester: "Scarlett King", amount: 90000 },
        { date: "2025-11-09", event: "Awards Night", requester: "Aiden Wright", amount: 550000 },
        { date: "2023-06-16", event: "Yoga Retreat", requester: "Grace Lopez", amount: 140000 },
        { date: "2024-09-21", event: "Film Premiere", requester: "Samuel Hill", amount: 600000 },
        { date: "2022-04-12", event: "Cultural Festival", requester: "Chloe Scott", amount: 170000 },
    ];

    const router = useRouter()

    const handleMenuClick = (row: any) => {
        router.push(`/requests/${row.event.toLowerCase().replace(/\s+/g, "-")}`)
    }
    return (
        <div className='h-screen'>
            <div className='mb-4'>
                <h1 className='font-bold text-2xl'>Requests</h1>
                <p className="text-gray-500">Showing Data over the last 30 days</p>
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

export default Request