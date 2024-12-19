#!/bin/bash

set -euo pipefail

# 删除旧的证书
if [ -f ~/Library/MobileDevice/Provisioning\ Profiles/profile.mobileprovision ]; then
    rm ~/Library/MobileDevice/Provisioning\ Profiles/profile.mobileprovision
fi

mkdir -p ~/Library/MobileDevice/Provisioning\ Profiles
echo "$PROVISIONING_PROFILE_DATA" | base64 --decode > ~/Library/MobileDevice/Provisioning\ Profiles/profile.mobileprovision