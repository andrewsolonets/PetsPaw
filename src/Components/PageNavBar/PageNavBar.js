import { CardButton } from "../UI/Button.styles";
import {
  NavWrapper,
  NavTitle,
  BackButton,
  MainNavWrapper,
} from "./PageNavBar.styles";
import { useNavigate } from "react-router-dom";

export const PageNavBar = ({ title, additional }) => {
  let navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  };
  return (
    <NavWrapper>
      <MainNavWrapper>
        <CardButton onClick={backHandler}>
          <BackButton />
        </CardButton>
        <NavTitle>
          <span>{title}</span>
        </NavTitle>
        {additional && title === "BREEDS" ? additional : ""}
      </MainNavWrapper>
      {additional && title !== "BREEDS" ? additional : ""}
    </NavWrapper>
  );
};

// <div className={classes["nav-content1"]}>
//         <div className={classes.backGallery}>
//           <CardButton>
//             <Back className={classes.back} onClick={backHandler} />
//           </CardButton>
//           <Button style={{ background: "var(--textBlack)" }}>GALLERY</Button>
//         </div>
//         <div className={classes.upload} onClick={uploadHandler}>
//           <Upload className={classes.reloadSvg}></Upload> UPLOAD
//         </div>
//       </div>
