import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GrProductHunt } from 'react-icons/gr';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { ImBlogger2 } from 'react-icons/im';
const DashboardSideber = ({ children }) => {
    const [isClicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!isClicked);
      };
   
    return (
        <div class="drawer drawer-mobile bg-[#fff]">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                {/*  <!-- Page content here --> */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-72 bg-[#0B2447] text-white">
                    <h1 className='mb-4 ml-4  font-bold text-2xl text-[#B6EADA]'>Offsore IT</h1>
                    {/*   Sidebar content here */}
                    <li>
                        <Link className="bg-white text-[#301E67] font-medium" to="dashboard-home"  onClick={handleClick}><GrProductHunt />Dashboard</Link>
                    </li>
                    <li>
                        <Link className="bg-transparent text-[#301E67]font-medium" to="projects" ><GrProductHunt />Project</Link>
                    </li>
                </ul>

            </div>
        </div >
    );
};

export default DashboardSideber;