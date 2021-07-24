Dreaming Cas Service

一、cas web
1. 配置文件修改，inc/config.inc.php,具体见内部详述
2. 修改login.php，cookies存储域，游戏域名

二、cas service
1. 修改uos.ini
service--ip,运行cas web的服务器ip
interior-ip,运行游戏interior服务的ip
cas-url,运行cas web的服务器中发送礼包的完整地址，其中server参数为对应的游戏区id
cas-key,配置cas key,与cas web中inc/config.inc.php的$D2_PLATFORM_KEY一致
