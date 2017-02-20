import React from 'react';

const OptionsComponent = ({options, isOpen, onSelect}) => {
  return (
    <ul className={isOpen ? 'options-dropdown active' : 'options-dropdown'}>
    {
      options.map((option, idx) =>
        <li data-index={idx} value={option.value} key={option.id || idx} onClick={(e) => onSelect(e)}>
          { option.name ? option.name : option.value }
        </li>
      )
    }
    </ul>
  );
}

export default OptionsComponent;
