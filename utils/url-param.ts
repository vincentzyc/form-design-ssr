type UrlParamBack = null | string | Record<string, any>;

/**
 * 获取url参数值
 * @param {String} name 参数名称(不传则返回一个全部参数对象)
 * @param {String} newUrl 要处理的链接
 */
export function getUrlParam(name: string = '', newUrl: string): UrlParamBack {
  let parameterName = '';
  let parameterValue = '';
  const str = newUrl || window.location.href;
  const paramObj: { [key: string]: string } = {};
  const strLength = str.length;

  for (let i = 0; i < strLength; i++) {
    const c = str[i];

    if (c === '{') {
      if (parameterName) {
        const closingBraceIndex = findClosingBrace(str, i);
        if (closingBraceIndex < i) continue;
        const newIndex = closingBraceIndex + 1;
        parameterValue = str.slice(i, newIndex);
        paramObj[parameterName] = parameterValue;
        parameterName = '';
        i = newIndex;
      }
    } else if (c === '=') {
      let startParameter = str.lastIndexOf('&', i);
      if (startParameter < 0) startParameter = str.lastIndexOf('?', i);
      if (startParameter < 0) startParameter = str.lastIndexOf('#', i);
      parameterName = str.slice(startParameter + 1, i);
    } else if (c === '&') {
      let startValue = str.lastIndexOf('=', i);
      if (parameterName && startValue > 0) {
        parameterValue = str.slice(startValue + 1, i);
        paramObj[parameterName] = parameterValue;
        parameterName = '';
      }
    }

    if (i === strLength - 1 && parameterName) {
      parameterValue = str.slice(str.lastIndexOf('=', i) + 1);
      paramObj[parameterName] = parameterValue;
    }
  }

  if (name) return paramObj[name];
  return paramObj;
}
/**
 * 在给定索引开始，查找字符串中闭合括号的索引。
 * @param {string} str - 要搜索的字符串。
 * @param {number} startIndex - 开始搜索的索引。
 * @return {number} - 闭合括号的索引。
 */
function findClosingBrace(str: string, startIndex: number): number {
  let i;
  let braceDepth = 1;
  const strLength = str.length;

  for (i = startIndex + 1; i < strLength && braceDepth > 0; ++i) {
    const innerChar = str[i];
    switch (innerChar) {
      case '{':
        ++braceDepth;
        break;
      case '}':
        --braceDepth;
        break;
    }
  }

  return i - 1;
}

const url = `http://test-cms.jetmobo.com/h5/index.html#haha?id=8999357689071467516&abtest=1&pid=48075&ogpid=48075&toutiao_card_params={\"external_url\":\"https://h5.junjue888.com/h5/index.html?id=9467741690971614777&pid=103044&adP={\"aadd\":\"ddaa\"}\",\"name\":\"\"}&ad_params={\"id\":\"001\"}&toutiao_param={\"nno\":\"asdad\"}&shuntPid=1234`;
console.time()
const res = getUrlParam('',url);
console.log(res);
console.timeEnd()