import React from 'react';
import DashboardSideber from './DashboardSideber';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <DashboardSideber>
                <Outlet></Outlet>
            </DashboardSideber>
        </div>
    );
};

export default Dashboard;