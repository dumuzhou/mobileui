# Android 构建修复指南

本文档记录了修复 Android 构建过程中遇到的问题及解决方案。

## 问题概述

在 Android 构建过程中，我们遇到了以下主要问题：

1. **AndroidManifest.xml 中的 package 属性问题**：
   - 错误信息：`Setting the namespace via the package attribute in the source AndroidManifest.xml is no longer supported, and the value is ignored.`
   - 原因：较新版本的 Android Gradle 插件不再支持通过 package 属性设置命名空间。

2. **expo-barcode-scanner 和 expo-camera 模块编译错误**：
   - 错误信息：`Unresolved reference: raw` 和 `Type mismatch` 等。
   - 原因：这些模块的代码与当前项目使用的 React Native 和 Android SDK 版本不兼容。

## 解决方案

### 1. AndroidManifest.xml 修复

我们创建了一个脚本 `scripts/fix-android-manifest.sh` 来自动修复 AndroidManifest.xml 文件中的 package 属性问题。该脚本：

- 查找所有包含 package 属性的 AndroidManifest.xml 文件
- 提取 package 值
- 添加 namespace 属性（如果尚未存在）
- 移除 package 属性

### 2. expo 模块修复

我们采用了以下策略来修复 expo-barcode-scanner 和 expo-camera 模块：

1. **降级到兼容版本**：
   - expo-barcode-scanner: 12.5.3
   - expo-camera: 13.4.4

2. **应用补丁**：
   - 使用 patch-package 创建并应用补丁，修复代码中的兼容性问题
   - 补丁文件位于 `patches/` 目录下

### 3. 构建配置更新

我们更新了以下构建配置文件：

1. **android/build.gradle**：
   - 添加了 AndroidX 依赖的版本定义

2. **android/app/build.gradle**：
   - 添加了必要的 AndroidX 依赖

## 如何维护

### 更新依赖时

当更新 React Native、Expo 或其他依赖时，请注意：

1. 检查是否仍需要降级 expo-barcode-scanner 和 expo-camera 模块
2. 验证补丁是否仍然适用，必要时更新补丁
3. 测试 AndroidManifest.xml 修复脚本是否仍然有效

### 创建新补丁

如果需要为其他模块创建补丁：

```bash
# 修改 node_modules 中的文件
cd packages/mobileui
npx patch-package <package-name>
```

### CI/CD 流程

GitHub Actions 工作流程 `.github/workflows/assemble_android_debug.yml` 已更新，包含以下步骤：

1. 安装项目依赖
2. 安装 patch-package
3. 降级并修复 Expo 模块
4. 应用补丁
5. 修复 AndroidManifest.xml 文件
6. 构建 Android 应用

## 故障排除

如果构建仍然失败，请检查：

1. 日志中是否有新的兼容性问题
2. 是否有新的模块需要补丁
3. AndroidManifest.xml 修复脚本是否正确执行
4. Android Gradle 插件版本是否兼容

## 参考资料

- [Android Gradle Plugin 迁移指南](https://developer.android.com/build/releases/gradle-plugin)
- [React Native Android 构建指南](https://reactnative.dev/docs/building-from-source)
- [patch-package 文档](https://github.com/ds300/patch-package)