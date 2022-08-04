// interface State {
//   loading: boolean;
// }

interface Action {
  type: string;
  payload?: any;
}

export const alertsReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case "LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};
