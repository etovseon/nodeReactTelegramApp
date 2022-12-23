import React from "react";
import './Form.css'

const Form = () => {
    return (
        <div>
            <div className={"form"}>
                <h3>Введите ваши данные</h3>
                <input className={'input'} type="text" placeholder={'Страна'}></input>
                <input className={'input'} type="text" placeholder={'Улица'}></input>
                <br />
            <select>
                <option value={'legal'}>Юр.лицо</option>
                <option value={'physical'}>Физ.лицо</option>
            </select>
            </div>
        </div>
    )
}

export default Form;