import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../hooks/userTelegram";
const Header = () => {
    const {tg,user, onClose} = useTelegram();

    return (
        <div className={'header'}>
            <button> onClick={onClose}>Close me</button>
            <span className={'username'}>
                {tg.initDateUnsafe?.user?.username}
            </span>
        </div>

    );
};

export default Header;