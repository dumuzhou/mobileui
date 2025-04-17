#!/bin/bash

set -euo pipefail

# 删除旧的证书
if security list-keychains | grep -q "build.keychain"; then
    security delete-keychain build.keychain || true
fi

# 确保删除文件系统上的keychain文件
if [ -f ~/Library/Keychains/build.keychain ]; then
    rm ~/Library/Keychains/build.keychain || true
fi
if [ -f ~/Library/Keychains/build.keychain-db ]; then
    rm ~/Library/Keychains/build.keychain-db || true
fi

security create-keychain -p "" build.keychain
security list-keychains -s build.keychain
security default-keychain -s build.keychain
security unlock-keychain -p "" build.keychain
security set-keychain-settings
echo $SIGNING_CERTIFICATE_P12_DATA | base64 --decode > signingCertificate.p12
security import signingCertificate.p12 \
                -f pkcs12 \
                -k build.keychain \
                -P $SIGNING_CERTIFICATE_PASSWORD \
                -T /usr/bin/codesign
security set-key-partition-list -S apple-tool:,apple: -s -k "" build.keychain
