import { Plus, Search, Settings, Play, Square } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Instances() {
  const projects = [
    {
      id: 1,
      name: 'Linux',
      description: 'Instancia de linux',
      status: 'encendiendo',
    },
    {
      id: 2,
      name: 'Windows server',
      description: 'Desarrollo de aplicaciones',
      status: 'apagada',
    },
    {
      id: 3,
      name: 'FTP',
      description: 'Servidor de FTP',
      status: 'iniciado',
    },
    {
      id: 4,
      name: 'Sistema de Inventario',
      description: 'Gestión de inventario en tiempo real',
      status: 'iniciado',
    },
  ];

  const statusColors = {
    encendiendo: 'bg-orange-300 text-orange-700',
    iniciado: 'bg-green-300 text-green-700',
    apagada: 'bg-red-300 text-red-700',
  };

  return (
    <div className="mx-auto max-w-7xl p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Instancias</h1>
          <p className="text-gray-600">Gestiona todas tus instancias</p>
        </div>
        <button className="flex cursor-pointer items-center gap-2 rounded-lg bg-[#FF9900] px-4 py-2.5 text-white transition-colors hover:bg-[#232F3E]">
          <Plus className="h-5 w-5" />
          <span>Nueva instancia</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar instancias..."
            className="w-full rounded-lg border border-gray-200 py-2.5 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg"
          >
            <div className="mb-4 flex items-start justify-between">
              <div
                className={`bg-black-50 items-left justify-left flex h-auto w-full rounded-lg`}
              >
                <span className={`text-black-600 text-lg font-bold`}>
                  {project.name}
                </span>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${statusColors[project.status as keyof typeof statusColors]}`}
              >
                {project.status}
              </span>
            </div>
            <p className="mb-4 line-clamp-2 text-gray-600">
              {project.description}
            </p>
            <div className="flex justify-end gap-5">
              <button
                type="button"
                onClick={() => console.log('play!')}
                className="cursor-pointer"
              >
                <span>
                  <Play className="h-5 w-5 hover:text-green-600" />
                </span>
              </button>
              <button
                type="button"
                onClick={() => console.log('stop')}
                className="cursor-pointer"
              >
                <span>
                  <Square className="h-5 w-5 hover:text-red-600" />
                </span>
              </button>
              <Link
                to={`/instance/setting/${project.id}`}
                className="cursor-pointer"
              >
                <span>
                  <Settings className="h-5 w-5 hover:text-gray-600" />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
