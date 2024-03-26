import { useId, useEffect } from "react"
import style from "./TextInput.module.css"

function TextInput({setter, inputLabel, regex, text, setValidity, isValid, isDisabled}){
    const inputId = useId()
    
    function handleRegex(){
        if(regex.test(text)){
            setValidity(true)
        }
        else
        {
            setValidity(false)
        }
    }

    useEffect(handleRegex, [text])

    return (
        <>
        <label htmlFor={inputId}>
            {inputLabel}          
        </label>
        <input disabled={isDisabled} className={style.input} onChange={(event) => {setter(event.target.value)}}
        id={inputId} type="text" name={inputLabel} required></input>
        {!isValid && text && <p className={style.invalidText}>Invalid input</p>}
        {isValid && text && <p className={style.validText}>Valid input</p>}
        </>
    )
}

export default TextInput