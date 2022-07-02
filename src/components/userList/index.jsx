import MessageIcon from '../../assets/icon/Message'

const UserList = ({showData}) => {
  return (
    <div className='main'>
        <div className='user__list'>
          {showData.map((user) => {
            return (
              <div key={user.id}>
                <div className='user__list__box'>
                  <div className='user__list__box__image'>
                    <img src={user.avatar} alt='' />
                  </div>
                  <div className='user__list__box__detail'>
                    <div className='user__list__box__detail--name'>
                      {user.first_name} {user.last_name}
                    </div>
                    <div className='user__list__box__detail--email'>
                      {user.email}
                    </div>
                  </div>
                  <div className='user__list__box__contact'>
                    <MessageIcon />
                  </div>
                </div>
                <hr />
              </div>
            )
          })}
        </div>
      </div>
  )
}

export default UserList