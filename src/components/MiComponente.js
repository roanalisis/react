import React, {Component} from 'react';

class MiComponente extends Component{
    render(){
        let receta = {
            nombre: 'Pizza',
            Ingredientes: ['Tomate', 'Queso', 'Jamón cocido'],
            calorias: 400
        }
        return (
            <React.Fragment>
                <h1>{'Receta: '+ receta.nombre}</h1>
                <h2>{'Calorías: '+ receta.calorias}</h2>
                <ol>
                    {
                        receta.Ingredientes.map((ing, i)=>{
                            return (
                                <li key={i}>
                                    {ing}
                                </li>
                            )
                        })
                    }
                </ol>
                <hr/>
            </React.Fragment>            
        );
    }
}

export default MiComponente;