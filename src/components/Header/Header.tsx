import * as React from 'react';
import './Header.css'

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
        <nav>
            <div className='header'>
                Note App
            </div>
        </nav>
    );
};

export default Header;
