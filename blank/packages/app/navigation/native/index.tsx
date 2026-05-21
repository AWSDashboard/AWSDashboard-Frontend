import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen } from 'app/features/home/screen'
import { ec2Screen } from 'app/features/ec2/screen'
import { s3Screen } from 'app/features/s3/screen'
import { ec2InfoScreen } from 'app/features/ec2Info/screen'
import { CreateEc2 } from 'app/features/createEc2/screen'
import { LogIn } from 'app/features/login/screen'
import { signUp } from 'app/features/signup/screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  ec2: undefined
  s3: undefined
  ec2Info: { instanceId: string }
  createEc2: undefined
  login: undefined
  signup: undefined
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
        name="ec2Info"
        component={ec2InfoScreen}
        options={{
          title: `ec2Info`,
        }}
      />
      <Stack.Screen
        name="s3"
        component={s3Screen}
        options={{
          title: 's3',
        }}
      />
      <Stack.Screen
        name="createEc2"
        component={CreateEc2}
        options={{
          title: 'createEc2',
        }}
      />
      <Stack.Screen
        name="login"
        component={LogIn}
        options={{
          title: 'login',
        }}
      />
      <Stack.Screen
        name="signup"
        component={signUp}
        options={{
          title: 'signup',
        }}
      />
    </Stack.Navigator>
  )
}
