"use client"

import { Loader2 } from "lucide-react"

type LoadingOutlinedProps = {
    color?: string
    size?: number
    width?: string | number
    height?: string | number
    className?: string
}

export default function LoadingOutlined({
    color = "#017C53",
    size = 32,
    width,
    height,
    className
}: LoadingOutlinedProps) {

    const style = {
        color,
        width: width ?? size,
        height: height ?? size,
    }

    return (
        <Loader2
      className= {`animate-spin ${className ?? ""}`
}
style = { style }
    />
  )
}