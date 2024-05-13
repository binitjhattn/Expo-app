import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import ViewShot from 'react-native-view-shot';

const ExampleComponent = () => {
  const [capturedImage, setCapturedImage] = useState(null);

  const handleCapture = (uri) => {
    console.log('inside handle-capture');
    setCapturedImage(uri);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ViewShot onCapture={handleCapture}>
        <View style={{ backgroundColor: 'lightblue', padding: 20 }}>
          <Text>This is a view to be captured!</Text>
        </View>
      </ViewShot>

      {capturedImage && (
        <View style={{ marginTop: 20 }}>
          <Text>Captured Image:</Text>
          <Image source={{ uri: capturedImage }} style={{ width: 200, height: 200, marginTop: 10 }} />
        </View>
      )}

      <TouchableOpacity
        style={{ backgroundColor: 'lightgray', padding: 10, marginTop: 20 }}
        onPress={() => setCapturedImage(null)}
      >
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExampleComponent;
