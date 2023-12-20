import { createApp } from "vue";
// file di partenza styles progetto
import "./assets/scss/general.scss";
// font roboto
import "@fontsource/roboto";
// file start Vue
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faLifeRing } from "@fortawesome/free-solid-svg-icons";
import { faRuler } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faChevronDown,
  faCartShopping,
  faCircleUser,
  faMagnifyingGlass,
  faArrowRightLong,
  faBook,
  faLifeRing,
  faRuler,
  faFileLines,
  faUser,
  faCalendar,
  faEye,
  faSquareFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
