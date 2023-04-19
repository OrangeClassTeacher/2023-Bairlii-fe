import { FcAddressBook, FcFeedback } from "react-icons/fc"
import { Icon } from 'react-icons-kit';
import {logIn} from 'react-icons-kit/feather/logIn'
import Link from "next/link";


 const Login = () :JSX.Element => {
    return(
        <section>
            <div className="form-box">
                <div className="form-value"  >
                        <h2>Нэвтрэх</h2>
                        <div className="inputbox">
                            <input  type='email' name='email' required />
                            <Icon icon={FcAddressBook}/><label>И-мэйл</label>
                        </div>
                        <div className="inputbox">
                            <input type="password" name='password' required />
                            <Icon icon={FcFeedback}/><label>Нууц үг</label>
                        </div>
                        <div className="register">
                        <button type='submit'>Нэвтрэх</button>
                        </div>

                    <div className='form'>
                        <p>Хэрвээ та бүртгэлтэй бол <a href="#" > <Icon icon={logIn}/>Бүртгүүлэх</a></p> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;