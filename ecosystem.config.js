module.exports = {
  apps: [
    {
      // pm2로 실행한 프로세스 목록에서 이 애플리케이션의 이름으로 지정될 문자열
      name: "letsmapserver",
      // pm2로 실행될 파일 경로
      script: "./src/index.js",
      // 개발환경시 적용될 설정 지정
      env: {
        "DATABASE_PASSWORD": 'map12345!!',
        "JWT_PASSWORD": 'LETSMAP',
        "KEY": '86211a5e9dca4a81a908f1cb78857467',
        "PORT": 13306,
        "DATABASE_HOST": 'lets-map-database.cryh8ct0pxpa.ap-northeast-2.rds.amazonaws.com'
      },
      // 배포환경시 적용될 설정 지정
      env_production: {
        "PORT": 8080,
        "NODE_ENV": "production"
      }
    }
  ]
};
