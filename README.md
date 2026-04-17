# 🚀 AWSDashboard Frontend

Bienvenido al repositorio del Frontend de **AWSDashboard**. Este proyecto está construido actualmente con **React** (utilizando Vite) y **Node.js**, con una arquitectura pensada para escalar. 

> **Nota sobre la visión del proyecto:** Aunque actualmente el proyecto usa Vite, la estructura está diseñada para facilitar una futura migración a **Next.js** para web y **React Native** para móvil, compartiendo lógica y componentes.

---

##  Índice

1. [Requisitos Previos](#-requisitos-previos)
2. [Instalación y Configuración (Aterrizar el proyecto)](#-instalación-y-configuración)
3. [Estructura del Proyecto](#-estructura-del-proyecto)
4. [Scripts Disponibles](#-scripts-disponibles)
5. [Próximos Pasos (Roadmap)](#-próximos-pasos)

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