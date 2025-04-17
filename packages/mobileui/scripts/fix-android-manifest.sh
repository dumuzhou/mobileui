#!/bin/bash

# 脚本用于修复 AndroidManifest.xml 中的 package 属性问题
# 将 package 属性转换为 namespace 属性

echo "开始修复 AndroidManifest.xml 文件..."

# 查找所有包含 package 属性的 AndroidManifest.xml 文件
MANIFEST_FILES=$(find ./node_modules -name "AndroidManifest.xml" -type f -exec grep -l "package=" {} \;)

# 遍历每个文件并修复
for file in $MANIFEST_FILES; do
  echo "处理文件: $file"
  
  # 提取 package 值
  PACKAGE_VALUE=$(grep -o 'package="[^"]*"' "$file" | sed 's/package="//;s/"$//')
  
  if [ -n "$PACKAGE_VALUE" ]; then
    echo "  找到 package 值: $PACKAGE_VALUE"
    
    # 检查文件是否已经包含 namespace 属性
    if grep -q "namespace" "$file"; then
      echo "  文件已包含 namespace 属性，跳过"
    else
      # 在 manifest 标签中添加 namespace 属性
      sed -i "s/<manifest/<manifest xmlns:android=\"http:\/\/schemas.android.com\/apk\/res\/android\" android:namespace=\"$PACKAGE_VALUE\"/g" "$file"
      echo "  添加了 namespace 属性: $PACKAGE_VALUE"
    fi
    
    # 移除 package 属性
    sed -i "s/package=\"[^\"]*\"//g" "$file"
    echo "  移除了 package 属性"
  fi
done

echo "AndroidManifest.xml 文件修复完成"