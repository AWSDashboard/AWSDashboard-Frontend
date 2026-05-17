import { Layout } from 'app/ui/layout'
import {
  ActivityIndicator,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  CreateEc2FormValues,
  createEc2Schema,
} from 'app/types/createEc2.schema'
import { Select } from 'app/ui/select'
import { Card } from 'app/ui/Card/card'
import { Button } from 'app/ui/button'
import { COLORS, selectStyles, styles } from 'app/styles/styles'
import { useCreateEC2 } from 'app/hooks/api/use-ec2'
import { usePendingStore } from 'app/store/useCounterStore'

export function CreateEc2() {
  const { mutate, isPending } = useCreateEC2()
  const { pending } = usePendingStore((state) => state)
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CreateEc2FormValues>({
    defaultValues: {
      name: '',
      imageId: '',
      instanceType: '',
      keyName: 'vockey',
    },
    resolver: zodResolver(createEc2Schema),
  })

  const onSubmit = (data: CreateEc2FormValues) => {
    console.log('¡Datos validados y listos para enviar!', data)
    mutate(data)
  }

  return (
    <Layout>
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
        <Text
          style={[styles.text.h3, { alignItems: 'center', marginBottom: 25 }]}
        >
          Crear una nueva instancia
        </Text>
        <View style={{ zIndex: 40 }}>
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <View>
                  <Text style={{ marginBottom: 10, marginTop: 10 }}>
                    Nombre de la instancia:
                  </Text>
                  <TextInput
                    style={[
                      selectStyles.input,
                      errors.name && { borderColor: '#d93939' },
                    ]}
                    placeholder="Ej: MiServidorWeb"
                    placeholderTextColor="#888"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  {errors.name && (
                    <Text style={selectStyles.errorText}>
                      {errors.name.message}
                    </Text>
                  )}
                </View>
              )
            }}
          />
        </View>
        <View style={{ zIndex: 30 }}>
          <Controller
            control={control}
            name="instanceType"
            render={({ field: { onChange, value } }) => {
              return (
                <View>
                  <Text style={{ marginBottom: 10, marginTop: 10 }}>
                    Seleccione una imagen:
                  </Text>
                  <Select
                    options={[
                      {
                        label: 't2.micro(1 vCPU, 1GB RAM)',
                        value: 't2.micro',
                      },
                      {
                        label: 't3.micro(2 vCPU, 1GB RAM)',
                        value: 't3.micro',
                      },
                    ]}
                    onChange={onChange}
                    value={value}
                    disabled={false}
                    hasError={!!errors.instanceType}
                  />
                  {errors.instanceType && (
                    <Text style={selectStyles.errorText}>
                      {errors.instanceType.message}
                    </Text>
                  )}
                </View>
              )
            }}
          />
        </View>
        <View style={{ zIndex: 20 }}>
          <Controller
            control={control}
            name="imageId"
            render={({ field: { onChange, value } }) => {
              return (
                <View>
                  <Text style={{ marginBottom: 10, marginTop: 10 }}>
                    Seleccione una imagen:
                  </Text>
                  <Select
                    options={[
                      {
                        label: 'Ubuntu 22.04 LTS',
                        value: 'ami-0c7217cdde317cfec',
                      },
                      {
                        label: 'Ubuntu 24.04 LTS',
                        value: 'ami-04b70fa74e45c3917',
                      },
                      {
                        label: 'Amazon Linux 2023',
                        value: 'ami-051f7e7f6c2f40dc1',
                      },
                      {
                        label: 'Red Hat Enterprise 9',
                        value: 'ami-0fe630eb857a6ec83',
                      },
                    ]}
                    onChange={onChange}
                    value={value}
                    disabled={false}
                    hasError={!!errors.imageId}
                  />
                  {errors.imageId && (
                    <Text style={selectStyles.errorText}>
                      {errors.imageId.message}
                    </Text>
                  )}
                </View>
              )
            }}
          />
        </View>
        <View style={{ zIndex: 10 }}>
          <Controller
            control={control}
            name="keyName"
            render={({ field: { onChange, value } }) => {
              return (
                <View>
                  <Text style={{ marginBottom: 10, marginTop: 10 }}>
                    Par de claves:
                  </Text>
                  <Select
                    options={[]}
                    onChange={onChange}
                    value="Vockey"
                    disabled={true}
                  />
                </View>
              )
            }}
          />
        </View>
        <View style={{ zIndex: 5 }}>
          <View>
            <Text style={{ marginBottom: 10, marginTop: 10 }}>Subnet:</Text>
            <Select
              options={[]}
              onChange={() => {}}
              value="Por defecto"
              disabled={true}
            />
          </View>
        </View>
        <View>
          <Button
            variant="primary"
            style={{ zIndex: 1, marginTop: 50 }}
            onPress={handleSubmit(onSubmit)}
            disable={pending}
          >
            <Text>
              {pending ? (
                <ActivityIndicator size="small" color={COLORS.black} />
              ) : (
                'Lanzar instancia'
              )}
            </Text>
          </Button>
        </View>
      </Card>
    </Layout>
  )
}
