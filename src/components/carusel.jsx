import React from "react";
import Car1 from "../components/assets/blueTesla2.png";
import Car2 from "../components/assets/RedTesla.png";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import { rem } from "@mantine/core";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

function Carusel() {
  return (
    <Carousel
      height={180}
      nextControlIcon={
        <IconArrowRight style={{ width: rem(16), height: rem(16) }} />
      }
      previousControlIcon={
        <IconArrowLeft style={{ width: rem(16), height: rem(16) }} />
      }
    >
      <Carousel.Slide>
        <img src={Car1} alt="" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={Car2} alt="" />
      </Carousel.Slide>
      <Carousel.Slide>
        <img src={Car1} alt="" />
      </Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}

export default Carusel;
