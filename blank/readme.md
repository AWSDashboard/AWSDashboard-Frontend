# 🚀 AWSDashboard Frontend

Bienvenido al repositorio del Frontend de **AWSDashboard**. Este proyecto está construido actualmente con **React** (utilizando Vite) y **Node.js**, con una arquitectura pensada para escalar.

> **Nota sobre la visión del proyecto:** Aunque actualmente el proyecto usa Vite, la estructura está diseñada para facilitar una futura migración a **Next.js** para web y **React Native** para móvil, compartiendo lógica y componentes.

---

## Índice

1. [Estructura del Proyecto](#-estructura-del-proyecto)
2. [Requisitos Previos](#-requisitos-previos)
3. [Instalación y Configuración (Aterrizar el proyecto)](#-instalación-y-configuración)
4. [Próximos Pasos (Roadmap)](#-próximos-pasos)
5. [Dependencias](#-dependencias)

## Estructura del Proyecto

```bash
AWSDASHBOARD-FRONTEND/
.
├── .github/
├── .vscode/
├── .yarn/
├── apps/                 # Entornos de ejecución
│   ├── expo/             # App móvil nativa (React Native)
│   └── next/             # App web (Next.js)
├── packages/             # Código compartido (Monorepo core)
│   └── app/              # Corazón de la lógica (Cross-platform)
│       ├── api/          # Configuración de Axios e instancias de API
│       ├── assets/       # Imágenes, logos (ec2Logo) y fuentes
│       ├── features/     # Módulos de lógica y pantallas por dominio
│       │   ├── ec2/
│       │   ├── ec2Info/
│       │   ├── home/
│       │   └── s3/
│       ├── hooks/        # Hooks personalizados
│       │   └── api/      # Hooks de TanStack Query (useEc2, etc.)
│       ├── navigation/   # Configuración de rutas nativas
│       │   └── native/   # Stack Navigators y Linking
│       ├── provider/     # Proveedores de contexto globales
│       │   ├── navigation/
│       │   └── safe-area/
│       ├── services/     # Clases de servicios (ec2Service)
│       ├── store/        # Gestión de estado global
│       ├── styles/       # Temas, constantes
│       ├── types/        # Definiciones de TypeScript
│       └── ui/           # Componentes de interfaz atómicos
│           └── Card/     # Sistema de tarjetas
├── .env                  # Variables de entorno (API_URL)
├── .gitignore
├── .prettierrc           # Configuración de formato de código
├── package.json          # Configuración de Workspaces y scripts de Turbo
├── tsconfig.json         # Configuración base de TypeScript
├── turbo.json            # Orquestación de builds y caché
└── yarn.lock
```

Esta estructura de monorepo es gracias a Solito.dev un proyecto de Fernando Rojo, ha creado una libreria y estructura que comunica los dos mundos, Next para web y Expo para moviles.
Trabaja con sus propias rutas.
Solito.dev: (https://solito.dev/)
GitHun de Fernando Rojo:

---

## Requisitos Previos

Antes de clonar e iniciar el proyecto, asegúrate de tener instalado lo siguiente en tu entorno local:

- **Node.js** (Se recomienda la versión LTS actual, ej. v18 o v20)

- **Yarn**: Usamos Yarn como gestor de paquetes para gestionar el monorepo y sus workspaces de forma eficiente. Si no lo tienes instalado, puedes hacerlo con:

  ```bash
  npm install -g yarn
  ```

---

## Instalación y Configuración

Sigue estos pasos para "aterrizar" el proyecto y tenerlo corriendo en tu máquina local:

**1. Clonar el repositorio:**

```bash
git clone <URL_DE_TU_REPOSITORIO>
cd AWSDASHBOARD-FRONTEND
```

**2. Aterrizar el proyecto**

```bash
yarn install
```

**3. Inicializar el proyecto**

- **web**:

```bash
yarn web  # Inicia el servidor de desarrollo de **Next.js**. |
```

- **nativo**:

```bash
yarn native  # Inicia el bundler de Metro para **Expo**.
```

## Dependencias

### Gestión del Monorepo

- **Workspaces (`apps/*`, `packages/*`)**: Define la arquitectura del proyecto. Permite que la lógica compartida en `packages/app` se inyecte automáticamente tanto en la web (**Next.js**) como en la versión nativa (**Expo**).
- **Turborepo (`turbo`)**: Es el motor de ejecución. Se encarga de cachear tareas y ejecutar scripts en paralelo, haciendo que los builds y el desarrollo sean increíblemente rápidos.
- **Yarn v4**: Implementa una gestión de dependencias moderna, más segura y rápida, garantizando consistencia en todo el workspace.

### Diseño y Lenguaje

- **TypeScript**: Tipado estricto en todo el proyecto para evitar errores en tiempo de ejecución, especialmente crítico al compartir tipos de AWS entre plataformas.

### Navegación y DX (Developer Experience)

- **Expo Linking**: La pieza clave para el **Deep Linking**. Permite que las rutas dinámicas (como los detalles de una instancia EC2) funcionen perfectamente tanto en el navegador como al abrir links dentro de la app móvil.
- **Prettier & ESLint**: Configuración automatizada para mantener un código limpio. Incluye un plugin para el **auto-ordenado de imports**, manteniendo los archivos organizados sin esfuerzo manual.
