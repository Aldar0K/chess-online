import { FC } from "react";

import "./styles/main.css";

import { withProviders } from "./providers";
import { AppRouter } from "./router";

const App: FC = () => {
  return <AppRouter />;
};

export default withProviders(App);
