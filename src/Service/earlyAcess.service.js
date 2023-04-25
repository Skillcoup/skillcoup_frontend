import { http } from "./http-common.service";

const baseURL = process.env.REACT_APP_BACKEND_API;

export const sendEarlyAccessDataToBackend = async({data})=>{
    return await http(`${baseURL}/api/v1/earlyaccess/signup`,data,"POST");
}