import React, {Component} from "react";
import "./styles/TestComponent.css";

class TestComponent extends Component{
    state = {
        count : 0,
        imageUrl:'https://picsum.photos/200',
        adress : {
            street : '',
            door : '',
        },
        tags : ['tag1', 'tag2', "tag3"]
    };

    styles={
        fontWeight:"bold"
    };

    constructor(){
        super();
        console.log("constructor", this)
    }

    handleButtonClick(){
        console.log('Button Clicked');
    }

    render(){

        return (
            <div className="TestCompDiv">
                {/* Usar estilos do component */}
                <h1 style={this.styles}>
                    Componente de Teste
                </h1>
                {/* classes bootstrap */}
                <button
                  onClick={this.handleButtonClick} 
                  className="btn btn-secondary bt-sm">
                    Botão de teste
                </button>
                {/* classes dinamicas */}
                <span className={this.setBadgeClasses()}>
                    {this.exampleMethod()}
                </span>

                <div>
                    <img src={this.state.imageUrl} alt=""/>
                </div>
                {/* lista de objetos */}
                <div>
                    {/* true and string => string */}
                    {this.state.tags.length === 0 && 'Please insert Tag'}
                    {this.renderTags()}
                </div>
            </div>
        );
    }

    renderTags(){
        if(this.state.tags.length === 0) return <p>There are no Tags</p>;

        return <ul> {this.state.tags.map(tag => <li key={tag}> {tag} </li>)} </ul>;
    }

    setBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    exampleMethod(){
        let { count } = this.state;
        return count === 0 ? <div>Zero</div> : count;
    }
}

export default TestComponent;

// imrc to import
// cc create class