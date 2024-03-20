import React, {useState} from "react";

const Form = (props) => {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassw, setConfirmpassw] = useState("");
    
    const {personList, setPersonList} = props;

    const [errorMessage, setErrorMessage] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        if(firstname.length <2 || lastname.length <2 || email.lenth <5 || password < 8 || confirmpassw < 8 || confirmpassw!===password){
                setErrorMessage("Your form has some unsolved issues!")
            }
        else {
            setPersonList([{firstname: firstname, lastname: lastname, email: email, password: password, confirmpassw: confirmpassw}]);
            console.log(personList);
        }

        

        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmpassw("");
    }


    return (
        <>
            <form onSubmit={ (e) => createUser (e)}>
                <div>
                    <label>First Name </label>
                    <input type="text"  value={firstname} onChange={ (e) => setFirstname(e.target.value)}/>
                </div>
                {firstname.length>0 && firstname.length<2 ?
                <p className="red">The first name must be at least 2 characters.</p>:
                null
                }
                <div>
                    <label>Last Name </label>
                    <input type="text"  value={lastname} onChange={ (e) => setLastname(e.target.value)}/>
                </div>
                {lastname.length>0 && lastname.length<2 ?
                <p className="red">The last name must be at least 2 characters.</p>:
                null
                }
                <div>
                    <label>Email </label>
                    <input type="email"  value={email} onChange={ (e) => setEmail(e.target.value)}/>
                </div>
                {email.length>0 && email.length<5 ?
                <p className="red">The email must be at least 5 characters.</p>:
                null
                }
                <div>
                    <label>Password </label>
                    <input type="password"  value={password} onChange={ (e) => setPassword(e.target.value)}/>
                </div>
                {password.length>0 && password.length<8 ?
                <p className="red">The password must be at least 8 characters.</p>:
                null
                }
                <div>
                    <label>Confirm Pasword</label>
                    <input type="password"  value={confirmpassw} onChange={ (e) => setConfirmpassw(e.target.value)}/>
                </div>
                {confirmpassw.length>0 && confirmpassw===password && confirmpassw.length<8 ?
                <p className="red">The confirmation of password must be at least 8 characters and must match with your password.</p>:
                null
                }
                <input type="submit" value="Create User"/>
            </form>
        </>
    );
}


export default Form;