import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDons } from '../redux/actions/user'
import DonCard from './DonCard'

function ListDons() {
  const dispatch=useDispatch()
  const dons=useSelector((state)=>state.userReducer.donList)
  const load=useSelector((state)=>state.userReducer.load)
  //const idu = localStorage.getItem('id_u')
  useEffect(() => {
    dispatch(getDons());
   }, [dispatch]);
  
  return (
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}} >
    {load?<h1>Loading</h1>:
      dons?.map((el)=><DonCard mondon={el} key={el._id}/>)}
    </div>
  )
}

export default ListDons