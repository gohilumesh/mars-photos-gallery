import React, {Component, PropTypes} from 'react';
import OptionsComponent from './options-component';

class SelectComponent extends Component {

  onSelect = (e) => {
    console.log(e);
    let target = e.target;
    this.setState({
      isOpen: false,
      selectedText: target.textContent,
      selectedValue: target.getAttribute('value')
    });
  }

  state = {
    isOpen: false,
    selectedValue: this.props.selectedValue,
    selectedText: this.props.selectedText
  }

  render() {
    return (
      <div className="select-wrapper-dropdown">
        <span>{this.state.selectedText}</span>
        <OptionsComponent options={this.props.options} isOpen={this.state.isOpen} onSelect={this.onSelect} />
      </div>
    );
  }
}

SelectComponent.propTypes = {
  options: PropTypes.array.isRequired,
  selectedValue: PropTypes.string,
  selectedText: PropTypes.string,
  onSelect: PropTypes.func.isRequired
}

export default SelectComponent;
