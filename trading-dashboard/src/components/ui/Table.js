// Table.js
import React from 'react';

const Table = ({ children }) => {
  return <table className="table">{children}</table>;
};

const TableHeader = ({ children }) => {
  return <thead className="table-header">{children}</thead>;
};

const TableRow = ({ children }) => {
  return <tr className="table-row">{children}</tr>;
};

const TableCell = ({ children }) => {
  return <td className="table-cell">{children}</td>;
};

const TableBody = ({ children }) => {
  return <tbody className="table-body">{children}</tbody>;
};

const TableHead = ({ children }) => {
  return <th className="table-head">{children}</th>;
};

export { Table, TableHeader, TableRow, TableCell, TableBody, TableHead };
