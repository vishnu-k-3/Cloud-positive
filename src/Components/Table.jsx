import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const TableUI = ({ header, data }) => (
    <Table>
      <TableHead style={{background: 'gray'}}>
        <TableRow>
          {header?.map((col, index) => (
            <TableCell key={col.key_name}>
              {col.header_name}
              {index === header.length - 1 && col.tooltip && (
                <Tooltip title={col.tooltip} 
                         sx={{ color: 'gray', pl: 1 }}>
                  <InfoIcon fontSize="small" />
                </Tooltip>
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {header.map((col) => (
              <TableCell key={col.key_name}>
                {col.key_name === "metric" ? (
                  <div>
                    <span style={{ color: 'blue' }}>{row[col.key_name]}</span>
                    <Tooltip title={row.tooltip} 
                      sx={{ color: 'gray', pl: 1 }}>
                      <InfoIcon fontSize="small" />
                    </Tooltip>
                  </div>
                ) : (
                  row[col.key_name] ?? "-"
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
);

export default TableUI;