
import React ,{useState} from "react";

  
const Submit = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [showpassword,SetShowpassword]=useState(false);
  const [disabled,setDisabled]=useState(false)

  const handleClickShowPassword = () => {
    SetShowpassword( !showpassword);
  };

  
  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      
      return { ...prev, ...value };
    })
   
  }
  
  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();
    setDisabled(true)

  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
  
    const response=await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    const respon=await response.json();
    if (response.statusText!=="OK"){
      window.alert(`An error ocuured : ${respon.message}`);
      setDisabled(false);
      return;
    }
    window.alert(`data Added successfully : ${respon.message}`)

  

  
    setForm({ email: "", password: ""});
    setDisabled(false)

   
    
  }
  return (
    <div>
      <div>
       <form onSubmit={onSubmit}>
         <label htmlFor="email">Email : </label>
         <input type="email" name="email" required id="email" value={form.email} onChange={(e) => updateForm({email:e.target.value})}/>
         
         <br /> <br />

         <label htmlFor="password">Password : </label>
         <input type={showpassword?'text':'password'} name="password" id="password" required value={form.password} onChange={(e) => updateForm({password:e.target.value})}
         
         />
         <br /> <br />
         
         <label htmlFor="checkbox">Show password?</label>
          <input
            id="checkbox"
            type="checkbox"
            checked={showpassword}
            onChange={handleClickShowPassword}
          />
         
         <br />
         

         <input type="submit" name="myButton" disabled={disabled} />

       </form>
      </div>
    </div>
  );
};
  
export default Submit;