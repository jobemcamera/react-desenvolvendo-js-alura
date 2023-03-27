import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

        const [colaboradores, setColaboradores] = useState([]);

        const aoNovoColaboradorAdicionado = (colaborador) => {
            console.log(colaborador)
            setColaboradores([...colaboradores, colaborador]) // [...colaboradores] o novo array com os colaboradores antigos + colaborador novo no final
        }

        return (
        <div className="App">
            <Banner />
            <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
        </div>
    );
}

export default App;
