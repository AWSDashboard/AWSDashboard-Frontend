import { User, Bell, Shield, Palette, Globe } from "lucide-react";

export function Settings() {
  const settingSections = [
    {
      icon: User,
      title: "Perfil",
      description: "Administra tu información personal",
      items: ["Nombre y foto", "Correo electrónico", "Cambiar contraseña"],
    },
    {
      icon: Bell,
      title: "Notificaciones",
      description: "Configura tus preferencias de notificación",
      items: ["Alertas por email", "Notificaciones push", "Resumen semanal"],
    },
    {
      icon: Shield,
      title: "Privacidad y Seguridad",
      description: "Controla tu privacidad y seguridad",
      items: ["Autenticación de dos factores", "Sesiones activas", "Registro de actividad"],
    },
    {
      icon: Palette,
      title: "Apariencia",
      description: "Personaliza la interfaz",
      items: ["Tema (Claro/Oscuro)", "Color principal", "Tamaño de fuente"],
    },
    {
      icon: Globe,
      title: "Idioma y Región",
      description: "Configura idioma y zona horaria",
      items: ["Idioma de la interfaz", "Zona horaria", "Formato de fecha"],
    },
  ];

  return (
    <div className="p-6 lg:p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Configuración
        </h1>
        <p className="text-gray-600">
          Administra las preferencias de tu cuenta y aplicación
        </p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-4">
        {settingSections.map((section, index) => {
          const Icon = section.icon;
          
          return (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-900 mb-1">
                      {section.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-4">
                      {section.description}
                    </p>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <button className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    Editar
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Account Actions */}
      <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-xl">
        <h3 className="text-lg font-semibold text-red-900 mb-2">
          Zona de Peligro
        </h3>
        <p className="text-sm text-red-700 mb-4">
          Acciones irreversibles relacionadas con tu cuenta
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="px-4 py-2 border border-red-300 text-red-700 rounded-lg hover:bg-red-100 transition-colors">
            Desactivar cuenta
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            Eliminar cuenta
          </button>
        </div>
      </div>
    </div>
  );
}
