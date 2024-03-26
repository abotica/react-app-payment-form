import CountryDropdown from "../CountryDropdown/CountryDropdown"
import TextInput from "../TextInput/TextInput"
import style from "./AddressField.module.css"
import { useContext, useState } from "react"
import ValidityContext from '../Context'

function AddressField({setName, setAddress, setCountry, name, address}){
    const nameRegex = /^[A-Z][a-z]{2,}( [A-Z][a-z]*)?$/
    const addressRegex = /^[\w\s\d#.,\-'\\()\/]{2,}$/
    const formIsValid = useContext(ValidityContext)
    const [nameValidity, setNameValidity] = useState(false)
    const [addressValidity, setAddressValidity] = useState(false)

    formIsValid.current.nameField = nameValidity
    formIsValid.current.addressField = addressValidity
   

    return (
        <div>
        <label className={style.label}>Adresa</label>
        <div className={style.container}>
            <TextInput setter={setName} inputLabel="Ime:" regex={nameRegex} text={name} setValidity={setNameValidity} isValid={nameValidity} isDisabled={formIsValid.current.disableFurtherInput}></TextInput>
            <CountryDropdown setCountry={setCountry}></CountryDropdown>
            <TextInput setter={setAddress} inputLabel="Adresa:" regex={addressRegex} text={address} setValidity={setAddressValidity} isValid={addressValidity} isDisabled={formIsValid.current.disableFurtherInput}></TextInput>
        </div>
        </div>
    )
}

export default AddressField