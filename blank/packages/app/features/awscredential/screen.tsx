import { zodResolver } from '@hookform/resolvers/zod'
import { PublicLayout } from 'app/components/publicLayout'
import { useAwsCredentials } from 'app/hooks/api/use-auth'
import { COLORS, selectStyles, styles } from 'app/styles/styles'
import {
  AWSCredentialsSchema,
  AWSCredentialsType,
} from 'app/types/AWSKey.schema'
import { Button } from 'app/ui/button'
import { Card } from 'app/ui/Card/card'
import { Controller, useForm } from 'react-hook-form'
import {
  ActivityIndicator,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native'
import { useRouter } from 'solito/navigation'

export function awsCredentials() {
  const parseAWSCLI = (pastedText: string) => {
    let accessKey = ''
    let secretKey = ''
    let sessionToken = ''

    if (!pastedText || typeof pastedText !== 'string') {
      return { accessKey, secretKey, sessionToken }
    }

    const accessRegex = /aws_access_key_id\s*=\s*["']?([^ \n\r\t"']+)/i
    const secretRegex = /aws_secret_access_key\s*=\s*["']?([^ \n\r\t"']+)/i
    const tokenRegex = /aws_session_token\s*=\s*["']?([^ \n\r\t"']+)/i

    const matchAccess = pastedText.match(accessRegex)
    const matchSecret = pastedText.match(secretRegex)
    const matchToken = pastedText.match(tokenRegex)

    if (matchAccess) accessKey = matchAccess[1]!
    if (matchSecret) secretKey = matchSecret[1]!
    if (matchToken) sessionToken = matchToken[1]!

    return { accessKey, secretKey, sessionToken }
  }
  const { mutate } = useAwsCredentials()
  const { push } = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AWSCredentialsType>({
    defaultValues: {
      AWS_CLI: '',
    },
    resolver: zodResolver(AWSCredentialsSchema),
  })

  const onSubmit = (data: AWSCredentialsType) => {
    console.log('¡Datos validados y listos para enviar!', data)
    const newData = parseAWSCLI(data.AWS_CLI)
    console.log('¡Datos validados y listos para enviar!', newData)
    mutate(newData)
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
              Pega el contenido completo de tu AWS CLI:
            </Text>
          </View>
          <View style={{ zIndex: 40 }}>
            <Controller
              control={control}
              name="AWS_CLI"
              render={({ field: { onChange, onBlur, value } }) => {
                return (
                  <View>
                    <Text style={{ marginBottom: 10, marginTop: 10 }}>
                      AWS CLI:{' '}
                      <Text style={{ color: COLORS.danger600 }}>*</Text>
                    </Text>
                    <TextInput
                      style={[
                        selectStyles.input,
                        errors.AWS_CLI && { borderColor: '#d93939' },
                      ]}
                      placeholder="AWS CLI"
                      placeholderTextColor="#888"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                    {errors.AWS_CLI && (
                      <Text style={selectStyles.errorText}>
                        {errors.AWS_CLI.message}
                      </Text>
                    )}
                  </View>
                )
              }}
            />
          </View>
          <View>
            <Button
              variant="primary"
              style={{ zIndex: 1, marginTop: 50 }}
              onPress={handleSubmit(onSubmit)}
              //   disable={pending}
            >
              <Text>
                {/* PENDING */}
                {false ? (
                  <ActivityIndicator size="small" color={COLORS.black} />
                ) : (
                  'Enviar'
                )}
              </Text>
            </Button>
          </View>
        </Card>
      </View>
    </PublicLayout>
  )
}
