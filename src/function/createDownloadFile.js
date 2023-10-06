export const createDownloadFile = (data) => {
  const file = `data:text/json;chatset=utf-8,${encodeURIComponent(data)}`;
  const link = document.createElement("a");
  link.href = file;
  link.download = "data.json";
  link.click();
};
