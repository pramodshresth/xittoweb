import React from 'react'
const url='http://192.168.1.133:9000';
let accessToken = localStorage.getItem('accessToken');
export const token = accessToken;
export const fetchCategoryData = () =>`${url}/api/v1/category/all`;
// const Api = () => {
//   return (
//     <div>Api</div>
//   )
// }

// export default Api