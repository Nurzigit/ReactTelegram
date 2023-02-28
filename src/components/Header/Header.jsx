import React from 'react';
import Button from '../Button/Button';
import { useTelegram } from './../../hooks/useTelegram';
import './Header.css';

const Header = () => {
const {user, onClose} = useTelegram();
    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>

            <span className={'username'}>
                {/* We are using optional chaining operator, because our project ain't crack */}
                {user?.username}
            </span>
        </div>
    );
};

export default Header;