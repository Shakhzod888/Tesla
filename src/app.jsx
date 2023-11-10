import React from "react";
import TeslaBlue from "./components/teslaBlue";
import { MantineProvider } from "@mantine/core";
import Carusel from "./components/carusel";

export default class App extends React.Component {
  render() {
    return (
      <>
        <MantineProvider>
          <TeslaBlue />
        </MantineProvider>
      </>
    );
  }
}
