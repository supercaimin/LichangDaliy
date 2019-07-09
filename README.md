# 力场日报-基于Lichang OpenAPI开发的资讯精选小程序

力场公链挖矿第一社区，一个以公链共建挖矿为核心的生态社区及UGC平台。
Lichang Lab 是力场为开发者提供的开发平台。开发者可以使用公开接口，基于力场数据开发自己的应用。
力场日报是基于Lichang OpenAPI开发的一款资讯精选小程序，每日提供来自力场社区的精选资讯。
## 功能介绍
* 每天更新好文章，包括精选、排行文章
* 根据圈子筛选资讯内容
* 离线下载功能，及时缓存近期的 30 篇文章
* 更多贴心小细节：多图及长文预警；支持一键分享收藏；夜间模式

## OpenAPI对接
Lichang Lab OpenAPI的接口文档：https://lab.lichang.io/docs/，使用api需要先申请token，在header中通过指定Authorization字段来通过验证。
该文档可以直接测试使用，请在Authorize里面设置api token。
### 小程序请求授权：
```javascript
/**
 * 网络请求方法
 * @param url {string} 请求url
 * @param data {object} 参数
 * @param successCallback {function} 成功回调函数
 * @param errorCallback {function} 失败回调函数
 * @param completeCallback {function} 完成回调函数
 * @returns {void}
 */
function requestData( url, data, successCallback, errorCallback, completeCallback ) {
    if( app.debug ) {
        console.log( 'requestData url: ', url );
    }
    wx.request( {
        url: url,
        data: data,
        header: {
          'Content-Type': 'application/json',
          'Authorization': api.API_TOKEN
         },
        success: function( res ) {
            if( app.debug ) {
                console.log( 'response data: ', res );
            }
            if( res.statusCode == 200 )
                util.isFunction( successCallback ) && successCallback( res.data );
            else
                util.isFunction( errorCallback ) && errorCallback();
        },
        error: function() {
            util.isFunction( errorCallback ) && errorCallback();
        },
        complete: function() {
            util.isFunction( completeCallback ) && completeCallback();
        }
    });
}
```

### 接口调用
```javascript
const API_BASE = 'https://openapi.lcyoufu.com';
const API_TOKEN = '0c70bc8cf0d1d9aa04044cc09c931414850b9555'

/**
 * 获取圈子列表
 * @returns {string}
 */
function getCircleList() {
  return API_BASE + '/circle/list'
}

/**
 * 获取排行文章
 * @returns {string}
 */
function getArticleRank() {
  return API_BASE + '/rank/articlerank'
}

/**
 * 获取精选文章
 * @returns {string}
 */
function getChoice() {
  return API_BASE + '/rank/choice'
}

/**
 * 获取文章详情
 * @param {int} id 文章id
 * @returns {string}
 */
function getArticleDetail( id ) {
  return API_BASE + '/article/profile?articleid=' + id;
}

/**
 * 根据圈子id查圈子热门文章
 * @param {int} id 圈子id
 * @returns {string}
 */
function getCricleArticles(id) {
  return API_BASE + '/rank/hotarticle?circleid=' + id;

}

```

更多实现请参考源码：https://github.com/supercaimin/LichangDaliy.git

## 总结与建议
