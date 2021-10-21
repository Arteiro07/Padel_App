import React, {Component} from "react";

class TestComponent extends Component{
    state = {
        count : 0,
        adress : {
            street : '',
            door : '',
        }
    };

    render(){
        return (
            <div className="TestCompDiv">
                <h1>
                    Componente de Teste
                </h1>
                <button>
                    Botão de teste
                </button>
                <div>{this.exampleMethod()}</div>
            </div>
        );
    }

    exampleMethod(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
export default TestComponent;

// imrc to import
// cc create class