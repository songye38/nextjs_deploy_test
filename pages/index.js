import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('Tab1');

  const tabs = [
    { id: 'Tab1', label: 'Tab 1', content: 'This is the content of Tab 1' },
    { id: 'Tab2', label: 'Tab 2', content: 'This is the content of Tab 2' },
    { id: 'Tab3', label: 'Tab 3', content: 'This is the content of Tab 3' },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Simple Tab Example</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              backgroundColor: activeTab === tab.id ? '#0070f3' : '#eaeaea',
              color: activeTab === tab.id ? 'white' : 'black',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        style={{
          padding: '20px',
          border: '1px solid #eaeaea',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
        }}
      >
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
