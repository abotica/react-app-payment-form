import { useId, useContext } from "react"
import style from './CountryDropdown.module.css'
import ValidityContext from '../Context'

function CountryDropdown({setCountry}){
    const dropdownId = useId()
    const formIsValid = useContext(ValidityContext)
    return (
        <>
            <label htmlFor={dropdownId}>
                Država:
            </label>
            <select disabled={formIsValid.current.disableFurtherInput} onChange={(event) => {setCountry(event.target.value); formIsValid.current.countryField = true}} className={style.dropdown} id={dropdownId} name="dropdown" required>
                <option value="" hidden>Odaberite državu</option>
                <option value="Hrvatska">Hrvatska</option>
                <option value="Njemačka">Njemačka</option>
                <option value="Švicarska">Švicarska</option>
            </select>
        </>
    )
}

export default CountryDropdown