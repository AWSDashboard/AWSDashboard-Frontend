import { User, Mail, Phone, MapPin, Calendar, Edit } from "lucide-react";

export function Profile() {
  const userInfo = [
    { icon: Mail, label: "Email", value: "usuario@email.com" },
    { icon: Phone, label: "Teléfono", value: "+34 123 456 789" },
    { icon: MapPin, label: "Ubicación", value: "Madrid, España" },
    { icon: Calendar, label: "Miembro desde", value: "Enero 2024" },
  ];

  const stats = [
    { label: "Proyectos", value: "12" },
    { label: "Completados", value: "8" },
    { label: "En Progreso", value: "4" },
  ];

  return (
    <div className="p-6 lg:p-8 max-w-4xl mx-auto">
      {/* Profile Header */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-4 -mt-16 sm:-mt-12">
            <div className="w-24 h-24 rounded-full border-4 border-white bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              U
            </div>
            <div className="flex-1 text-center sm:text-left mt-4 sm:mt-0">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                Usuario Ejemplo
              </h1>
              <p className="text-gray-600">
                Desarrollador Full Stack
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <Edit className="w-4 h-4" />
              <span>Editar Perfil</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 p-4 text-center"
          >
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* User Information */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Información Personal
        </h2>
        <div className="space-y-4">
          {userInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600 mb-0.5">
                    {info.label}
                  </div>
                  <div className="font-medium text-gray-900">
                    {info.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
