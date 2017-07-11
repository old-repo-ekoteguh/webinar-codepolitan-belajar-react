import React from 'react';
import Players from './Players';
import AddPlayer from './AddPlayer';

class Leaderboard extends React.Component{

    constructor(props) {
        super(props);

        const PLAYERS = [
            { id: 1, name: "Eko", score: 59 },
            { id: 2, name: "Teguh", score: 84 },
            { id: 3, name: "Widodo", score: 104 }
        ]

        this.state = {
            members: PLAYERS
        }

        this.onPlayerSubmit = this.onPlayerSubmit.bind(this);
    }

    onPlayerSubmit(name) {
        let newMembers = this.state.members;
        newMembers.push({ id: newMembers.length + 1, name: name,score: 50 });
        this.setState({
            members: newMembers
        });
    }

    render() {
        
        const styles = {
            container: {
                padding: 60
            }
        }

        return (
            <div style={styles.container}>
                <h1>Leaderboard</h1>
                <h3>List Player</h3>
                <Players members={this.state.members} />
                <h3>Add Player</h3>
                <AddPlayer onSubmitPlayer={this.onPlayerSubmit}/>
            </div>
        );
    }
}

export default Leaderboard;