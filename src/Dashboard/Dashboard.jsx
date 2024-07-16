import { BsCashCoin } from "react-icons/bs";
import { FaHistory, FaHome, FaUsers } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { IoIosLogOut, IoMdSend } from "react-icons/io";
import { IoCashOutline } from "react-icons/io5";
import { MdAccountBalanceWallet, MdManageAccounts, MdManageHistory } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const isAadmin = false;
    const isAgent = true;
    return (
        <div className="flex min-h-screen">
            <div className="w-72 bg-sky-200">
                <div>
                    <h2 className="text-4xl font-bold my-8 text-center">Eclipse Wallet</h2>
                </div>
                {
                    isAadmin ?
                        <ul className="ml-6 font-medium space-y-4 text-xl">

                            <li>
                                <NavLink className="flex items-center gap-2" to="/send">
                                    <FaHome />  Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="flex items-center gap-2" to="/send">
                                    <FaUsers />  All Users</NavLink>
                            </li>
                            <li>
                                <NavLink className="flex items-center gap-2" to="/send">
                                    <MdManageAccounts />  Manage Accounts</NavLink>
                            </li>
                            <li>
                                <NavLink className="flex items-center gap-2" to="/send">
                                    <GrTransaction /> All Transactions</NavLink>
                            </li>
                            <div className="divider mr-6"></div>
                            <li>
                                <NavLink className="flex items-center gap-2" to="/send">
                                    <IoIosLogOut />  Log Out</NavLink>
                            </li>
                        </ul>
                        :
                        isAgent?
                        <ul className="ml-5 font-medium space-y-4 text-xl">

                            <li>
                                <NavLink className="flex items-center gap-2" to="/send">
                                    <FaHome />  Agent Home</NavLink>
                            </li>
                            
                            <li>
                                <NavLink className="flex items-center gap-2" to="/send">
                                <MdManageHistory />  Transaction Management</NavLink>
                            </li>
                            <li>
                                <NavLink className="flex items-center gap-2" to="/send">
                                    <GrTransaction /> Balance Inquiry</NavLink>
                            </li>
                            <li>
                                <NavLink className="flex items-center gap-2" to="/send">
                                <FaHistory />  Transactions History</NavLink>
                            </li>
                            <div className="divider mr-6"></div>
                            <li>
                                <NavLink className="flex items-center gap-2" to="/send">
                                    <IoIosLogOut />  Log Out</NavLink>
                            </li>
                        </ul>
                        :
                        <ul className="ml-6 font-medium space-y-4 text-xl">
                            <li>
                                <NavLink className="flex items-center gap-2" to="/userhome">
                                    <FaHome />   User Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="flex items-center gap-2" to="/send">
                                    <IoMdSend /> Send Money</NavLink>
                            </li>
                            <li>
                                <NavLink className="flex items-center gap-2" to="/send">
                                    <IoCashOutline />  Cash Out</NavLink>
                            </li>
                            <li>
                                <NavLink className="flex items-center gap-2" to="/send">
                                    <BsCashCoin />  Cash In</NavLink>
                            </li>
                            <li>
                                <NavLink className="flex items-center gap-2" to="/send">
                                    <MdAccountBalanceWallet />   Balance Inquiry</NavLink>
                            </li>
                            <li>
                                <NavLink className="flex items-center gap-2" to="/send">
                                    <GrTransaction />   Transactions History</NavLink>
                            </li>
                            <div className="divider mr-6"></div>
                            <li>
                                <NavLink className="flex items-center gap-2" to="/send">
                                    <IoIosLogOut />  Log Out</NavLink>
                            </li>
                        </ul>
                }


            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;