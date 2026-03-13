import Image from 'next/image';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-[50%] md:bg-[#6F87F8] hidden md:block text-white p-4 relative overflow-hidden">

                <div className='flex items-center justify-center h-full'>
                    <div className="absolute w-[60%] h-[60%] bg-white rounded-full opacity-3"></div>

                    <div className="absolute w-[50%] h-[50%] bg-white rounded-full opacity-4"></div>

                    <Image
                        src="/authImage/Illustration.png"
                        alt="Logo"
                        width={377}
                        height={400}
                        className="relative z-10"
                    />
                </div>


            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                {children}
            </main>
        </section>
    );
}