/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 *
 */
let env = "development";
let baseUrl = 'http://localhost:50331';
if (process.env.NODE_ENV == 'development') {
  baseUrl = "http://10.1.189.143:50331";

} else if (process.env.NODE_ENV == 'production') {
  //baseUrl = 'http://192.168.9.216:50331';  //徐建华本机地址
  baseUrl = "http://10.1.189.143:50332";
  env = "production";
}
export {
  baseUrl,
  env
}
