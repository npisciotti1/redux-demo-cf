//Small helpers that I like

//Checks if truthy, useful for hiding/components.
export const renderIf = (test, component) => test ? component : undefined;

//accepts a config object, in this case an object that corresponds to class names for
//elements, if the classname has a truthy value, it gets returned. Example config:
// { 'showChild': true, 'isHidden': false }
//This would only return 'showChild'.
export const classTogler = (config) => {
  Object.keys(config).filter(key => config[key]).join(' ')
}
