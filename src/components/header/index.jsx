
import BackIcon from '../../assets/icon/BackIcon'

const Header = ({ keyword, setKeyword }) => {
  return (
    <div className='header'>
      <div className='header__box'>
        <button className='profile__back'>
          <BackIcon />
        </button>
        <span className='profile__name'>Your Name</span>
        <span className='profile__location'>Bangkok, Thailand</span>
        <input
          className='profile__search'
          placeholder='Search'
          type='text'
          value={keyword}
          onChange={setKeyword}
        />
      </div>
    </div>
  )
}

export default Header
