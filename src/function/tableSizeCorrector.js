



export function tableSizeCorrector(fullHigth, currentHigth, fontSize) {
  if (fullHigth - currentHigth > 200) {
    return 5;
  } else if (fullHigth - currentHigth > 120 && fontSize < 120) {
    return 3;
  } else if (fullHigth - currentHigth > 15 && fontSize < 120) {
    return 1;
  } else if (fullHigth - currentHigth < -70) {
    return -3;
  } else if (fullHigth - currentHigth < -20) {
    return -1;
  } else return 0
}
