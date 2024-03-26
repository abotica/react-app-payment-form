import style from './OrderSummary.module.css'

function OrderSummary({name, email, country, address, paymentMethod}){
    
    return (
        <div className={style.container}>
            <p className={style.title}>Sažetak narudžbe</p>
            <p className={style.infoName}>Ime: <span className={style.info}>{name}</span></p>
            <p className={style.infoName}>Kontakt: <span className={style.info}>{email}</span></p>
            <p className={style.infoName}>Država: <span className={style.info}>{country}</span></p>
            <p className={style.infoName}>Adresa: <span className={style.info}>{address}</span></p>
            <p className={style.infoName}>Način plaćanja: <span className={style.info}>{paymentMethod}</span></p>
        </div>
    )
}

export default OrderSummary