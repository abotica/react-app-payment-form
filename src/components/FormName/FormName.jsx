import style from './FormName.module.css'

function FormName() {

    return (
        <>
             <span className={style.beforeTabName}>
                    {"Račun -->"}
             </span>
             <span className={style.currentTabName}>
                    {"Plaćanje"}
             </span>
        </>
    )

}

export default FormName