/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;

  return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
}


/**
 * 存储localStorage
 * key
 * value：对象
 */
export const setStoreExp = (key, value) => {
  var curTime = new Date().getTime();
  window.localStorage.setItem(key, JSON.stringify({data: value, time: curTime}));
}
/**
 * 存储localStorage
 * key：key
 * expTime：过期时间  1分钟：1000*60 ，1小时：1000*60*60
 */
export const getStoreExp = (key, expTime) => {
  var data = window.localStorage.getItem(key)
  var dataObj = JSON.parse(data)
  if (new Date().getTime() - dataObj.time > expTime) {
    window.localStorage.removeItem(key);
    return null
  } else {
    var dataObjDatatoJson = JSON.parse(dataObj.data)
    return dataObjDatatoJson
  }
}
