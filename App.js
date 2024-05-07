
import { StyleSheet } from "react-native";

import MainApp from "./MainApp";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// to use Background fetch un-comment the below code

// import * as BackgroundFetch from 'expo-background-fetch';
// import * as TaskManager from 'expo-task-manager';

// const TASK_NAME = 'background-fetch-task';

// TaskManager.defineTask(TASK_NAME, async () => {
//   // Your background task logic goes here
//   console.log('Background task is running');
//   // For example, fetch some data from a server
//   // await fetchAndUpdateData();
// });

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <MainApp />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
