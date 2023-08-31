type UrlParamBack = null | string | Record<string, any>;

/**
 * 获取url参数值
 * @param {String} name 参数名称(不传则返回一个全部参数对象)
 */
export function getUrlParam(name: string = ''): UrlParamBack {
  const href = window.location.href,
    i = href.indexOf('?');
  if (i < 0) return null;
  const str = href.slice(i);
  if (!str) return null;
  const arr = str.match(/([^?&=#]+)=([^?&=#/]*)/g);
  if (!arr) return null;
  const obj: UrlParamBack = {};
  arr.forEach(v => {
    const temp = v.split('=');
    if (temp.length > 0) {
      obj[temp[0]] = temp[1];
    }
  });
  if (name) return obj[name];
  return obj;
}
/**
 * 清除给定字符串中大括号内的内容。
 * @param {string} str - 输入字符串。
 * @return {object} 包含清除后的结果和一个 JSON 字符串对象的对象。
 */
export function clearBracesContent(str: string): { result: string, jsonStrObj: object } {
  let result = '';
  let i = 0;
  let lastParameter = '';
  let jsonStrObj: { [key: string]: string } = {};
  while (i < str.length) {
    const c = str.charAt(i);
    if (c === '{') {
      const closingBraceIndex = findClosingBrace(str, i);
      const parameterName = lastParameter;
      const clearedContent = `{}`;
      const newIndex = closingBraceIndex + 1;
      jsonStrObj[parameterName] = str.slice(i, newIndex);
      i = newIndex;
      result += clearedContent;
    } else if (c === '=') {
      let startParameter = str.lastIndexOf('&', i);
      if (startParameter < 0) startParameter = str.lastIndexOf('?', i);
      lastParameter = str.slice(startParameter + 1, i);
      result += c;
      i++;
    } else {
      result += c;
      i++;
    }
  }
  return { result, jsonStrObj };
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