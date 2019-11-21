const initialState = {
  notification: 0
};

export const typesNotification = {
  ADD_NOTIFICATION: "ADD_NOTIFICATION",
  REMOVE_NOTIFICATION: "REMOVE_NOTIFICATION"
};

export const actionsNotifications = {
  addNotification: () => ({
    type: typesNotification.ADD_NOTIFICATION
  }),
  removeNotification: () => ({
    type: typesNotification.REMOVE_NOTIFICATION
  })
};

export const reducerNotifications = (state = initialState, action) => {
  switch (action.type) {
    case typesNotification.ADD_NOTIFICATION:
      return {
        notification: state.notification + 1
      };
    case typesNotification.REMOVE_NOTIFICATION:
      return {
        notification: state.notification - 1
      };
    default:
      return state;
  }
};
