import React, { useState } from 'react';
import Tabs from './Tabs';



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
