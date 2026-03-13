import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
} from "@/components/ui/table"

import Image from "next/image"

type Column = {
    key: string
    label: string
}

type DataTableProps<T> = {
    columns: Column[]
    data: T[]

    showAvatar?: boolean
    avatarKey?: string

    showMenu?: boolean
    onMenuClick?: (row: T) => void
}

export function DataTable<T extends Record<string, any>>({
    columns,
    data,
    showAvatar = false,
    avatarKey = "avatar",
    showMenu = false,
    onMenuClick,
}: DataTableProps<T>) {
    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>

                        {columns.map((column) => (
                            <TableHead key={column.key}>{column.label}</TableHead>
                        ))}

                        {showMenu && <TableHead></TableHead>}

                    </TableRow>
                </TableHeader>

                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.email}>

                            {columns.map((column) => (
                                <TableCell key={`${row.email}-${column.key}`}>

                                    {column.key === "name" && showAvatar ? (
                                        <div className="flex items-center gap-2">

                                            <Image
                                                src={row[avatarKey]}
                                                alt="avatar"
                                                width={32}
                                                height={32}
                                                className="rounded-full"
                                            />

                                            {row[column.key]}

                                        </div>
                                    ) : (
                                        row[column.key]
                                    )}

                                </TableCell>
                            ))}

                            {showMenu && (
                                <TableCell>
                                    <button
                                        onClick={() => onMenuClick?.(row)}
                                        className="text-gray-500 hover:text-black"
                                    >
                                        ⋮
                                    </button>
                                </TableCell>
                            )}

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}