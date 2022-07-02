import './App.css'
import { useState, useEffect } from 'react'

//components
import Header from './components/header'
import UserList from './components/userList'

//icon

//mock data
import userData from './userData'

function App() {
  const [showData, setShowData] = useState(userData)
  const [keyword, setKeyword] = useState('')

  const onSetKeyword = (e) => {
    setKeyword(e.target.value)
  }

  useEffect(() => {
    let newData = userData.filter((item) => {
      return item.first_name
        .concat(` ${item.last_name}`)
        .toLowerCase()
        .includes(keyword.toLocaleLowerCase())
    })
    setShowData(newData)
  }, [keyword])

  return (
    <div className='container'>
      <Header keyword={keyword} setKeyword={onSetKeyword} />
      <UserList showData={showData} />
    </div>
  )
}

export default App
