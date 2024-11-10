import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../services/api/authSlice';
import { useGetAuthTokenMutation } from '../services/api/authentication';
import { useGetCostTableQuery } from '../services/api/tableData';
import Table from './Table';

const column = [
    { "header_name": "Metric Name", "key_name": "metric", "tooltip": "Name of the metric" },
    { "header_name": "AWS", "key_name": "AWS", "tooltip": "Total cost in AWS." },
    { "header_name": "Azure", "key_name": "Azure", "tooltip": "Total cost in Azure." },
    { "header_name": "GCP", "key_name": "GCP", "tooltip": "Total cost in GCP." },
    { "header_name": "Total till date", "key_name": "Total_Cost_Till_Date", "tooltip": "Total cost till date" },
    { "header_name": "Projected", "key_name": "Projected", "tooltip": "Total projected cost by the end of the month" }
]


const TableComponent = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const [getAuthToken] = useGetAuthTokenMutation();
  const { data, isLoading, error } = useGetCostTableQuery(
    { month: 10, year: 2024 },
    { skip: !token }
  );

  // useEffect(() => {
  //   console.log(data.data,'data')
  // },[data])

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const credentials = {
          username: 'johny123@hi2.in',
          password: 'Password@1',
          client_id: '7882rnmj3t9918kt2qduq4tol5',
        };
        const result = await getAuthToken(credentials).unwrap();
        dispatch(setToken(result.access_token));
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };
    if (!token) {
      fetchToken();
    }
  }, [getAuthToken, dispatch, token]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return <Table data={data?.data|| []} header={column} />;
};

export default TableComponent;
