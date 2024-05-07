import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';

const TASK_NAME = 'background-fetch-task';

// TaskManager.defineTask(TASK_NAME, async () => {
//   // Your background task logic goes here
//   console.log('Background task is running');
//   // For example, fetch some data from a server
//   // await fetchAndUpdateData();
// });

const App = () => {
  useEffect(() => {
    // Register the background task
    const registerBackgroundTask = async () => {
      await BackgroundFetch.registerTaskAsync(TASK_NAME, {
        minimumInterval: 1 * 60, // Minimum interval in seconds
        stopOnTerminate: false, // Continue running even when the app is terminated
        startOnBoot: true, // Start automatically when the device boots
      });
      console.log('Background task registered');
    };
    
    registerBackgroundTask();

    return () => {
      // Unregister the background task when the component unmounts
      BackgroundFetch.unregisterTaskAsync(TASK_NAME);
      console.log('Background task unregistered');
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Expo BackgroundFetch Example</Text>
    </View>
  );
};

export default App;
