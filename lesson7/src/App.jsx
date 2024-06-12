import { useState } from 'react';
import './App.css';


function App() {
 const [listStudent, setListStudent] = useState([
   {
     id: 1,
     name: 'Doraemon',
     weight: 120,
   },
   {
     id: 2,
     name: 'Nobita',
     weight: 20,
   },
   {
     id: 3,
     name: 'Jaien',
     weight: 60,
   },
 ]);
 const [newStudent, setNewStudent] = useState({
   name: '',
   weight: 0,
   id: 0,
 });
 const handleSubmit = (e) => {
   e.preventDefault();
   (newStudent.id = new Date().getTime()), listStudent.push(newStudent);
   setListStudent([...listStudent]);
 };
 return (
   <>
     <p>List rendering</p>
     <form onSubmit={handleSubmit}>
       <input
         type="text"
         placeholder="Nhập tên học sinh"
         name="name"
         value={newStudent.name}
         onChange={(e) => {
           setNewStudent({
             ...newStudent,
             name: e.target.value,
           });
         }}
       />
       <br />
       <input
         type="number"
         name="weight"
         value={newStudent.weight}
         onChange={(e) => {
           setNewStudent({
             ...newStudent,
             weight: e.target.value,
           });
         }}
       />
       <br />
       <button>Submit</button>
     </form>
     {listStudent.map((item) => {
       return (
         <div key={item.id}>
           <span>{item.name}</span> - <span>Cân nặng: {item.weight}</span>
         </div>
       );
     })}
   </>
 );
}


export default App;
