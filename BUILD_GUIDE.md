# Build Guide - Islamic Inheritance Calculator Pro

## Complete Instructions for Building APK and AAB

---

## Prerequisites

### Required Software

1. **Node.js 18+** - [Download](https://nodejs.org/)
2. **Java Development Kit (JDK) 17** - [Download](https://adoptium.net/)
3. **Android Studio** - [Download](https://developer.android.com/studio)
4. **Git** - [Download](https://git-scm.com/)

### Environment Variables

Add these to your system environment:

```bash
# Windows
set ANDROID_HOME=C:\Users\YourName\AppData\Local\Android\Sdk
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17

# macOS/Linux
export ANDROID_HOME=$HOME/Library/Android/sdk
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
```

---

## Build Methods

### Method 1: Local Build with EAS (Recommended)

#### Step 1: Install Dependencies

```bash
cd InheritancePro
npm install --legacy-peer-deps
```

#### Step 2: Install EAS CLI

```bash
npm install -g eas-cli
```

#### Step 3: Login to Expo

```bash
eas login
# Enter your Expo account credentials
```

#### Step 4: Configure Project

```bash
eas build:configure
# Select Android platform
```

#### Step 5: Build APK (Preview)

```bash
eas build --platform android --profile preview --local
```

The APK will be saved to: `InheritancePro-v5.1.0.apk`

#### Step 6: Build AAB (Production)

```bash
eas build --platform android --profile production --local
```

The AAB will be saved for Play Store submission.

---

### Method 2: Using Build Script

We've provided a build script that automates the process:

```bash
# Make script executable
chmod +x build-apk.sh

# Run the build
./build-apk.sh
```

---

### Method 3: Manual Android Build (Without EAS)

If you prefer not to use EAS, you can build manually:

#### Step 1: Prebuild Native Code

```bash
npx expo prebuild --platform android
```

#### Step 2: Open in Android Studio

```bash
open android/
```

#### Step 3: Build in Android Studio

1. Select "Build" → "Generate Signed Bundle/APK"
2. Choose "APK" or "Android App Bundle"
3. Create or select a keystore
4. Select release build variant
5. Click "Finish"

---

## Build Configurations

### Debug Build (Development)

```bash
cd android
./gradlew assembleDebug
```

Output: `android/app/build/outputs/apk/debug/app-debug.apk`

### Release Build (Production)

```bash
cd android
./gradlew assembleRelease
```

Output: `android/app/build/outputs/apk/release/app-release.apk`

### App Bundle (Play Store)

```bash
cd android
./gradlew bundleRelease
```

Output: `android/app/build/outputs/bundle/release/app-release.aab`

---

## Signing Configuration

### Create Keystore (First Time Only)

```bash
keytool -genkey -v -keystore inheritance-pro.keystore -alias inheritance -keyalg RSA -keysize 2048 -validity 10000
```

### Configure Signing

Add to `android/app/build.gradle`:

```gradle
android {
    signingConfigs {
        release {
            storeFile file("inheritance-pro.keystore")
            storePassword "your_password"
            keyAlias "inheritance"
            keyPassword "your_password"
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}
```

---

## Build Optimization

### Reduce APK Size

1. **Enable ProGuard** (already configured in eas.json)
2. **Remove unused dependencies**
3. **Compress assets**

### Build with Hermes

Hermes is enabled by default for better performance.

### Check Bundle Size

```bash
npx react-native-bundle-visualizer
```

---

## Troubleshooting

### Common Issues

#### 1. "SDK location not found"

**Solution**: Set ANDROID_HOME environment variable

#### 2. "Could not find com.android.tools.build:gradle"

**Solution**: Update Android Studio and SDK

#### 3. "Keystore file not found"

**Solution**: Create keystore or check path in build.gradle

#### 4. "Out of memory"

**Solution**: Increase Gradle memory in `android/gradle.properties`:

```properties
org.gradle.jvmargs=-Xmx4096m
```

#### 5. "Duplicate classes"

**Solution**: Clean build:

```bash
cd android
./gradlew clean
```

---

## Build Verification

### Verify APK Contents

```bash
# List APK contents
unzip -l app-release.apk

# Check APK signature
apksigner verify -v app-release.apk

# Get APK info
aapt dump badging app-release.apk
```

### Test on Device

```bash
# Install on connected device
adb install app-release.apk

# Check logs
adb logcat | grep ReactNative
```

---

## CI/CD Build (GitHub Actions)

Create `.github/workflows/build.yml`:

```yaml
name: Build Android

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install --legacy-peer-deps

      - name: Setup EAS
        uses: expo/expo-github-action@v8
        with:
          eas-version: latest
          token: ${{ secrets.EXPO_TOKEN }}

      - name: Build APK
        run: eas build --platform android --profile preview --non-interactive
```

---

## Build Outputs

### Expected Files

| File              | Size  | Purpose             |
| ----------------- | ----- | ------------------- |
| `app-debug.apk`   | ~60MB | Development testing |
| `app-release.apk` | ~35MB | Distribution        |
| `app-release.aab` | ~30MB | Play Store upload   |

### Build Time Estimates

| Method             | Time      |
| ------------------ | --------- |
| Local EAS (first)  | 20-30 min |
| Local EAS (cached) | 5-10 min  |
| EAS Cloud          | 10-15 min |
| Android Studio     | 5-10 min  |

---

## Post-Build Checklist

- [ ] APK installs successfully
- [ ] App launches without crashes
- [ ] All screens load correctly
- [ ] Calculations work accurately
- [ ] Charts display properly
- [ ] Dark mode switches correctly
- [ ] Saved calculations persist
- [ ] Share functionality works
- [ ] App size is under 50MB

---

## Next Steps After Build

1. **Test thoroughly** on multiple devices
2. **Sign the APK** with release keystore
3. **Upload to Play Console** (internal testing first)
4. **Fill store listing** with screenshots and descriptions
5. **Submit for review**

---

## Support

For build issues:

- Check [Expo Documentation](https://docs.expo.dev/)
- Review [React Native Build Guide](https://reactnative.dev/docs/signed-apk-android)
- Contact: support@inheritance-calculator.app

---

_Build Guide v1.0 - February 2026_
