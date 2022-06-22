import React, {useRef, useEffect, useCallback} from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import styled from 'styled-components';

const SliderData = ({
		children,
		controles = false,
		autoplay = false,
		velocidad="500",
		intervalo="5000"
	}) => {
	const sliderComponents = useRef(null);
	const intervaloSliderComponents= useRef(null);

	const siguiente = useCallback(() => {
		
		if(sliderComponents?.current?.children?.length > 0){

			const primerElemento = sliderComponents.current.children[0];

		
			sliderComponents.current.style.transition = `${velocidad}ms ease-out all`;

			const tamañoSlide = sliderComponents.current.children[0].offsetWidth;

			
			sliderComponents.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
			
				sliderComponents.current.style.transition = 'none';
				sliderComponents.current.style.transform = `translateX(0)`;

			
				sliderComponents.current.appendChild(primerElemento);

				sliderComponents.current.removeEventListener('transitionend', transicion);
			}

			sliderComponents.current.addEventListener('transitionend', transicion);

		}
	}, [velocidad]);
	
	const anterior = () => {
		if(sliderComponents.current.children.length > 0){
	
			const index = sliderComponents.current.children.length - 1;
			const ultimoElemento = sliderComponents.current.children[index];
			sliderComponents.current.insertBefore(ultimoElemento, sliderComponents.current.firstChild);
			
			sliderComponents.current.style.transition = 'none';
			const tamañoSlide = sliderComponents.current.children[0].offsetWidth;
			sliderComponents.current.style.transform = `translateX(-${tamañoSlide}px)`;
		
			setTimeout(() => {
				sliderComponents.current.style.transition = `${velocidad}ms ease-out all`;
				sliderComponents.current.style.transform = `translateX(0)`;
			}, 30);
		}
	}

	useEffect(() => {
		if(autoplay){
			intervaloSliderComponents.current = setInterval(() => {
				siguiente();
			}, intervalo);
	
			
			sliderComponents.current.addEventListener('mouseenter', () => {
				clearInterval(intervaloSliderComponents.current);
			});
	
			
			sliderComponents.current.addEventListener('mouseleave', () => {
				intervaloSliderComponents.current = setInterval(() => {
					siguiente();
				}, intervalo);
			});
		}
	}, [autoplay, intervalo, siguiente]);

	return (
		<ContenedorPrincipal>
			<ContenedorSliderComponents ref={sliderComponents}>
				{children}
			</ContenedorSliderComponents>
			{controles && <Controles>
				<Boton onClick={anterior}>
					<FaArrowAltCircleLeft />
				</Boton>
				<Boton derecho onClick={siguiente}>
					<FaArrowAltCircleRight />
				</Boton>
			</Controles>}
		</ContenedorPrincipal>
	);
}

const ContenedorPrincipal = styled.div`
	position: relative;
`;

const ContenedorSliderComponents = styled.div`
	display: flex;
	flex-wrap: nowrap;
`;

const Slide = styled.div`
	min-width: 100%;
	overflow: hidden;
	transition: .3s ease all;
	z-index: 10;
	/* max-height: 500px; */
	position: relative;

	img {
		width: 100%;
		vertical-align: top;
	}
`;

const TextoSlide = styled.div`
	background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
	color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
	width: 100%;
	padding: 10px 60px;
	text-align: center;
	position: absolute;
	bottom: 0;

	@media screen and (max-width: 700px) {
		position: relative;
		background: #000;
	}
`;

const Controles = styled.div`
	position: absolute;
	top: 0;
	z-index: 20;
	width: 100%;
	height: 100%;
	pointer-events: none;
`;

const Boton = styled.button`
	pointer-events: all;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	width: 50px;
	height: 100%;
	text-align: center;
	position: absolute;
	transition: .3s ease all;
	/* &:hover {
		background: rgba(0,0,0,.2);
		path {
			fill: #fff;
		}
	} */

	path {
		filter: ${props => props.derecho ? 'drop-shadow(-2px 0px 0px #fff)' : 'drop-shadow(2px 0px 0px #fff)'};
	}

	${props => props.derecho ? 'right: 0' : 'left: 0'}
`;
 
export {SliderData, Slide, TextoSlide};