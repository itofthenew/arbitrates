import {
  baseUrl
} from '../env'
import {post,postMock} from '../util/axiosHelper'


/**
 * 测试获取地址
 */

export const callbackData = (data, errorMsg, callback) => post(baseUrl + '/v1/rest/insurance/callback', data, errorMsg, callback);

/**
 * 查询省份流向报表businessReportServer

 * @param data
 * @param errorMsg
 * @param callback
 */
// 116.228.73.202
let baseUrl1 = 'http://10.1.231.151:8833/cusProfiServer'
// export const queryProvinceFlowList = (data, errorMsg, callback) => post(baseUrl1 + '/Arhat/province/trend/report', data, errorMsg, callback);
// export const queryProvinceFlowList = (data, errorMsg, callback) => post('^/api/Arhat/br/getTrendReport ', data, errorMsg, callback);
export const queryProvinceFlowList = (data, errorMsg, callback) => post('/api/businessReportServer/Arhat/br/getTrendReport ', data, errorMsg, callback);

/**
 * 回调接口
 * @param data
 * @param errorMsg
 * @param callback
 */
// 理赔信息上报
export const claimReport = (data, errorMsg, callback) => post('/api/v1/claimReport/submit', data, errorMsg, callback);

/**
 * 回调接口
 * @param data
 * @param errorMsg
 * @param callback
 */
//获取默认的电话信息
export const queryPhone = (data, errorMsg, callback) => post('/api/v1/claimReport/getPhone', data, errorMsg, callback);

/**
 * 回调接口
 * @param data
 * @param errorMsg
 * @param callback
 */


