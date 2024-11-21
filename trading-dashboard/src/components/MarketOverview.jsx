import React from 'react';

import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'; // If named exports
import MiniChart from './MiniChart';
import Badge from '@/components/ui/Badge';
import { ChevronUp, ChevronDown } from 'lucide-react';

const MarketOverview = ({ marketPerformance }) => {
  if (!marketPerformance || !marketPerformance.mainIndices) {
    return <div>Loading...</div>; // You can replace this with any loading UI
  }

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {marketPerformance.mainIndices.map((index) => (
        <Card key={index.name} className="relative overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm text-gray-500">{index.name}</CardTitle>
              <Badge variant={index.direction === 'up' ? 'success' : 'destructive'}>
                {index.change}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-2">
              <span className="text-2xl font-bold">{index.value}</span>
              {index.direction === 'up' ? 
                <ChevronUp className="w-6 h-6 text-green-500" /> : 
                <ChevronDown className="w-6 h-6 text-red-500" />
              }
            </div>
            <div className="h-10">
              <MiniChart data={index.trend} />
            </div>
            <div className="text-sm text-gray-500 mt-2">
              Vol: {index.volume}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MarketOverview;
