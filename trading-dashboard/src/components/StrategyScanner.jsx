import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/Table';
import SignalBadge from './SignalBadge';
import Progress from '@/components/ui/Progress';

const StrategyScanner = ({ scannerResults }) => {
  // Check if scannerResults is available and is an array
  if (!scannerResults) {
    console.log('scannerResults is undefined or null');
    return <div>Loading...</div>;  // Display loading message if no data
  }

  if (!Array.isArray(scannerResults)) {
    console.log('scannerResults is not an array:', scannerResults);
    return <div>No data available</div>;  // Handle case where scannerResults is not an array
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Symbol</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Change</TableHead>
          <TableHead>Volume</TableHead>
          <TableHead>Strategy</TableHead>
          <TableHead>Signal</TableHead>
          <TableHead>Pattern</TableHead>
          <TableHead>Strength</TableHead>
          <TableHead>Risk</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {scannerResults.map((result) => (
          <TableRow key={result.symbol}>
            <TableCell className="font-medium">{result.symbol}</TableCell>
            <TableCell>${result.price}</TableCell>
            <TableCell
              className={result.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}
            >
              {result.change}
            </TableCell>
            <TableCell>{result.volume}</TableCell>
            <TableCell>{result.strategy}</TableCell>
            <TableCell><SignalBadge signal={result.signal} /></TableCell>
            <TableCell>{result.pattern}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Progress value={result.strength} className="h-2 w-20" />
                <span className="text-sm">{result.strength}%</span>
              </div>
            </TableCell>
            <TableCell>{result.risk}</TableCell>
            <TableCell>
              <button className="text-blue-500 hover:underline">View</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StrategyScanner;
