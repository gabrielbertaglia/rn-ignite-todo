import { View } from 'react-native'
import { styles } from './styles'

import LogoTodo from '../../assets/logo.svg'

export function Header() {
  return (
    <View style={styles.container}>
      <LogoTodo style={styles.logo} />
    </View>
  )
}
