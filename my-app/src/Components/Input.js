import React from 'react';

class Input extends React.Component {

    render() {
        return (
            <div>
                <p className="text-capitalize m-0">{this.props.name}</p>
                <input name={this.props.name} value={this.props.inputValue} placeholder={this.props.name} onChange={this.props.onInputChange} />
            </div>
        );
    }


}

export default Input;