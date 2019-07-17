'use strict';

const Controller = require('egg').Controller;

class AuthController extends Controller {
  async login() {
    const { ctx } = this;
    ctx.body = {
    };
  }
}

module.exports = AuthController;
