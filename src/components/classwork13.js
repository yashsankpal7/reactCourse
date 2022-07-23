import React,{useState} from 'react'

const Classwork13 = () => {

  const [userID, setuserID] = useState("")
  const [pwd, setpwd] = useState("")

 
  const handleSubmit=(event)=>{
    let strData = `User ID : ${userID} and Password : ${pwd}`

    alert(strData)

    event.preventDefault()
  }
  return (
    <div className='App-Box'>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        UserID : <input type="text" id="UID" name="UID" value={userID} onChange={e=>setuserID(e.target.value)}/>
        <br/>
        Password : <input type="text" id="PWD" name="PWD" value={pwd} onChange={e=>setpwd(e.target.value)}/>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Classwork13