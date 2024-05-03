import { store } from "./src/store/store";
import { Provider } from "react-redux";
import { Navigation } from "./src/navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App