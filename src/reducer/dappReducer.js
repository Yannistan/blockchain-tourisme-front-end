export const dappReducer = (state, action) => {
    switch (action.type) {
      case "SET_isClient":
        return { ...state, isClient: action.isClient };
      case "SET_isAgency":
        return { ...state, isAgency: action.isCompany };
      case "SET_isHospital":
        return { ...state, isHospital: action.isHospital };
      case "SET_isOwner":
        return { ...state, isOwner: action.isOwner };
      default:
        throw new Error(`Unhandled action ${action.type} in dappReducer`);
    }
  };
  
  export const initialDappState = {
    isCitizen: false,
    isCompany: false,
    isHospital: false,
    isOwner: false,
  };