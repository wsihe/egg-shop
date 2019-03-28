/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1553162287916_6297';

  // add your middleware config here
  config.middleware = ['errorHandler', 'graphql'];

  config.news = {
    pageSize: 30,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: 'root',
      database: 'nodeshop',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

	config.graphql = {
		router: '/graphql',
		app: true,
		agent: false,
		// 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
		graphiql: true,
		// graphQL 路由前的拦截器
		onPreGraphQL: function* (ctx) {},
		// 开发工具 graphiQL 路由前的拦截器，建议用于做权限操作(如只提供开发者使用)
		onPreGraphiQL: function* (ctx) {},
	};

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
