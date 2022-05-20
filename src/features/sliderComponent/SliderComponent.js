import React from "react";
import {
  SliderData,
  Slide,
  TextoSlide,
} from "./SliderData.js";
import "./SliderComponent.css";
import img1 from "./img/Foto 10.jpg";
import img2 from "./img/Foto 6.jpg";
import img3 from "./img/Manos 10.jpg";

export const SliderComponent = () => {
  return (
    <main>
      <SliderData
        controles={true}
        autoplay={true}
        velocidad="2500"
        intervalo="5000"
      >
        <Slide>
          <a href="#">
            <img src={img1} alt="" />
          </a>
          <TextoSlide>
            <p>
              "Somos más" nacio en 1997 como una Asociación Civil sin fines de
              lucro que se creo con la intención de dar alimento a las familias
              del barrio La Cava.
            </p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="#">
            <img src={img3} alt="" />
          </a>
          <TextoSlide>
            <p>
              {" "}
              Hoy somos un centro comunitario que acompaña a más de 700 personas
              a través de las áreas de: Educación, deportes, primera infancia,
              salud, alimentación y trabajo social.{" "}
            </p>
          </TextoSlide>
        </Slide>
        <Slide>
          <a href="#">
            <img src={img2} alt="" />
          </a>
          <TextoSlide>
            <p>
              Nuestra misión es trabajar articuladamente con los distintos
              aspectos de la vida de las familias, generando espacios de
              desarrollo personal y familiar.
            </p>
          </TextoSlide>
        </Slide>
      </SliderData>
    </main>
  );
};

export default SliderComponent;
