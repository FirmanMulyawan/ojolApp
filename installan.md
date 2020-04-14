npx react-native run-android

<!-- installan  -->

npx react-native init OjolApp --version 0.61

+++++++++++++++ navigation +++++++++++++++++++++
npm install @react-navigation/native

npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

npm install @react-navigation/stack
+++++++++++++++++++++++++++++++++++++++++++++++++

++++++++++++ react-native upgrade +++++++++++++++
npx react-native upgrade

remove node modules = rm -rf node_modules

npm install
++++++++++++++++++++++++++++++++++++++++++++++++++

+++++++++++++++++++ GIT ++++++++++++++++++++++++++
git add .
git commit -m "isi message"
git push origin master
++++++++++++++++++++++++++++++++++++++++++++++++++

<!-- cleaner  -->

npm cache clean --force

npm audit fix

+++++++++++++++++++ Pararenting ++++++++++++++++++

- untuk menggunakan image di react native, secara
  default tidak support SVG, sehingga yang paling
  aman dalam bentuk JPG, PNG. PNG bisa langsung
  dispupport react native
- SVG harus menggunakan library tambahan

++++++++++++++++++++++++++++++++++++++++++++++++++
