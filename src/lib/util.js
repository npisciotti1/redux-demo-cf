//Small helpers that I like

//Checks if truthy, useful for hiding/components.
export const renderIf = (test, component) => test ? component : undefined;

//accepts a config object, in this case an object that corresponds to class names for
//elements, if the classname has a truthy value, it gets returned. Example config:
// { 'showChild': true, 'isHidden': false }
//This would only return 'showChild'.
export const classTogler = (config) =>
  Object.keys(config).filter(key => config[key]).join(' ')


//These last two are for cleanly removing logs from our app when shipping
//to production. I.E. '__DEBUG__' will only be true if
// 'process.env.NODE_ENV' !== 'production'
export const log = (...args) =>
  __DEBUG__ ? console.log(...args) : undefined;

export const logError = (...args) =>
  __DEBUG__ ? console.log(...args) : undefined;
