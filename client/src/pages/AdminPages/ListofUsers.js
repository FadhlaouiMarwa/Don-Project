import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/actions/admin';
import UserCard from './UserCard';

function ListofUsers() {
const users=useSelector((state)=>state.adminReducer.userList);
const load=useSelector((state)=>state.adminReducer.load)
const isAuthAdmin=useSelector(state=>state.adminReducer.isAuthAdmin)

const dispatch=useDispatch()
useEffect(() => {
dispatch(getUser())
}, [dispatch])

  return (
    <div>
      {isAuthAdmin?
      <div>

      <div>
        <img src="https://as2.ftcdn.net/v2/jpg/02/29/43/73/1000_F_229437326_3hTk7qlVlTy7cgQFz3xl4jx9JOpyoUxh.jpg"/>
      </div>

      <div>
        <div style={{padding:30}}>
      <h1 style={{fontSize:40,fontFamily: "cursive"}}>La liste des utilisateurs:</h1>
        </div>
      <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
        {load? <h1>loading</h1>:users?.map((el)=><UserCard user={el} key={el._id}/>)}
      </div> 
      </div>
      </div>: 
      <div>
            {alert ("please check your email or your password")}
      </div>
      }
    </div>
  )
}

export default ListofUsers