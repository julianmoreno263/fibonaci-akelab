import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Formulario = ({ calcularSerie }) => {
	//state del formulario
	const [serie, guardarSerie] = useState({
		numero: '',
	});

	// state para el manejo del error en el formulario
	const [error, actualizarError] = useState(false);

	//función que actualiza el state del formulario
	const handleChange = (e) => {
		guardarSerie({
			[e.target.name]: e.target.value,
		});
	};

	//extraer el valor del state
	const { numero } = serie;

	//funcion submit
	const submitSerie = (e) => {
		e.preventDefault();

		//validar formulario
		if (numero < 1 || isNaN(numero)) {
			actualizarError(true);
			return;
		}

		actualizarError(false);

		//hacer el calculo de la serie
		calcularSerie(numero);

		//reiniciar formulario
		guardarSerie({
			numero: '',
		});
	};

	return (
		<Fragment>
			<h2>Formulario Fibonacci</h2>
			{error ? <p className="alerta-error">Valor inválido, solo se admiten números enteros positivos</p> : null}
			<form onSubmit={submitSerie}>
				<label htmlFor="">Ingresa la cantidad de números a calcular</label>
				<input
					type="text"
					name="numero"
					placeholder="Ingresar cantidad de números"
					className="u-full-width"
					onChange={handleChange}
					value={numero}
				/>
				<button className="u-full-width button-primary">Calcular serie</button>
			</form>
		</Fragment>
	);
};

//documentacion de proptypes
Formulario.propTypes = {
	calcularSerie: PropTypes.func.isRequired,
};

export default Formulario;
