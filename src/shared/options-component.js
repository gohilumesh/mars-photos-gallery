import React from 'react';

const OptionsComponent = ({options, isOpen, onSelect}) => {
  return (
    <ul className={isOpen ? 'options-dropdown active' : 'options-dropdown'}>
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
