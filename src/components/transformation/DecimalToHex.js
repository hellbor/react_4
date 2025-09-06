import React from "react";

class DecimalToHex extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {decimal:'', hex:''}
    }

    handleChange = (event) =>
    {
        const value = event.target.value;
        this.setState({decimal: value});
        if(value === ''){
            this.setState({hex: ''});
            return;
        }

        const number = parseInt(value, 10);
        if (!isNaN(number)){
            this.setState({hex: number.toString(16).toUpperCase()});
        }
        else{
            this.setState({hex: 'Invalid input'});
        }
    }

    clear = () =>
    {
        this.setState({decimal:'', hex: ''});
    }

    render(){
        return(
            <div>
                <div>
                    <label>Decimal: </label>
                    <input 
                    type="text" 
                    value={this.state.decimal}
                    onChange={this.handleChange}
                    placeholder="Decimal number"
                    />
                </div>
                <div>
                    <label>Hex: </label>
                    <input 
                    type="text" 
                    value={this.state.hex}
                    readOnly
                    placeholder="Hex result"
                    />
                </div>
                <button onClick={this.clear}>Clear</button>
            </div>
        )
    }
}

export default DecimalToHex;