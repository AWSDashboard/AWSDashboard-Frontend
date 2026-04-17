# 🚀 AWSDashboard Frontend

Bienvenido al repositorio del Frontend de **AWSDashboard**. Este proyecto está construido actualmente con **React** (utilizando Vite) y **Node.js**, con una arquitectura pensada para escalar. 

> **Nota sobre la visión del proyecto:** Aunque actualmente el proyecto usa Vite, la estructura está diseñada para facilitar una futura migración a **Next.js** para web y **React Native** para móvil, compartiendo lógica y componentes.

---

##  Índice

1. [Próximos Pasos (Roadmap)](#-próximos-pasos)
2. [Requisitos Previos](#-requisitos-previos)
3. [Instalación y Configuración (Aterrizar el proyecto)](#-instalación-y-configuración)
4. [Estructura del Proyecto](#-estructura-del-proyecto)


## Estructura del Proyecto


```bash
AWSDASHBOARD-FRONTEND/
├── src/
│   ├── app/
│   │   ├── components/       # Componentes reutilizables (Botones, Inputs, Cards)
│   │   ├── pages/            # Vistas principales de la aplicación
│   │   │   ├── Home.tsx
│   │   │   ├── LogIn.tsx
│   │   │   ├── NotFound.tsx
│   │   │   ├── Profile.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Settings.tsx
│   │   │   ├── SignUp.tsx
│   │   │   └── ViewsEditor.tsx
│   │   └── routes.tsx        # Configuración de enrutamiento (React Router)
│   ├── styles/               # Archivos globales de estilos
│   │   ├── fonts.css
│   │   ├── tailwind.css      # Configuración base de Tailwind CSS
│   │   └── theme.css
│   ├── App.tsx               # Componente raíz
│   ├── index.css             # Estilos de entrada
│   └── main.jsx              # Punto de entrada de la aplicación (Render)
├── .gitignore                # Archivos ignorados por git
├── .prettierrc               # Configuración de formato de código
├── eslint.config.js          # Configuración de linter
├── index.html                # Plantilla HTML principal
├── package.json              # Metadatos y scripts del proyecto
├── pnpm-lock.yaml            # Árbol de dependencias bloqueado
├── tsconfig.json             # Configuración de TypeScript
└── vite.config.js            # Configuración del empaquetador Vite
```
---

##  Requisitos Previos

Antes de clonar e iniciar el proyecto, asegúrate de tener instalado lo siguiente en tu entorno local:

* **Node.js** (Se recomienda la versión LTS actual, ej. v18 o v20)
* **pnpm**: Usamos `pnpm` como gestor de paquetes para instalaciones más rápidas y eficientes. Si no lo tienes, puedes instalarlo globalmente con:
    ```bash
    npm install -g pnpm
    ```

---

##  Instalación y Configuración

Sigue estos pasos para "aterrizar" el proyecto y tenerlo corriendo en tu máquina local:

**1. Clonar el repositorio:**
```bash
git clone <URL_DE_TU_REPOSITORIO>
cd AWSDASHBOARD-FRONTEND
```
**2. Aterrizar el proyecto**
```bash
pnpm install
```

**3. Inicializar el proyecto**
```bash
pnpm run dev
```
