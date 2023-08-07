export function transformTree(
  arr,
  parentIdField,
  selfField,
  rootId,
  childrenName = "children"
) {
  let t_obj = {};
  let t_a = [];
  let deep_arr = [...arr];
  deep_arr.forEach((i) => (t_obj[i[selfField]] = i));

  deep_arr.forEach((l) => {
    if (
      l[parentIdField] === rootId ||
      l[parentIdField] === "" ||
      l[parentIdField] === null ||
      l[parentIdField] === undefined
    ) {
      t_a.push(l);
    } else {
      if (t_obj[l[parentIdField]][childrenName]) {
        t_obj[l[parentIdField]][childrenName].push(l);
      } else {
        t_obj[l[parentIdField]][childrenName] = [l];
      }
    }
  });
  return t_a;
}
