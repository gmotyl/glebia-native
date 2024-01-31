import { StatusBar } from 'expo-status-bar'
import { FlatList, Platform, StyleSheet } from 'react-native'

import { Text, View } from '@/components/Themed'

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Metoda modlitwy głębii</Text>
      <FlatList
        data={[
          'Wybierz święte słowo jako symbol twojego przyzwolenia na Bożą obecność i działanie Boga w twoim wnętrzu.',
          'Siedząc wygodnie z zamkniętymi oczami, wycisz się prze chwilę i przywołaj w świadomości święte słowo jako symbol swojej zgody na obecność i działanie Boga w Tobie.',
          'Kiedy sobie uświadomisz, że jesteś zajęty myślami, powróć z jak największą delikatnością do świętego słowa.',
          'Kiedy upłynie czs modlitwy, pozostań przez kilka minut w ciszy z zamkniętymi oczami.',
        ]}
        renderItem={({ item, index }) => (
          <Text style={styles.point}>{`${index + 1}. ${item}`}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
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
  point: {
    fontSize: 17,
    textAlign: 'left',
    margin: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
