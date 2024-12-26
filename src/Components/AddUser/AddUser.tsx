// import { useForm } from 'react-hook-form'
// import { errors } from './../../../node_modules/@swc/helpers/scripts/errors';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// export default function AddUser() {
//   let {register,handleSubmit,formState:{errors}}=useForm()
//   let navigate=useNavigate()
//   let onSubmit=async (data)=>{
//    try {
//     let response=await axios.post("https://dummyjson.com/users/add",data)
//     // هيدخل داتا فلازم ابعت الداتا كده user لان ال data عشان هنبعت داتا وهنحط معاها post بتاعتنا جوا ال  api هنا هنحط اللينك بتاع ال 
//     console.log(response)
//     //بنجاح add عشان نتاكد ان الداتا وصلت صح او حصلها  toast.success عملنا ال 
//     toast.success("user addet successfully")
//     //للداتا اللي دخلتلك add بعد ما تعمل  userslistبقوله وديني علي صفحة ال save هنا بعد ما ندخل الداتا وندوس 
//     navigate("/dashboard/userslist")
//    } catch (error) {
//     console.log(error)
//     // للداتا اللي مبعوته add وهنا ببلغ لو حصل خطئ وانا بعمل 
//     toast.error("failed")
//    }
//   }
//   return (
//     <>
//       <div className='mx-3'>
//         <h3>Add User</h3>
//       </div>
//       <hr />
//       <form onSubmit={handleSubmit(onSubmit)} className='shadow-lg p-4  m-5 rounded '>
//     <div className="row  ">
//     <div className='col-md-6'>
//     <label>First Name</label>
//         <input
//           type="text"
//           className='form-control my-2'
//           placeholder='Enter Your First Name'
//           {...register("firstName", { required: "firstName is required" })}
//         />
//         {errors.firstName && <span className='text-danger'>{errors.firstName.message}</span>}
//       </div>
//     <div className='col-md-6'>
//       <label>Last Name</label>
//       <input
//         type="text"
//         className='form-control my-2'
//         placeholder='Enter Your Last Name'
//         {...register("lastName", { required: "lastName is required" })}
//       />
//       {errors.lastName && <span className='text-danger'>{errors.lastName.message}</span>}
//     </div>
    
              
//               {/* <button className='btn btn-warning w-100 text-white my-4'>SIGN IN</button> */}
//       </div>
//       <div className="row my-4 ">
//     <div className='col-md-6'>
//     <label>Email</label>
//         <input
//           // type="Email"
//           className='form-control my-2'
//           placeholder='Enter Your Email'
//           {...register("email", { required: "email is required", pattern:{
//             value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,message:"this email not email"
//             // بيظهرلي برضوا ان مفروض ادخل ايميل type عشان الرساله دي تظهرلي لان ال typeوفي الحاله دي هنشيل ال validation مش  email  ان ال user ودي بتاخد الرساله اللي بقولها لل  message تاني حاجه بتاخد حاجه اسمها  email الخاص بال  validation بتاع ال  rejex وبيديها ال  value بتاخد مني حاجتين اول حاجه هي ال object دي عباره عن  pattern عندي حاجه اسمها 
//           } })}
//         />
//         {errors.email && <span className='text-danger'>{errors.email.message}</span>}
//       </div>
//     <div className='col-md-6'>
//       <label>Age</label>
//       <input
//         type="number"
//         className='form-control my-2'
//         placeholder='Enter Your Age'
//         {...register("age", { required: "age is required", max:{
//           value:50,message:"this age not greater than 50"
//         } })}
//       />
//       {errors.age && <span className='text-danger'>{errors.age.message}</span>}
//     </div>
    
//       </div>
//       <div className="row  ">
//     <div className='col-md-6'>
//     <label>Phone Number</label>
//         <input
//           type="number"
//           className='form-control my-2'
//           placeholder='Enter Your Phone Number'
//           {...register("phone", { required: "phone is required" })}
//         />
//         {errors.phone && <span className='text-danger'>{errors.phone.message}</span>}
//       </div>
//     <div className='col-md-6'>
//       <label>Birth Date</label>
//       <input
//         type="date"
//         className='form-control my-2'
//         placeholder='Enter Your Birth Date'
//         {...register("birthDate", { required: "birthDate is required" })}
//       />
//       {errors.birthDate && <span className='text-danger'>{errors.birthDate.message}</span>}
//     </div>
    
              
             
//       </div>
//       <div className='text-center my-4'> 
//       <button className='btn btn-warning w-50  text-white '>Save</button>
//       </div>
//       </form>
//     </>
//   )
// }

//js واللي فوق هو ال type scrept الكود اللي تحت ده هو ال 


import axios from 'axios';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phone: string;
  birthDate: string;
}

export default function AddUser() {
  const location = useLocation();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<User>();
  const navigate = useNavigate();

  // تحقق إذا كان هناك بيانات مستخدم (تعديل)
  const user = location.state?.user as User | undefined;

  useEffect(() => {
    if (user) {
      // تعبئة الحقول إذا كنا في وضع التعديل
      Object.keys(user).forEach((key) => {
        setValue(key as keyof User, user[key as keyof User]);
      });
    }
  }, [user, setValue]);

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      if (user) {
        // تحديث البيانات
        let response = await axios.put(`https://dummyjson.com/users/${user.id}`, data);
        console.log(response);
        toast.success("User updated successfully");
      } else {
        // إضافة بيانات جديدة
        let response = await axios.post("https://dummyjson.com/users/add", data);
        console.log(response);
        toast.success("User added successfully");
      }
      navigate("/dashboard/userslist");
    } catch (error) {
      console.log(error);
      toast.error("Operation failed");
    }
  };

  return (
    <>
      <div className="mx-3 mt-2">
        <h3>{user ? "Update User" : "Add User"}</h3>
      </div>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg p-4 m-5 rounded">
        <div className="row">
          <div className="col-md-6">
            <label>First Name</label>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Enter Your First Name"
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && <span className="text-danger">{errors.firstName.message}</span>}
          </div>
          <div className="col-md-6">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Enter Your Last Name"
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && <span className="text-danger">{errors.lastName.message}</span>}
          </div>
        </div>
        <div className="row  my-4">
          <div className="col-md-6">
            <label>Email</label>
            <input
              // type="email"
              className="form-control my-2"
              placeholder="Enter Your Email"
              {...register("email", { required: "email is required" , pattern:{
                  value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message:"this isn't a valid email"
              }  })}
            />
            {errors.email && <span className="text-danger">{errors.email.message}</span>}
          </div>
          <div className="col-md-6">
            <label>Age</label>
            <input
              type="number"
              className="form-control my-2"
              placeholder="Enter Your Age"
              {...register("age", { required: "age is required" ,
                  min: {
                value: 0, 
                message: "Age cannot be negative"
              }, 
               max:{
                  value:50, message:"the age must be smaller than 51"
              } })}
            />
            {errors.age && <span className="text-danger">{errors.age.message}</span>}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Phone Number</label>
            <input
              type="tel"
              className="form-control my-2"
              placeholder="Enter Your Phone Number"
              {...register("phone", { required: "phone is required" })}
            />
            {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
          </div>
          <div className="col-md-6">
            <label>Birth Date</label>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Enter Your Birth Date"
              {...register("birthDate", { required: "Date is required" })}
            />
            {errors.birthDate && <span className="text-danger">{errors.birthDate.message}</span>}
          </div>
        </div>

        <div className="text-center my-4">
          <button className="btn btn-warning w-50 text-white">
            {user ? "Update" : "Save"}
          </button>
        </div>
      </form>
    </>
  );
}
