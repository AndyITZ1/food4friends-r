import { Navbar } from "@/components/navbar/navbar"
import { Outlet } from "react-router"

export function RootLayout() {
  return (
    <>
    <div>
      <Navbar />
      <div className="h-(--top-spacing) w-full"></div>
      <Outlet />
    </div>
    </>
  )
}