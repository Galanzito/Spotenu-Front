const initialState = {
    user: null,
    token: null,
    type: null,
    snackbar: {
      open: false,
      severity: 'info',
      message: '',
    }
}

const credentials = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
          const { user, token, type } = action.payload
          return { ...state, user, token, type }
        case 'OPEN_SNACKBAR':
          return { ...state, snackbar: { open: true, severity: action.payload.severity, message: action.payload.message } }
        case 'CLOSE_SNACKBAR':
          return { ...state, snackbar: { open: false, severity: 'info', message: '', } }
        default:
          return state
      }
}

export default credentials