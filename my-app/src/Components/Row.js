import React from 'react';

class Row extends React.Component {

    getGridProperty = () => {
        return {
            display: "grid",
            gridTemplateRows: `repeat(${this.props.numOfRows}, 1fr)`,
            gridTemplateColumns: `repeat(${this.props.numOfBoxes}, 1fr)`,
            gridRowGap: `${this.props.gutterRow}`,
            gridColumnGap: `${this.props.gutterColumn}`
        }
    }

    render() {
        return (
            <div style={this.getGridProperty()}>
                {this.props.children}
            </div>
        );
    }


}

export default Row;


// style={{display:"grid",gridTemplateRows: "repeat(10, 10px)",
//             gridTemplateColumns: "repeat(3, 1fr)", gridRowGap: "40px",
//             gridColumnGap: "10px"
//         }}