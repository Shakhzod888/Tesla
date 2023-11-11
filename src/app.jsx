import React from "react";
import TeslaBlue from "./components/teslaBlue";
import { MantineProvider } from "@mantine/core";

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
