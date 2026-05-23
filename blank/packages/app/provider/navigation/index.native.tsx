import { NavigationContainer } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              ec2: 'ec2',
              s3: 's3',
              ec2Info: 'ec2Info/:instanceId',
              createEc2: 'createEc2',
              login: 'login',
              signup: 'signup',
              awscredentials: 'awscredentials',
              s3details: 's3details/:bucketName',
            },
          },
        }),
        [],
      )}
    >
      {children}
    </NavigationContainer>
  )
}
