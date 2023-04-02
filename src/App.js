import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

function App() {
	// times anteriormente era uma const, agora se tornou um state para podermos trocar a cor da propriedade do objeto
	const [times, setTimes] = useState([
		{
			nome: 'Programação',
			cor: '#D9F7E9'
		},
		{
			nome: 'Front-End',
			cor: '#E8F8FF'
		}, 
		{
			nome: 'Data Science',
			cor: '#F0F8E2'
		}, 
		{
			nome: 'Devops',
			cor: '#FDE7E8'
		}, 
		{
			nome: 'UX e Design',
			cor: '#FAE9F5'
		}, 
		{
			nome: 'Mobile',
			cor: '#FFF5D9'
		}, 
		{
			nome: 'Inovação e Gestão',
			cor: '#FFEEDF'
		}
	]);

	const inicial = [
		{
		  nome: 'JULIANA AMOASEI',
		  cargo: 'Desenvolvedora de software e instrutora',
		  imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
		  time: times[0].nome
		},
		{
		  nome: 'DANIEL ARTINE',
		  cargo: 'Engenheiro de Software na Stone Age',
		  imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
		  time: times[0].nome
		},
		{
		  nome: 'GUILHERME LIMA',
		  cargo: 'Desenvolvedor Python e JavaScript na Alura',
		  imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
		  time: times[0].nome
		},
		{
		  nome: 'PAULO SILVEIRA',
		  cargo: 'Hipster e CEO da Alura',
		  imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
		  time: times[0].nome
		},
		{
		  nome: 'JULIANA AMOASEI',
		  cargo: 'Desenvolvedora de software e instrutora',
		  imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
		  time: times[1].nome
		},
		{
		  nome: 'JOBE CAMERA',
		  cargo: 'Desenvolvedor ReactJS, Bootstrap e Python',
		  imagem: 'https://www.github.com/jobemcamera.png',
		  time: times[1].nome
		},
		{
		  nome: 'GUILHERME LIMA',
		  cargo: 'Desenvolvedor Python e JavaScript na Alura',
		  imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
		  time: times[1].nome
		},
		{
		  nome: 'PAULO SILVEIRA',
		  cargo: 'Hipster e CEO da Alura',
		  imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
		  time: times[1].nome
		},
		{
		  nome: 'JULIANA AMOASEI',
		  cargo: 'Desenvolvedora de software e instrutora',
		  imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
		  time: times[2].nome
		},
		{
		  nome: 'DANIEL ARTINE',
		  cargo: 'Engenheiro de Software na Stone Age',
		  imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
		  time: times[2].nome
		},
		{
		  nome: 'GUILHERME LIMA',
		  cargo: 'Desenvolvedor Python e JavaScript na Alura',
		  imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
		  time: times[2].nome
		},
		{
		  nome: 'PAULO SILVEIRA',
		  cargo: 'Hipster e CEO da Alura',
		  imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
		  time: times[2].nome
		},
		{
		  nome: 'JULIANA AMOASEI',
		  cargo: 'Desenvolvedora de software e instrutora',
		  imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
		  time: times[3].nome
		},
		{
		  nome: 'DANIEL ARTINE',
		  cargo: 'Engenheiro de Software na Stone Age',
		  imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
		  time: times[3].nome
		},
		{
		  nome: 'GUILHERME LIMA',
		  cargo: 'Desenvolvedor Python e JavaScript na Alura',
		  imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
		  time: times[3].nome
		},
		{
		  nome: 'PAULO SILVEIRA',
		  cargo: 'Hipster e CEO da Alura',
		  imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
		  time: times[3].nome
		},
		{
		  nome: 'JULIANA AMOASEI',
		  cargo: 'Desenvolvedora de software e instrutora',
		  imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
		  time: times[4].nome
		},
		{
		  nome: 'DANIEL ARTINE',
		  cargo: 'Engenheiro de Software na Stone Age',
		  imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
		  time: times[4].nome
		},
		{
		  nome: 'GUILHERME LIMA',
		  cargo: 'Desenvolvedor Python e JavaScript na Alura',
		  imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
		  time: times[4].nome
		},
		{
		  nome: 'PAULO SILVEIRA',
		  cargo: 'Hipster e CEO da Alura',
		  imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
		  time: times[4].nome
		},
		{
		  nome: 'JULIANA AMOASEI',
		  cargo: 'Desenvolvedora de software e instrutora',
		  imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
		  time: times[5].nome
		},
		{
		  nome: 'DANIEL ARTINE',
		  cargo: 'Engenheiro de Software na Stone Age',
		  imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
		  time: times[5].nome
		},
		{
		  nome: 'GUILHERME LIMA',
		  cargo: 'Desenvolvedor Python e JavaScript na Alura',
		  imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
		  time: times[5].nome
		},
		{
		  nome: 'PAULO SILVEIRA',
		  cargo: 'Hipster e CEO da Alura',
		  imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
		  time: times[5].nome
		},
	]

	const [colaboradores, setColaboradores] = useState(inicial);

	function deletarColaborador() {
		console.log("deletando");
	}

	function mudarCorDoTime(cor, nome) {
		setTimes(times.map(time => {
			if (time.nome === nome) {
				time.cor = cor;
			}
			return time;
		}));
	}

	return (
		<div>
			<Banner />
			<Formulario 
				times={times.map(time => time.nome)} 
				aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
			/>
			<section className="times">
				<h1>Minha organização</h1>
				{times.map((time, indice) => 
					<Time
						key={indice} 
						time={time} 
						colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
						aoDeletar={deletarColaborador}
						mudarCor = {mudarCorDoTime} 
					/>
				)}
			</section>
			<Rodape />
		</div>
		);
}

export default App;
