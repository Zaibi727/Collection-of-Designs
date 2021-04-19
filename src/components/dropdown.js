import React, {useState} from 'react';


function Dropdown () {
    const [dropdown,setDropdown] = useState("Apple");
    const [isChecked, setIsChecked] = useState(false);
    const [radio,setRadio] = useState("apple");

   

        return ( 
            <div>
                <form>
                     <h1> selected value is : {dropdown}</h1>
                     <h1> Checkbox is  : {isChecked ? "True" : "False"} </h1>
                     <h1> Radio button is  : {radio} </h1>
                    <select value={dropdown} onChange={(e)=>{setDropdown(e.target.value)}}>
                        <option value="apple">Apple
                          
                        </option>
                        <option value="orange">Orange</option>
                        <option value="banana">Bannana</option>
                        <option value="mango">Mango</option>
                        <option value="guava">Guava</option>
                        <option value="grapes">Grapes</option>
                    </select>
                    <br />

                    <lable>checkbox</lable>
                    <input 
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e)=>{setIsChecked(e.target.checked)}}
                    />
                    <br/>

                    <label>Apple: </label>
                    <input
                    type="radio"
                    checked={radio === "apple"}
                    value="apple"
                    onChange={(e)=>{setRadio(e.target.value)}}
                     />
                      <label>Orange: </label>
                    <input
                    type="radio"
                    checked={radio === "orange"}
                    value="orange"
                    onChange={(e)=>{setRadio(e.target.value)}}
                     />
                      <label>Banana: </label>
                    <input
                    type="radio"
                    checked={radio === "banana"}
                    value="banana"
                    onChange={(e)=>{setRadio(e.target.value)}}
                     />
                      <label>Grapes: </label>
                    <input
                    type="radio"
                    checked={radio === "grapes"}
                    value="grapes"
                    onChange={(e)=>{setRadio(e.target.value)}}
                     />
                      <label>Guava: </label>
                    <input
                    type="radio"
                    checked={radio === "guava"}
                    value="guava"
                    onChange={(e)=>{setRadio(e.target.value)}}
                     />
                </form>
            </div>
         );
    }

 
export default Dropdown;