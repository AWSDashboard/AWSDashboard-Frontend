export type EC2InstanceState =
  | 'running'
  | 'stopped'
  | 'pending'
  | 'stopping'
  | 'shutting-down'
  | 'terminated'

export interface EC2Instance {
  instanceId: string
  name: string
  state: EC2InstanceState
  launchTime: string // O Date si prefieres transformarlo al recibirlo
  instanceType: string
  architecture: string
  osPlatform: string
  rootDeviceType: string
  ebsVolumeIds: string[]
  publicIp?: string // Opcional, algunas instancias no tienen IP pública
  privateIp: string
  vpcId: string
  subnetId: string
  securityGroups: string[]
  tags: Record<string, string> // Para manejar tags dinámicos como { "Proyecto": "Dash" }
  vcpuCount: number
}

// Tipo para la respuesta de la API (el array que pasaste)
export type EC2InstancesResponse = EC2Instance[]

