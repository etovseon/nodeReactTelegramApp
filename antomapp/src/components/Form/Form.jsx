import React from "react";
import { useEffect } from "react";
import { useTelegram } from "../hooks/useTelegram";
import './Form.css'
import { useState } from "react";

const Form = () => {
    const [country, setCountry] = useState('');
    const [street,setStreet] = useState('');
    const [subject,setSubject] = useState('physical');
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    },[])
    
    useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
        }, [country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }
    return (
        <div>
            <div className={'form'}>
                <h3>Введите ваши данные</h3>
                <input className={'input'} type="text" placeholder={'Страна'} value={country} onChange={onChangeCountry}></input>
                <input className={'input'} type="text" placeholder={'Улица'} value={street} onChange={onChangeStreet}></input>
                <br />
            <select value={subject} onChange={onChangeSubject} className={'select'} >
                <option value={'legal'} >Юр.лицо</option>
                <option value={'physical'}>Физ.лицо</option>
            </select>
            </div>
        </div>
    )
}

export default Form;