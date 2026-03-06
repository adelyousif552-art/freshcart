
'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBox,
  faTruckFast,
  faReceipt,
  faCalendar
} from "@fortawesome/free-solid-svg-icons"
import { getuserorders } from "../server/orders.server"
import Ordercard from "../components/ordercard"
import { useSelector } from "react-redux"
import { stat } from "fs"
import { appstate } from "@/store/store"

import React, { useEffect, useState } from "react"
import { OrdersResponse } from "../types/orderstypes"

export default function OrderSCREEN() {
    const { userinfo } = useSelector((state: appstate) => state.auth)
    const [orders, setOrders] = useState<null|OrdersResponse>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchOrders = async () => {
            if (userinfo && userinfo.id) {
                const response = await getuserorders({ id: userinfo.id })
                
                
                setOrders(response)
            }
            setLoading(false)
        }
        fetchOrders()
    }, [userinfo])

    if (!userinfo || !userinfo.id) {
        return null
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (<>
    <div className="header mx-10 flex items-center gap-x-3">
        <div className="icon w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">
            <FontAwesomeIcon icon={faBox} className="text-white" />
        </div>
        <div className="text">
            <h1 className="text-2xl font-bold">My Orders</h1>
            <p className="text-gray-800">track and manage your {orders?.length}{orders?.length===1?' order':' orders'}</p>
        </div>
    </div>
        <div className="space-y-6">
            {orders?.map((order) => (
                <Ordercard key={order._id} order={order} />
            ))}
        </div>
        </>
    )
}