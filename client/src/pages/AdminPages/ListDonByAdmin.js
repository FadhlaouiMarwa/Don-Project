import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDonsAdmin } from '../../redux/actions/admin'
import DonCardbyA from './DonCardbyA'

function ListDonByAdmin() 
{
  const dispatch=useDispatch()
  const dons=useSelector((state)=>state.adminReducer.donList)
  const load=useSelector((state)=>state.adminReducer.load)
  const isAuthAdmin=useSelector(state=>state.adminReducer.isAuthAdmin)

  useEffect(() => {
    dispatch(getDonsAdmin());
   }, [dispatch]);
  
  return (
    <div >
      {isAuthAdmin?
      <div>
      <div>
        <h1 style={{fontSize:40,fontFamily: "cursive"}}>La liste des dons</h1>
      </div>
      <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
      {load? <h1>Loading</h1>: dons?.map((el)=><DonCardbyA mondonA={el} key={el._id}/>)}
      </div>
      </div>:
      <div>
      {alert ("please check your email or your password")}
</div>}
    
    </div>
  )
}

export default ListDonByAdmin