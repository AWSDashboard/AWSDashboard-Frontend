import { useState } from "react";
import { Eye, Edit, Palette, Layout, Code, Save, Plus, Trash2 } from "lucide-react";

interface ViewConfig {
  id: string;
  name: string;
  path: string;
  backgroundColor: string;
  textColor: string;
  padding: string;
  borderRadius: string;
  maxWidth: string;
}

export function ViewsEditor() {
  const [views, setViews] = useState<ViewConfig[]>([
    {
      id: "home",
      name: "Inicio",
      path: "/",
      backgroundColor: "#f9fafb",
      textColor: "#111827",
      padding: "2rem",
      borderRadius: "0.75rem",
      maxWidth: "7xl",
    },
    {
      id: "projects",
      name: "Proyectos",
      path: "/projects",
      backgroundColor: "#f9fafb",
      textColor: "#111827",
      padding: "2rem",
      borderRadius: "0.75rem",
      maxWidth: "7xl",
    },
    {
      id: "settings",
      name: "Configuración",
      path: "/settings",
      backgroundColor: "#f9fafb",
      textColor: "#111827",
      padding: "2rem",
      borderRadius: "0.75rem",
      maxWidth: "4xl",
    },
    {
      id: "profile",
      name: "Perfil",
      path: "/profile",
      backgroundColor: "#f9fafb",
      textColor: "#111827",
      padding: "2rem",
      borderRadius: "0.75rem",
      maxWidth: "4xl",
    },
  ]);

  const [selectedView, setSelectedView] = useState<ViewConfig | null>(views[0]);
  const [previewMode, setPreviewMode] = useState(false);

  const handleUpdateView = (field: keyof ViewConfig, value: string) => {
    if (!selectedView) return;

    const updatedView = { ...selectedView, [field]: value };
    setSelectedView(updatedView);

    setViews(views.map((v) => (v.id === updatedView.id ? updatedView : v)));
  };

  const colorPresets = [
    { name: "Claro", bg: "#f9fafb", text: "#111827" },
    { name: "Oscuro", bg: "#1f2937", text: "#f9fafb" },
    { name: "Azul", bg: "#eff6ff", text: "#1e3a8a" },
    { name: "Verde", bg: "#f0fdf4", text: "#14532d" },
    { name: "Púrpura", bg: "#faf5ff", text: "#581c87" },
    { name: "Naranja", bg: "#fff7ed", text: "#7c2d12" },
  ];

  const paddingOptions = ["1rem", "1.5rem", "2rem", "2.5rem", "3rem"];
  const borderRadiusOptions = ["0", "0.375rem", "0.5rem", "0.75rem", "1rem", "1.5rem"];
  const maxWidthOptions = ["4xl", "5xl", "6xl", "7xl", "full"];

  return (
    <div className="h-full flex flex-col lg:flex-row">
      {/* Sidebar de vistas */}
      <aside className="lg:w-64 bg-white border-b lg:border-b-0 lg:border-r border-gray-200 p-4 overflow-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Vistas</h2>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Plus className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="space-y-2">
          {views.map((view) => (
            <button
              key={view.id}
              onClick={() => setSelectedView(view)}
              className={`
                w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all
                ${
                  selectedView?.id === view.id
                    ? "bg-blue-50 text-blue-600 border border-blue-200"
                    : "hover:bg-gray-50 text-gray-700 border border-transparent"
                }
              `}
            >
              <Layout className="w-5 h-5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{view.name}</div>
                <div className="text-xs opacity-70 truncate">{view.path}</div>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Editor principal */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold text-gray-900">
              {selectedView?.name || "Editor de Vistas"}
            </h1>
            <span className="text-sm text-gray-500">{selectedView?.path}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPreviewMode(!previewMode)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
                ${
                  previewMode
                    ? "bg-blue-600 text-white"
                    : "border border-gray-200 hover:bg-gray-50"
                }
              `}
            >
              <Eye className="w-4 h-4" />
              <span>Vista Previa</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <Save className="w-4 h-4" />
              <span>Guardar</span>
            </button>
          </div>
        </header>

        {/* Contenido */}
        <div className="flex-1 overflow-auto p-6">
          {previewMode ? (
            <div className="h-full flex items-center justify-center">
              <div
                className="w-full h-full transition-all"
                style={{
                  backgroundColor: selectedView?.backgroundColor,
                  color: selectedView?.textColor,
                  padding: selectedView?.padding,
                }}
              >
                <div className={`mx-auto max-w-${selectedView?.maxWidth}`}>
                  <h2 className="text-3xl font-bold mb-4">
                    Vista Previa: {selectedView?.name}
                  </h2>
                  <p className="mb-4">
                    Esta es una vista previa de cómo se verá tu página con los estilos
                    aplicados.
                  </p>
                  <div
                    className="p-6 bg-white/50 mt-4"
                    style={{ borderRadius: selectedView?.borderRadius }}
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      Tarjeta de ejemplo
                    </h3>
                    <p>Contenido de ejemplo con los estilos configurados.</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              {/* Editor de estilos */}
              <div className="space-y-6">
                {/* Colores */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Palette className="w-5 h-5 text-gray-700" />
                    <h3 className="text-lg font-semibold text-gray-900">Colores</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Paletas predefinidas
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {colorPresets.map((preset) => (
                          <button
                            key={preset.name}
                            onClick={() => {
                              handleUpdateView("backgroundColor", preset.bg);
                              handleUpdateView("textColor", preset.text);
                            }}
                            className="p-4 rounded-lg border-2 hover:border-blue-400 transition-all"
                            style={{
                              backgroundColor: preset.bg,
                              color: preset.text,
                              borderColor:
                                selectedView?.backgroundColor === preset.bg
                                  ? "#3b82f6"
                                  : "#e5e7eb",
                            }}
                          >
                            <div className="font-medium">{preset.name}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Color de fondo
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={selectedView?.backgroundColor}
                            onChange={(e) =>
                              handleUpdateView("backgroundColor", e.target.value)
                            }
                            className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
                          />
                          <input
                            type="text"
                            value={selectedView?.backgroundColor}
                            onChange={(e) =>
                              handleUpdateView("backgroundColor", e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Color de texto
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={selectedView?.textColor}
                            onChange={(e) =>
                              handleUpdateView("textColor", e.target.value)
                            }
                            className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
                          />
                          <input
                            type="text"
                            value={selectedView?.textColor}
                            onChange={(e) =>
                              handleUpdateView("textColor", e.target.value)
                            }
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Espaciado */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Layout className="w-5 h-5 text-gray-700" />
                    <h3 className="text-lg font-semibold text-gray-900">Espaciado</h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Padding
                      </label>
                      <div className="grid grid-cols-5 gap-2">
                        {paddingOptions.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleUpdateView("padding", option)}
                            className={`
                              px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all
                              ${
                                selectedView?.padding === option
                                  ? "border-blue-500 bg-blue-50 text-blue-600"
                                  : "border-gray-200 hover:border-gray-300"
                              }
                            `}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Border Radius
                      </label>
                      <div className="grid grid-cols-6 gap-2">
                        {borderRadiusOptions.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleUpdateView("borderRadius", option)}
                            className={`
                              px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all
                              ${
                                selectedView?.borderRadius === option
                                  ? "border-blue-500 bg-blue-50 text-blue-600"
                                  : "border-gray-200 hover:border-gray-300"
                              }
                            `}
                          >
                            {option === "0" ? "Sin" : option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ancho máximo
                      </label>
                      <div className="grid grid-cols-5 gap-2">
                        {maxWidthOptions.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleUpdateView("maxWidth", option)}
                            className={`
                              px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all
                              ${
                                selectedView?.maxWidth === option
                                  ? "border-blue-500 bg-blue-50 text-blue-600"
                                  : "border-gray-200 hover:border-gray-300"
                              }
                            `}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Código generado */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="w-5 h-5 text-gray-700" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      Código CSS generado
                    </h3>
                  </div>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                    {`{
  backgroundColor: "${selectedView?.backgroundColor}",
  color: "${selectedView?.textColor}",
  padding: "${selectedView?.padding}",
  borderRadius: "${selectedView?.borderRadius}",
  maxWidth: "${selectedView?.maxWidth}"
}`}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
