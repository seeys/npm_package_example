type ElementTypes = (element: HTMLElement) => void;

/**
 * @description element show
 * @param element html element
 */
export const show_element: ElementTypes = (element) => {
  try {
    element.setAttribute("display", "block");
  } catch (e) {
    throw new Error("Failed to Show!");
  }
}

/**
 * @description element hide
 * @param element html element
 */
export const hide_element: ElementTypes = (element) => {
  try {
    element.setAttribute("display", "none");
  } catch (e) {
    throw new Error("Failed to Hide!");
  }
}