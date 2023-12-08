import React, { useState } from 'react';
import './VerticalTabs.css';

interface Tab {
    id: string;
    title: React.ReactNode;
    titleText: string;
    content: React.ReactNode;
}

interface VerticalTabsProps {
    tabs: Tab[];
}

const VerticalTabs: React.FC<VerticalTabsProps> = ({ tabs }) => {
    const [activeTabId, setActiveTabId] = useState(tabs[0].id);
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    return (
        <div className="tabs-container">
            <div className="tab-titles">
                {tabs.map((tab, index) => (
                    <div className='tab-title-wrapper'>
                        <div
                            key={tab.id}
                            className={`tab-title ${tab.id === activeTabId ? 'active' : ''}`}
                            onClick={() => {setActiveTabId(tab.id), setActiveTabIndex(index)} }
                        >
                            {tab.title}
                        </div>
                    </div>
                ))}
                <div className="tab-title-back" style={{transform: `translateY(${activeTabIndex * 100}px)`, transition: 'transform 0.5s ease-in-out'}}></div>
            </div>
            <div className='tab-title-text-wrapper'>
                    {
                        tabs.map((tab, index) =>
                            <div className='tab-title-text' style={{opacity: index===activeTabIndex?1:0 }}>
                                {tab.titleText}
                            </div>
                        )
                    }
            </div>
            <div className="tab-content-wrapper">
                <div className='tab-content-body' style={{ transform: `translateY(-${(activeTabIndex) * 550}px)`,
                        transition: 'transform 0.5s ease-in-out'}}>
                    {
                        tabs.map((tab) =>
                            tab.content
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default VerticalTabs;