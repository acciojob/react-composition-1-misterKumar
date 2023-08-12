import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={index === activeTab ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

const App = () => {
  const tabsData = [
    { title: 'Tab 1', content: 'This is the content for Tab 1.'  },
    { title: 'Tab 2', content: 'This is the content for Tab 2.'  },
    { title: 'Tab 3', content: 'This is the content for Tab 3.' },
  ];

  return (
    <div>
    
      <Tabs tabs={tabsData} />
    </div>
  );
};

export default App;
