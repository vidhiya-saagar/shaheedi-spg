import * as fetch from 'node-fetch';
const baseUrl = process.env.REACT_APP_BASE_URL;
// const baseUrl = 'https://pink-shrimp-75.loca.lt/api/v1';

export const fetchGet = async (url = '', data = {}) => {
  console.log('GET', url);
  const response = await fetch(baseUrl + url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return await response.json();
};

export const fetchPost = async (url = '', data = {}) => {
  console.log('POST', url);
  const response = await fetch(baseUrl + url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const fetchPut = async (url = '', data = {}) => {
  console.log('PUT', url);
  const response = await fetch(baseUrl + url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export const fetchDelete = async (url = '') => {
  console.log('DELETE', url);
  const response = await fetch(baseUrl + url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  return await response.json();
};
