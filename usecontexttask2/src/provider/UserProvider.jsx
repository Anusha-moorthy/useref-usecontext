import UserContext from "../context/UserContext"

const UserProvider = ({children}) => {

    const user = {name:"Anusha", age:29, city:"Chennai"}
  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider