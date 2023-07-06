import React from 'react'
import './user.css'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveUserId } from '../../store/features/ActiveUserId/ActiveUserIdAction'
import { selectUsers } from '../../store/features/User/UserSelectors'
import Button from '../Common/Button/Button'
import { deleteUser } from '../../store/features/User/UserActions'

export default function User() {
    const {user:users}= useSelector(selectUsers)
    const dispatch = useDispatch()
    const handleSetActiveUSerId =(e) => {
        if(e.target.classList.contains("user__deleted")) return
        const userDom = e.target.closest(".user")
        if (!userDom) return
        const userId = userDom.dataset.userid
        dispatch(setActiveUserId(userId))
    }
const deleteContent = (user_id) => {
  const ans = window.prompt("Are you sure you want to delete this content? Enter 'Y' to confirm or 'N' to cancel.");
  if (ans !== 'Y' && ans !== 'y') return;
  
  dispatch(deleteUser(user_id));
  dispatch(setActiveUserId(null));
};
  return (
      <>
          {users && users.map((user) => {
              
              return <div onClick={handleSetActiveUSerId} key={user.user_id} data-userid ={user.user_id}   className='user'>
          <img  src={user.profile_pic} alt={user.name}  className="user__pic" />
          <div className="user__details">
              <p className="user__details-name">{user.name}</p>
                      <p className="user__details-status">{user.status}</p>
                  </div>
                                        <Button onClick={()=>deleteContent(user.user_id)} className='user__deleted'>X</Button>

      </div>
          })
          
          }
      </>
  )
}
