import React from 'react';

const OptionsComponent = ({options, isOpen, onSelect}) => {
  return (
    <ul className="options-dropdown" className={isOpen ? 'active' : ''}>
    {
      options.map((option, idx) =>
        <li index={idx} value={option.value} key={option.id} onClick={onSelect}>
          { option.name ? option.name : option.value }
        </li>
      )
    }
    </ul>
  );
}

export default OptionsComponent;
