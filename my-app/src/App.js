import React from 'react';

import Input from './Components/Input';
import Row from './Components/Row';
import Box from './Components/Box';


class App extends React.Component {

    state = {
        noOfRows: "2",
        columnsString: "3,2",
        gutterRow: "8px",
        gutterColumn: "8px"
    }


    onInputChange = (event) => {

        const tempMap = {
            'no-of-rows': 'noOfRows',
            'columns-string': 'columnsString',
            'gutter-row': 'gutterRow',
            'gutter-col': 'gutterColumn'
        }
        const inputName = event.target.name;
        const keyToUpdate = `${tempMap[inputName]}`;
        const value = document.getElementsByName(inputName)[0].value;
        this.setState({ [keyToUpdate]: value })

    }

    boxesInFirstRow = () => {
        const columns = this.state.columnsString;
        return columns.split(",")[0];
    }

    boxesInSecondRow = () => {
        const columns = this.state.columnsString;
        return columns.split(",")[1];
    }

    render() {
        console.log("default state", this.state)
        return (
            <div style={{padding: "2rem"}}>
                <Input name='no-of-rows' inputValue={this.state.noOfRows} onInputChange={this.onInputChange} />
                <Input name='columns-string' inputValue={this.state.columnsString} onInputChange={this.onInputChange} />
                <Input name='gutter-row' inputValue={this.state.gutterRow} onInputChange={this.onInputChange} />
                <Input name='gutter-col' inputValue={this.state.gutterColumn} onInputChange={this.onInputChange} />
                <br />
                <Row
                    numOfRows={this.state.noOfRows}
                    numOfBoxes={this.boxesInFirstRow()}
                    gutterRow={this.state.gutterRow}
                    gutterColumn={this.state.gutterColumn}
                >
                    <Box />
                    <Box />
                    <Box />
                </Row>
                <Row
                    numOfRows={this.state.noOfRows}
                    numOfBoxes={this.boxesInSecondRow()}
                    gutterRow={this.state.gutterRow}
                    gutterColumn={this.state.gutterColumn}
                >
                    <Box />
                    <Box />
                </Row>
            </div>
        );
    }


}

export default App;