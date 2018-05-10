export default (string) => {
  return Number(string.slice(0, string.indexOf("px")));
};
