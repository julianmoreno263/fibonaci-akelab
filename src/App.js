import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';

function App() {
	//state principal para guardar los resultados
	const [datos, guardarDatos] = useState([]);

	//funcion que calcula la serie fibonacci
	const calcularSerie = (numero) => {
		let numeros = [0, 1];
		for (let i = 2; i < numero; i++) {
			numeros[i] = numeros[i - 2] + numeros[i - 1];
		}

		//aqui se usa la funcion que actualiza el state datos para guardar la serie fibonacci
		guardarDatos(numeros.join('-'));
	};

	return (
		<Fragment>
			<h1>Serie Fibonacci</h1>

			<div className="container">
				<div className="row">
					<div className="one-half column">
						<Formulario calcularSerie={calcularSerie} />
					</div>
					<div className="one-half column">
						<Resultado datos={datos} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
