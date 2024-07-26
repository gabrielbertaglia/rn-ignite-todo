import { useState } from "react";
import { View } from "react-native";
import {
  MD2Colors,
  RadioButton as RadioButtonComponent,
  TouchableRipple
} from 'react-native-paper';

interface RadioButtonProps {
  checked: boolean
  value: string
  onChange: () => void
}

export function RadioButton({ checked, onChange, value }: RadioButtonProps) {
  const [selectValue, setSelectValue] = useState(value);

  return (
    <TouchableRipple
      onPress={() => {
        setSelectValue(value)
        onChange()
      }}
    >
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 3
      }}>
        <View pointerEvents="none">
          <RadioButtonComponent
            value={selectValue}

            color={MD2Colors.deepPurple800}
            uncheckedColor="#4EA8DE"
            status={checked ? "checked" : 'unchecked'}
          />
        </View>
      </View>
    </TouchableRipple>
  )
}