'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  constructor(ctx) {
    super(ctx);
    // this.config = this.ctx.app.config.news;
  }

  async request() {
    const banner = await this.app.mysql.get('nideshop_ad', { ad_position_id: 1 });
    return { banner };
  }
}

module.exports = HomeService;
