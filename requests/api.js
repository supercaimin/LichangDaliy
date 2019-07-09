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



module.exports = {
    API_TOKEN:API_TOKEN,
    getCircleList:getCircleList,
    getArticleRank:getArticleRank,
    getChoice: getChoice,
    getArticleDetail: getArticleDetail,
    getCricleArticles: getCricleArticles
};
