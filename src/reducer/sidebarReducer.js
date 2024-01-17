const sidebarReducer = (state, aciton) => {
  if (action.type === 'TOGGLE_SIDEBAR') {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default sidebarReducer;
