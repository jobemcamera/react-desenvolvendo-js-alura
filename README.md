# Organo - Pessoas e Times

Curso de React.js - Alura

<!--ts-->
   * [Tecnologias](#Tecnologias)
   * [O Projeto](#O-Projeto)
   * [O que eu aprendi](#O-que-eu-aprendi)
   * [O que eu fiz além do curso](#O-que-eu-fiz-além-do-curso)
<!--te-->

## Tecnologias

- HTML
- CSS
- JavaScript
- React.js

## O Projeto

O Projeto Organo nada mais que é um formulário de criação de times e colaboradores. Nele podemos inserir os colaboradores que fazem parte dos times existentes, ou se necessário, criar novos times a serem preenchidos.

Para cada time existente e criado, pode ser estilizado com a cor que preferir, mudando no seletor de cores presentes em cada time.

Para a inserção de uma imagem do colaborador, basta colar a URL do perfil do colaborador no GitHub e adicionar a extensão ao final: ```https://github.com/jobemcamera.png```

## O que eu aprendi

De maneira geral, quase tudo foi novidade. Entretando, listarei os principais conceitos adquiridos nesse curso:

- ### Dependências - ```package.json```

Para a criação da aplicação React, utilizamos o ```npx create-react-app```. Após a criação, foram necessárias as instalações de diversos pacotes com o auxílio do ```Node.js```, utilizando ```npm install```.

Para cada nova necessidade de pacotes adicionais, era necessário buscar e fazer sua instalação pelo ```npm```.

Durante o curso, utilizamos:

- ```uuidv4``` para criação de ID's;
- ```hex-to-rgba``` para passarmos o código Hexadecimal para RGBA;
- ```react-icons```para inserirmos ícones.


- ### Componentes

Aqui um conceito novo e super importante. Componentes nada mais são que códigos que podem ser reutilizados para outras partes da aplicação. A ideia é criar um código que seja o mais genérico possível para poder ser replicado. E claro, sempre há a refatoração quando necessário.

Seguindo um exemplo de componente criado no Organo, temos:

```js
import './Campo.css'

const Campo = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio} placeholder={placeholder}
            /> 
        </div>
    )
}

export default Campo
```

O componente Campo, recebe como parâmetro diversos argumentos que são chamados de ```props```. Essas ```props```estão vindo do arquivo principal, o ```App.js```. O ```React``` irá ler a ```arrow function``` armazenada na constante Campo, todo ```JSX``` que está no ```return```. 



- ### JSX

Parece ```HTML``` mas não é. ```JSX``` é uma extensão de sintaxe para ```JavaScript``` que permite escrever ```HTML``` dentro do próprio código ```JavaScript```, utilizado principalmente no ```React``` para renderizar componentes de forma declarativa.



- ### Hooks - useState

O ```Hook useState``` retorna um ```array``` com dois valores: o primeiro é o estado atual e o segundo é uma função que permite atualizar esse estado. Por exemplo, utilizamos alguns ```useState``` ao longo do projeto:

```js
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('#000000')
```



- ### Key

```Key``` é um atributo especial que pode ser usado em React ao renderizar listas de elementos. Ele ajuda o React a identificar quais elementos foram adicionados, removidos ou alterados em uma lista, e assim pode fazer a atualização de forma mais eficiente.


```js
<div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaborador 
                            key={indice} 
                            colaborador={colaborador} 
                            corDeFundo={time.cor} 
                            aoDeletar={aoDeletar} 
                            aoFavoritar={aoFavoritar}
                        />
                    )
                })}
</div>
```

## O que eu fiz além do curso

Como aprendizado inicial, segui basicamente a risca o que foi passado no curso. Porém, a responsividade não foi implementada, sendo assim, a apliquei utilizando as velhas e conhecidas ```media query```. Entretando, sei que existem outras maneiras de se resolver a responsividade em ```React```, como ```Styled Components``` e até mesmo ```Bootstrap```.



