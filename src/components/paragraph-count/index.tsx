import { Text, View } from 'react-native'
import { styles } from './styles'

type TypeParagraph = 'created' | 'finished'

interface ParagraphProps {
  type: TypeParagraph
  count: number | string
  children: React.ReactNode
}

export function Paragraph({ type, children, count = 0 }: ParagraphProps) {
  return (
    <View style={styles.container}>
      <Text style={type === 'created' ? styles.created : styles.finished}>
        {children}
      </Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  )
}
