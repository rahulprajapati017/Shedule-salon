export const BASE_URL="http://localhost:3000/api/v1"

export const view={
    GET_ALL_BANNER:"/admin/getallbanners",
    GET_ALL_GALLERY_BANNER:"/admin/getallgallerybanner",
    GET_ALL_PROMOS:BASE_URL+"/admin/getallpromos",

    GET_ALL_SALOON:BASE_URL+"/saloon/getallsaloon",
    GET_ALL_FAQ:BASE_URL+"/admin/getallfaq",
    GET_INFO:BASE_URL+"/admin/getinfo",
    GET_USER_PROFILE:BASE_URL+"/user/getuserprofile",
    USER_LOGIN:BASE_URL+"/auth/login",
    
    USER_SIGNUP:BASE_URL+"/auth/signup",
    USER_OTP_VERIFICATION:BASE_URL+"/auth/verifyotp",
    USER_RESEND_OTP:BASE_URL+"/auth/resendotp",
    USER_FORGOT_PASSWORD:BASE_URL+"/auth/forgotpassword",USER_FORGOT_PASSWORD_VERIFICATION:BASE_URL+"/auth/verifyforgotpasswordotp", 
    USER_RESET_PASSWORD:BASE_URL+"/auth/resetpassword"

    //The next task is to impliment saloons page apis

}