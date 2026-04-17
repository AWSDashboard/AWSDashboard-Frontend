import { Network, ChevronRight, Activity, Shield, Server, Database } from 'lucide-react';




export function Home() {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-black">
          Bienvenido de nuevo
        </h1>
        <p className="text-black">Conosla de AWS</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* S3 */}
        <div className="cursor-pointer rounded-lg border p-6 hover:shadow-lg">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-[#ff9900]">
                <Database className="h-6 w-6 text-black" />
              </div>
              <div>
                <h2 className="text-black">Amazon S3</h2>
                <p className="text-sm text-black">Simple Storage Service</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">Buckets totales</span>
              <span className="text-black">24</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">Almacenamiento usado</span>
              <span className="text-black">1.2 TB</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">Objetos</span>
              <span className="text-black">45,678</span>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-600 pt-4">
            <div className="flex items-center gap-2 text-sm">
              <Activity className="h-4 w-4 text-green-400" />
              <span className="text-green-400">Operacional</span>
            </div>
          </div>
        </div>

        {/* EC2 */}
        <div className="cursor-pointer rounded-lg border p-6 hover:shadow-lg">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-[#ff9900]">
                <Server className="h-6 w-6 text-black" />
              </div>
              <div>
                <h2 className="text-black">Amazon EC2</h2>
                <p className="text-sm text-black">Elastic Compute Cloud</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">
                Instancias en ejecución
              </span>
              <span className="text-black">8</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">Instancias detenidas</span>
              <span className="text-black">3</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">Volúmenes EBS</span>
              <span className="text-black">15</span>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-600 pt-4">
            <div className="flex items-center gap-2 text-sm">
              <Activity className="h-4 w-4 text-green-400" />
              <span className="text-green-400">8 activas</span>
            </div>
          </div>
        </div>

        {/* IAM */}
        <div className="cursor-pointer rounded-lg border p-6 hover:shadow-lg">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-[#ff9900]">
                <Shield className="h-6 w-6 text-black" />
              </div>
              <div>
                <h2 className="text-black">Auditoría IAM</h2>
                <p className="text-sm text-black">
                  Identity and Access Management
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">Usuarios</span>
              <span className="text-black">42</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">Grupos</span>
              <span className="text-black">8</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">Roles</span>
              <span className="text-black">18</span>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-600 pt-4">
            <div className="flex items-center gap-2 text-sm">
              <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
              <span className="text-yellow-400">3 alertas de seguridad</span>
            </div>
          </div>
        </div>

        {/* VPC/Redes */}
        <div className="cursor-pointer rounded-lg border p-6 hover:shadow-lg">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-[#ff9900]">
                <Network className="h-6 w-6 text-black" />
              </div>
              <div>
                <h2 className="text-black">Amazon VPC</h2>
                <p className="text-sm text-black">Virtual Private Cloud</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">VPCs</span>
              <span className="text-black">5</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">Subnets</span>
              <span className="text-black">12</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-black">Security Groups</span>
              <span className="text-black">23</span>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-600 pt-4">
            <div className="flex items-center gap-2 text-sm">
              <Activity className="h-4 w-4 text-green-400" />
              <span className="text-green-400">Conectividad normal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
