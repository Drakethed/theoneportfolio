import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faPlusCircle,
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faPlusCircle,
    faEnvelope,
    faPhone,
    faMapMarkedAlt,
    faLock
  );
};

export default Icons;
