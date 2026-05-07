import { EC2Controller } from 'app/hooks/useEc2Controller'
import { COLORS, styles } from 'app/styles/styles'
import { EC2Instance } from 'app/types/ec2Types'
import { Button } from 'app/ui/button'
import { Card } from 'app/ui/Card/card'
import { Icon } from 'app/ui/Icon'
import { Layout } from 'app/ui/layout'
import { Text, View } from 'react-native'

export function ec2InfoScreen() {
  const { data } = EC2Controller()

  const statusColor = (element: EC2Instance) => {
    // console.log('state', element.state)
    if (element.state === 'running') return COLORS.success300
    if (element.state === 'stopped') return COLORS.danger300
    return COLORS.primary300
  }
  return (
    <Layout>
      <Text style={[styles.text.h2]}> Instancias: </Text>
      {data?.map((element, index) => {
        if (index === 0) {
          return (
            <Card>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={[styles.text.h3, { marginLeft: 10 }]}>
                  {element.name}
                </Text>
                <View
                  style={{
                    backgroundColor: statusColor(element),
                    borderRadius: 5,
                  }}
                >
                  <Text style={[styles.text.h4, { margin: 5 }]}>
                    {element.state}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  marginLeft: 50,
                  padding: 10,
                  flex: 1,
                  gap: 10,
                  flexDirection: 'column',
                }}
              >
                <View
                  style={[
                    {
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      backgroundColor: COLORS.gray300,
                      borderRadius: 5,
                    },
                  ]}
                >
                  <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
                    Id de la instancia:
                  </Text>
                  <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
                    {element.instanceId}
                  </Text>
                </View>
                <View
                  style={[
                    {
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      backgroundColor: COLORS.gray300,
                      borderRadius: 5,
                    },
                  ]}
                >
                  <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
                    Plataforma base:
                  </Text>
                  <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
                    {element.osPlatform}
                  </Text>
                </View>
                <View
                  style={[
                    {
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      backgroundColor: COLORS.gray300,
                      borderRadius: 5,
                    },
                  ]}
                >
                  <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
                    Ip publica:
                  </Text>
                  <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
                    {element.publicIp ? element.publicIp : '-'}
                  </Text>
                </View>
                <View
                  style={[
                    {
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      backgroundColor: COLORS.gray300,
                      borderRadius: 5,
                    },
                  ]}
                >
                  <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
                    Ip privada:
                  </Text>
                  <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
                    {element.publicIp ? element.privateIp : '-'}
                  </Text>
                </View>
              </View>
            </Card>
          )
        } else return
      })}
    </Layout>
  )
}
