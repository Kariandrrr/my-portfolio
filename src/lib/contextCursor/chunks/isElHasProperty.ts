import propNames from "../propNames";

const isElHasProperty = (el: HTMLElement, property: string): boolean => {
  return el.hasAttribute(propNames.dataAttr);
};

export default isElHasProperty;
