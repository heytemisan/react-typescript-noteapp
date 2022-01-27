import * as React from 'react';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    return (
        <nav>
            <div>
                 Note App
            </div>
        </nav>
    );
};

export default Header;
