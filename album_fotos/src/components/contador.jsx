import React, { Component} from "react";

class Contador extends Component {
    state = {
        contador: 0,
        itens: []
    };
    estilos = {
        fontSize: 40,
        fontWeight: "normal"
    }
    renderItens(){
        if(this.state.itens.length === 0) return <p>Não existe itens</p>;
        return <ul>
            {this.state.itens.map(item => <li key={item}>{item}</li>)}
        </ul>
    }
    
    render() {
        let classes = "badge m-2 badge-";
        classes += (this.state.contador > 10 ? "success" : "primary");

        return(
            <React.Fragment>
                <span style={this.estilos} className={classes}>{this.formataContador()}</span>
               
                <br/>
                <button className="btn btn-secondary" onClick={this.tratarIncremento}>Incrementar</button>
               <h3>{this.state.nome}</h3>
                {this.renderItens()}
                {this.state.itens.length === 0 && 'Inclua um item...'}
            </React.Fragment>
        );
    }
    formataContador(){
        const {contador} = this.state;
        return contador === 0 ? "Zero": contador;
    }
    tratarIncremento = () => {
        this.setState({contador: this.state.contador + 1});
        //this.setState({ itens: this.state.itens + "item {this.state.contador} "})
    }

}

export default Contador;