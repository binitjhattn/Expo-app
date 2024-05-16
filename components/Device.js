import { Text, View } from 'react-native';
import * as Device from 'expo-device';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        {Device.manufacturer}: {Device.modelName}
      </Text>
    </View>
  );
}
