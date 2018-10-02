
const Constants = {
  ACTIONS: {
    LOGIN: {
      SUCCESS: 'LOGIN_SUCCESS'
    }
  },
  FETCH: {
    SUCCESS: 'FETCH_SUCCESS',
    ERROR: 'FETCH_ERROR'
  },
  URI: {
    API: {
      LOGIN: `http:/localhost:8000/api/v1/login`,
      LOGOUT: `http:/localhost:8000/api/v1/logout`
    }
  }
}

export { Constants }
