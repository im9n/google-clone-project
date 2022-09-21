import React from 'react';
import { Link } from 'react-router-dom';

const Option = ({icon, text}) => {
    return (
        <div className="searchpage__option">
        {icon && icon}
        <Link to={`/${text}`}>{text}</Link>
        </div>
    );
}

export default Option;
