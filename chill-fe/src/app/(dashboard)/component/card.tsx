import Image from "next/image";
interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    color?: string;
    customClassName?: string;
}

function Card({ title, description, imageUrl, color, customClassName }: CardProps) {
    return (
        <div className={`flex p-3 bg-[#FFFFFF] cursor-pointer transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-2xl rounded-lg shadow-lg max-h-23 ${customClassName || ''}`}>
            <div className="flex items-center">
                <div className={`flex justify-center bg-${color || 'gray'} px-3 py-2 items-center`}>
                    <Image src={imageUrl} alt={title} width={50} height={50} className="w-6 h-6" />
                </div>
            </div>


            <div className='p-4'>
                <h3 className='text-lg text-gray-500 mb-2'>{title}</h3>
                <p className='text-black font-bold'>{description}</p>
            </div>
        </div>
    )
}

export default Card