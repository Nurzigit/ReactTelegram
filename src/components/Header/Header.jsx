import React from 'react';
import Button from '../Button/Button';

const Header = () => {
    const tg = window.Telegram.WebApp;

    const onClass = () => {
        tg.close();
    }

    return (
        <div className={'header'}>
            <Button onClick={onClass}>Закрыть</Button>

            <span className={'username'}>
                {/* We are using optional chaining operator, because our project ain't crack */}
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;