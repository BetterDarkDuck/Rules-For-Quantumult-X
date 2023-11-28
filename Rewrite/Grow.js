/******************************

脚本功能：Grow解锁永久会员
软件版本：1.0.0
下载地址：http://t.cn/A6ILzuhD
脚本作者：小纸条
更新时间：2023-11-28
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > Grow解锁永久会员
^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/GrowForeverVipCrack.js

[mitm] 
hostname = api.revenuecat.com

*******************************/