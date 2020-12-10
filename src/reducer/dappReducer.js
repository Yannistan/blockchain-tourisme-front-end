export const dappReducer = (state, action) => {
    switch (action.type) {
      case "SET_isClient":
        return { ...state, isClient: action.isClient };
      case "SET_isAgency":
        return { ...state, isAgency: action.isCompany };
      default:
        throw new Error(`Unhandled action ${action.type} in dappReducer`);
    }
  };
  
  export const initialDappState = {
    isClient: false,
    isAgency: false,
    
  };