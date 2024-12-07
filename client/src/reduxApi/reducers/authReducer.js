const initialState = {
    isAuthenticated: false,
    user: {},
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case 'LOGIN_REQUEST':
        return { 
          ...state, 
          loading: true };
      
      case 'LOGIN_SUCCESS':
        return { 
          ...state, 
          isAuthenticated: true, 
          user: action.payload, 
          loading: false };
      
      case 'LOGIN_FAILURE':
        return { 
          ...state, 
          error: action.payload, 
          loading: false };
      
      default:
        return state;
    }
  };
  
  export default authReducer;
  