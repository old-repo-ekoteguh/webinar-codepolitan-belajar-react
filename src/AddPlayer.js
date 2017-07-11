import React from 'react';

class AddPlayer extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        
        this.handlePlayerChange = this.handlePlayerChange.bind(this);
        this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
    }

    handlePlayerChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handlePlayerSubmit(e) {
        if (this.state.name === '') {
            alert("You haven't filled the Add Player's input.");
        } else {
            this.props.onSubmitPlayer(this.state.name);
            this.setState({
                name: ""
            });
        }
    }

    render() {
        const styles = {
            input: {
                padding: 10
            },
            button: {
                padding: 10
            }
        }

        return (
            <div>
                <input type="text" onChange={this.handlePlayerChange} style={styles.input} placeholder="Add your player..." value={this.state.name} />
                {' '}
                <button style={styles.button} onClick={this.handlePlayerSubmit}>Add Player</button>
            </div>
        );
    }
}

export default AddPlayer;