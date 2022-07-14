import "./SideBar.css";

const Menu = (props) => {
  console.log(props.hamburger);
  return (
    <div
      className="menuSide"
      style={{
        transform: props.hamburger ? "translateX(0)" : "translateX(-100%)",
      }}
    >
      {props.children}
    </div>
  );
};
export default Menu;
