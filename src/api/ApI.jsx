import React from 'react'
const url='http://68.183.85.139:9000/api/v1';
let accessToken = localStorage.getItem('accessToken');
export const token = accessToken;

// export const fetchCategoryData = () =>`${url}/api/v1/category/all`;
export const loginapi = ()=>`${url}/auth/login`;
export const FetchCategoryData=()=>`${url}/category/all`;
export const FetchProblem=()=>`${url}/problems/get-all`;
// const Api = () => {
//   return (
//     <div>Api</div>
//   )
// }

// export default Api