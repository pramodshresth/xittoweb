import React from 'react'
const url='http://68.183.85.139:9000/api/v1';
let accessToken = localStorage.getItem('accessToken');
export const token = accessToken;

// export const fetchCategoryData = () =>`${url}/api/v1/category/all`;
export const loginapi = ()=>`${url}/auth/login`;
export const FetchCategoryData=()=>`${url}/category/all`;
export const FetchProblem=()=>`${url}/problems/get-all`;
export const CreateBooking=()=>`${url}/booking/create`;
export const RegisterProfessional=()=>`${url}/assistance/create`;
export const fetchworker=()=>`${url}/assistance/my?page=1&pageSize=5`;
export const Filterbookingbyassistance=()=>`${url}/booking/assistance/filter?status=`
export const Getallnotification=()=>`${url}/notification`;
export const Sendotp=()=>`${url}/otp/send`;
export const UserRegister=()=>`${url}/users/create-user`;
// const Api = () => {
//   return (
//     <div>Api</div>
//   )
// }

// export default Api