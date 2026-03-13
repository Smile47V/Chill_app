"use client"
import Card from "@/component/card";
import Image from "next/image";
import { DataTable } from "@/components/shared/data-table"

function User() {
    const columns = [
        { key: "name", label: "Name" },
        { key: "phone", label: "Phone number" },
        { key: "email", label: "Email" },
        { key: "created", label: "created Events" },
        { key: "registered", label: "Registered Events" },

    ]

    const data = [
        {
            name: "Adegoke Philip",
            phone: "+2347063645441",
            email: "philip.adegoke@gmail.com",
            created: 5,
            registered: 12,
        },
        {
            name: "Chioma Okafor",
            phone: "+2348031122334",
            email: "chioma.okafor@gmail.com",
            created: 2,
            registered: 8,
        },
        {
            name: "Ibrahim Musa",
            phone: "+2348095567788",
            email: "ibrahim.musa@yahoo.com",
            created: 7,
            registered: 15,
        },
        {
            name: "Tunde Balogun",
            phone: "+2348123456789",
            email: "tunde.balogun@gmail.com",
            created: 3,
            registered: 6,
        },
        {
            name: "Fatima Bello",
            phone: "+2348059988776",
            email: "fatima.bello@gmail.com",
            created: 4,
            registered: 10,
        },
        {
            name: "Emeka Nwosu",
            phone: "+2348162233445",
            email: "emeka.nwosu@gmail.com",
            created: 6,
            registered: 9,
        },
        {
            name: "Blessing Eze",
            phone: "+2347014455667",
            email: "blessing.eze@gmail.com",
            created: 1,
            registered: 4,
        },
        {
            name: "Sadiq Lawal",
            phone: "+2348139988770",
            email: "sadiq.lawal@yahoo.com",
            created: 8,
            registered: 16,
        },
        {
            name: "Ngozi Obi",
            phone: "+2348023344556",
            email: "ngozi.obi@gmail.com",
            created: 2,
            registered: 5,
        },
        {
            name: "Oluwaseun Adeyemi",
            phone: "+2348077766554",
            email: "seun.adeyemi@gmail.com",
            created: 9,
            registered: 18,
        },
        {
            name: "Maryam Abubakar",
            phone: "+2348102233446",
            email: "maryam.abubakar@gmail.com",
            created: 3,
            registered: 7,
        },
        {
            name: "David Ojo",
            phone: "+2348061122330",
            email: "david.ojo@gmail.com",
            created: 5,
            registered: 11,
        },
        {
            name: "Grace Umeh",
            phone: "+2348186677889",
            email: "grace.umeh@gmail.com",
            created: 4,
            registered: 9,
        },
        {
            name: "Kabiru Shehu",
            phone: "+2348145566778",
            email: "kabiru.shehu@yahoo.com",
            created: 6,
            registered: 13,
        },
        {
            name: "Esther Danjuma",
            phone: "+2348034455661",
            email: "esther.danjuma@gmail.com",
            created: 2,
            registered: 6,
        },
        {
            name: "Samuel Peters",
            phone: "+2348119988772",
            email: "samuel.peters@gmail.com",
            created: 7,
            registered: 14,
        },
        {
            name: "Ruth Chukwu",
            phone: "+2348056677883",
            email: "ruth.chukwu@gmail.com",
            created: 1,
            registered: 3,
        },
        {
            name: "Ahmed Sani",
            phone: "+2348091122445",
            email: "ahmed.sani@yahoo.com",
            created: 8,
            registered: 17,
        },
        {
            name: "Joyce Akinwale",
            phone: "+2348128899001",
            email: "joyce.akinwale@gmail.com",
            created: 3,
            registered: 8,
        },
        {
            name: "Victor Nnamdi",
            phone: "+2348173344559",
            email: "victor.nnamdi@gmail.com",
            created: 5,
            registered: 12,
        },
    ];

    return (
        <div>
            <div className="flex flex-row-reverse">
                <Image src="/users/toggle.png" alt="User" width={30} height={30} className="" />
            </div>
            <div className="flex flex-col">
                <p className="font-bold text-2xl">User</p>
                <p className="text-gray-500">Showing Data over the last 30 days</p>
            </div>


            {/* add the serch bar for mobile */}


            <div className=" grid grid-cols-1 md:grid-cols-2 md:w-[50%] gap-3 mb-3">
                <Card
                    title="Total Users"
                    description="1,234"
                    imageUrl="/users/icon.png"
                    color="amber-50"
                />

                <Card
                    title="Total Users"
                    description="1,234"
                    imageUrl="/users/icon2.png"
                    color="amber-50"
                />
            </div>


            <DataTable
                columns={columns}
                data={data}
                showAvatar
                avatarKey="avatar"
                showMenu
                onMenuClick={(row) => console.log("Menu clicked", row)}
            />

        </div>
    )
}

export default User