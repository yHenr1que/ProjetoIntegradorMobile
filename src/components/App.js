
//TELA LOGIN




// import React, { Component } from 'react'
// import {Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Button } from 'react-native'

// export default class App extends Component {
  
//   clica = () => {
//      Alert.alert("Login Palmeiras", "Você virou Palmeirense");
//   }
//   render(){
//         return (
//       <View style={styles.container}>
        
//         <Image
//         source={{
//           uri: "https://reactjs.org/logo-og.png",
//           method: "POST",
//           headers: {
//             Pragma: "no-cache"
//           },
//           body: "Your Body goes here"
//         }}
//         style={{ width: 50, height: 50 }}
//       />

//         <TextInput
//           style={styles.input}
//           placeholder="Digite seu Email"
//         />

//         <TextInput
//         style={styles.input}
//         placeholder="Digite sua Senha"
//         secureTextEntry={true}
//         />

//         <TouchableOpacity
//         style={styles.botao}
//         onPress={()=>{this.clica()} }
//         >
//         <Text style={styles.botaoText}>Login</Text>
//         </TouchableOpacity>

//         <View>
//       <Button
//         title="Sair"
//         color="#ff0000"
//         onPress={() => Alert.alert("Button with adjusted color pressed")}
//       />
//     </View>
        

//         </View>
//     )  
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff'
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     borderRadius: 100

//   },
//   input: {
//     marginTop: 10,
//     padding: 10,
//     width: 300,
//     backgroundColor: '#d1d0ca',
//     fontSize: 16,
//     fontWeight: 'bold',
//     borderRadius: 3
//   },
//   botao: {
//     width: 300,
//     height: 42,
//     backgroundColor: '#007fff',
//     marginTop: 10,
//     borderRadius: 4,
//     alignItems: 'center',
//     justifyContent:'center'
//   },
//   botaoText: {
//   fontSize: 16,
//   fontWeight: 'bold',
//   color: '#fff'

// }
// });

//Tela BEM VINDO / GESTOR E FUNCIONARIO



// import React from "react";
// import { Button, Image, StyleSheet, Text, View } from "react-native";

// // mudar a logo para a logo do projeto
// const logoUri = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3"><g fill="#61DAFB"><path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" /><circle cx="420.9" cy="296.5" r="45.7" /><path d="M520.5 78.1z" /></g></svg>`;

// function Link(props) {
//   return (
//     <Text
//       {...props}
//       accessibilityRole="link"
//       style={StyleSheet.compose(styles.link, props.style)}
//     />
//   );
// }

// function App() {
//   return (
//     <View style={styles.app}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Bem vindo</Text>
//         <Image
//           accessibilityLabel="React logo"
//           source={{ uri: logoUri }}
//           resizeMode="contain"
//           style={styles.logo}
//         />
//       </View>
//       <Text style={styles.text2}>Tecnologia sendo usada </Text>
//       <Text style={styles.text2}>para ume mehor satisfação de todos.</Text>
//       <View style={styles.Button1}>
//         <Button onPress={() => {}} title="Gestor" />
//       </View>
//       <View style={styles.Button2}>
//         <Button
//           title="Funcionário"
//           color="#33ff33"
//           onPress={() => Alert.alert("Button with adjusted color pressed")}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   app: {
//     marginHorizontal: "auto",
//     maxWidth: 500
//   },
//   logo: {
//     height: 80
//   },
//   header: {
//     padding: 20
//   },
// // title: {
// //   fontWeight: "bold",
// //   fontSize: "15",
// //   marginVertical: "1em",
// //   textAlign: "center"
// // },
//   Button2: {
//     marginTop: 10
//   },
// //   text: {
// //     lineHeight: "1.5em",
// //     fontSize: "1.125rem",
// //     marginVertical: "1em",
// //     textAlign: "center"
// //   },
// //   text2: {
// //     lineHeight: "1.5em",
// //     fontSize: "1.125rem",
// //     textAlign: "center"
// //   },
//   link: {
//     color: "#1B95E0"
//   },
//   code: {
//     fontFamily: "monospace, monospace"
//   }
// });

// export default App;




//Tela Formulario

//import React from 'react';
//import { RadioButton } from "react-native-paper";
// import {
//   StyleSheet,
//   Button,
//   Image,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
//   TextInput,
//   RadioButton,
// } from 'react-native';
// const UselessTextInput = () => {
//   const [text, onChangeText] = React.useState('Useless Text');
//   const [number, onChangeNumber] = React.useState(null);

