import React from 'react';
import  Badge  from '../components/ui/Badge';

const SignalBadge = ({ signal }) => (
  <Badge
    className={`
      ${signal === 'BUY' ? 'bg-green-100 text-green-800 hover:bg-green-200' : 
        signal === 'SELL' ? 'bg-red-100 text-red-800 hover:bg-red-200' : 
        'bg-gray-100 text-gray-800 hover:bg-gray-200'}
    `}
  >
    {signal}
  </Badge>
);

export default SignalBadge;
