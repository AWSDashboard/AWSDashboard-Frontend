// app/styles/styles.ts
import { StyleSheet, Platform, StatusBar } from 'react-native'

export const AWS_COLORS = {
  primary: '#ff9900', // El naranja clásico de AWS
  secondary: '#232f3e', // El azul casi negro de la barra de navegación
  text: '#16191f', // Gris oscuro para legibilidad
  muted: '#68707e', // Gris para textos secundarios
  link: '#0073bb', // Azul para enlaces
}
export const COLORS = {
  // --- MARCA ---
  primary: '#FF9900', // AWS Orange
  primary300: '#FFD18A',
  primary600: '#E08600',
  primary900: '#8C5400',

  secondary: '#232F3E', // AWS Deep Squid Ink
  accent: '#0073BB', // AWS Blue

  // --- ESTADOS ---
  success: '#1D8102', // AWS Green
  success300: '#B7F59E', // Fondo de badge "running"
  success600: '#166B02',
  success900: '#0D3D01',

  danger: '#D13212', // AWS Red
  danger300: '#F9D3CC', // Fondo de badge "terminated"
  danger600: '#B12B0F',
  danger900: '#6E1B0A',

  // El color "medio rojo" que pediste (Naranja-Rojizo / Warn-Critical)
  tomato: '#F24F29',
  tomato300: '#FAD2C9',

  warning: '#EB5F07', // AWS Amber
  warning300: '#FFDDBB',

  // --- ESCALA DE GRISES ---
  white: '#FFFFFF',
  black: '#000000',
  gray900: '#16191F',
  gray600: '#68707E', // Muted text
  gray300: '#D5DBDB', // Borders
  gray100: '#F2F3F3', // Fondo de la app (AWS Grey)
} as const

export const styles = {
  // 1. Estilos del Layout principal
  layout: StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#f0efef',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    },
    content: {
      flex: 1, // Toma el espacio restante
    },
    scrollContainer: {
      flexGrow: 1,
      padding: 16,
      // Centramos el contenido en pantallas web gigantes
      maxWidth: Platform.OS === 'web' ? 800 : '100%',
      alignSelf: 'center',
      width: '100%',
    },
  }),
  color: StyleSheet.create({
    primary: { color: COLORS.primary },
    secondary: { color: COLORS.secondary },
    accent: { color: COLORS.accent },
    success: { color: COLORS.success },
    danger: { color: COLORS.danger },
    muted: { color: COLORS.gray600 },
    white: { color: COLORS.white },
  }),

  button: StyleSheet.create({
    base: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'all 0.2s ease', // Solo funciona en Web, pero no rompe en Móvil
    },
    // Variante: SUBMIT (Primario, sólido)
    submit: {
      backgroundColor: '#007AFF', // Azul estándar (cámbialo por tu color)
    },
    // Variante: GHOST (Solo borde y texto)
    ghost: {
      backgroundColor: '#0000001a',
      borderWidth: 2,
      borderColor: 'transparent',
    },
    // Variante: LINK (Sin fondo ni bordes, solo texto)
    link: {
      backgroundColor: 'transparent',
      paddingHorizontal: 8, // Menos espacio lateral
    },
    // Textos para cada variante
    textSubmit: {
      color: '#ffffff',
      fontWeight: '700',
      fontSize: 16,
    },
    textGhost: {
      color: '#007AFF',
      fontWeight: '700',
      fontSize: 16,
    },
    textLink: {
      color: '#007AFF',
      textDecorationLine: 'underline', // Estilo típico de link
      fontSize: 14,
    },
  }),

  card: StyleSheet.create({
    card: {
      backgroundColor: '#ffffff',
      borderRadius: 12,
      padding: 16,
      marginVertical: 8,
      width: '100%',
      // Sombra según plataforma
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        android: {
          elevation: 3,
        },
        web: {
          boxShadow: '0px 4px 12px rgba(0,0,0,0.08)',
          transition: 'transform 0.2s ease', // Un toque web
        },
      }),
      borderWidth: Platform.OS === 'web' ? 1 : 0, // En web un borde suave ayuda
      borderColor: '#efefef',
    },
  }),

  // 2. Estilos de la Barra de Navegación
  sidebar: StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      ...Platform.select({
        web: {
          paddingTop: 150,
          width: '8%', // Ojo: 5% es muy estrecho, asegúrate de que tus iconos quepan
          minWidth: 65, // Añadido para que no desaparezca en pantallas pequeñas
          height: '100%',
          flexDirection: 'column',
          borderRightWidth: 2,
          borderRightColor: '#cfcfcf',
        },
        native: {
          width: '100%',
          height: '10%',
          minHeight: 120, // Evita que se aplaste en móviles pequeños
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingBottom: 30,
          borderTopWidth: 2,
          borderTopColor: '#cfcfcf', // Cambiado para que se note la separación
        },
      }),
    },
    card: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ffffff',
      ...Platform.select({
        web: {
          width: '99%',
          aspectRatio: 1,
        },
        native: {
          flex: 1,
          height: '100%',
        },
      }),
    },
  }),

  // 3. Estilos genéricos (si quieres usarlos dentro de las páginas)
  components: StyleSheet.create({
    title: {
      fontSize: 26,
      fontWeight: '800',
      color: '#111',
      marginBottom: 20,
    },

    homeIcon: {
      backgroundColor: AWS_COLORS.primary,
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
  }),

  text: StyleSheet.create({
    // --- Jerarquía de Títulos (H) ---
    h1: {
      fontSize: 32,
      fontWeight: '700',
      color: AWS_COLORS.secondary,
      letterSpacing: -0.5,
    },
    h2: {
      fontSize: 24,
      fontWeight: '700',
      color: AWS_COLORS.secondary,
    },
    h3: {
      fontSize: 20,
      fontWeight: '600',
      color: AWS_COLORS.secondary,
    },

    h4: {
      fontSize: 18,
      fontWeight: '600',
      color: AWS_COLORS.secondary,
    },
    h5: {
      fontSize: 16,
      fontWeight: '600',
      color: AWS_COLORS.secondary,
    },
    h5MenuItem: {
      fontSize: 16,
      fontWeight: '600',
      color: AWS_COLORS.primary,
    },

    // --- Variantes de Estado ---
    muted: {
      color: AWS_COLORS.muted,
      fontSize: 14,
    },

    // --- Pesos de Fuente ---
    fontMd: {
      fontWeight: '500',
    },
    fontBold: {
      fontWeight: '700',
    },

    // --- Tamaños ---
    fontXs: {
      fontSize: 12,
    },
    fontXl: {
      fontSize: 28,
    },
  }),
}
