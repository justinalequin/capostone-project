const confirmedOrderInitialState = [];

const CONFIRM_ORDER_ACTION = "tbev.com/confirmOrder";

export const confirmedOrderReducer = (
  state = confirmedOrderInitialState,
  action
) => {
  if (action.type === CONFIRM_ORDER_ACTION) {
    const foundConfirmedOrder = state.find(
      (confirmedOrder) => confirmedOrder.id === action.confirmedOrder.id
    );

    if (!foundConfirmedOrder) {
      return [...state, { ...action.confirmedOrder, quantity: 1 }];
    }
  }
  return state;
};

export const confirmOrderActionCreator = (order) => (dispatch) => {
  dispatch({
    type: CONFIRM_ORDER_ACTION,
    order: {
      orderId: order.id,
      vehicleId: order.vehicleId,
      userId: order.userId,
      image: order.image,
      price: order.price,
      brand: order.brand,
      title: order.title,
      daysIsRented: order.daysIsRented,
    },
  });
};
