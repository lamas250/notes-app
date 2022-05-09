import React, { ReactNode, useState, useEffect } from "react";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

type AppBootstrapProps = {
  children: ReactNode;
};

SplashScreen.preventAutoHideAsync()
  .then((result) => console.log(`AppLoading succeeded: ${result}`))
  .catch(console.warn);

export default function AppBootstrap({ children }: AppBootstrapProps) {
  const [appIsReady, setAppIsReady] = useState(false);
  console.log(appIsReady);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Nunito_400Regular: require("../../../assets/fonts/Nunito-Regular.ttf"),
          Nunito_600SemiBold: require("../../../assets/fonts/Nunito-SemiBold.ttf"),
          Nunito_700Bold: require("../../../assets/fonts/Nunito-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    return <></>;
  }

  return <>{children}</>;
}
