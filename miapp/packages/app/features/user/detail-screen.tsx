import { View, Text, Pressable } from 'react-native'
import { useRouter, useSearchParams } from 'solito/navigation'

export function UserDetailScreen() {
  const router = useRouter()
  const params = useSearchParams()

  const id = params?.get('id') ?? 'unknown'

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 20,
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: '700' }}>
        User Detail Screen 👤
      </Text>

      <Text style={{ fontSize: 18 }}>
        Hello user: <Text style={{ fontWeight: 'bold' }}>{id}</Text>
      </Text>

      {/* TEST BACK NAVIGATION */}
      <Pressable
        onPress={() => router.back()}
        style={{
          padding: 12,
          backgroundColor: '#111',
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white' }}>← Go Back</Text>
      </Pressable>

      {/* TEST FORWARD NAVIGATION */}
      <Pressable
        onPress={() => router.push('/')}
        style={{
          padding: 12,
          backgroundColor: '#2563eb',
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white' }}>Go Home →</Text>
      </Pressable>

      {/* DEBUG INFO */}
      <View
        style={{
          marginTop: 20,
          padding: 10,
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 8,
        }}
      >
        <Text style={{ fontSize: 12, color: '#666' }}>
          Debug params: {JSON.stringify(Object.fromEntries(params || []))}
        </Text>
      </View>
    </View>
  )
}