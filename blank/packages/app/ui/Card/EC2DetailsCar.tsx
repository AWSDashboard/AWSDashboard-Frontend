import { styles } from 'app/styles/styles'
import { EC2Instance } from 'app/types/ec2Types'
import { Text, View } from 'react-native'

interface EC2DetailsProps {
  element: EC2Instance
  formatUptime: (atr1?: any) => any
}

export function EC2Details({ element, formatUptime }: EC2DetailsProps) {
  return (
    <View
      style={{
        padding: 10,
        flex: 1,
        gap: 10,
        flexDirection: 'column',
      }}
    >
      <View style={[styles.card.muttedContent, { marginTop: 10 }]}>
        <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
          Id de la instancia:
        </Text>
        <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
          {element!.instanceId}
        </Text>
      </View>
      <View style={[styles.card.muttedContent]}>
        <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
          Plataforma base:
        </Text>
        <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
          {element!.osPlatform}
        </Text>
      </View>
      <View style={[styles.card.muttedContent]}>
        <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
          Ip publica:
        </Text>
        <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
          {element!.publicIp ? element!.publicIp : '-'}
        </Text>
      </View>
      <View style={[styles.card.muttedContent]}>
        <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
          Ip privada:
        </Text>
        <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
          {element!.publicIp ? element!.privateIp : '-'}
        </Text>
      </View>
      <View style={[styles.card.muttedContent]}>
        <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
          Tipo de disco principipal:
        </Text>
        <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
          {element!.rootDeviceType ? element!.rootDeviceType : '-'}
        </Text>
      </View>
      <View style={[styles.card.muttedContent]}>
        <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
          {element!.ebsVolumeIds.length > 1 ? 'Volumenes' : 'Volumen'}:
        </Text>
        <View style={{ flexDirection: 'column' }}>
          {element!.ebsVolumeIds.map((element, index) => {
            return (
              <Text
                key={index}
                style={[styles.text.fontMd, { marginRight: 15 }]}
              >
                {element ? element : '-'}
              </Text>
            )
          })}
        </View>
      </View>
      <View style={[styles.card.muttedContent]}>
        <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
          Tiempo de ejecución:
        </Text>
        <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
          {element!.launchTime ? formatUptime(element!.launchTime) : '-'}
        </Text>
      </View>
      <View style={[styles.card.muttedContent]}>
        <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>CPU:</Text>
        <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
          {element!.instanceType ? element!.instanceType : '-'}
        </Text>
      </View>
      <View style={[styles.card.muttedContent]}>
        <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
          Arquitectura:
        </Text>
        <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
          {element!.architecture ? element!.architecture : '-'}
        </Text>
      </View>
      <View style={[styles.card.muttedContent]}>
        <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>
          {element!.securityGroups.length > 1
            ? 'Grupos de seguridad'
            : 'Grupo de seguridad'}
          :
        </Text>
        <View style={{ flexDirection: 'column' }}>
          {element!.securityGroups.map((element, index) => {
            return (
              <Text
                key={index}
                style={[styles.text.fontMd, { marginRight: 15 }]}
              >
                {element ? element : '-'}
              </Text>
            )
          })}
        </View>
      </View>
      <View style={[styles.card.muttedContent]}>
        <Text style={[styles.text.fontMd, { marginLeft: 15 }]}>VPC:</Text>
        <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
          {element!.vpcId ? element!.vpcId : '-'}
        </Text>
      </View>
      {Object.keys(element?.tags || {}).length > 1 && (
        <View style={[styles.card.muttedContent, { flexDirection: 'column' }]}>
          <Text
            style={[styles.text.fontMd, { marginLeft: 15, marginBottom: 5 }]}
          >
            {Object.keys(element!.tags).length > 1 ? 'Tags' : 'Tag'}:
          </Text>
          {Object.entries(element!.tags)
            .filter(([key]) => key !== 'Name')
            .map(([key, value]) => (
              <View
                key={key}
                style={[
                  styles.card.muttedContent,
                  { justifyContent: 'space-between', paddingVertical: 4 },
                ]}
              >
                <Text
                  key={key}
                  style={[styles.text.fontMd, { marginLeft: 15 }]}
                >
                  {key}
                </Text>
                <Text style={[styles.text.fontMd, { marginRight: 15 }]}>
                  {value}
                </Text>
              </View>
            ))}
        </View>
      )}
    </View>
  )
}
