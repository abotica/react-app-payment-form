import { useId, useState, useRef, useEffect } from 'react'
import style from './App.module.css'
import FormName from './components/FormName/FormName'
import ContactField from './components/ContactField/ContactField'
import AddressField from './components/AddressField/AddressField'
import RadioButton from './components/RadioButton/RadioButton'
import OrderSummary from './components/OrderSummary/OrderSummary'
import ValidityContext from './components/Context'

// I used useRef to remember non-rendering values
// I passed it to ValidityContext.Provider so that I don't have to use so much props
// Inputs are validated based on regexes

// Genereal working: browser will tell you if some field is not entered (required attribute), when entering text you will be told if entered text is right format
// You need to check "the terms" or you will be alerted, also if some text is not valid and you try to submit form you will not be able to
// On submit whole form will be disabled and small summary will appear below the form

// I used "preventDefault()" method on the form so that it doesn't reload whole page on submit

function App() {
  const [isChecked, setChecked] = useState(false)
  const [isSubmitted, setSubmit] = useState(false)
  const checkboxId = useId()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [address, setAddress] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const formIsValid = useRef(
    {
      emailField: false,
      nameField: false,
      countryField: false,
      addressField: false,
      paymentMethodButton: false,
      disableFurtherInput: false,
    }
  )

  useEffect(()=>{
    console.log(formIsValid)
  })

  const {emailField, nameField, countryField, addressField, paymentMethodButton, disableFurtherInput} = formIsValid.current
  
  function handleSubmit(event) {
    event.preventDefault()
    if(isChecked){
      if((emailField && nameField && countryField && addressField && paymentMethodButton) != true){
        alert("Molimo ispravite pogreške u unosu.")
      }else{
        console.log("Form has been submitted!")
        formIsValid.current.disableFurtherInput = true
        setSubmit(true)
      }
      
    }
    else {
      alert("Molimo prihvatite uvjete narudžbe kako biste dovršili kupnju.")
      setSubmit(false)
    }
  }

  return (
    <>
   <form onSubmit={handleSubmit} className={style.mainContainer}>
        <div className={style.nameContainer}>
        <FormName></FormName>
        </div>

        <div className={style.fieldsContainer}>
        <ValidityContext.Provider value={formIsValid}>
          <ContactField email={email} setEmail={setEmail}></ContactField>
          <AddressField setName={setName} setAddress={setAddress} setCountry={setCountry} name={name} address={address}></AddressField>
          <fieldset className={style.radioButtonsFieldset}>
            <legend className={style.legend}>Način plaćanja:</legend>
            <RadioButton setPaymentMethod={setPaymentMethod} radioButtonLabel="Pouzeće"></RadioButton>
            <RadioButton setPaymentMethod={setPaymentMethod} radioButtonLabel="Kartica"></RadioButton>
          </fieldset>
        </ValidityContext.Provider>
          <div>
            <input disabled={disableFurtherInput} onChange={() => {setChecked(!isChecked)}} type='checkbox' name='termsOfuse' checked={isChecked} id={checkboxId} className={style.checkbox}></input>
            <label htmlFor={checkboxId} name='termsOfUse'>Prihvaćam uvjete narudžbe</label>
          </div>
        </div>
        
        <button disabled={disableFurtherInput} className={style.submitButton}>Naruči</button>
   </form>
   {isSubmitted && <OrderSummary name={name} email={email} country={country} address={address} paymentMethod={paymentMethod}/>}
   </>
  )
}

export default App
