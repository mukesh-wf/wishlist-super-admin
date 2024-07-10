import MainRouter from "./Route/MainRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './Components/Style/Style.scss';
import { useSelector } from 'react-redux';

import { HelmetProvider } from 'react-helmet-async';
import MetaTags from "./Components/HeadTag/MetaTags";


function App() {
  const selectedColorTheme = useSelector(
    (state) => state.colorTheme.colorTheme
  );
  let layoutTypeRTL= ''
const selectedLayoutTheme = useSelector(state => state.colorTheme.layoutTheme);
  let layoutType='';

  if (selectedLayoutTheme === "right-align-layout") {
    layoutTypeRTL= "layoutTypeRTL"
  }
  const selectedNavbarTheme = useSelector(state => state.colorTheme.navbarTheme);

  if (selectedNavbarTheme === "top-align-layout") {
    layoutType= "navbarType-top"
  }
  
  return (
    <HelmetProvider>
      <MetaTags />
      <div id="app" className={`${selectedColorTheme} ${layoutTypeRTL} ${layoutType}`}>
        <MainRouter />
      </div>
    </HelmetProvider>

  )

}

export default App;
