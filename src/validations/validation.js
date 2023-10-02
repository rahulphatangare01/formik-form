import * as Yup from 'yup'


export const signupValidation = Yup.object({
    name:Yup.string().min(3).required(" Enter Name"),
    email:Yup.string().email("Please Enter valid Email").required(" Enter Email"),
    mobileNo:Yup.string().matches(/^[0-9]{10}$/, 'Invalid mobile number')
    .required('Mobile number is required'),
    password:Yup.string().min(5).required('Password is required'),
})