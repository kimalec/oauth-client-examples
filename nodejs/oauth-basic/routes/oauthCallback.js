var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config');

/* GET users listing. */
router.get('/', function(req, res) {

  // 넘어온 code 값을 이용해서 엑세스 토큰 발급 요청
  request({
    method: "POST",
    url: "https://apis.daum.net/oauth2/token",
    form: {
      // token을 얻기 위한 OAuth 파라미터
    }
  }, function(err, response, token) {
    // token 값을 session 에 저장 (expires_in 이후에 만료 되도록)

    // 여기서는 편의상 express-session 을 사용하였지만, 실제로는 redis 등을 이용한 session 구현을 하면 좋음
    
    // 이 시점에 DB에 access token 정보를 저장해둔다.
    
    // 사용자 정보를 보는 페이지로 redirect
  });
});

module.exports = router;
