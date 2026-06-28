# حاسبة المواريث الإسلامية - برو

# Islamic Inheritance Calculator - Pro

<div dir="rtl">

## 📱 نظرة عامة

تطبيق احترافي لحساب المواريث الإسلامية وفق المذاهب الفقهية الأربعة (الشافعي، الحنفي، المالكي، الحنبلي) مع دعم كامل للحالات الخاصة والمعقدة.

## ✨ المميزات الرئيسية

- ✅ **المذاهب الأربعة**: دعم كامل للمذاهب الفقهية الأربعة
- ✅ **ذوو الأرحام**: حساب ذوي الأرحام في المذاهب التي تورثهم
- ✅ **50+ حالة اختبار**: نظام اختبار شامل للتحقق من الدقة
- ✅ **العول والرد**: معالجة كاملة للحالات الخاصة
- ✅ **الحالات الخاصة**: دعم العُمَريَّة، المشتركة، الأكدرية
- ✅ **مقارنة المذاهب**: مقارنة فورية بين المذاهب
- ✅ **سجل المراجعة**: تتبع جميع العمليات
- ✅ **تصميم عصري**: واجهة مستخدم حديثة بألوان إسلامية

## 🚀 التثبيت والتشغيل

### المتطلبات

- Node.js 18+
- npm أو yarn
- Expo CLI
- Android Studio (للبناء على Android)

### خطوات التثبيت

```bash
# تثبيت التبعيات
npm install

# تشغيل في وضع التطوير
npm start
# أو
expo start

# تشغيل على Android
npm run android

# تشغيل على iOS
npm run ios
```

## 📦 البناء للإنتاج

### بناء APK (للاختبار)

```bash
# تثبيت EAS CLI
npm install -g eas-cli

# تسجيل الدخول في Expo
eas login

# بناء APK
npm run build:apk
# أو
eas build --platform android --profile preview
```

### بناء AAB (للنشر على Google Play)

```bash
# بناء AAB للنشر
npm run build:aab
# أو
eas build --platform android --profile production
```

### نشر على Google Play

```bash
# إعداد حساب الخدمة
# 1. أنشئ حساب خدمة في Google Cloud Console
# 2. فعّل Google Play Developer API
# 3. أنشئ مفتاح JSON وحفظه كـ google-service-account.json

# رفع التطبيق
eas submit --platform android
```

## 📁 هيكل المشروع

```
InheritancePro/
├── src/
│   ├── components/     # المكونات القابلة لإعادة الاستخدام
│   ├── screens/        # شاشات التطبيق
│   ├── utils/          # الأدوات والحسابات
│   ├── constants/      # الثوابت وقواعد البيانات
│   ├── context/        # إدارة الحالة
│   └── themes/         # الألوان والتصميم
├── assets/             # الصور والأيقونات
├── app.json            # إعدادات Expo
├── eas.json            # إعدادات EAS Build
└── package.json        # تبعيات المشروع
```

## 🔧 التقنيات المستخدمة

- **React Native**: إطار عمل تطوير التطبيقات
- **Expo**: منصة لتطوير ونشر تطبيقات React Native
- **TypeScript**: لغة البرمجة مع الأنواع
- **React Navigation**: التنقل بين الشاشات
- **React Native Paper**: مكونات واجهة المستخدم
- **Reanimated**: رسوم متحركة سلسة

## 📋 متطلبات Google Play Store

### الأيقونات

- **ic_launcher**: 512x512 بكسل (PNG)
- **ic_launcher_foreground**: 432x432 بكسل (PNG)
- **ic_launcher_background**: لون أو صورة

### لقطات الشاشة

- 3-8 لقطات شاشة للهاتف (1080x1920)
- 3-8 لقطات شاشة للجهاز اللوحي (1920x1080)

## ⚖️ دقة الحسابات

النظام يتبع القواعد الفقهية المعتمدة:

- حساب الفروض المقدرة (النصف، الربع، الثمن، الثلثان، الثلث، السدس)
- قواعد الحجب (الحجب بالنفس، الحجب بالشيوع، الحجب بالاستحقاق)
- العول (زيادة المقام)
- الرد (توزيع الفائض)
- العصبات (بالنفس، بالغير، مع الغير)

## 🧪 الاختبارات

```bash
# تشغيل جميع الاختبارات
npm test

# تشغيل اختبارات معينة
npm test -- --testNamePattern="basic"
```

## 📄 الترخيص

هذا المشروع مفتوح المصدر تحت ترخيص MIT.

---

<div dir="ltr">

## English Summary

### Project Overview

A professional Islamic inheritance calculator supporting all four Sunni schools of jurisprudence (Shafi'i, Hanafi, Maliki, Hanbali) with full support for special and complex cases.

### Key Features

- ✅ **Four Madhabs**: Complete support for all four schools
- ✅ **Blood Relatives**: Dhawu al-Arham calculation
- ✅ **50+ Test Cases**: Comprehensive testing system
- ✅ **Awl & Radd**: Full special cases handling
- ✅ **Special Cases**: Al-Umariyyah, Al-Musharraka, Al-Akdariyyah
- ✅ **Madhab Comparison**: Instant comparison between schools
- ✅ **Audit Log**: Track all operations
- ✅ **Modern Design**: Islamic-inspired UI with professional colors

### Build Commands

```bash
# Development
npm install
npm start

# Production
npm run build:apk    # Testing
npm run build:aab    # Play Store
```

</div>

</div>
