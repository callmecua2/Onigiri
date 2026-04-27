'use client'

import { useEffect, useState } from "react"
import "./displaypage.css"
import { GetMenu, FoodMenu } from "@/services/getMenuServices"
import OrderWaitingList from "@/components/orderque/Orderque"

export default function DisplayPage () {


   const [menu, setMenu] = useState<FoodMenu[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await GetMenu()
                setMenu(data)
            } catch (err) {
                setError("Failed to fetch menu")
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    console.log(menu)


    return(
        <>
            <div className="display-container w-full h-screen flex">
                <div className="display-waitingList w-1/2 h-full  flex flex-col justify-center gap-7 items-center ">
                    <h1 className=" text-5xl  mb-10">Your Order Here</h1>
                    <div className="display-waiting-content mt-10 w-full min-h-3/4 ">
                        <OrderWaitingList />
                    </div>
                </div>
                <div className="display-promotion w-1/2 h-full bg-lime-300"></div>
            </div>
        </>
    )
}