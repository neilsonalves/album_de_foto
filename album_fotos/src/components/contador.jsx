import React, { Component} from "react";

class Contador extends Component {
    state = {contador: 0};//declarando um contador
    estilos = {
        fontSize: 40,
        fontWeight: "normal"
    }

    render() {
        return(
            <React.Fragment>
                <span style={this.estilos} className="badge badge-primary m-2">{this.formataContador()}</span>
                <button className="btn btn-secondary" onClick={this.tratarIncremento}>Incrementar</button>
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