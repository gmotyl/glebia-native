import { StyleSheet } from 'react-native'

import { View } from '@/components/Themed'
import WebView from 'react-native-webview'

export default function TabTwoScreen() {
  return (
    <View style={{ flex: 1 }}>
      <WebView
        source={{
          uri: 'https://otwarteserce.com/',
        }}
        style={{ marginTop: 20 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
