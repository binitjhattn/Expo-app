import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export default function App() {
  const [copiedText, setCopiedText] = React.useState('');

  const copyToClipboard = async () => {
    let res = await Clipboard.setStringAsync('hello world');
    console.log('res_copy --->>>', res);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    console.log('TEXT ---->>>>', text);
    setCopiedText(text);
  };

  return (
    <View style={styles.container}>
      <Button title="Click here to copy to Clipboard" onPress={copyToClipboard} />
      <Button title="View copied text" onPress={fetchCopiedText} />
      <Text style={styles.copiedText}>{copiedText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  copiedText: {
    marginTop: 10,
    color: 'red',
  },
});
