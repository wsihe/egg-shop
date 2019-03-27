'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const banner = await ctx.service.home.request();
    ctx.body = {
      banner
    };
  }
}

module.exports = HomeController;
