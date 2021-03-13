import React from 'react';
import { FaSearch } from "react-icons/fa";
import { useUser } from '../../../../../../providers/UserProvider';

import './styles.scss';

const SearchField: React.FC = () => {
    const { searchUsers } = useUser();
    return (
        <div className='input'>
            <input className="input-field" placeholder='Buscar usuário' type="text" onChange={async ({ target }) => await searchUsers({ name: target.value })} />
            <FaSearch className="input-icon" size={18} />
        </div>
    );
}

export default SearchField;
