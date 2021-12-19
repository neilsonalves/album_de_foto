import React, { Component} from "react";

class Contador extends Component {
    state = {contador: 0, itens: ['item1', 'item2', 'item3']};
    estilos = {
        fontSize: 40,
        fontWeight: "normal"
    }
    
    render() {
        let classes = "badge m-2 badge-";
        classes += (this.state.contador > 10 ? "success" : "primary");

        return(
            <React.Fragment>
                <span style={this.estilos} className={classes}>{this.formataContador()}</span>
                <button className="btn btn-secondary" onClick={this.tratarIncremento}>Incrementar</button>
                <ul>
                    {this.state.itens.map(item => <li key={item}>{item}</li>)}
                </ul>
            </React.Fragment>
        );
    }
    formataContador(){
        const {contador} = this.state;
        return contador === 0 ? "Zero": contador;
    }
    tratarIncremento = () => {
        this.setState({contador: this.state.contador + 1});
    }

}

export default Contador;