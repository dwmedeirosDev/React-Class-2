import React, {Component} from 'react';
import "./App.css";

class App extends Component {
    state = {
        turma:[
            {
                name: "David",
                age: 28
            },
            {
                name: "Fernanda",
                age: 31
            }
        ]
    }
    render(){
        return(
            <div className="state">
                <h1>Vamos começar com States!</h1>
                <ul>
                    <li>{this.state.turma[0].age}</li>
                    <li>{this.state.turma[1].age}</li>
                </ul>
            </div>
        )
    }
}

export default App;

