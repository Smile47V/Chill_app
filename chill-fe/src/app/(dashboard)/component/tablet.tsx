interface TabletProps {
    title: string;
    description: string;
    color?: string;
}

function tablet({ title, description, color = "bg-[#FFFFFF]" }: TabletProps) {
    return (
        <div>
            <div className={`flex flex-col gap-2 ${color} p-4 rounded-lg`}>
                <p className="text-[#667185]">{title}</p>
                <p className="text-[#475367]">{description}</p>
            </div>
        </div>
    )
}

export default tablet