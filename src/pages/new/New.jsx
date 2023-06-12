import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import './new.scss'
import { useState } from 'react';
const New = ({inputs,title}) => {

  const [file,setFile]=useState("")
  return (
    <div className='new'>
       <Sidebar/>
       <div className="newContainer">
        <Navbar/>
        <div className="top">
            <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file):
            "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            } alt="" />
          </div>
          <div className="right">
            <form >
            <div className="formInput">
                <label htmlFor='file'>
                 Image: <DriveFolderUploadOutlinedIcon className="icon"/>
                </label>
                <input type="file" id='file' onChange={(e)=>setFile(e.target.files[0])} style={{display:"none"}}/>
              </div>
              <div className="formInput">
                <label>
                  Username
                </label>
                <input type="text" placeholder='john_doe'/>

              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder='john_dor@gmail.com'/>
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder='+1 232 432 98'/>
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password"  />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder='Park St. NewYork'/>
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
       </div>
    </div>
  )
}

export default New 