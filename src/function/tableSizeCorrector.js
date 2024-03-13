export function tableSizeCorrector(tableHeight, correctHeight, fontSize) {
  if (tableHeight - correctHeight > 200) {
    return 5;
  } else if (tableHeight - correctHeight > 120 && fontSize < 120) {
    return 2;
  } else if (tableHeight - correctHeight > 15 && fontSize < 120) {
    return 1;
  } else if (tableHeight - correctHeight < -70) {
    return -3;
  } else if (tableHeight - correctHeight < -20) {
    return -1;
  } else return 0;
}
