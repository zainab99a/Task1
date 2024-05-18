//TODO:read file and get all users
import users from'./users.json'

const getFirstUser = () => {
  //TODO: get first user of list
  const firstUser=users[0]
  console.log(firstUser)
};

getFirstUser()
const getLast = () => {
  //TODO: get last user of list
  const lastUser=users[users.length-1]
  console.log(lastUser)
};
getLast()
const getUserByID = (userID) => {
  //TODO: get user object by id
  return users.find((user)=>
     user.id==userID
  )
};
console.log(getUserByID())


const getUserByCompanyName = (companyName) => {
  //TODO: get user object by company name
  return users.filter((user)=>{
     user.company.name==companyName})
};
console.log(getUserByCompanyName());
const getUsersByCity = (city) => {
  //TODO: get users that live in this city
  return users.filter((user)=>{
     user.address.city==city})
};
console.log(getUsersByCity())


const getStreet = (userID) => {
  //TODO: get street name by userID
  for(const user of users){
    if(user.id===userID){
      return user.address.street
    }
  }
}
console.log(getStreet())

const addNewUser = (userObject) => {
  //TODO: add new user to the list
  
  users.push(userObject)
};
addNewUser()
console.log(users)

const updateUser = (userID,newData) => {
  //TODO: update email when id === userID
 for(const user of users){
  if(user.id===userID){
    return user.email=newData
  
  }
 }
};
updateUser()
console.log(users)

const deleteUserById = (userID) => {
  //TODO: remove user when id === userID
return users.filter((user) => user.id !== userID);

};
deleteUserById() 
console.log(users)
