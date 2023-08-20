import React from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBars, FaWindowClose } from "react-icons/fa";


const Dashboard = () => {
    const [checked, setChecked] = useState(false);
    const adminMenuItems = <React.Fragment>

        <div className='mt-10'>
            <div className="adminMenuItems">
                <li>
                    <Link className=" w-full hover:text-[#6677FF] " to="/">
                        <span className='flex'>
                            Home
                        </span>

                    </Link>
                </li>
                <li>
                    <Link className=" w-full hover:text-[#6677FF] " to="/">
                        <span className='flex'>

                            Cobrar
                        </span>
                    </Link>
                </li>
                <div className="collapse ">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title flex justify-between w-[124%] hover:text-[#6677FF] " >
                        <span>
                            <i class="fa-solid fa-bars text-xs w-[20px]"></i>
                            Ofertas
                        </span>{" "}
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                    <div className="collapse-content ">
                        <ul className='border-l'>
                            <li className=" w-[120%] p-0 hover:text-[#6677FF] collapse">
                                <Link className="" to="/">
                                    <i className="fa-solid fa-circle text-[4px]"></i> Aceitos
                                </Link>
                            </li>
                            <li className=" w-[120%] p-0 hover:text-[#6677FF] collapse">
                                <Link className="" to="/">
                                    <i className="fa-solid fa-circle text-[4px]"></i>Pendentes
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <li>
                    <Link className=" w-full hover:text-[#6677FF] " to="/">
                        <span className='flex'>

                            Pagos
                        </span>
                    </Link>
                </li>
                <li>
                    <Link className=" w-full hover:text-[#6677FF] " to="/">
                        <span className='flex'>
                            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwH_qfMh8xLqWbPz4EiiXZMAD1ctaEomakHyedeBbz-w&s" alt="" className='w-5 mr-3' /> */}
                            Log Out
                        </span>
                    </Link>
                </li>
            </div>
        </div>
    </React.Fragment>


    return (
        <div>
            <div className="max-w-[7680px] mx-auto ">
                <div className="bg-white py-2   mx-auto lg:ml-64 lg:px-20 ">
                    {/* nav upper */}
                    <div className=" py-18 mx-auto px-3 lg:px-0 mt-3 flex justify-between ">
                        <div className=" top-7  md:left-64 bg-white  navIcon flex ">
                            <label htmlFor="my-drawer-2" className="block lg:hidden mt-4">

                                {checked ? (

                                            <FaWindowClose ></FaWindowClose>
                                     
                                ) : (
                                    <FaBars></FaBars>
                                )}
                            </label>
                            <div className="lg:-ml-16 md:ml-5 ml-5">
                                <Link className=" w-full hover:text-[#ff8084] " to="/">
                                    <h1 className='text-4xl'>Home</h1>
                                </Link>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex ">
                                <div className="dropdown dropdown-bottom dropdown-end w-6 mr-3 mt-2">
                                    <button><img src='' alt="" /></button>
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li >
                                            <Link>English</Link>
                                        </li>
                                        <li><Link>Arabic</Link></li>
                                        <li><Link>Bangla</Link></li>
                                        <li><Link>Franch</Link></li>
                                    </ul>
                                </div>
                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <div className="avatar">
                                        <div className="w-14 rounded-lg">
                                            <img src="" alt='' />
                                        </div>
                                    </div>
                                    {/* <label tabIndex={0} className="btn ">
                                        <img className="rounded-full" src='' alt="" />
                                    </label> */}
                                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><Link>Profile</Link></li>
                                        <li><button

                                        >LogOut</button></li>
                                    </ul>
                                </div>
                                <div className="ml-3 hidden lg:block md:block">
                                    <p>Saklain Mostak</p>
                                    <p>Admin</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="drawer drawer-mobile lg:-mt-24 ">
                    <input
                        onChange={() => setChecked(!checked)}
                        id="my-drawer-2"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content px-2 py-3 lg:mt-24">
                        <Outlet />
                    </div>
                    <div className="drawer-side">
                        <label for="my-drawer-2" className="drawer-overlay "></label>

                        <div className="bg-white w-64 lg:w-64 md:w-48">
                                {/* width height of side nav */}
                            <div className=" my-3 mt-6">
                                <div className="text-center">
                                    {/* <div className="ml-5">
                                        <img src='' className="w-48" alt="" />
                                    </div> */}
                                    <div className="avatar">
                                        <div className="">
                                            <img src='' alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="menu p-3 overflow-y-auto  text-base-content justify-center bg-white">

                                {adminMenuItems}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;