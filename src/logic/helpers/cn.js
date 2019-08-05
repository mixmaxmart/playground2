export function cn(c, s1, s2) {
  const prefix = "my";
  // const root = c.name ? prefix + "-" + c.name : "";
  // // const item = c.item ? root + "__" + c.item : "";
  // const state = c.state ? root + "--" + c.state : "";
  // // const className = root + " " + item + " " + state;
  // const className = root + " " + state;

  const root = c ? prefix + "-" + c : "";
  const state1 = s1 ? root + "--" + s1 : "";
  const state2 = s2 ? root + "--" + s2 : "";

  const className = root + " " + state1 + " " + state2;
  return className;
}
