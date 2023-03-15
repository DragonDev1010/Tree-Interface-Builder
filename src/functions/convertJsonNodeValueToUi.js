export const convertJsonNodeValueToUi = (jsonNodeValue) => {
  let htmlDomStr = ''
  if (jsonNodeValue) {
    switch (jsonNodeValue.type) {
      case 'label': {
        htmlDomStr = '<h3>' + jsonNodeValue.value + '</h3>'
        return htmlDomStr
      }
      case 'text-input': {
        htmlDomStr = '<h5>' + jsonNodeValue.value + '</h5><input type="text"/>'
        return htmlDomStr
      }
      case 'button': {
        htmlDomStr = '<button>' + jsonNodeValue.value + '</button>'
        return htmlDomStr
      }
    
      default:
        break;
    }
  } else {
    return '<p>Undefined UI</p>'
  }
}