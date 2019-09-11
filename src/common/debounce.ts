let timeoutId: any | undefined = undefined;
export const debounce = (func: () => void, delay: number) => {
  timeoutId && clearTimeout(timeoutId);
  timeoutId = setTimeout(() => func(), delay);
};
