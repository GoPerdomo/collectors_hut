import pxToNumber from './pxToNumber';
import bp from './breakpoints';

export default (loggedUser, userId) => {
  if (window.innerWidth <= pxToNumber(bp.breakEight)) {
    if (loggedUser === userId) window.scrollTo(0, 581);
    else window.scrollTo(0, 523);
  }
  else if (window.innerWidth <= pxToNumber(bp.breakSix)) window.scrollTo(0, 398);
  else window.scrollTo(0, 344);
};
