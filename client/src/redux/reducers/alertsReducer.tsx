interface initialData {
  loading: boolean;
}

interface Action {
  type: string;
  payload?: any;
}

export const alertsReducer = (state: initialData, action: Action ) => {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
};
