import React from 'react'

export default function ControlledComponent() {
    
    const [formData, setFormData] = React.useState({
        firsName : "",
        lastName : "",
        age : "",
        country : "choose"
    })

    const handleChange = (event) => {
        const target = event.target
        const name = target.name;
        const value = target.value
        setFormData((previousData) =>
            ({
                [name] : value
            })
        )
        console.log(`name : ${name}\nvalue : ${value}`)
    } 

  return (
    <div>
        <form action="" method="post">
            <label htmlFor="firstName">
                First Name :
                <input value={formData.firsName} onChange={handleChange} type="text" name="firstName" id="firstName"/>
            </label>
            <br/>
            <label htmlFor="lastName">
                Last Name:
                <input value={formData.lastName} onChange={handleChange} type="text" name="lastName" id="lastName"/>
            </label><br/>
            <label htmlFor="country">Select Your Country</label>
            <select  value={formData.country} name="country" onChange={handleChange} id="country">
                <option value="choose">--Choose--</option>
                <option value="India">India</option>
                <option value="Paskistan">Pakistan</option>
                <option value="China">China</option>
            </select>

        </form>
    </div>
  )
}
