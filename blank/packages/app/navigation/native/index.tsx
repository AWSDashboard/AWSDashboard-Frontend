import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from 'app/features/home/screen'
import { ec2Screen } from 'app/features/ec2/screen'
import { s3Screen } from 'app/features/s3/screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  ec2: undefined
  s3: undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="ec2"
        component={ec2Screen}
        options={{
          title: 'EC2',
        }}
      />
      <Stack.Screen
        name="s3"
        component={s3Screen}
        options={{
          title: 's3',
        }}
      />
    </Stack.Navigator>
  )
}
