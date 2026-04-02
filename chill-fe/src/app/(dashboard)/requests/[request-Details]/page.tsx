import React from 'react'
import Image from 'next/image'

function Request() {
    return (
        <div className='bg-[#FDFDFD]'>
            <div className='flex items-center justify-between mb-6'>
                <h1 className='text-2xl font-bold text-[#101928] mb-4'>Request Details</h1>
                <div>
                    <button className='px-4 py-2 bg-[#E5E5E5] text-[#101928] rounded-md'>Reject</button>
                    <button className='px-4 py-2 bg-[#E5E5E5] text-[#101928] rounded-md ml-2'>Approve</button>
                </div>
            </div>
            <div className='bg-[#FFFFFF] grid grid-cols-12 gap-6 p-2'>
                <div className='col-span-5 bg-[#F9FAFB] p-4 rounded-lg'>
                    <div className='flex flex-col gap-4 p-4 mb-3 bg-[#FFFFFF] rounded-lg'>
                        <div className='flex flex-row  justify-between '>
                            <p className='text-sm text-gray-500'>Buget</p>
                            <p className='bg-[#FDDED2] text-[#FA4B08]'>Cancelled</p>
                        </div>
                        <div className='col-span-6 bg[#F9FAFB]'>₦1,5000,000</div>
                        <p className='text-sm text-[#2E5343] mb-2'>Event Name</p>
                        <div className='flex flex-col gap-4 '>
                            <h3>Tech Hangout </h3>
                            <p className='text-sm text-gray-500'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                    <div className="relative w-full h-58.25 bg-[#FFFFFF] rounded-lg p-4">
                        <Image
                            src="/place/banner.jpg"
                            alt="Event Image"
                            fill
                            className="object-cover rounded-md"
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Request