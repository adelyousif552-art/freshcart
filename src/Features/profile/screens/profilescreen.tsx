'use client'
import { faArrowRight, faGear, faKey, faLocationDot, faLock, faPlus, faSave, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { addressschema, addressvalidate, profileinfotype, profileschema, updatepasstype, updatepasswordschema } from "../schema/addressschema";
import { zodResolver } from "@hookform/resolvers/zod";
import addaddress, { getalladdresses, removeaddress, updatepassword, updateprofile } from "../server/addressserver";
import { toast } from "react-toastify";
import { Address, AddressResponse } from "../types/addresstype";
import AddressCard from "../components/addresscard";

export default function Profilescreen() {
  const updatepasswordform=useForm<updatepasstype>({
    defaultValues:{
      currentPassword:'',
      password:'',
      rePassword:''
    },
    resolver:zodResolver(updatepasswordschema),
    mode:'onChange'
  })
  const profileinfo=useForm<profileinfotype>({
    defaultValues:{
      name:'',
      email:'',
      phone:''
    },
    resolver:zodResolver(profileschema),
    mode:'onChange'
  })
  const validprofileinfo:SubmitHandler<profileinfotype>=async(values)=>{
    try {
      const response=await updateprofile(values)
      if(response.message==='success'){
        toast.success('updated successfully')
        console.log(response);
        
      }
     else{
      toast.error('failed please try again')
     }
      
    } catch (error) {
      toast.error(' please enter new data')
      throw error
      
      
    }
  }
  const passwordvalid:SubmitHandler<updatepasstype>=async(values)=>{
    try {
      const response=await updatepassword(values)
      if(response.message=='success'){
        toast.success('password changed successfully')
      }
      
    } catch (error) {
    toast.error('please enter a new password')
      throw error
    }
  }
    
   
    
    
    const [response,setresponse]=useState<null|Address[]>(null)
     const getaddresses=async()=>{
const response=await getalladdresses()

  setresponse(response.data)




        }
     useEffect(()=>{
        
        getaddresses()

    },[])
    console.log(response);
    
    const addressvalues=useForm<addressvalidate>({
        defaultValues:{
            name:'',
           details:'',
            phone:'',
            city:''

        },
        resolver:zodResolver(addressschema),
        mode:'onChange'
    })
    
    const onvalid:SubmitHandler<addressvalidate>=async(values)=>{
        try {
          console.log('first',values);
          
            const response1=await addaddress(values)
            setaddaddressopened(false)
            addressvalues.reset()
            
            if(response1.status==='success'){
                toast.success(response1.message)
                await getaddresses()
                
            }
            
        } catch (error) {
            throw error
        }
        
    }
    const [addaddressopened,setaddaddressopened]=useState(false)
    const[settingisopened,setsettingisopened]=useState(false)
   
    
  return <>
  <section>
    <div className="header  bg-green-600 py-8 px-2 flex items-center gap-x-4 ">
        <div className="icon w-12 h-12 rounded-2xl shadow-2xl bg-green-400/40 flex items-center justify-center">
            <FontAwesomeIcon icon={faUser} className="text-white text-2xl"/>

        </div>
        <div className="text">
            <h1 className="text-2xl font-bold text-white">My Account</h1>
            <p className="text-gray-200">Manage your addresses and account settings</p>
        </div>

    </div>
    <div className="grid grid-cols-12 my-10 mx-5 ">
        <div className="col-span-3 bg-white shadow-xl p-4 space-y-4">
            <h1 className="font-bold">My Account</h1>
             <div>
           <div onClick={()=>{
            setsettingisopened(false)
           }} className={`flex items-center ${settingisopened?'':'bg-green-200 text-green-600'} p-4 rounded-2xl justify-between`}>
            <div className="flex items-center gap-x-4">
                 <div className={`icon  w-12 h-12 rounded-2xl ${settingisopened?' bg-gray-600/20':' bg-green-400'} flex items-center justify-center`}>
                <FontAwesomeIcon icon={faLocationDot} className={`${settingisopened?'text-gray-400':'text-white'}`}/>
                
            </div>
           
                <h1>My Addresses</h1>
            </div>
                <FontAwesomeIcon icon={faArrowRight} className={`text-sm ${settingisopened?'text-gray-500':'text-green-600'}`}/>
            
           </div>

        </div>
        <div onClick={()=>{
            setsettingisopened(true)
        }} className={`flex p-4 rounded-2xl ${settingisopened?'bg-green-200 text-green-600':''}  items-center justify-between  `}>
             <div className="flex items-center gap-x-4 ">
                <div className={`icon  w-12 h-12 rounded-2xl flex ${settingisopened?'bg-green-400 text-white':' bg-gray-600/20'} items-center justify-center `}>
                <FontAwesomeIcon icon={faGear} className={`${settingisopened?'text-white':'text-gray-400'}`}/>
                
            </div>
            <h1>Settings</h1>
             </div>
             <FontAwesomeIcon icon={faArrowRight} className={`text-sm ${settingisopened?'text-green-600':'text-gray-500'} `}/>
           </div>

        </div>
        <div className="col-span-9">
             <div className={`min-h-screen ${settingisopened?'hidden':'block'} bg-gray-50 p-6 md:p-10`}>
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-800">
                        My Addresses
                      </h1>
                      <p className="text-gray-500 mt-1">
                        Manage your saved delivery addresses
                      </p>
                    </div>
            
                    <button onClick={()=>{
                        setaddaddressopened(true)
                    }}  className="flex cursor-pointer items-center gap-2 bg-green-600 hover:bg-green-700 transition text-white px-5 py-3 rounded-xl shadow-md">
                      <FontAwesomeIcon icon={faPlus} />
                      Add Address
                    </button>
                  </div>
            
                 {(response && response.length > 0) ? response.map((address)=>{
                    return  <AddressCard key={address._id} addressfun={getaddresses} info={address}/>
                 }) : <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
                    <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-gray-400 text-3xl"
                      />
                    </div>
            
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      No Addresses Yet
                    </h2>
            
                    <p className="text-gray-500 max-w-md mb-8">
                      Add your first delivery address to make checkout
                      faster and easier.
                    </p>
            
                    <button onClick={()=>{
                        setaddaddressopened(true)
                    }} className="flex cursor-pointer items-center gap-2 bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-xl shadow-lg">
                      <FontAwesomeIcon icon={faPlus} />
                      Add Your First Address
                    </button>
                  </div>}
                </div>
                <div className={`min-h-screen ${settingisopened?'block':'hidden'}  p-6`}>
      <div className="max-w-4xl mx-auto space-y-8">

        <div className="bg-white rounded-2xl shadow-sm border border-gray-400/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} className="text-green-600 text-lg" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Profile Information</h2>
              <p className="text-sm text-gray-500">Update your personal details</p>
            </div>
          </div>

          <form onSubmit={profileinfo.handleSubmit(validprofileinfo)} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Full Name</label>
              <input
              {...profileinfo.register('name')}
                type="text"
                
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Email Address</label>
              <input
              {...profileinfo.register('email')}
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">Phone Number</label>
              <input
              {...profileinfo.register('phone')}
                type="tel"
                placeholder="01xxxxxxxx"
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition"
            >
              <FontAwesomeIcon icon={faSave} />
              Save Changes
            </button>
          </form>

          <div className="mt-8 border-t border-gray-400/40 bg-gray-100 p-6">
            <h3 className="text-sm text-gray-500 mb-4">Account Information</h3>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>User ID</span>
              <span>-</span>
            </div>
            <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
              <span>Role</span>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs">
                User
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-400/20 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center">
              <FontAwesomeIcon icon={faLock} className="text-orange-500 text-lg" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Change Password</h2>
              <p className="text-sm text-gray-500">Update your account password</p>
            </div>
          </div>

          <form onSubmit={updatepasswordform.handleSubmit(passwordvalid)} className="space-y-5">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Current Password</label>
              <input
              {...updatepasswordform.register('currentPassword')}
                type="password"
                placeholder="Enter your current password"
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-1">New Password</label>
              <input
              {...updatepasswordform.register('password')}
                type="password"
                placeholder="Enter your new password"
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              
            </div>
            {updatepasswordform.formState.errors.password ? (
              <p className="text-red-500 text-sm">{updatepasswordform.formState.errors.password.message}</p>
            ) : ''}

            <div>
              <label className="block text-sm text-gray-500 mb-1">Confirm New Password</label>
              <input
              {...updatepasswordform.register('rePassword')}
                type="password"
                placeholder="Confirm your new password"
                className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
              {updatepasswordform.formState.errors.rePassword ? (
              <p className="text-red-500 text-sm">{updatepasswordform.formState.errors.rePassword.message}</p>
            ) : ''}

            <button
              type="submit"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl shadow-md transition"
            >
              <FontAwesomeIcon icon={faKey} />
              Change Password
            </button>
          </form>
        </div>

      </div>
    </div>

        </div>
       

    </div>
    
  </section>
  <div onClick={()=>{
    
    setaddaddressopened(false)
  }} className={`fixed ${addaddressopened?'block':'hidden'}   top-0 bottom-0 left-0 right-0 bg-gray-600/40 flex items-center justify-center`}>
    <div onClick={(e)=>e.stopPropagation()} className=" w-1/3 shadow-2xl rounded-2xl p-8 z-50 bg-white  ">
    <h1  className="font-bold ">Add New Address</h1>
    <form className="my-2" onSubmit={addressvalues.handleSubmit(onvalid)}>
       <div className="space-y-1">
         <div className="label">
            <span className="text-gray-400">Address name</span>
        </div>
        <div className="input">
            <input {...addressvalues.register("name")} type="text"  id="address" placeholder="e.g.Home.Office" className="p-3 w-full border border-gray-400/30 rounded-2xl " />
        </div>
        {addressvalues.formState.errors.name && (
  <p className="text-red-500 text-sm">{addressvalues.formState.errors.name.message}</p>
)}
       </div>
         <div className="space-y-1">
         <div className="label">
            <span className="text-gray-400">Full Address</span>
        </div>
        <div className="input">
            <textarea {...addressvalues.register("details")}   id="fulladdress" placeholder="street,building,apartment" className="p-3 h-20 w-full border border-gray-400/30 rounded-2xl " >
            
            </textarea>
        </div>
        {addressvalues.formState.errors.details && (
  <p className="text-red-500 text-sm">{addressvalues.formState.errors.details.message}</p>
)}
        <div className="flex items-center gap-x-3 ">
            <div className="phone">
                <div className="label">
                    <span className="text-gray-400">Phone Number</span>
                </div>
                <input type="tel" {...addressvalues.register("phone")} placeholder="01xxxxxxxx"  id="phone" className="p-3 w-full border border-gray-400/30 rounded-2xl "/>

            </div>
            {addressvalues.formState.errors.phone && (
  <p className="text-red-500 text-sm">{addressvalues.formState.errors.phone.message}</p>
)}
            <div className="city">
                <div className="label">
                    <span className="text-gray-400">City</span>
                </div>
                <input type="text" {...addressvalues.register("city")} placeholder="Cairo"  id="city" className="p-3 w-full border border-gray-400/30 rounded-2xl "/>
            </div>
            {addressvalues.formState.errors.city && (
  <p className="text-red-500 text-sm">{addressvalues.formState.errors.city.message}</p>
)}
        </div>
        <div className="buttons flex items-center justify-between *:grow gap-x-3 mt-10">
            <button type="button" onClick={()=>{
                setaddaddressopened(false)
            }} className="p-3 cursor-pointer bg-gray-200 rounded-2xl hover:bg-gray-400 transition-colors duration-200 font-bold">Cancel</button>
            <button  type="submit" className="p-3 cursor-pointer bg-green-600 rounded-2xl text-white font-bold shadow-2xl hover:bg-green-700 transition-colors duration-200 ">Add Address</button>
        </div>
       </div>
       <div>
        
       </div>
    </form>

  </div>
  </div>
  
  
  </>
}
