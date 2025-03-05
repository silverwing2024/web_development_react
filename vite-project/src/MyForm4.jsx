import { useState } from "react";

function MyForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  //나머지 부분 전부 완성해서 MyForm3,jsx와 동일하게 동작할 수 있도록 완성하시오.

  //단, handleChange 를 정의하지 말고 연습삼아서
  // const handleChange = (event) => {
  //     setFirstName({...firstName, [event.target.name]:
  //     event.target.value});
  //     setLastName({...lastName, [event.target.name]:
  //     event.target.value});
  //     setEmail({...email, [event.target.name]:
  //       event.target.value});
  // }
  // 각 input 의 onChange 부분에 화살표함수를 통해 정의하도록 하겠습니다. 

  const handleSubmit = (event) => {
    alert(`Welcome ${firstName} ${lastName}`);
    event.preventDefault();
  }


  return(
    <form onSubmit={handleSubmit}>
      <label>First Name</label>
      <input type = "text" name = "firstName" onChange = {event => setFirstName(event.target.value)} value={firstName}/>
      <br /><br />
      <label>Last Name</label>
      <input type = "text" name="lastName" onChange= {event => {setLastName(event.target.value)}} value={lastName}/>
      <br /><br />
      <label>E-mail</label>
      <input type="email" name="email" onChange = {event => {setEmail(event.target.value)}} value={email}/>
      <br /><br />
      <input type="submit" value="제출"/>
    </form>
  );


}

export default MyForm;