//   return (
//     <SafeAreaView>
//       <View style={styles.container1}>
//         <Image
//           source={{
//             uri: 'https://reactjs.org/logo-og.png',
//             method: 'POST',
//             headers: {
//               Pragma: 'no-cache',
//             },
//             body: 'Your Body goes here',
//           }}
//           style={{width: 50, height: 50}}
//         />
//       </View>
//       <View style={styles.container1}>
//         <Text style={styles.title2}>Pergunta 1</Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={onChangeText}
//           value={text}
//         />
//       </View>
//       <View style={styles.container1}>
//         <Text style={styles.title2}>Pergunta 2</Text>
//          {/* <RadioButton
//         value="first"
//         status={ checked === 'first' ? 'checked' : 'unchecked' }
//         onPress={() => setChecked('first')}
//       />
//       <RadioButton
//         value="second"
//         status={ checked === 'second' ? 'checked' : 'unchecked' }
//         onPress={() => setChecked('second')}
//       />  */}
//       </View>
//       <View style={styles.container1}>
//         <Text style={styles.title2}>Pergunta 3</Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={onChangeText}
//           value={text}
//         />
//       </View>
//       <View style={styles.container1}>
//         <Text style={styles.title2}>Pergunta 4</Text>
//         <TextInput
//           style={styles.input}
//           onChangeText={onChangeText}
//           value={text}
//         />
//       </View>

//       <View>
//         <Button
//           title="Enviar"
//           onPress={() => Alert.alert('Simple Button pressed')}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//   },
// });

// export default UselessTextInput;







//Tela Ideias
// import React from "react";
// import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
//   Image
// } from "react-native";

// const Separator = () => <View style={styles.separator} />;

// const App = () => (
//   <SafeAreaView style={styles.container}>
//     <View>
//       <Text style={styles.title}>Atenção!</Text>
//       <Image
//         source={{
//           uri: "https://reactjs.org/logo-og.png",
//           method: "POST",
//           headers: {
//             Pragma: "no-cache"
//           },
//           body: "Your Body goes here"
//         }}
//         style={{ width: 50, height: 50 }}
//       />
//       <Text>Risco de funcionários pedirem demissão !</Text>
//       <Text>
//         {" "}
//         Com base nas nossas informações e na pesquisa com os funcionários sua
//         equipe de desenvolvedores php tem 45% de chances de solicitarem demissão
//         por fatores internos/externos.
//       </Text>
//     </View>
//     <Separator />
//     <View>
//       <Image
//         source={{
//           uri: "https://reactjs.org/logo-og.png",
//           method: "POST",
//           headers: {
//             Pragma: "no-cache"
//           },
//           body: "Your Body goes here"
//         }}
//         style={{ width: 50, height: 50 }}
//       />
//       <Text>Média salarial abaixo do mercado</Text>
//       <Text>
//         {" "}
//         Os funcionários do setor de desenvolvimento de software ganham em média
//         20% mais para exercer a mesma função nas proximidades.
//       </Text>
//     </View>
// <Separator />
//     <View>
//       <Image
//         source={{
//           uri: "https://reactjs.org/logo-og.png",
//           method: "POST",
//           headers: {
//             Pragma: "no-cache"
//           },
//           body: "Your Body goes here"
//         }}
//         style={{ width: 50, height: 50 }}
//       />
//       <Text>Média salarial abaixo do mercado</Text>
//       <Text>
//         {" "}
//         Os funcionários do setor de desenvolvimento de software ganham em média
//         20% mais para exercer a mesma função nas proximidades.
//       </Text>
//     </View>
//     <Separator />
//     <View>
//       <Button
//         title="Voltar a tela inicial"
//         onPress={() => Alert.alert("Button with adjusted color pressed")}
//       />
//     </View>
//   </SafeAreaView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     marginHorizontal: 16
//   },
//   title: {
//     textAlign: "center",
//     marginVertical: 8
//   },
//   fixToText: {
//     flexDirection: "row",
//     justifyContent: "space-between"
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: "#737373",
//     borderBottomWidth: StyleSheet.hairlineWidth
//   }
// });

// export default App;








//Tela de Sucesso
// import React from "react";
// import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
//   Image
// } from "react-native";

// const Separator = () => <View style={styles.separator} />;

// const App = () => (
//   <SafeAreaView style={styles.container}>
//     <View>
//       <Text style={styles.title}>Obrigado!</Text>
//       <Image
//         source={{
//           uri: "https://reactjs.org/logo-og.png",
//           method: "POST",
//           headers: {
//             Pragma: "no-cache"
//           },
//           body: "Your Body goes here"
//         }}
//         style={{ width: 50, height: 50 }}
//       />
//       <Text>Formulário enviado com Sucesso! </Text>
//     </View>
//     <Separator />
//     <View>
//       <Button
//         title="Voltar a tela inicial"
//         onPress={() => Alert.alert("Button with adjusted color pressed")}
//       />
//     </View>
//   </SafeAreaView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     marginHorizontal: 16
//   },
//   title: {
//     textAlign: "center",
//     marginVertical: 8
//   },
//   fixToText: {
//     flexDirection: "row",
//     justifyContent: "space-between"
//   },
//   separator: {
//     marginVertical: 8,
//     borderBottomColor: "#737373",
//     borderBottomWidth: StyleSheet.hairlineWidth
//   }
// });

// export default App;
