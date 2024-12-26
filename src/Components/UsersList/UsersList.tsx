// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { Table } from 'react-bootstrap'
// import { FaEdit } from 'react-icons/fa'
// import { MdDelete } from 'react-icons/md'

// export default function UsersList() {
//   //viwo عشان اعرض الداتا في ال useState([]) هعمل 
//   let [users,setUsers]=useState([])
//   //get للداتا يعني هنجيب داتا يبقي هنستخدم  fatch هنا هنعمل 
//   let getUsers= async()=>{
//     try {
//       let response= await axios.get("https://dummyjson.com/users")
//       setUsers(response?.data?.users)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   //يحمل component عشان عايزين الداتا تيجي اول ما ال return قبل ال  useEffect احنا هنا عملنا ال
//   useEffect(()=>{
//     getUsers()
//   },[])
//   return (
//     <div>
//       <div className='d-flex justify-content-between mx-3'>
//         <h4>Users List</h4>
//         <button className='btn btn-warning text-white'>Add New User</button>
//       </div>
//       <hr />
//       <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>id</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Age</th>
//           <th>Gender</th>
//           <th>Email</th>
//           <th>Phone</th>
//           <th>Birth Date</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//        {users.map((user)=>(
//          <tr key={user.id}>
//           <tr >{user.id}</tr>
//          <td><img src={user.image} className='w-25' alt="image" /></td>
//          <td>{user.firstName}</td>
//          <td>{user.lastName}</td>
//          <td>{user.age}</td>
//          <td>{user.gender}</td>
//          <td>{user.email}</td>
//          <td>{user.phone}</td>
//          <td>{user.birthDate}</td>
//          <td><FaEdit className='text-warning' size={20} /></td>
//          <td><MdDelete className='text-warning' size={20}/></td>
//        </tr>
//        ))}
       
//       </tbody>
//     </Table>
//     </div>
//   )
// }

//js واللي فوق هو ال type scrept الكود اللي تحت ده هو ال 

import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PreLoader from '../PreLoader/PreLoader';


// تعريف نوع بيانات المستخدم
interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  birthDate: string;
  image: string;
}

export default function UsersList(): JSX.Element {
  let [loading,setLoading]=useState<boolean>(false)  // هنا علي انها تظهر قبل ما الداتا الجدول يفتح loading دي عشان اهنديل ال 

  let [userId,setUserId]=useState<number>(0);  //  مختلف عن التاني user  بتاع كل  id  لان ال user لكل  setUsreId  , userId متغير فلازم نعمل  user بتاع كل  id عشان عندنا ال 

  let [userData,setUserData]=useState<User | null>(null)  // بس id نفسه مش ال  user يبقي معايا داتا ال Modal هنا كمان بهندل ان يبقي معيا وانا بفتح ال

  const [show, setShow] = useState<boolean>(false);  //تمسحلي الداتا اللي انا عايزها تتمسح  delete ودي خاصه بأني عايز لما ادوس علي الايكونه بتاعت ال Modal الثلاث حاجات اللي عندي تحت دول بتوع ال

  const handleClose = (): void => setShow(false);// واهندله لما يكون خلص الدليت بتاعه Modal لل  viwo لل  update دي عشان اعمل 

  //Modal بتاع ال Close , show دي بهندل فيها ال 
  const handleShow = (user:User): void => {
    setShow(true);    // وكل البيانات idاللي فيه ال  object هو ال  userلان ال userDataبتاع ال perant عشان هو  handleShow في ال  user حطينا هنا 

    setUserId(user.id)    // اللي جوا البيرنت idهنا بقوله انا عايز ال 

    setUserData(user)    // مين user مختلف علي حسب انا واقف علي user كل مره ب  set بتعملي ليها  user هنا بقوله ان عندي حاجه اسمها 

  }
  let navigate=useNavigate()  //navigateToAddUser اللي عملتها اللي هيا  functhon تحت في ال navigat وحطيت ال adduser انتقل لصفحة  Add New Use اللي اسمه  button عشان انتقل من خلال ال useNavigate عرفنا هنا ال


  // -----
  // حالة لحفظ قائمة المستخدمين
  const [users, setUsers] = useState<User[]>([]);

  // دالة لجلب بيانات المستخدمين
  const getUsers = async (): Promise<void> => {
    try {
      setLoading(true)      // لحد ما الداتا تيجي Loading هنا بشغل ال 

      const response = await axios.get("https://dummyjson.com/users");
      setUsers(response?.data?.users);
      setLoading(false)      //false ب Loading هنا بقوله بعد ما الداتا تيجي رجعلي ال 

    } catch (error) {
      console.error(error);
    }
  };
  //user اللي هنمسح من خلالها الداتا بتاعت ال  deleteUser بنعرف فيها دالة ال function هنا بنعمل 
  let deleteUser=()=>{
    try {
      //بالظبط user عشان نبقي عارفين احنا هنمسح داتا بتاعت انهي  userIdاللي عرفناها فوق بتاعت ال function  بتاع المسح ال  api ادينا هنا للينك بتاع ال 
      let response =axios.delete(`https://dummyjson.com/users/${userId}`)
      console.log(response)
      handleClose()      // Modal في ال   noاو yes  لما ادوس  deleteبتاع ال  Modal لما اعمل كده هيقفلي ال handleClose()
      toast.success("Successful deletion")      // بظهرله رساله تقوله ان الحذف تم بنجاح delete هنا بعد ما بعمل 
    } catch (error) {
      console.log(error)
      toast.error("Unsuccessful deletion")    //  بظهرله رساله تقوله ان الحذف غير ناجح دفي في حالة لو الحذف متمش delete هنا بعد ما بعمل 

    }
  }
  let navigateToAddUser=()=>{
      navigate("/dashboard/adduser")    //function اللي هيا اسم ال  navigateToAddUser يوديني علي  onclickعشان اقوله ال onclick هربطها بال  button وهروح لل button هنا بقوله عايز انتقل للصفحه دي لما اضغط علي ال 

  }

  // استخدام useEffect لجلب البيانات عند تحميل المكون
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
    {/*  خليهولي شغال تمام لحد ما ال داتا تيجي  load ب  loading لو ال  userslest انا كده بسأل بقوله لو دخلت علي صفحة ال  */}
    {loading?<PreLoader/>:
    <>
     <div className='user-list mt-2'>
      <div className='d-flex justify-content-between align-items-center mx-3 top-section'>
        <h4 className='mb-0'>Users List</h4>
        {/*adduser هيدخلي علي صفحة ال  buttonكده لما اضغط علي ال  onClick={navigateToAddUser} */}
        <button onClick={navigateToAddUser} className='btn btn-warning text-white'>Add New User</button>
      </div>
      <hr />
      <div className="responsive-table">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Birth Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td><img src={user.image} style={{width: '25px'}} alt="user" /></td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.birthDate}</td>
                <td>
                  <FaEdit className='text-warning'
                    size={20}
                    onClick={() =>
                      navigate("/dashboard/updateuser", { state: { user: user } })
                    }
                  />
                  {/*  بالظبط  ا  user عشان اعرف انا همسح انهي  user ال  Delete بتاع ال handleShow اديت ال */}
                  <MdDelete  onClick={()=>handleShow(user)} className='text-warning' size={20} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deleting {userData?.firstName} ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete {userData?.firstName} {userData?.lastName}?!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>deleteUser()}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
      
    </div>
    </>}
    </>
   
  );
}
