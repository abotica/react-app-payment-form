import { useContext, useEffect, useId, useState } from 'react'
import style from './ContactField.module.css'
import ValidityContext from '../Context'

function ContactField({email, setEmail}) {
	const emailInputId = useId()
    const [isValid, setValidity] = useState(false)
    const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const formIsValid = useContext(ValidityContext)
    

    function handleRegex(){
        if(emailRegex.test(email)){
            setValidity(true)
            formIsValid.current.emailField = true
        }
        else
        {
            setValidity(false)
            formIsValid.current.emailField = false
        }
    }

    useEffect(handleRegex, [email])

	return (
        <div>
        <label className={style.label} htmlFor={emailInputId}>Kontakt</label>
		<div className={style.container}>
			<input disabled={formIsValid.current.disableFurtherInput} onChange={(event) => {setEmail(event.target.value)}} 
                value={email}
                className={style.input}
                placeholder="Email adresa..." 
                id={emailInputId}
				type="email"
				name="email"
                required
			></input>
            {!isValid && email && <p className={style.invalidMail}>Invalid mail</p>}
            {isValid && email && <p className={style.validMail}>Valid mail</p>}
		</div>
        </div>
	)
}

export default ContactField
