import React,{useState} from "react";
import "../styles/App.css";
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
  export default Tabs;