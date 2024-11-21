import React, { useState } from 'react';
import MarketOverview from '../components/MarketOverview';
import SectorPerformance from '../components/SectorPerformance';
import StrategyScanner from '../components/StrategyScanner';

const TradingDashboard = () => {
  const [activeTab, setActiveTab] = useState('scanner');

  // Sample data for market performance and scanner results
  const marketPerformance = {
    sectorPerformance: [
      { sector: 'Technology', performance: 10 },
      { sector: 'Healthcare', performance: 5 },
      // More data...
    ],
    // other market data...
  };
  
  const scannerResults = [
    {
      symbol: 'AAPL',
      price: 150,
      change: '+2%',
      volume: '10M',
      strategy: 'Bullish',
      signal: 'Strong',
      pattern: 'Head and Shoulders',
      strength: 80,
      risk: 'Low',
    },
    {
      symbol: 'GOOGL',
      price: 2800,
      change: '-1.5%',
      volume: '5M',
      strategy: 'Bearish',
      signal: 'Moderate',
      pattern: 'Double Top',
      strength: 60,
      risk: 'Medium',
    },
    // More data...
  ];

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div>
        {/* Tab navigation */}
        <button onClick={() => handleTabClick('scanner')}>Strategy Scanner</button>
        <button onClick={() => handleTabClick('marketOverview')}>Market Overview</button>
        <button onClick={() => handleTabClick('sectorPerformance')}>Sector Performance</button>
      </div>

      {/* Conditionally render the components based on activeTab */}
      {activeTab === 'scanner' && <StrategyScanner scannerResults={scannerResults} />}
      {activeTab === 'marketOverview' && <MarketOverview marketPerformance={marketPerformance} />}
      {activeTab === 'sectorPerformance' && <SectorPerformance sectorPerformance={marketPerformance.sectorPerformance} />}
    </div>
  );
};

export default TradingDashboard;
