# Boilerplate for React Native and React Navigation

**Usage:**
```
  git clone https://github.com/mdmush/react-native-navigation-boilerplate Test
  cd Test
  npm install
  react-native run-android
```

**Change Package Name:**
> With custom Bundle Identifier (Android only. For iOS, please use Xcode)
```
npm install react-native-rename -g
react-native-rename <newName> -b <bundleIdentifier>
e.g. react-native-rename Cool -b com.cool
```


For Android Logs Without **Debug JS Remotely**:
```
adb logcat *:S ReactNative:V ReactNativeJS:V

```
