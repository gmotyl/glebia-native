import { Button, StyleSheet } from 'react-native'

import { Text, View } from '@/components/Themed'
import { useEffect, useState } from 'react'
import { useBell } from '../hooks/useBell'
import { useKeepAwake } from 'expo-keep-awake'

export default function TabOneScreen() {
  const [timer, setTimer] = useState(20 * 60)
  const [isRunning, setIsRunning] = useState(false)
  const { playBell } = useBell()
  useKeepAwake()

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined

    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [timer, isRunning])

  const startTimer = (minutes: number) => {
    setTimer(minutes * 60)
    setIsRunning(true)
    playBell()
  }

  // if timer is 0, play bell
  useEffect(() => {
    if (timer === 0) {
      playBell()
    }
  }, [timer])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {' '}
        {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}
        {timer % 60}
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button title="20 min" onPress={() => startTimer(20)} />
      <View
        style={styles.buttonSeparator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button title="10 min" onPress={() => startTimer(10)} />
      <View
        style={styles.buttonSeparator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button title="5 min" onPress={() => startTimer(5)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
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
  buttonSeparator: {
    marginVertical: 5,
    height: 1,
    width: '40%',
  },
})
