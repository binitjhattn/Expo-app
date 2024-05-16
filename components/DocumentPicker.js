// Basic Document Picker

import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function App() {
  const [document, setDocument] = useState(null);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    if (result.type === 'success') {
      setDocument(result);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Pick a document" onPress={pickDocument} />
      {document && (
        <Text style={{ marginTop: 20 }}>
          {`URI: ${document.uri}\nName: ${document.name}\nSize: ${document.size} bytes`}
        </Text>
      )}
    </View>
  );
}
