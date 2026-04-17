'use client'

import { useState } from 'react'
import { TextLink } from 'solito/link'
import { Text, View, Pressable, TextInput } from 'react-native'

export function HomeScreen() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        gap: 24,
      }}
    >
      <H1>Solito Playground 🚀</H1>

      {/* FEATURE 1: estado simple */}
      <FeatureCard title="Counter Feature">
        <Text style={{ fontSize: 16 }}>Count: {count}</Text>

        <View style={{ flexDirection: 'row', gap: 12 }}>
          <Button onPress={() => setCount(count + 1)}>+1</Button>
          <Button onPress={() => setCount(count - 1)}>-1</Button>
        </View>
      </FeatureCard>

      {/* FEATURE 2: input controlado */}
      <FeatureCard title="Input Feature">
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Type your name"
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 8,
            width: 200,
            borderRadius: 8,
          }}
        />

        <Text>Hello {name || 'anonymous'} 👋</Text>
      </FeatureCard>

      {/* FEATURE 3: navegación Solito */}
      <FeatureCard title="Navigation Feature">
        <Text style={{ textAlign: 'center' }}>
          This works on Web + Native with the same codebase.
        </Text>

        <TextLink
          href="/users/fernando"
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'blue',
          }}
        >
          Go to user page →
        </TextLink>
      </FeatureCard>

      {/* external link */}
      <TextLink
        href="https://github.com/nandorojo/solito"
        target="_blank"
        rel="noreferrer"
        style={{ color: 'gray' }}
      >
        Solito GitHub
      </TextLink>
    </View>
  )
}

function FeatureCard({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <View
      style={{
        width: '100%',
        maxWidth: 420,
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        gap: 12,
      }}
    >
      <Text style={{ fontWeight: '700', fontSize: 16 }}>{title}</Text>
      {children}
    </View>
  )
}

function Button({
  onPress,
  children,
}: {
  onPress: () => void
  children: React.ReactNode
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        padding: 8,
        borderRadius: 8,
        backgroundColor: '#111',
      }}
    >
      <Text style={{ color: 'white' }}>{children}</Text>
    </Pressable>
  )
}

const H1 = ({ children }: { children: React.ReactNode }) => {
  return <Text style={{ fontWeight: '800', fontSize: 26 }}>{children}</Text>
}