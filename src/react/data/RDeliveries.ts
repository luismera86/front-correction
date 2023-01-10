export const rDeliveryOne = {
  evaluationOne: {
    title: 'Convenciones',
    evaluation: 'Respeta las consignas asignadas',
  },
  evaluationTow: {
    title: 'Componente Navbar',
    evaluation: '"Muestra el brandname de la tienda. Muestra las categorías de los productos. Muestra el CartWidget',
  },
  evaluationThree: {
    title: 'Componente CartWidget',
    evaluation: 'Muestra el ícono de carrito y una burbuja de notificación con un valor hardcodeado.',
  },
  evaluationFour: {
    title: 'Componente ItemListContainer',
    evaluation:
      'Se renderiza debajo de NavBar.js y como hijo de App.js Renderiza un texto que se le es asignado como props',
  },
}

export const rDeliveryTow = {
  evaluationOne: {
    title: 'Convecciones',
    evaluation: 'Respetas las consignas asignadas'
  },
  evaluationTow: {
    title: 'Navegabilidad',
    evaluation: 'Logra la navegabilidad completa y usa el hook "useEffect" para mostrar los datos solicitados al momento de cambiar de categoría y/o itemId'
  },
  evaluationThree: {
    title: 'Componente NavBar. Js',
    evaluation: 'Se implementa la navegabilidad mediante los links hacia las categorías (Implementa los Links y logra navegaciones sin reload) Usa una promise para devolver los productos de una categoría específica (la categoría solicitada en la navegabilidad)'
  },
  evaluationFour: {
    title: 'Componente ItemListContainer.js',
    evaluation: 'Filtra por categorías implementando correctamente el hook useParams (para el Id de Categoría), y aprovecha un useEffect para detectar sus cambios de ruta'
  },
  evaluationFive: {
    title: 'Componente ItemDetail.js',
    evaluation: 'Accede a la información del producto solicitado mediante el parámetro ""itemId"" usando una Promise. Muestra el componente ItemCount como hijo de ItemDetail	'
  },
}
