// Card.js
import React from 'react';

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

const CardHeader = ({ children }) => {
  return <div className="card-header">{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h3 className="card-title">{children}</h3>;
};

const CardContent = ({ children }) => {
  return <div className="card-content">{children}</div>;
};

export { Card, CardHeader, CardTitle, CardContent };
