#!/bin/bash

# Build Script for Islamic Inheritance Calculator Pro APK
# This script builds the Android APK using EAS (Expo Application Services)

set -e

echo "=========================================="
echo "🏗️  Building InheritancePro APK"
echo "=========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js 18+ is required. Current version: $(node -v)"
    exit 1
fi

print_success "Node.js version: $(node -v)"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    print_status "Installing dependencies..."
    npm install --legacy-peer-deps
    print_success "Dependencies installed"
else
    print_status "Dependencies already installed"
fi

# Check if EAS CLI is installed
if ! command -v eas &> /dev/null; then
    print_status "Installing EAS CLI..."
    npm install -g eas-cli
    print_success "EAS CLI installed"
fi

print_status "EAS CLI version: $(eas --version)"

# Login to Expo (if not already logged in)
print_status "Checking Expo authentication..."
if ! eas whoami &> /dev/null; then
    print_warning "Not logged in to Expo. Please login:"
    eas login
else
    print_success "Already logged in to Expo"
fi

# Configure the project
print_status "Configuring project..."

# Update Android SDK path if needed
if [ -z "$ANDROID_SDK_ROOT" ] && [ -z "$ANDROID_HOME" ]; then
    print_warning "ANDROID_SDK_ROOT or ANDROID_HOME not set. Using default paths."
fi

# Build the APK
print_status "Starting APK build..."
print_status "This may take 10-30 minutes depending on your system."
echo ""

# Build using EAS
if eas build --platform android --profile preview --local --output ./InheritancePro-v5.1.0.apk; then
    print_success "Build completed successfully!"
    print_success "APK location: ./InheritancePro-v5.1.0.apk"
    
    # Get APK size
    if [ -f "./InheritancePro-v5.1.0.apk" ]; then
        APK_SIZE=$(du -h ./InheritancePro-v5.1.0.apk | cut -f1)
        print_success "APK size: $APK_SIZE"
    fi
else
    print_error "Build failed. Check the logs above for errors."
    exit 1
fi

# Verify APK
echo ""
print_status "Verifying APK..."
if command -v aapt &> /dev/null; then
    aapt list -a ./InheritancePro-v5.1.0.apk | grep -E "package|version" | head -5
else
    print_warning "aapt not found. Skipping APK verification."
fi

echo ""
print_success "=========================================="
print_success "✅ Build Complete!"
print_success "=========================================="
print_status "APK: ./InheritancePro-v5.1.0.apk"
print_status "Package: com.inheritance.calculator.pro"
print_status "Version: 5.1.0 (510)"
echo ""
print_status "Next steps:"
print_status "1. Test the APK on your device"
print_status "2. Upload to Google Play Console"
print_status "3. Follow the submission checklist in STORE_LISTING.md"
echo ""
