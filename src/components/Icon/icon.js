import '../Icon/icon.css';
import { library, dom } from "@fortawesome/fontawesome-svg-core";

export function icon(iconType, style) {
  dom.watch();
  library.add(iconType);

  const ico = document.createElement('i');
  ico.classList.add(iconType.prefix, 'fa-' + iconType.iconName, style);
  
  return ico;
}