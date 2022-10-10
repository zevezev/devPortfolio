//bundles of commonly used styles
export const clickable = {
  color: "black",
  ":hover": {
    background: "black",
    color: "white !important",
    cursor: "pointer",
  },
};
export const menuOption = {
  height: "6rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
  ...clickable,
};
