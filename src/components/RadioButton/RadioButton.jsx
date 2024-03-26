import { useId, useContext } from "react"
import ValidityContext from '../Context'

function RadioButton({setPaymentMethod, radioButtonLabel}){
    const radioId = useId()
    const formIsValid = useContext(ValidityContext)

    return (
        <div>
            <input disabled={formIsValid.current.disableFurtherInput} onChange={(event) => {setPaymentMethod(event.target.value); formIsValid.current.paymentMethodButton = true}} id={radioId} type="radio" name="paymentMethod" value={radioButtonLabel} required></input>
            <label htmlFor={radioId}>{radioButtonLabel}</label>
        </div>
    )
}

export default RadioButton