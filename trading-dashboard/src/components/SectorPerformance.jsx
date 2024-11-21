import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';
import  Progress  from './ui/Progress';

const SectorPerformance = ({ sectorPerformance }) => {
  if (!Array.isArray(sectorPerformance)) {
    return <div>Loading...</div>;  // Or some other placeholder
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Sector Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4">
          {sectorPerformance.map((sector) => (
            <div key={sector.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">{sector.name}</span>
                <span
                  className={`text-sm ${
                    sector.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {sector.change}
                </span>
              </div>
              <Progress value={sector.strength} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SectorPerformance;

