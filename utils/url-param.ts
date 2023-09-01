type UrlParamBack = null | string | Record<string, any>;

/**
 * 获取url参数值
 * @param {String} name 参数名称(不传则返回一个全部参数对象)
 */
export function getUrlParam(name: string = '', newUrl: string): UrlParamBack {
  let i = 0;
  let parameterName = '';
  let parameterValue = '';
  let paramObj: Record<string, any> = {};
  const str = newUrl || window.location.href;
  const strLength = str.length;
  while (i < strLength) {
    const c = str.charAt(i);
    if (i === strLength - 1) {
      let startValue = str.lastIndexOf('=', i);
      if (parameterName && startValue > 0) {
        parameterValue = str.slice(startValue + 1, i + 1);
        paramObj[parameterName] = parameterValue;
        parameterName = '';
      }
      i++;
    } else if (c === '{') {
      if (parameterName) {
        const closingBraceIndex = findClosingBrace(str, i);
        const newIndex = closingBraceIndex + 1;
        parameterValue = str.slice(i, newIndex);
        paramObj[parameterName] = parameterValue;
        parameterName = '';
        i = newIndex;
      } else {
        i++;
      }
    } else if (c === '=') {
      let startParameter = str.lastIndexOf('&', i);
      if (startParameter < 0) startParameter = str.lastIndexOf('?', i);
      if (startParameter < 0) startParameter = str.lastIndexOf('#', i);
      parameterName = str.slice(startParameter + 1, i);
      i++;
    } else if (c === '&') {
      let startValue = str.lastIndexOf('=', i);
      if (parameterName && startValue > 0) {
        parameterValue = str.slice(startValue + 1, i);
        paramObj[parameterName] = parameterValue;
        parameterName = '';
      }
      i++;
    } else {
      i++;
    }
  }
  if (name) return paramObj[name] || '';
  return paramObj;
}
/**
 * 在给定索引开始，查找字符串中闭合括号的索引。
 * @param {string} str - 要搜索的字符串。
 * @param {number} startIndex - 开始搜索的索引。
 * @return {number} - 闭合括号的索引。
 */
export function findClosingBrace(str: string, startIndex: number): number {
  let braceDepth = 1;
  let i = startIndex + 1;
  while (i < str.length && braceDepth > 0) {
    const innerChar = str.charAt(i);
    if (innerChar === '{') {
      braceDepth++;
    } else if (innerChar === '}') {
      braceDepth--;
    }
    i++;
  }
  return i - 1;
}
