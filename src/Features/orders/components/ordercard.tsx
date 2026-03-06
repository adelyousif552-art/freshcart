import { faBox, faCalendar, faCheck, faCircleCheck, faClock, faLocationDot, faReceipt, faTruck, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { Order } from "../types/orderstypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";


export default function Ordercard({order}:{order:Order}) {
    function getstatus(){
        if(order.isDelivered){
            return{
                label:'Delivered',
                colors:{
                    bg:'bg-green-100',
                    text:'text-green-600',
                    border:'border-green-200'
                },
                icon:faCircleCheck
            }
        }
        if(order.isPaid){
             return{
                label:'on the way',
                colors:{
                    bg:'bg-blue-100',
                    text:'text-blue-600',
                    border:'border-blue-200'
                },
                icon:faTruck
            }
        }
        return{
                label:'Processing',
                colors:{
                    bg:'bg-orange-100',
                    text:'text-orange-600',
                    border:'border-orange-200'
                },
                icon:faClock
            }

    }
    const itemscount=order.cartItems.reduce((acc,el)=>acc+=el.count,0)
    const status=getstatus()
    
    
  return <>
   <div key={order._id} className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          
         
          <details className="group" open>
            <summary className="p-6 flex justify-between items-center cursor-pointer list-none">
              <div className="flex gap-5 items-center">
                <div className="relative">
                  <img
                    src={order.cartItems[0].product.imageCover}
                    className="w-20 h-20 rounded-xl object-cover border"
                  />
                 {order.cartItems.length>1? <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs px-2 py-0.5 rounded-full">
                    +{order.cartItems.length>1?order.cartItems.length-1:order.cartItems.length}
                  </span>:''}
                </div>

                <div className="space-y-2">
                  <span className={`inline-flex items-center gap-2 ${status.colors.bg} ${status.colors.text} text-xs px-3 py-1 rounded-full font-medium`}>
                    <FontAwesomeIcon icon={status.icon as IconProp} className={`${status.colors.text}`} />
                    {status.label}
                  </span>

                  <h3 className="font-semibold text-lg text-gray-800">
                    #{order.id}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faCalendar as IconProp} />
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>

                    <span className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faBox as IconProp} />
                      {itemscount} {itemscount===1?'item':'items'}
                    </span>
                    <span className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faLocationDot as IconProp} />
                      {order.shippingAddress?.city?order.shippingAddress.city:'unknown city'}
                    </span>
                  </div>

                  <p className="text-2xl font-bold text-gray-900">
                    {order.totalOrderPrice} <span className="text-sm font-medium text-gray-500">EGP</span>
                  </p>
                </div>
              </div>

              
              <span className="text-green-600 font-medium flex items-center gap-2">
                <span className="group-open:hidden">Details</span>
                <span className="hidden group-open:inline">Hide</span>
              </span>
            </summary>

            <div className="border-t bg-gray-50 p-6 space-y-6  gap-6">

              <div className="md:col-span-2 space-y-6">

                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2 text-gray-800">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Order Items
                  </h4>

                  <div className="space-y-4 ">
                    {order.cartItems.map((item) => (
                      <div
                        key={item._id}
                        className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm border border-gray-100 hover:shadow-md transition"
                      >
                        <div className="flex gap-4 items-center">
                          <img
                            src={item.product.imageCover}
                            className="w-14 h-14 rounded-lg object-cover border"
                          />
                          <div>
                            <p className="font-medium text-gray-800">{item.product.title}</p>
                            <p className="text-sm text-gray-500">
                              {item.count} × {item.price} EGP
                            </p>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-900">
                          {item.price} EGP
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

             <div className="flex items-center justify-between *:grow gap-x-10">
                 <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-sm h-fit">
                <h4 className="font-semibold mb-4 flex items-center gap-2 text-blue-700">
                  <FontAwesomeIcon icon={faReceipt as IconProp} />
                  Order Summary
                </h4>

                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{order.totalOrderPrice} EGP</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>

                  <div className="border-t pt-3 flex justify-between font-semibold text-base text-gray-900">
                    <span>Total</span>
                    <span>{order.totalOrderPrice} EGP</span>
                  </div>
                </div>
              </div>
               <div className="bg-blue-50 border  border-blue-100 rounded-2xl p-6 shadow-sm h-fit">
                <h4 className="font-semibold mb-4 flex items-center gap-2 text-blue-700">
                  <FontAwesomeIcon icon={faReceipt as IconProp} />
                  DeliveryAddress
                </h4>

                <div className="space-y-3 text-sm text-gray-700">
                  
                    
                    <h1>{order.shippingAddress?.city||'unknown city'}</h1>
                  

                 <h1>{order.shippingAddress?.details||'unknown details'}</h1>
                 <h1>{order.shippingAddress?.phone||'unknown phone'}</h1>

                  
                </div>
              </div>
             </div>

            </div>

          </details>
        </div>
  </>
}
