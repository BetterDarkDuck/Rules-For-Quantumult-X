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
^https?:\/\/api\.revenuecat\.com\/v1\/subscribers\/\$RCAnonymousID%3A3c15b483f9ca4f46bd483cf946901185 $ url script-response-body https://raw.githubusercontent.com/BetterDarkDuck/Rules-For-Quantumult-X/master/Rewrite/Grow.js

[mitm] 
hostname = api.revenuecat.com

*******************************/

var note = {
  "request_date": "2023-11-28T07:09:38Z",
  "request_date_ms": 1701155378974,
  "subscriber": {
    "entitlements": {
      "grow.pro": {
        "expires_date": "2024-11-27T06:58:42Z",
        "grace_period_expires_date": null,
        "product_identifier": "grow_1y_128",
        "purchase_date": "2023-11-28T06:58:42Z"
      }
    },
    "first_seen": "2023-11-28T06:50:55Z",
    "last_seen": "2023-11-28T06:50:55Z",
    "management_url": "https://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "$RCAnonymousID:3c15b483f9ca4f46bd483cf946901185",
    "original_application_version": "309",
    "original_purchase_date": "2023-11-19T09:32:55Z",
    "other_purchases": {},
    "subscriptions": {
      "grow_1y_128": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "expires_date": "2024-11-27T06:58:42Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2023-11-28T06:58:43Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2023-11-28T06:58:42Z",
        "refunded_at": null,
        "store": "app_store",
        "store_transaction_id": "320001640889685",
        "unsubscribe_detected_at": null
      }
    }
  }
}

console.log("Grow installed successfully ")
$done({body: JSON.stringify(note)});