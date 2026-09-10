
import UserContext from '../context/UserContext'

const UsersProvider = ({children}) => {
    const userName = 'Anusha'
  return (
    <UserContext.Provider value={userName}>
        {children}
    </UserContext.Provider>
  )
}

export default UsersProvider