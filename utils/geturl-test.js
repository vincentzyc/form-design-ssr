function getUrlParam(str) {
  let parameterName = '';
  let parameterValue = '';
  const paramObj = {};
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

  return paramObj;
}

function findClosingBrace(str, startIndex) {
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

const url = `http://test-cms.jetmobo.com/h5/index.html#haha?id=8999357689071467516&abtest=1&pid=48075&ogpid=48075_66880&toutiao_card_params={\"external_url\":\"https://h5.junjue888.com/h5/index.html?id=9467741690971614777&pid=103044&adP={\"aadd\":\"ddaa\"}\",\"name\":\"\"}&ad_params={\"id\":\"001\"}&toutiao_param={\"nno\":\"asdad\"}&shuntPid=1234`;
const res = getUrlParam(url);
console.log(res);

// function getUrlParam(str) {
//   let i = 0;
//   let parameterName = '';
//   let parameterValue = '';
//   let paramObj = {};
//   const strLength = str.length;
//   while (i < strLength) {
//     const c = str.charAt(i);
//     if (i === strLength - 1) {
//       let startValue = str.lastIndexOf('=', i);
//       if (parameterName && startValue > 0) {
//         parameterValue = str.slice(startValue + 1, i + 1);
//         paramObj[parameterName] = parameterValue;
//         parameterName = '';
//       }
//       i++;
//     } else if (c === '{') {
//       if (parameterName) {
//         const closingBraceIndex = findClosingBrace(str, i);
//         const newIndex = closingBraceIndex + 1;
//         parameterValue = str.slice(i, newIndex);
//         paramObj[parameterName] = parameterValue;
//         parameterName = '';
//         i = newIndex;
//       } else {
//         i++;
//       }
//     } else if (c === '=') {
//       let startParameter = str.lastIndexOf('&', i);
//       if (startParameter < 0) startParameter = str.lastIndexOf('?', i);
//       if (startParameter < 0) startParameter = str.lastIndexOf('#', i);
//       parameterName = str.slice(startParameter + 1, i);
//       i++;
//     } else if (c === '&') {
//       let startValue = str.lastIndexOf('=', i);
//       if (parameterName && startValue > 0) {
//         parameterValue = str.slice(startValue + 1, i);
//         paramObj[parameterName] = parameterValue;
//         parameterName = '';
//       }
//       i++;
//     } else {
//       i++;
//     }
//   }
//   return paramObj;
// }

// function findClosingBrace(str, startIndex) {
//   let braceDepth = 1;
//   let i = startIndex + 1;
//   while (i < str.length && braceDepth > 0) {
//     const innerChar = str.charAt(i);
//     if (innerChar === '{') {
//       braceDepth++;
//     } else if (innerChar === '}') {
//       braceDepth--;
//     }
//     i++;
//   }
//   return i - 1;
// }