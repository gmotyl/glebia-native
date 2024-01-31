import { useEffect, useState } from 'react'
import { Audio } from 'expo-av'

export const useBell = () => {
  const [sound, setSound] = useState<Audio.Sound>()

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/gong.mp3'),
    )
    setSound(sound)

    await sound.playAsync()
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  return {
    playBell: playSound,
  }
}
