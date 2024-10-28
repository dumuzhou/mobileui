# ios 打包

## base64 -i 输入 > 输出

```
env:
  APP_ID: com.taro.demo # 包id -
  APP_NAME: Taro Demo # app名称 -
  VERSION_NUMBER: 1.0.0 # app版本
  BUILD_NUMBER: 1.0.0.0 # 构建版本
  TEAM_ID: XXXXXXXXXX # 开发团队id p12证书括号中的
  PROVISIONING_PROFILE_SPECIFIER: Product_profile # pp文件名
  CODE_SIGN_IDENTITY: iPhone Distribution # 签名证书类型
  SIGNING_CERTIFICATE_P12_DATA: ${{secrets.RELEASE_SIGNING_CERTIFICATE_P12_DATA}} # p12证书 base64
  SIGNING_CERTIFICATE_PASSWORD: ${{secrets.RELEASE_SIGNING_CERTIFICATE_PASSWORD}} p12证书密码
  PROVISIONING_PROFILE_DATA: ${{secrets.RELEASE_PROVISIONING_PROFILE_DATA}} # pp文件名.mobileprovision 描述文件base64
  APP_STORE_CONNECT_USERNAME: ${{secrets.APP_STORE_CONNECT_USERNAME}} # 上传到苹果store账号
  APP_STORE_CONNECT_PASSWORD: ${{secrets.APP_STORE_CONNECT_PASSWORD}} # 上传到苹果store密码
```
