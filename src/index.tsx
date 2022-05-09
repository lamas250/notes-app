import React from "react";
import { AppBootstrap } from "@components";
import { StatusBar } from "react-native";
import { Routes } from "./routes";

export default function App() {
  return (
    <AppBootstrap>
      <StatusBar barStyle="light-content" />
      <Routes />
    </AppBootstrap>
  );
}
