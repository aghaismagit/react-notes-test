import React from 'react';
import { Sidebar } from 'widgets/Sidebar';
import { Workspace } from 'widgets/Workspace';

const MainPage = () => (
    <div className="template">
        <Sidebar />
        <main className="main">
            <Workspace />
        </main>
    </div>
);

export default MainPage;
