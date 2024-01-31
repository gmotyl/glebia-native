import { Button, StyleSheet } from 'react-native'

import { Text, View } from '@/components/Themed'
import { useEffect, useState } from 'react'
import { useBell } from '../hooks/useBell'

export default function TabOneScreen() {
  const [timer, setTimer] = useState(20 * 60)
  const [isRunning, setIsRunning] = useState(false)
  const { playBell } = useBell()

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

  const startTimer = () => {
    setTimer(20 * 60)
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
      <Button title="Start" onPress={startTimer} />
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
