import React from 'react';

class DecimalToBinary extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {decimal: '', binary: ''}
    }

    handleChange = (event) =>
    {
        const value = event.target.value;
        this.setState({decimal: value});
        if (value === ''){
            this.setState({binary: ''});
            return;
        }

        const number = parseInt(value, 10);
        if(!isNaN(number)){
            this.setState({binary: number.toString(2)});
        }
        else{
            this.setState({binary: 'Invalid input'});
        }
    }

    clear = () =>
    {
        this.setState({decimal: '', binary: ''});
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
                    placeholder='Decimal number'
                    />
                </div>
                <div>
                    <label>Binary: </label>
                    <input 
                    type="text" 
                    value={this.state.binary}
                    readOnly
                    placeholder='Binary result'
                    />
                </div>
                <button onClick={this.clear}>Clear</button>
            </div>
        )
    }
}


export default DecimalToBinary;