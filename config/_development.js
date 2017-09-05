exports.enabledModules = ['sms', 'user', 'org', 'device', 'upload', 'routine', 'qcloud', 'app', 'email'];

exports.mysq = {
  connectionLimit: 10,
  host: '127.0.0.1',
  user: 'root',
  password: 'root'
};

exports.redis = {
  host: '127.0.0.1',
  port: 6379,
  db: 1,
  ttl: 3600
};

exports.server = {
  port: 3300,
  hostname: '127.0.0.1'
};
