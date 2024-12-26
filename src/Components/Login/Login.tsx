// import axios from 'axios'
// import { useForm } from 'react-hook-form'
// import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'

// export default function Login() {
//   //بعمل اي ؟ validation عشان نعمل 
//   // 1-  react-hook-form ودي جايبها من  useFormاول حاجه قولتله 
//   // 2- register,handleSubmit,formState:{errors} منها 3 حاجات هم  destructing  قولت انا بعمل 
// //3- دي بتشلي الداتا اللي انا مدخلها  register اللي هيا بترسل الداتا و Submitمسأوله عن  handleSubmitوال  errors بتشلي ال  formState:{errors} ال 
// //4- اللي جواها api فيها وبتعامل مع ال  Submitبتشيل الداتا و اللي ب  function  بعرف ال
// // 5- input بتاعتي وال  form اني لازم اربط ال 

//   let {register,handleSubmit,formState:{errors}}= useForm()
// //   علي صافحه تاني يعني انتقل علي صفحه تانيه  useNavigate اعمل  react-router-dom جايبها من  hook دي  useNavigate ال 
//   let navigate=useNavigate()

//   // بتاعتي data لل  submit اللي بتعمل  function  دي ال
//   let onSubmit= async (data)=>{
//     //post ومدام هبعت داتا يبقي هستخدم  try ,catch يبقي هستخدم ال  data هيدخلي  user عشان ال  data دي هبعت من خلالها  login  ال 
//     try {
//             //form بتاعت الداتا ومعاها داتت ال  api  كده انا حطيت ال 
//       let response= await axios.post('https://dummyjson.com/auth/login',data)
//       //login يعمل  user عشان اعرفه ان عملية الدخول والداتا اللي دخلتها صح ودي في حالة لو الداتا صح دي هنا كده بقوله اني محتاج الرساله دي تظهر لما ال user عشان اعرض فيها رسالتي لل  react-toastify اللي بجبها من  toast لل import هنا عملت 
//       toast("login successfully!")
//     //وغيرها  home اللي فيها كل التفاصيل بتاعت الصفحه اللي هيا ال  dashboard كده انا هنتقل لصفحة ال 
//       navigate("/dashboard")
//       console.log(response)
//     } catch (error) {
//       console.log(error)
//       // دي في حالة لو الداتا غلط
//       toast("sorry login fulled!")

//     }
   
//   }

//   return (
//     <div id="login" className='container-fluid login-container '>
//       <div className="row vh-100 justify-content-center align-items-center">
//         <div className="col-md-4">
//             <div className='bg-white rounded p-5 py-5'>
//                 <div className="title text-center py-3">
//                 <div className='login-h3'>
//                 <h3>User Management System</h3>
//                 </div>
//                 <h4 className='my-3'>Sign In</h4>
//                 <small>Enter your credentials to access your account</small>
//                 </div>
//                 {/*والاسم ده بخده من ال باك ايند username  ده اللي هو ال input اللي هيا انا لسه معرفها فوق اللي بتاخد الداتا وبديله اسم الحاجه اللي هيشيل فيها العنصر بتاع ال  onSubmit اللي انا لسه معرفها فوق وبتاخد ال  useform اللي هتبعتلي الداتا و دي جيالي من ال  handleSubmit بتاعتي بالداتا اللي هبعتها وال form كده بس دي عشان اربط ال  onclick زي ال event  دي  onSubmit بتاعتي ال form كدة انا بربط ال */}
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="form-details my-3 mb-1">
//                     <label>Username</label>
//                     {/* كمان input دي عشان اربط ال input دي اللي في ال  {...register()} */}
//                     {/* انه مطلوب required فيه داتا ومعني كلمة  run ده ي  input  كده بقوله مينفعش ال  {required:"username is required"} ال */}
//                     <input type="text" className='form-control' placeholder='Enter Your username' {...register("username",{required:"username is required"})} />
//                     {/* username is required دي ان ال  span مدخل داتا غلط او مدخلش داتا او في مشكله في الداتا اظهرلي في  user بقوله لو ال  errors هنا في ال  */}
//                     {errors.username && <span className='text-danger'>{errors.username.message} </span> }
//                     <br />
//                     <label>Password</label>
//                     <input type="text" className='form-control my-2' placeholder='Enter Your Password' {...register("password",{required:"password is required"})}/>
//                     {errors.password && <span className='text-danger'>{errors.password.message} </span> }
//                 </div>
//                 <button className='btn btn-warning w-100 text-white my-4'>SIGN IN</button>
//                 </form>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

//js واللي فوق هو ال type scrept الكود اللي تحت ده هو ال 

import axios from 'axios';
import  { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthContext';

// تعريف أنواع الحقول
interface LoginFormInputs {
  username: string;
  password: string;
}

export default function Login(): JSX.Element {
  // استخدام useForm مع الأنواع
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  
  // تعريف التوجيه باستخدام useNavigate
  const navigate = useNavigate();

  //  AuthContext ال  component في  token  بتاعت فك الضغط بتاع ال function ال saveUserData ودي / login اللي عمل بيها  user للبيانات الخاصه بال  save  هيعمل  login يعمل  user كده لما ال 
  let {saveUserData}=useContext(AuthContext)

  // دالة الإرسال
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      // إرسال طلب تسجيل الدخول
      const response = await axios.post('https://dummyjson.com/auth/login', data);
      //Token لل  set  وعملت  Backendاللي جايلي من ال  accessToken بتاعي اللي هو  Token شيلي ال "userToken" ناجح خلي ال  login وال  login ان انا عملت  log كده بقوله بعد ما اتأكد من ال 
      localStorage.setItem("userToken",response?.data?.accessToken);
      // عشان يحفظلي البيانات جواه localStorage بعد ال  coll ال  function  كده انا عمل لل
      saveUserData();

      // عرض رسالة نجاح
      toast("Login successfully!");
      
      // توجيه المستخدم إلى صفحة لوحة التحكم
      navigate("/dashboard");
    } 
    catch (error: any) {
      console.error(error);
      // عرض رسالة خطأ
      toast("Sorry, login failed!");
    }
  };

  return (
    <div id="login" className='container-fluid login-container'>
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-xl-4 col-lg-6 col-md-8 col-sm-10">
          <div className='bg-white rounded p-5 py-5'>
            <div className="title text-center py-3">
              <div className='login-h3'>
                <h3>User Management System</h3>
              </div>
              <h4 className='my-3'>Sign In</h4>
              <small>Enter your credentials to access your account</small>
            </div>
            
            {/* نموذج تسجيل الدخول */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-details my-3 mb-1">
                <label>Username</label>
                <input
                  type="text"
                  className='form-control'
                  placeholder='Enter Your username'
                  {...register("username", { required: "Username is required" })}
                />
                {errors.username && <span className='text-danger'>{errors.username.message}</span>}
                
                <br />
                
                <label>Password</label>
                <input
                  type="password"
                  className='form-control my-2'
                  placeholder='Enter Your Password'
                  {...register("password", { required: "Password is required" })}
                />
                {errors.password && <span className='text-danger'>{errors.password.message}</span>}
              </div>
              
              <button className='btn btn-warning w-100 text-white my-4'>SIGN IN</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
