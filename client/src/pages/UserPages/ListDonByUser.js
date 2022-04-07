import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDons } from '../../redux/actions/user'
import CardByUser from './CardByUser'

function ListDonByUser() {
  const dispatch=useDispatch()
  const dons=useSelector((state)=>state.userReducer.donList)
  const load=useSelector((state)=>state.userReducer.load)
  const user=useSelector((state)=>state.userReducer.user)
  const isAuth=useSelector(state=>state.userReducer.isAuth)

  const idu = localStorage.getItem('id_u')
  useEffect(() => {
    dispatch(getDons(idu));
   }, [dispatch]);

  return (
    <div style={{padding:20}}>
        <h2  style={{fontFamily: "cursive"}}>La liste de mes dons</h2>
          
        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}} >
          
    {(isAuth && load)?<h1>Loading</h1>:
      dons?.filter((el)=>(el.idu===user._id))
         .map((el)=>(
        <CardByUser donuser={el} key={el.id}/>))}
               
        </div>
    </div>

  )
}

export default ListDonByUser