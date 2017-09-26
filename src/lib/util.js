//Small helpers that I like

//Checks if truthy, useful for hiding/components.
export const renderIf = (test, component) => test ? component : undefined;

//Nifty tool for adding classes to react components, accepts a config obj:
// {'new-class': true, 'old-class': false}. This would remove 'old-class' and add
//'new-class' to any element.
export const classToggler = (config) =>
  Object.keys(config).filter(key => config[key]).join(' ')


//These last two are for cleanly removing logs from our app when shipping
//to production. I.E. '__DEBUG__' will only be true if
// 'process.env.NODE_ENV' !== 'production'
export const log = (...args) =>
  __DEBUG__ ? console.log(...args) : undefined;

export const logError = (...args) =>
  __DEBUG__ ? console.log(...args) : undefined;
