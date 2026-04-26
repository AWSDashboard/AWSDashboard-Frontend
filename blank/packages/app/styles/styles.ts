// app/styles/styles.ts
import { StyleSheet, Platform, StatusBar } from 'react-native'

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
          paddingTop: 50,
          width: '6%', // Ojo: 5% es muy estrecho, asegúrate de que tus iconos quepan
          minWidth: 65, // Añadido para que no desaparezca en pantallas pequeñas
          height: '100%',
          flexDirection: 'column',
          borderRightWidth: 2,
          borderRightColor: '#cfcfcf',
        },
        native: {
          width: '100%',
          height: '10%',
          minHeight: 100, // Evita que se aplaste en móviles pequeños
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
    // Aquí puedes meter tus cards genéricas en el futuro
  }),
}
