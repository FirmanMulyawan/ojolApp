npx react-native run-android
npx react-native init OjolApp --version 0.61

++++++++++++++++++ REDUX ++++++++++++++++++++++
npm install redux
npm install react-redux
+++++++++++++++++++++++++++++++++++++++++++++++

++++++++++++++++++ SVG ++++++++++++++++++++++++
npm install react-native-svg
npm install react-native-svg-transformer
++++++++++++++++++++++++++++++++++++++++++++++++

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

+++++++++++++++++++ clear ++++++++++++++++++++++++

npm cache clean --force

npm audit fix
++++++++++++++++++++++++++++++++++++++++++++++++++

+++++++++++++++++++ State Management +++++++++++++

- mengatur state secara global
- redux
- context
  ++++++++++++++++++++++++++++++++++++++++++++++++++

+++++++++++++++++++ Pararenting ++++++++++++++++++

- untuk menggunakan image di react native, secara
  default tidak support SVG, sehingga yang paling
  aman dalam bentuk JPG, PNG. PNG bisa langsung
  dispupport react native
- SVG harus menggunakan library tambahan
- kalo level atoms usahakan jangan dikasih margin  
  dll karena akan digunakan dimana saja

++++++++++++++++++++++++++++++++++++++++++++++++++
