import isJwtTokenExpired, {  } from 'jwt-check-expiry';
const url='http://68.183.85.139:9000/api/v1';
let accessToken = localStorage.getItem('accessToken');

export var token = accessToken;
try{
    const Isexpired=isJwtTokenExpired(token)
if(Isexpired)
{
    token=""
    localStorage.removeItem('accessToken');
}
}
catch (error) {
    // This block will handle the error
    console.error("An error occurred:", error.message);
  }

// export const fetchCategoryData = () =>`${url}/api/v1/category/all`;
export const loginapi = ()=>`${url}/auth/login`;
export const FetchCategoryData=()=>`${url}/category/all`;
export const FetchProblem=()=>`${url}/problems/get-all`;
export const CreateBooking=()=>`${url}/booking/create`;
export const RegisterProfessional=()=>`${url}/assistance/create`;
export const fetchworker=()=>`${url}/assistance/my?page=1&pageSize=50`;
export const Filterbookingbyassistance=()=>`${url}/booking/assistance/filter?status=`
export const Getallnotification=()=>`${url}/notification`;
export const Sendotp=()=>`${url}/otp/send`;
export const UserRegister=()=>`${url}/users/create-user`;
export const UpdateStatus=()=>`${url}/booking`
export const Ongoing=()=>`${url}/booking/assistance/filter?status=ongoing`
export const Pending=()=>`${url}/booking/assistance/filter?status=pending`
export const Completed=()=>`${url}/booking/assistance/filter?status=completed`
export const Appoint=()=>`${url}/booking/assistance/filter?status=appoint`