import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        // style in line assim como no HTML para pegar as props do array de objetos do time
        // renderização condição: só vai renderizar os times se houver time prévio
        (props.colaboradores.length > 0) ? <section className='time' style={{backgroundColor: props.corSecundaria}}> 
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => 
                    <Colaborador 
                        corDeFundo={props.corPrimaria}
                        key={colaborador.nome}
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem}
                    />
                )}
            </div>
        </section>
        : '' // se (props.colaboradores.length > 0) == true, então executa a <section>, se não executa '';
    )
}

export default Time