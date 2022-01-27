export default {
  es: {
    Topbar: {
      title: 'Abloc de Notas',
      backHomeButton: '↩ Home',
      goHome: 'Inicio',
      goBloc: 'Bloc',
      goHistory: 'Historia',
      goSurvey: 'Encuesta'
    },
    Home: {
      title: 'Bienvenido al bloc de notas del training de ABOT',
      subtitle: 'Presioná el botón para continuar',
      button: 'Continuar',
      blocButton: 'Ver bloc de notas',
      historyButton: 'Ver historial'
    },
    Quotes: {
      formContent: 'Cuantos personajes deseas recuperar?',
      required: 'Campo requerido',
      invalidFormat: 'Formato inválida',
      button: 'Buscar',
      count: 'Cantidad'
    },
    Bloc: {
      titleInput: 'Ingrese un titulo',
      textInput: 'Ingrese su texto',
      inlineTextArea: {
        words: 'Palabras: {{wordsQuantity}}'
      },
      deleteNote: 'X'
    },
    Survey: {
      title: 'Encuesta',
      nameInput: 'Ingrese su Nombre',
      lastNameInput: 'Ingrese su Apellido',
      contentInput: 'Ingrese una devolucion',
      phoneInput: 'Ingrese su Telefono',
      saveButton: 'GUARDAR',
      cancelButton: 'CANCELAR'
    },
    History: {
      title: 'Historial',
      empty: 'No hay notas guardadas.'
    },
    DefaultMessages: {
      getQuotesFailure: 'Hubo un error al recuperar los personajes!',
      deleteNoteSuccess: `Se borro la nota "{{title}}" correctamente.`,
      deleteNoteFailure: `No se pudo borrar la nota. \n {{error}}`,
      saveNoteSuccess: `Se guardo la nota "{{title}}" correctamente.`,
      saveNoteFailure: `No se pudo guardar la nota. \n {{error}}`,
      saveSurveySuccess: `Se guardo la encuesta correctamente.`,
      saveSurveyFailure: `No se pudo guardar la encuesta. \n {{error}} `
    }
  }
};
