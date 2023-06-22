export function paddingCorrector(width) {
  if (width < 200) return "small_table";
  else if (200 < width < 270) return "medium_table";
  else return "big_table";
}