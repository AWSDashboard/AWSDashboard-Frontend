import { zodResolver } from '@hookform/resolvers/zod'
import { PublicLayout } from 'app/components/publicLayout'
import { Card } from 'app/ui/Card/card'
import { Controller, useForm } from 'react-hook-form'
import {
  ActivityIndicator,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SigInSchema, SignInType } from 'app/types/auth.schema'
import { COLORS, selectStyles, styles } from 'app/styles/styles'
import { Button } from 'app/ui/button'
import { useRouter } from 'solito/navigation'
import { useSignIn } from 'app/hooks/api/use-auth'
import { useState } from 'react'
import { Icon } from 'app/ui/Icon'
import eye from '../../assets/eye.png'
import eyeOf from '../../assets/eye-off.png'

export function LogIn() {
  const [visible, setVisible] = useState<boolean>(false)
  const { mutate, error } = useSignIn()
  const { push } = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInType>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(SigInSchema),
  })
  const toggleVisible = () => {
    if (visible) {
      setVisible(false)
    } else {
      setVisible(true)
    }
  }
  const axiosError = error as any
  const backendMessage =
    axiosError?.response?.data?.message || 'Ocurrió un error inesperado'

  const onSubmit = (data: SignInType) => {
    console.log('¡Datos validados y listos para enviar!', data)
    mutate(data)
  }
  return (
    <PublicLayout>
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: 150,
        }}
      >
        <Card
          style={{
            flexDirection: 'column',

            ...Platform.select({
              web: {
                width: '70%',
                left: 250,
              },
              android: {
                width: '98%',
                margin: 5,
              },
            }),
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Text
              style={[
                styles.text.h1,
                {
                  textAlign: 'center',
                  marginBottom: 5,
                },
              ]}
            >
              AWS Dashboard
            </Text>

            <Text
              style={[
                styles.text.muted,
                {
                  textAlign: 'center',
                  marginBottom: 25,
                },
              ]}
            >
              Inicia sesión para obtener el acceso a AWS Dashboard
            </Text>
          </View>
          <View style={{ zIndex: 40 }}>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => {
                return (
                  <View>
                    <Text style={{ marginBottom: 10, marginTop: 10 }}>
                      Email: <Text style={{ color: COLORS.danger600 }}>*</Text>
                    </Text>
                    <TextInput
                      style={[
                        selectStyles.input,
                        errors.email && { borderColor: '#d93939' },
                      ]}
                      placeholder="ejemplo@gmail.com"
                      placeholderTextColor="#888"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                    {errors.email && (
                      <Text style={selectStyles.errorText}>
                        {errors.email.message}
                      </Text>
                    )}
                  </View>
                )
              }}
            />
          </View>
          <View style={{ zIndex: 40 }}>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => {
                return (
                  <View>
                    <Text style={{ marginBottom: 10, marginTop: 10 }}>
                      Contraseña:{' '}
                      <Text style={{ color: COLORS.danger600 }}>*</Text>
                    </Text>
                    <View
                      style={[
                        {
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        },
                        errors.password && { borderColor: '#d93939' },
                      ]}
                    >
                      <TextInput
                        style={[selectStyles.input, { flex: 1 }]}
                        secureTextEntry={!visible}
                        placeholder="Contraseña"
                        placeholderTextColor="#888"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />

                      <Button
                        variant="ghost"
                        onPress={() => {
                          toggleVisible()
                        }}
                        style={{
                          backgroundColor: '',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >
                        {visible ? (
                          <Icon
                            asset={eye}
                            style={{ height: 20, weight: 20 }}
                          />
                        ) : (
                          <Icon
                            asset={eyeOf}
                            style={{ height: 20, weight: 20 }}
                          />
                        )}
                      </Button>
                    </View>

                    {errors.password && (
                      <Text style={selectStyles.errorText}>
                        {errors.password.message}
                      </Text>
                    )}
                  </View>
                )
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
              marginTop: 20,
            }}
          >
            {error && (
              <Text style={[selectStyles.errorText, { margin: 20 }]}>
                {backendMessage}
              </Text>
            )}
            <Button
              variant="primary"
              style={{}}
              onPress={handleSubmit(onSubmit)}
              //   disable={pending}
            >
              <Text>
                {/* PENDING */}
                {false ? (
                  <ActivityIndicator size="small" color={COLORS.black} />
                ) : (
                  'Iniciar sesión'
                )}
              </Text>
            </Button>
            <Button
              variant="link"
              style={{ zIndex: 1, marginTop: 20 }}
              onPress={() => push('/signup')}
            >
              <Text style={{ color: COLORS.link }}>
                ¿No tiene cuenta? Pulse aquí.
              </Text>
            </Button>
          </View>
        </Card>
      </View>
    </PublicLayout>
  )
}
