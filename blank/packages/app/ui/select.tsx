import { selectStyles } from 'app/styles/styles'
import { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

interface SelectProps {
  options: {
    label: string
    value: string
  }[]
  value: string
  disabled?: boolean
  hasError?: boolean
  onChange: (value: string) => void
}

export function Select({
  options,
  value,
  onChange,
  disabled,
  hasError,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const labelActual = options.find((o) => o.value === value)?.label

  return (
    <View style={selectStyles.container}>
      <Pressable
        style={[
          selectStyles.selectBox,
          disabled && selectStyles.disabledBox,
          hasError && selectStyles.errorBox, // 🟢 2. Si hay un error, inyectamos el estilo del borde rojo
        ]}
        onPress={() => setIsOpen(!isOpen)}
        disabled={disabled}
      >
        <Text
          style={
            labelActual ? selectStyles.selectText : selectStyles.placeholderText
          }
        >
          {disabled ? value : labelActual || 'Selecciona...'}
        </Text>
        <Text style={selectStyles.arrow}>{isOpen ? '▲' : '▼'}</Text>
      </Pressable>

      {isOpen && (
        <View style={selectStyles.dropdown}>
          {options.map((opt) => (
            <Pressable
              key={opt.value}
              style={selectStyles.option}
              onPress={() => {
                onChange(opt.value)
                setIsOpen(false)
              }}
            >
              <Text style={selectStyles.optionText}>{opt.label}</Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  )
}
