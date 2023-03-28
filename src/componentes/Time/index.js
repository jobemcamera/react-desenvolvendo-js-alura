import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    return (
        // style in line assim como no HTML para pegar as props do array de objetos do time
        <section className='time' style={{backgroundColor: props.corSecundaria}}> 
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <Colaborador />
        </section>
    )
}

export default Time