import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Dimensions, Image, Picker, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Button, Block, Text, Input, Card, Checkbox, Accordion
} from 'galio-framework';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation';
import DatePicker from 'react-native-datepicker'
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import theme from './theme';
import Toast from 'react-native-toast-message';

//api client
import ApiClient from './ApiClient';
import endpoints from './Endpoints';
import AuthStorage from './AuthStorage';

const BASE_SIZE = theme.SIZES.BASE;
const COLOR_WHITE = theme.COLORS.WHITE;
const { width } = Dimensions.get('screen');

const client = new ApiClient();
const auth = new AuthStorage();

export default function App() {
  // GENERIC
  const [userData, setUserData] = useState(null);
  const [patient, setPatient] = useState(null);
  const [patientSelected, setPatientSelected] = useState(null);
  // GENERIC
  // NEW
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [idade, setIdade] = useState(new Date());
  const [sexo, setSexo] = useState("");
  const [trabalho, setTrabalho] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  // NEW
  // NEW
  const [frequencia, setFrequencia] = useState("");
  const [saturacao, setSaturacao] = useState("");
  const [pressao1, setPressao1] = useState("");
  const [pressao2, setPressao2] = useState("");
  const [glicemia, setGlicemia] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [medicamentos, setMedicamentos] = useState("");
  const [observacoes, setObservacoes] = useState("");
  // NEW
  const [listaSintomas, setListaSintomas] = useState(null);
  const [testeSintoma, setTesteSintoma] = useState([]);
  // PFEFFER
  const [pfeffer1, setPfeffer1] = useState(null);
  const [pfeffer2, setPfeffer2] = useState(null);
  const [pfeffer3, setPfeffer3] = useState(null);
  const [pfeffer4, setPfeffer4] = useState(null);
  const [pfeffer5, setPfeffer5] = useState(null);
  const [pfeffer6, setPfeffer6] = useState(null);
  const [pfeffer7, setPfeffer7] = useState(null);
  const [pfeffer8, setPfeffer8] = useState(null);
  const [pfeffer9, setPfeffer9] = useState(null);
  const [pfeffer10, setPfeffer10] = useState(null);
  // PFEFFER
  // CDR
  const [cdr1, setCDR1] = useState(null);
  const [cdr2, setCDR2] = useState(null);
  const [cdr3, setCDR3] = useState(null);
  const [cdr4, setCDR4] = useState(null);
  const [cdr5, setCDR5] = useState(null);
  const [cdr6, setCDR6] = useState(null);
  // CDR
  // MEEM
  const [meem1_1, setMEEM1_1] = useState(false);
  const [meem1_2, setMEEM1_2] = useState(false);
  const [meem1_3, setMEEM1_3] = useState(false);
  const [meem1_4, setMEEM1_4] = useState(false);
  const [meem1_5, setMEEM1_5] = useState(false);
  const [meem1_6, setMEEM1_6] = useState(false);
  const [meem1_7, setMEEM1_7] = useState(false);
  const [meem1_8, setMEEM1_8] = useState(false);
  const [meem1_9, setMEEM1_9] = useState(false);
  const [meem1_10, setMEEM1_10] = useState(false);

  const [meem2_1, setMEEM2_1] = useState(false);
  const [meem2_2, setMEEM2_2] = useState(false);
  const [meem2_3, setMEEM2_3] = useState(false);

  const [meem3_1, setMEEM3_1] = useState(false);
  const [meem3_2, setMEEM3_2] = useState(false);
  const [meem3_3, setMEEM3_3] = useState(false);
  const [meem3_4, setMEEM3_4] = useState(false);
  const [meem3_5, setMEEM3_5] = useState(false);
  const [meem3_erro, setMEEM3_erro] = useState(false);
  const [meem3_11, setMEEM3_11] = useState(false);
  const [meem3_22, setMEEM3_22] = useState(false);
  const [meem3_33, setMEEM3_33] = useState(false);
  const [meem3_44, setMEEM3_44] = useState(false);
  const [meem3_55, setMEEM3_55] = useState(false);


  const [meem4_1, setMEEM4_1] = useState(false);
  const [meem4_2, setMEEM4_2] = useState(false);
  const [meem4_3, setMEEM4_3] = useState(false);

  const [meem5_1, setMEEM5_1] = useState(false);
  const [meem5_2, setMEEM5_2] = useState(false);

  const [meem6_1, setMEEM6_1] = useState(false);

  const [meem7_1, setMEEM7_1] = useState(false);
  const [meem7_2, setMEEM7_2] = useState(false);
  const [meem7_3, setMEEM7_3] = useState(false);

  const [meem8_1, setMEEM8_1] = useState(false);

  const [meem9_1, setMEEM9_1] = useState(false);

  const [meem10_1, setMEEM10_1] = useState(false);

  const [meem11_1, setMEEM11_1] = useState(false);
  const [meem11_2, setMEEM11_2] = useState(false);
  const [meem11_3, setMEEM11_3] = useState(false);
  const [meem11_4, setMEEM11_4] = useState(false);
  // MEEM
  // MOCA
  const [moca1_1, setMOCA1_1] = useState(false);
  const [moca1_2, setMOCA1_2] = useState(false);
  const [moca1_3, setMOCA1_3] = useState(false);
  const [moca1_4, setMOCA1_4] = useState(false);
  const [moca1_5, setMOCA1_5] = useState(false);

  const [moca2_1, setMOCA2_1] = useState(false);
  const [moca2_2, setMOCA2_2] = useState(false);
  const [moca2_3, setMOCA2_3] = useState(false);

  const [moca3_1, setMOCA3_1] = useState(false);
  const [moca3_2, setMOCA3_2] = useState(false);

  const [moca4_1, setMOCA4_1] = useState(false);

  const [moca5_1, setMOCA5_1] = useState(false);
  const [moca5_2, setMOCA5_2] = useState(false);
  const [moca5_3, setMOCA5_3] = useState(false);
  const [moca5_4, setMOCA5_4] = useState(false);

  const [moca6_1, setMOCA6_1] = useState(false);
  const [moca6_2, setMOCA6_2] = useState(false);

  const [moca7_1, setMOCA7_1] = useState(false);

  const [moca8_1, setMOCA8_1] = useState(false);
  const [moca8_2, setMOCA8_2] = useState(false);

  const [moca9_1, setMOCA9_1] = useState(false);
  const [moca9_2, setMOCA9_2] = useState(false);
  const [moca9_3, setMOCA9_3] = useState(false);
  const [moca9_4, setMOCA9_4] = useState(false);
  const [moca9_5, setMOCA9_5] = useState(false);

  const [moca10_1, setMOCA10_1] = useState(false);
  const [moca10_2, setMOCA10_2] = useState(false);
  const [moca10_3, setMOCA10_3] = useState(false);
  const [moca10_4, setMOCA10_4] = useState(false);
  const [moca10_5, setMOCA10_5] = useState(false);
  const [moca10_6, setMOCA10_6] = useState(false);

  const [moca11_1, setMOCA11_1] = useState(false);
  // MOCA
  // LOGIN
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  // LOGIN
  // START - CONTROL TABS
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('login');
  const [secondTab, setSecondTab] = useState('results');
  const [activeTest, setActiveTest] = useState('');

  const [testResult, setTestResult] = useState('');
  const [totalResult, setTotalResult] = useState('');
  const [obsResult, setObsResult] = useState('');

  const [tabs, setTabs] = useState([
    {
      key: 'home',
      label: 'Home',
      barColor: '#3e0057',
      pressColor: '#F5F5F5',
      icon: 'home-variant'
    },
    {
      key: 'new',
      label: 'Novo',
      barColor: '#3e0057',
      pressColor: '#F5F5F5',
      icon: 'thermometer-plus'
    },
    {
      key: 'results',
      label: 'Resultados',
      barColor: '#3e0057',
      pressColor: '#F5F5F5',
      icon: 'format-list-bulleted'
    },
    {
      key: 'user',
      label: 'Usuário',
      barColor: '#3e0057',
      pressColor: '#F5F5F5',
      icon: 'account'
    }
  ]);
  // END - CONTROL TABS

  // START - CARDS
  const cards = [
    {
      id: 1,
      image: 'https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2018/11/Como-Criar-um-Site.png',
      avatar: 'https://siddproject.azurewebsites.net/img/theme/avatar.png',
      title: 'Tutoriais',
      caption: 'Acessar',
      location: 'Santa Cruz do Sul, RS',
    }
  ];
  // END - CARDS

  // START - BOTTOM NAVIGATOR
  async function tab(tab) {
    setLoading(true);
    setActiveTab(tab);
    setSecondTab("results");
    setActiveTest("");
    setPatientSelected(null);
    if (tab == "new") {
      setPatient(null);
      var result = await client.postApi(`${endpoints.user.getPatients}`, null, true);
      if (result.statusCode === 200) {
        setPatient(result.response);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }

  async function second(tab) {
    setLoading(true);
    setActiveTab("results");
    setSecondTab(tab);
    setPatientSelected(null);
    if (tab == "patients" || tab == "acol") {
      setPatient(null);
      var result = await client.postApi(`${endpoints.user.getPatients}`, null, true);
      if (result.statusCode === 200) {
        setPatient(result.response);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }

  function test(test) {
    setLoading(true);
    setActiveTest(test);
    setLoading(false);
  }
  // END - BOTTOM NAVIGATOR

  // START - FUNCTIONS
  useEffect(() => {
    fetchData();
  }, [])

  async function fetchData() {
    if (await auth.isAuthenticated()) {
      setUserData(await auth.getData());
      Toast.show({
        text1: 'Olá',
        text2: 'Seja bem-vindo de volta! 👋',
        type: 'info',
        position: 'top',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 60
      });
      setActiveTab("home");
    } else {
      setActiveTab("login");
    }
  }

  async function login() {
    setLoading(true);
    var data = {
      username: user,
      password: password
    };
    var result = await client.postApi(`${endpoints.user.login}`, data, false);
    if (result.statusCode === 200) {
      auth.login(result.response);
      setUserData(result.response);
      Toast.show({
        text1: 'Olá',
        text2: 'Seu login foi realizado com sucesso! 👋',
        position: 'top',
        type: 'info',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 60
      });
      setActiveTab("home");
    } else {
      setActiveTab("login");
      let notifications = result.notifications
      if (notifications && notifications.length > 0) {
        notifications.forEach(not => {
          Toast.show({
            text1: 'Erro',
            text2: not.message,
            position: 'top',
            type: 'error',
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 60
          });
        })
      }
    }
    setLoading(false);
  }

  async function newPatient() {
    setLoading(true);
    if (firstName == "" || lastName == "" || idade == "" || sexo == "") {
      Toast.show({
        text1: 'Erro',
        text2: "Por favor, preencha todas as opções de acordo com o paciente.",
        position: 'top',
        type: 'error',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 60
      });
      setLoading(false);
      return;
    }
    var data = {
      firstName: firstName,
      lastName: lastName,
      idadeData: idade,
      sexo: sexo,
      estadoCivil: estadoCivil,
      trabalho: trabalho
    };
    var result = await client.postApi(`${endpoints.user.insertPatient}`, data, false);
    if (result.statusCode === 200) {
      setFirstName("");
      setLastName("");
      setIdade("");
      setSexo("");
      Toast.show({
        text1: 'Novo Paciente',
        text2: 'O paciente foi cadastrado com sucesso! 👋',
        position: 'top',
        type: 'info',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 60
      });
      setPatientSelected(result.response.id);
    } else {
      let notifications = result.notifications
      if (notifications && notifications.length > 0) {
        notifications.forEach(not => {
          Toast.show({
            text1: 'Erro',
            text2: not.message,
            position: 'top',
            type: 'error',
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 60
          });
        })
      }
      tab("home");
    }
    setLoading(false);
  }

  async function newAcolhimento() {
    setLoading(true);
    if (frequencia == "" || saturacao == "" || pressao1 == "" || pressao2 == "" || glicemia == "") {
      Toast.show({
        text1: 'Erro',
        text2: "Por favor, preencha todas as opções de acordo com o paciente.",
        position: 'top',
        type: 'error',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 60
      });
      setLoading(false);
      return;
    }
    var data = {
      userId: patientSelected,
      frequenciaCardiaca: frequencia,
      saturação: saturacao,
      pressaoArterial: pressao1 + "/" + pressao2,
      glicemia: glicemia,
      sintomas: sintomas,
      medicamentos: medicamentos,
      observacoes: observacoes,
      createdBy: userData.id
    };
    var result = await client.postApi(`${endpoints.app.insertAcolhimento}`, data, false);
    if (result.statusCode === 200) {
      setFrequencia("");
      setSaturacao("");
      setPressao1("");
      setPressao2("");
      setGlicemia("");
      setSintomas("");
      setMedicamentos("");
      setObservacoes("");
      Toast.show({
        text1: 'Acolhimento',
        text2: 'Os dados do acolhimento foram salvos com sucesso! 👋',
        position: 'top',
        type: 'info',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 60
      });
      tab("home");
    } else {
      let notifications = result.notifications
      if (notifications && notifications.length > 0) {
        notifications.forEach(not => {
          Toast.show({
            text1: 'Erro',
            text2: not.message,
            position: 'top',
            type: 'error',
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 60
          });
        })
      }
      tab("home");
    }
    setLoading(false);
  }


  async function pfeffer() {
    setLoading(true);
    if (pfeffer1 == null || pfeffer2 == null || pfeffer3 == null || pfeffer4 == null || pfeffer5 == null || pfeffer6 == null || pfeffer7 == null || pfeffer8 == null || pfeffer9 == null || pfeffer10 == null) {
      Toast.show({
        text1: 'Erro',
        text2: "Por favor, marque todas as opções de acordo com o paciente.",
        position: 'top',
        type: 'error',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 60
      });
      setLoading(false);
      return;
    }

    var data = {
      userId: patientSelected,
      question1: parseInt(pfeffer1),
      question2: parseInt(pfeffer2),
      question3: parseInt(pfeffer3),
      question4: parseInt(pfeffer4),
      question5: parseInt(pfeffer5),
      question6: parseInt(pfeffer6),
      question7: parseInt(pfeffer7),
      question8: parseInt(pfeffer8),
      question9: parseInt(pfeffer9),
      question10: parseInt(pfeffer10),
      createdBy: userData.id
    };
    var result = await client.postApi(`${endpoints.app.insertPfeffer}`, data, false);
    if (result.statusCode === 200) {
      setPfeffer1(null);
      setPfeffer2(null);
      setPfeffer3(null);
      setPfeffer4(null);
      setPfeffer5(null);
      setPfeffer6(null);
      setPfeffer7(null);
      setPfeffer8(null);
      setPfeffer9(null);
      setPfeffer10(null);
      setPatientSelected(null);
      setActiveTab("results");
      setSecondTab("tests");
      setTestResult("Pfeffer");
      setTotalResult(result.response.total);
      if (result.response.total >= 5)
        setObsResult("Pontuação chama a atenção e indica comprometimento funcional");
      else if (result.response.total >= 3 && result.response.total < 5)
        setObsResult("Suspeita de demência");
      else
        setObsResult("Normal");
    } else {
      let notifications = result.notifications
      if (notifications && notifications.length > 0) {
        notifications.forEach(not => {
          Toast.show({
            text1: 'Erro',
            text2: not.message,
            position: 'top',
            type: 'error',
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 60
          });
        })
      }
    }
    setLoading(false);
  }

  async function cdr() {
    setLoading(true);
    if (cdr1 == null || cdr2 == null || cdr3 == null || cdr4 == null || cdr5 == null || cdr6 == null) {
      Toast.show({
        text1: 'Erro',
        text2: "Por favor, marque todas as opções de acordo com o paciente.",
        position: 'top',
        type: 'error',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 60
      });
      setLoading(false);
      return;
    }

    var data = {
      userId: patientSelected,
      question1: parseFloat(cdr1),
      question2: parseFloat(cdr2),
      question3: parseFloat(cdr3),
      question4: parseFloat(cdr4),
      question5: parseFloat(cdr5),
      question6: parseFloat(cdr6),
      createdBy: userData.id
    };
    var result = await client.postApi(`${endpoints.app.insertCDR}`, data, false);
    if (result.statusCode === 200) {
      setCDR1(null);
      setCDR2(null);
      setCDR3(null);
      setCDR4(null);
      setCDR5(null);
      setCDR6(null);
      setPatientSelected(null);
      setActiveTab("results");
      setSecondTab("tests");
      setTestResult("CDR");
      setTotalResult(result.response.total);
      if (result.response.total <= 4)
        setObsResult("Normal");
      else if (result.response.total > 4 && result.response.total < 9)
        setObsResult("Suspeita de demência");
      else
        setObsResult("Possível demência existente");
    } else {
      let notifications = result.notifications
      if (notifications && notifications.length > 0) {
        notifications.forEach(not => {
          Toast.show({
            text1: 'Erro',
            text2: not.message,
            position: 'top',
            type: 'error',
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 60
          });
        })
      }
    }
    setLoading(false);
  }

  async function meem() {
    setLoading(true);
    var data = {
      userId: patientSelected,
      question1: (meem1_1 ? 1 : 0) + (meem1_2 ? 1 : 0) + (meem1_3 ? 1 : 0) + (meem1_4 ? 1 : 0) + (meem1_5 ? 1 : 0) + (meem1_6 ? 1 : 0) + (meem1_7 ? 1 : 0) + (meem1_8 ? 1 : 0) + (meem1_9 ? 1 : 0) + (meem1_10 ? 1 : 0),
      question2: (meem2_1 ? 1 : 0) + (meem2_2 ? 1 : 0) + (meem2_3 ? 1 : 0),
      question3: meem3_erro ? ((meem3_11 ? 1 : 0) + (meem3_22 ? 1 : 0) + (meem3_33 ? 1 : 0) + (meem3_44 ? 1 : 0) + (meem3_55 ? 1 : 0)) : ((meem3_1 ? 1 : 0) + (meem3_2 ? 1 : 0) + (meem3_3 ? 1 : 0) + (meem3_4 ? 1 : 0) + (meem3_5 ? 1 : 0)),
      question4: (meem4_1 ? 1 : 0) + (meem4_2 ? 1 : 0) + (meem4_3 ? 1 : 0),
      question5: (meem5_1 ? 1 : 0) + (meem5_2 ? 1 : 0),
      question6: (meem6_1 ? 1 : 0),
      question7: (meem7_1 ? 1 : 0) + (meem7_2 ? 1 : 0) + (meem7_3 ? 1 : 0),
      question8: (meem8_1 ? 1 : 0),
      question9: (meem9_1 ? 1 : 0),
      question10: (meem10_1 ? 1 : 0),
      escolaridade: meem11_1 ? 1 : meem11_2 ? 2 : meem11_3 ? 3 : meem11_4 ? 4 : 0,
      createdBy: userData.id
    };

    if (data.escolaridade == 0) {
      Toast.show({
        text1: 'Erro',
        text2: "Por favor, marque a escolaridade do paciente.",
        position: 'top',
        type: 'error',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 60
      });
      setLoading(false);
      return;
    }

    var result = await client.postApi(`${endpoints.app.insertMEEM}`, data, false);
    if (result.statusCode === 200) {
      setMEEM1_1(false);
      setMEEM1_2(false);
      setMEEM1_3(false);
      setMEEM1_4(false);
      setMEEM1_5(false);
      setMEEM1_6(false);
      setMEEM1_7(false);
      setMEEM1_8(false);
      setMEEM1_9(false);
      setMEEM1_10(false);

      setMEEM2_1(false);
      setMEEM2_2(false);
      setMEEM2_3(false);

      setMEEM3_1(false);
      setMEEM3_2(false);
      setMEEM3_3(false);
      setMEEM3_4(false);
      setMEEM3_5(false);
      setMEEM3_erro(false);
      setMEEM3_11(false);
      setMEEM3_22(false);
      setMEEM3_33(false);
      setMEEM3_44(false);
      setMEEM3_55(false);

      setMEEM4_1(false);
      setMEEM4_2(false);
      setMEEM4_3(false);

      setMEEM5_1(false);
      setMEEM5_2(false);

      setMEEM6_1(false);

      setMEEM7_1(false);
      setMEEM7_2(false);
      setMEEM7_3(false);

      setMEEM8_1(false);

      setMEEM9_1(false);

      setMEEM10_1(false);

      setMEEM11_1(false);
      setMEEM11_2(false);
      setMEEM11_3(false);
      setMEEM11_4(false);

      setPatientSelected(null);
      setActiveTab("results");
      setSecondTab("tests");
      setTestResult("Mini-Mental (MEEM)");
      setTotalResult(result.response.total);
      if (meem11_1 && result.response.total <= 21)
        setObsResult("Com base na escolaridade selecionada (analfabeto), o usuário está reprovado, possível demência existente");
      if (meem11_1 && result.response.total > 21)
        setObsResult("Com base na escolaridade selecionada (analfabeto), o usuário está aprovado");

      if (meem11_2 && result.response.total <= 24)
        setObsResult("Com base na escolaridade selecionada (1 a 5 anos de escolaridade), o usuário está reprovado, possível demência existente");
      if (meem11_2 && result.response.total > 24)
        setObsResult("Com base na escolaridade selecionada (1 a 5 anos de escolaridade), o usuário está aprovado");

      if (meem11_3 && result.response.total <= 26)
        setObsResult("Com base na escolaridade selecionada (6 a 11 anos de escolaridade), o usuário está reprovado, possível demência existente");
      if (meem11_3 && result.response.total > 26)
        setObsResult("Com base na escolaridade selecionada (6 a 11 anos de escolaridade), o usuário está aprovado");

      if (meem11_4 && result.response.total <= 27)
        setObsResult("Com base na escolaridade selecionada (12 anos ou mais de escolaridade), o usuário está reprovado, possível demência existente");
      if (meem11_4 && result.response.total > 27)
        setObsResult("Com base na escolaridade selecionada (12 anos ou mais de escolaridade), o usuário está aprovado");
    } else {
      let notifications = result.notifications
      if (notifications && notifications.length > 0) {
        notifications.forEach(not => {
          Toast.show({
            text1: 'Erro',
            text2: not.message,
            position: 'top',
            type: 'error',
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 60
          });
        })
      }
    }
    setLoading(false);
  }

  async function moca() {
    setLoading(true);
    var data = {
      userId: patientSelected,
      question1: (moca1_1 ? 1 : 0) + (moca1_2 ? 1 : 0) + (moca1_3 ? 1 : 0) + (moca1_4 ? 1 : 0) + (moca1_5 ? 1 : 0),
      question2: (moca2_1 ? 1 : 0) + (moca2_2 ? 1 : 0) + (moca2_3 ? 1 : 0),
      question3: (moca3_1 ? 1 : 0) + (moca3_2 ? 1 : 0),
      question4: (moca4_1 ? 1 : 0),
      question5: moca5_1 ? 3 : moca5_2 ? 2 : moca5_3 ? 1 : moca5_4 ? 0 : 0,
      question6: (moca6_1 ? 1 : 0) + (moca6_2 ? 1 : 0),
      question7: (moca7_1 ? 1 : 0),
      question8: (moca8_1 ? 1 : 0) + (moca8_2 ? 1 : 0),
      question9: (moca9_1 ? 1 : 0) + (moca9_2 ? 1 : 0) + (moca9_3 ? 1 : 0) + (moca9_4 ? 1 : 0) + (moca9_5 ? 1 : 0),
      question10: (moca10_1 ? 1 : 0) + (moca10_2 ? 1 : 0) + (moca10_3 ? 1 : 0) + (moca10_4 ? 1 : 0) + (moca10_5 ? 1 : 0) + (moca10_6 ? 1 : 0) + (moca11_1 ? 1 : 0),
      createdBy: userData.id
    };

    var result = await client.postApi(`${endpoints.app.insertMoCA}`, data, false);
    if (result.statusCode === 200) {
      setMOCA1_1(false);
      setMOCA1_2(false);
      setMOCA1_3(false);
      setMOCA1_4(false);
      setMOCA1_5(false);

      setMOCA2_1(false);
      setMOCA2_2(false);
      setMOCA2_3(false);

      setMOCA3_1(false);
      setMOCA3_2(false);

      setMOCA4_1(false);

      setMOCA5_1(false);
      setMOCA5_2(false);
      setMOCA5_3(false);
      setMOCA5_4(false);

      setMOCA6_1(false);
      setMOCA6_2(false);

      setMOCA7_1(false);

      setMOCA8_1(false);
      setMOCA8_2(false);

      setMOCA9_1(false);
      setMOCA9_2(false);
      setMOCA9_3(false);
      setMOCA9_4(false);
      setMOCA9_5(false);

      setMOCA10_1(false);
      setMOCA10_2(false);
      setMOCA10_3(false);
      setMOCA10_4(false);
      setMOCA10_5(false);
      setMOCA10_6(false);

      setMOCA11_1(false);

      setPatientSelected(null);
      setActiveTab("results");
      setSecondTab("tests");
      setTestResult("MoCA");
      setTotalResult(result.response.total);
      if (result.response.total <= 24)
        setObsResult("Comprometimento cognitivo");
      else
        setObsResult("Normal");
    } else {
      let notifications = result.notifications
      if (notifications && notifications.length > 0) {
        notifications.forEach(not => {
          Toast.show({
            text1: 'Erro',
            text2: not.message,
            position: 'top',
            type: 'error',
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 60
          });
        })
      }
    }
    setLoading(false);
  }

  async function calltest() {
    setLoading(true);
    var result = await client.postApi(`${endpoints.app.getSintomas}`, null, false);
    if (result.statusCode === 200) {
      setListaSintomas(result.response);
      test("sintomas");
    } else {
      let notifications = result.notifications
      if (notifications && notifications.length > 0) {
        notifications.forEach(not => {
          Toast.show({
            text1: 'Erro',
            text2: not.message,
            position: 'top',
            type: 'error',
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 60
          });
        })
      }
    }
    setLoading(false);
  }

  const CheckTesteSintoma = (e) => {
    var teste = testeSintoma.filter(x => x == e);
    if (teste.length == 0)
      setTesteSintoma([...testeSintoma, e])
    else
      setTesteSintoma(testeSintoma.filter((x) => (x !== e)))
  };

  async function sendTesteSintoma() {
    setLoading(true);
    var listaA = [];
    testeSintoma.map((a) => {
      var data = {
        userId: patientSelected,
        sintomasId: a,
        createdBy: userData.id
      };
      listaA.push(data);
    });

    var result = await client.postApi(`${endpoints.app.insertTesteSintoma}`, listaA, false);
    if (result.statusCode === 200) {
      Toast.show({
        text1: 'Teste de Sintomas',
        text2: 'Os dados do teste de sintomas foram salvos com sucesso! 👋',
        position: 'top',
        type: 'info',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 60
      });
      tab("home");
    } else {
      let notifications = result.notifications
      if (notifications && notifications.length > 0) {
        notifications.forEach(not => {
          Toast.show({
            text1: 'Erro',
            text2: not.message,
            position: 'top',
            type: 'error',
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 60
          });
        })
      }
    }
    setLoading(false);
  }

  function logout() {
    setLoading(true);
    setActiveTab("login");
    setLoading(false);
  }
  // END - FUNCTIONS

  return (
    <Block safe flex style={{ backgroundColor: '#F5F5F5' }}>
      <StatusBar style="light" />
      <Toast ref={(ref) => Toast.setRef(ref)} />
      {activeTab == "login" && <>
        <Block flex style={{ backgroundColor: '#3e0057' }}>
          <ScrollView style={{ height: 1 }} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="position"
              keyboardVerticalOffset={5}
            >
              <Block row space="evenly">
                <Image source={require('./assets/login.png')} />
              </Block>
              <Block style={styles.grid}>
                {loading &&
                  <Block style={{
                    backgroundColor: "#F5F5F5",
                    borderRadius: 20,
                    zIndex: 9999,
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Text muted center style={styles.buttonText}>Carregando...</Text>
                    <ActivityIndicator size='large' color="#3e0057" />
                  </Block>
                }
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Insira seu usário</Text>
                <Input placeholder="Usuário" value={user} onChangeText={(e) => setUser(e)} />
                <Text muted center style={styles.buttonText}>Insira sua senha</Text>
                <Input placeholder="Senha" value={password} password viewPass onChangeText={(e) => setPassword(e)} />
                <Block center>
                  <Button round color="#3e0057" uppercase onPress={() => login()}>Entrar</Button>
                </Block>
              </Block>
            </KeyboardAvoidingView>
          </ScrollView>
        </Block>
      </>
      }
      {activeTab != "login" && <>
        {userData != null ? <Block row style={{ width: '100%', backgroundColor: '#3e0057', color: '#ffffff !important' }}>
          <Block flex center>
            <Image source={require('./assets/header.png')} style={{ marginTop: 44 }} />
            <Text muted center color="#fff" style={{ marginTop: 14 }}>Olá, {userData.user.firstName} {userData.user.lastName}</Text>
          </Block>
        </Block> : null}
        <Block row style={{ width: '100%', paddingTop: 10, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, backgroundColor: '#3e0057', color: '#ffffff !important', paddingBottom: 10 }} />

        <Block style={styles.grid}>
          {loading &&
            <Block style={{
              backgroundColor: "#F5F5F5",
              borderRadius: 20,
              zIndex: 9999,
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ActivityIndicator size='large' color="#3e0057" />
            </Block>
          }
          <ScrollView style={{ height: 1 }} keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="position"
              keyboardVerticalOffset={5}
            >
              {activeTab == "home" && <>
                <Block row space="evenly">
                  <Text muted style={styles.buttonText}>Selecione uma opção</Text>
                </Block>
                <Block row space="evenly">
                  <Button color="" style={styles.button}>
                    <Block middle style={styles.block}>
                      <Icon size={40} color="#F5F5F5" name={'heart-pulse'} onPress={() => second("acol")} />
                    </Block>
                    <Text muted style={styles.buttonText}>Acolhimento</Text>
                  </Button>

                  <Button color="" style={styles.button} onPress={() => tab("new")}>
                    <Block middle style={styles.block}>
                      <Icon size={40} color="#F5F5F5" name={'thermometer-plus'} />
                    </Block>
                    <Text muted style={styles.buttonText}>Novo Teste</Text>
                  </Button>

                  <Button color="" style={styles.button} onPress={() => second("patients")}>
                    <Block middle style={styles.block}>
                      <Icon size={40} color="#F5F5F5" name={'account-supervisor'} />
                    </Block>
                    <Text muted style={styles.buttonText}>Pacientes</Text>
                  </Button>
                </Block>

                {cards && cards.map((card, id) => (
                  <Card
                    key={`card-${card.image}`}
                    flex
                    borderless
                    shadowColor={theme.COLORS.BLACK}
                    titleColor={card.full ? theme.COLORS.WHITE : null}
                    style={styles.card}
                    title={card.title}
                    caption={card.caption}
                    location={card.location}
                    avatar={`${card.avatar}?${id}`}
                    image={card.image}
                    imageStyle={[card.padded ? styles.rounded : null]}
                    imageBlockStyle={[
                      card.padded ? { padding: theme.SIZES.BASE / 2 } : null,
                      card.full ? null : styles.noRadius,
                    ]}
                    footerStyle={card.full ? styles.full : null}
                  >
                    {card.full ? <LinearGradient colors={['transparent', 'rgba(0,0,0, 0.8)']} style={styles.gradient} /> : null}
                  </Card>
                ))}
              </>}
              {activeTab == "new" && <>
                {activeTab == "new" && activeTest == "" && patientSelected == null && <>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Selecione um paciente</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={patientSelected}
                        onValueChange={(itemValue, itemIndex) => { if (itemValue != "null") { setPatientSelected(itemValue) } }}
                      >
                        <Picker.Item label="Nenhum selecionado" value="null" />
                        {patient != null ? patient.data.map((e) => {
                          return <Picker.Item label={e.firstName + " " + e.lastName} value={e.id} key={e.id} />;
                        }) : null}
                      </Picker>
                    </TouchableOpacity>
                  </Block>
                </>}
                {activeTab == "new" && activeTest == "" && patientSelected != null && <>
                  <Block row space="evenly">
                    <Text muted style={styles.buttonText}>Qual teste deseja aplicar para o paciente: {patient != null ? patient.data.map((element) => {
                      if (element.id == patientSelected)
                        return element.firstName + " " + element.lastName;
                    }) : null}</Text>
                  </Block>
                  <Block flex center>
                    <Button round color="#3e0057" uppercase size="large" onPress={() => test("pfeffer")}>QUESTIONÁRIO PFEFFER</Button>
                  </Block>
                  <Block flex center>
                    <Button round color="#3e0057" uppercase size="large" onPress={() => test("cdr")}>CDR</Button>
                  </Block>
                  <Block flex center>
                    <Button round color="#3e0057" uppercase size="large" onPress={() => test("minimental")}>MINI MENTAL (MEEM)</Button>
                  </Block>
                  <Block flex center>
                    <Button round color="#3e0057" uppercase size="large" onPress={() => test("moca")}>MoCA</Button>
                  </Block>
                  <Block flex center>
                    <Button round color="#3e0057" uppercase size="large" onPress={() => calltest("sintomas")}>TESTE DE SINTOMAS</Button>
                  </Block>
                </>}
                {activeTab == "new" && activeTest != "" && <>
                  <Block flex center>
                    <Button round uppercase color="#3e0057" onPress={() => test("")}>FECHAR</Button>
                  </Block>
                </>}
                {activeTab == "new" && activeTest == "pfeffer" && <>
                  <Block row space="evenly">
                    <Text muted style={styles.buttonText}>Questionário Pfeffer</Text>
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Ele(a) manuseia seu próprio dinheiro? (marque a opção que mais se encaixa com o paciente)</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={pfeffer1}
                        onValueChange={(itemValue, itemIndex) => { setPfeffer1(itemValue) }}
                      >
                        <Picker.Item label="Nenhum selecionado" value="null" />
                        <Picker.Item label="Normal" value="0" />
                        <Picker.Item label="Nunca o fez mas poderia fazê-lo" value="0" />
                        <Picker.Item label="Faz com dificuldades" value="1" />
                        <Picker.Item label="Nunca o fez e agora teria dificuldades" value="1" />
                        <Picker.Item label="Necessita de ajuda" value="2" />
                        <Picker.Item label="Não é capaz" value="3" />
                      </Picker>
                    </TouchableOpacity>
                  </Block>

                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Ele(a) é capaz de comprar comidas, roupas, coisas para casa sozinho(a)? (marque a opção que mais se encaixa com o paciente)</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={pfeffer2}
                        onValueChange={(itemValue, itemIndex) => { setPfeffer2(itemValue) }}
                      >
                        <Picker.Item label="Nenhum selecionado" value="null" />
                        <Picker.Item label="Normal" value="0" />
                        <Picker.Item label="Nunca o fez mas poderia fazê-lo" value="0" />
                        <Picker.Item label="Faz com dificuldades" value="1" />
                        <Picker.Item label="Nunca o fez e agora teria dificuldades" value="1" />
                        <Picker.Item label="Necessita de ajuda" value="2" />
                        <Picker.Item label="Não é capaz" value="3" />
                      </Picker>
                    </TouchableOpacity>
                  </Block>

                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Ele(a) é capaz de esquenta a água para o café e apagar o fogo? (marque a opção que mais se encaixa com o paciente)</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={pfeffer3}
                        onValueChange={(itemValue, itemIndex) => { setPfeffer3(itemValue) }}
                      >
                        <Picker.Item label="Nenhum selecionado" value="null" />
                        <Picker.Item label="Normal" value="0" />
                        <Picker.Item label="Nunca o fez mas poderia fazê-lo" value="0" />
                        <Picker.Item label="Faz com dificuldades" value="1" />
                        <Picker.Item label="Nunca o fez e agora teria dificuldades" value="1" />
                        <Picker.Item label="Necessita de ajuda" value="2" />
                        <Picker.Item label="Não é capaz" value="3" />
                      </Picker>
                    </TouchableOpacity>
                  </Block>

                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Ele(a) é capaz de preparar uma comida? (marque a opção que mais se encaixa com o paciente)</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={pfeffer4}
                        onValueChange={(itemValue, itemIndex) => { setPfeffer4(itemValue) }}
                      >
                        <Picker.Item label="Nenhum selecionado" value="null" />
                        <Picker.Item label="Normal" value="0" />
                        <Picker.Item label="Nunca o fez mas poderia fazê-lo" value="0" />
                        <Picker.Item label="Faz com dificuldades" value="1" />
                        <Picker.Item label="Nunca o fez e agora teria dificuldades" value="1" />
                        <Picker.Item label="Necessita de ajuda" value="2" />
                        <Picker.Item label="Não é capaz" value="3" />
                      </Picker>
                    </TouchableOpacity>
                  </Block>

                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Ele(a) é capaz de manter-se em dia com as atualidades, com os acontecimentos da comunidade? (marque a opção que mais se encaixa com o paciente)</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={pfeffer5}
                        onValueChange={(itemValue, itemIndex) => { setPfeffer5(itemValue) }}
                      >
                        <Picker.Item label="Nenhum selecionado" value="null" />
                        <Picker.Item label="Normal" value="0" />
                        <Picker.Item label="Nunca o fez mas poderia fazê-lo" value="0" />
                        <Picker.Item label="Faz com dificuldades" value="1" />
                        <Picker.Item label="Nunca o fez e agora teria dificuldades" value="1" />
                        <Picker.Item label="Necessita de ajuda" value="2" />
                        <Picker.Item label="Não é capaz" value="3" />
                      </Picker>
                    </TouchableOpacity>
                  </Block>

                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Ele(a) é capaz de prestar atenção, entender e discutir um programa de rádio, jornal ou televisão? (marque a opção que mais se encaixa com o paciente)</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={pfeffer6}
                        onValueChange={(itemValue, itemIndex) => { setPfeffer6(itemValue) }}
                      >
                        <Picker.Item label="Nenhum selecionado" value="null" />
                        <Picker.Item label="Normal" value="0" />
                        <Picker.Item label="Nunca o fez mas poderia fazê-lo" value="0" />
                        <Picker.Item label="Faz com dificuldades" value="1" />
                        <Picker.Item label="Nunca o fez e agora teria dificuldades" value="1" />
                        <Picker.Item label="Necessita de ajuda" value="2" />
                        <Picker.Item label="Não é capaz" value="3" />
                      </Picker>
                    </TouchableOpacity>
                  </Block>

                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Ele(a) é capaz de lembrar-se de compromissos, acontecimentos familiares ou feriados? (marque a opção que mais se encaixa com o paciente)</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={pfeffer7}
                        onValueChange={(itemValue, itemIndex) => { setPfeffer7(itemValue) }}
                      >
                        <Picker.Item label="Nenhum selecionado" value="null" />
                        <Picker.Item label="Normal" value="0" />
                        <Picker.Item label="Nunca o fez mas poderia fazê-lo" value="0" />
                        <Picker.Item label="Faz com dificuldades" value="1" />
                        <Picker.Item label="Nunca o fez e agora teria dificuldades" value="1" />
                        <Picker.Item label="Necessita de ajuda" value="2" />
                        <Picker.Item label="Não é capaz" value="3" />
                      </Picker>
                    </TouchableOpacity>
                  </Block>

                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Ele(a) é capaz de manusear seus próprios remédios? (marque a opção que mais se encaixa com o paciente)</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={pfeffer8}
                        onValueChange={(itemValue, itemIndex) => { setPfeffer8(itemValue) }}
                      >
                        <Picker.Item label="Nenhum selecionado" value="null" />
                        <Picker.Item label="Normal" value="0" />
                        <Picker.Item label="Nunca o fez mas poderia fazê-lo" value="0" />
                        <Picker.Item label="Faz com dificuldades" value="1" />
                        <Picker.Item label="Nunca o fez e agora teria dificuldades" value="1" />
                        <Picker.Item label="Necessita de ajuda" value="2" />
                        <Picker.Item label="Não é capaz" value="3" />
                      </Picker>
                    </TouchableOpacity>
                  </Block>

                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Ele(a) é capaz de passear pela vizinhança e encontrar o caminho de volta para casa? (marque a opção que mais se encaixa com o paciente)</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={pfeffer9}
                        onValueChange={(itemValue, itemIndex) => { setPfeffer9(itemValue) }}
                      >
                        <Picker.Item label="Nenhum selecionado" value="null" />
                        <Picker.Item label="Normal" value="0" />
                        <Picker.Item label="Nunca o fez mas poderia fazê-lo" value="0" />
                        <Picker.Item label="Faz com dificuldades" value="1" />
                        <Picker.Item label="Nunca o fez e agora teria dificuldades" value="1" />
                        <Picker.Item label="Necessita de ajuda" value="2" />
                        <Picker.Item label="Não é capaz" value="3" />
                      </Picker>
                    </TouchableOpacity>
                  </Block>

                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Ele(a) pode ser deixado(a) em casa sozinho(a) de forma segura? (marque a opção que mais se encaixa com o paciente)</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={pfeffer10}
                        onValueChange={(itemValue, itemIndex) => { setPfeffer10(itemValue) }}
                      >
                        <Picker.Item label="Nenhum selecionado" value="null" />
                        <Picker.Item label="Normal" value="0" />
                        <Picker.Item label="Nunca o fez mas poderia fazê-lo" value="0" />
                        <Picker.Item label="Faz com dificuldades" value="1" />
                        <Picker.Item label="Nunca o fez e agora teria dificuldades" value="1" />
                        <Picker.Item label="Necessita de ajuda" value="2" />
                        <Picker.Item label="Não é capaz" value="3" />
                      </Picker>
                    </TouchableOpacity>
                  </Block>
                  <Block row center>
                    <Button round uppercase color="#3e0057" onPress={() => test("")}>FECHAR</Button>
                    <Button round uppercase color="primary" onPress={() => pfeffer()}>SALVAR</Button>
                  </Block>
                </>}
                {activeTab == "new" && activeTest == "cdr" && <>
                  <Block row space="evenly">
                    <Text muted style={styles.buttonText}>Clinical Dementia Rating (CDR)</Text>
                  </Block>

                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Em relação a memória (marque a opção que mais se encaixa com o paciente)</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={cdr1}
                        onValueChange={(itemValue, itemIndex) => { setCDR1(itemValue) }}
                      >
                        <Picker.Item label="Nenhum selecionado" value="null" />
                        <Picker.Item label="Sem perda da memória; apenas esquecimento discreto" value="0" />
                        <Picker.Item label="Esquecimento leve e consistente; lembrança parcial de eventos" value="0.5" />
                        <Picker.Item label="Moderada; mais acentuada a fatos recentes; afeta o dia-a-dia" value="1" />
                        <Picker.Item label="Grave; apenas material muito aprendido é retido; materiais novos são rapidamente perdidos" value="2" />
                        <Picker.Item label="Grave; apenas fragmentos permanecem" value="3" />
                      </Picker>
                    </TouchableOpacity>
                  </Block>

                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Em relação a orientação (marque a opção que mais se encaixa com o paciente)</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={cdr2}
                        onValueChange={(itemValue, itemIndex) => { setCDR2(itemValue) }}
                      >
                        <Picker.Item label="Nenhum selecionado" value="null" />
                        <Picker.Item label="Plenamente orientado" value="0" />
                        <Picker.Item label="Leve dificuldade" value="0.5" />
                        <Picker.Item label="Dificuldade moderada com as relações de tempo" value="1" />
                        <Picker.Item label="Geralmente desorientado" value="2" />
                        <Picker.Item label="Orientação pessoal apenas" value="3" />
                      </Picker>
                    </TouchableOpacity>
                  </Block>

                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Em relação a julgamento e solução de problemas (marque a opção que mais se encaixa com o paciente)</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={cdr3}
                        onValueChange={(itemValue, itemIndex) => { setCDR3(itemValue) }}
                      >
                        <Picker.Item label="Nenhum selecionado" value="null" />
                        <Picker.Item label="Resolve bem" value="0" />
                        <Picker.Item label="Leve comprometimento" value="0.5" />
                        <Picker.Item label="Dificuldade moderada" value="1" />
                        <Picker.Item label="Gravemente comprometido" value="2" />
                        <Picker.Item label="Incapaz de resolver" value="3" />
                      </Picker>
                    </TouchableOpacity>
                  </Block>

                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Em relação a assuntos da comunidade (marque a opção que mais se encaixa com o paciente)</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={cdr4}
                        onValueChange={(itemValue, itemIndex) => { setCDR4(itemValue) }}
                      >
                        <Picker.Item label="Nenhum selecionado" value="null" />
                        <Picker.Item label="Normal" value="0" />
                        <Picker.Item label="Leve dificuldade" value="0.5" />
                        <Picker.Item label="Desempenha algumas atividades" value="1" />
                        <Picker.Item label="Precisa de acompanhamento" value="2" />
                        <Picker.Item label="Incapaz" value="3" />
                      </Picker>
                    </TouchableOpacity>
                  </Block>

                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Em relação ao lar e passatempos (marque a opção que mais se encaixa com o paciente)</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={cdr5}
                        onValueChange={(itemValue, itemIndex) => { setCDR5(itemValue) }}
                      >
                        <Picker.Item label="Nenhum selecionado" value="null" />
                        <Picker.Item label="Normal" value="0" />
                        <Picker.Item label="Levemente afetados" value="0.5" />
                        <Picker.Item label="Abandono de tarefas mais dificeis" value="1" />
                        <Picker.Item label="Apenas tarefas simples" value="2" />
                        <Picker.Item label="Sem qualquer atividade significativa" value="3" />
                      </Picker>
                    </TouchableOpacity>
                  </Block>

                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Em relação a cuidados pessoais (marque a opção que mais se encaixa com o paciente)</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dropdown"
                        style={styles.picker}
                        selectedValue={cdr6}
                        onValueChange={(itemValue, itemIndex) => { setCDR6(itemValue) }}
                      >
                        <Picker.Item label="Nenhum selecionado" value="null" />
                        <Picker.Item label="Plenamente capaz" value="0" />
                        <Picker.Item label="Levemente afetado" value="0.5" />
                        <Picker.Item label="Necessita de assistência ocasional" value="1" />
                        <Picker.Item label="Requer assistência" value="2" />
                        <Picker.Item label="Requer muito auxílio nos cuidados" value="3" />
                      </Picker>
                    </TouchableOpacity>
                  </Block>
                  <Block row center>
                    <Button round uppercase color="#3e0057" onPress={() => test("")}>FECHAR</Button>
                    <Button round uppercase color="primary" onPress={() => cdr()}>SALVAR</Button>
                  </Block>
                </>}
                {activeTab == "new" && activeTest == "minimental" && <>
                  <Block row space="evenly">
                    <Text muted style={styles.buttonText}>Mini Exame do Estado Mental (MEEM)</Text>
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Orientação (marque a opção, se o usuário acertou a resposta)</Text>
                    <Text muted style={styles.buttonText}>Em que ano estamos?</Text>
                    <Checkbox color="#3e0057" label="Ano" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem1_1} onChange={(e) => setMEEM1_1(e)} />
                    <Text muted style={styles.buttonText}>Em que estação do ano estamos?</Text>
                    <Checkbox color="#3e0057" label="Estação" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem1_2} onChange={(e) => setMEEM1_2(e)} />
                    <Text muted style={styles.buttonText}>Qual o dia da semana em que estamos?</Text>
                    <Checkbox color="#3e0057" label="Dia da semana" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem1_3} onChange={(e) => setMEEM1_3(e)} />
                    <Text muted style={styles.buttonText}>Qual o dia do mês em que estamos?</Text>
                    <Checkbox color="#3e0057" label="Dia do mês" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem1_4} onChange={(e) => setMEEM1_4(e)} />
                    <Text muted style={styles.buttonText}>Qual o mês em que estamos?</Text>
                    <Checkbox color="#3e0057" label="Mês" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem1_5} onChange={(e) => setMEEM1_5(e)} />
                    <Text muted style={styles.buttonText}>Qual o país onde estamos?</Text>
                    <Checkbox color="#3e0057" label="Pais" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem1_6} onChange={(e) => setMEEM1_6(e)} />
                    <Text muted style={styles.buttonText}>Qual o estados onde estamos?</Text>
                    <Checkbox color="#3e0057" label="Estado" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem1_7} onChange={(e) => setMEEM1_7(e)} />
                    <Text muted style={styles.buttonText}>Qual a cidade onde estamos?</Text>
                    <Checkbox color="#3e0057" label="Cidade" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem1_8} onChange={(e) => setMEEM1_8(e)} />
                    <Text muted style={styles.buttonText}>Qual a rua ou local onde estamos?</Text>
                    <Checkbox color="#3e0057" label="Rua/local" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem1_9} onChange={(e) => setMEEM1_9(e)} />
                    <Text muted style={styles.buttonText}>Qual o andar onde estamos?</Text>
                    <Checkbox color="#3e0057" label="Andar" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem1_10} onChange={(e) => setMEEM1_10(e)} />
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Registro (marque a opção, se o usuário acertou a resposta)</Text>
                    <Text muted style={styles.buttonText}>Solicite ao paciente que preste atenção pois terá que repetir as palavras mais tarde. Peça para repetir as 3 palavras depois de vocês dizê-las. Se necessário, repita até 5 vezes para aprender as palavras, porém a pontuação é referente a primeira tentativa de repetição.</Text>
                    <Text muted style={styles.buttonText}>O objetivo é dizer três palavras: PENTE RUA AZUL</Text>
                    <Checkbox color="#3e0057" label="Pente" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem2_1} onChange={(e) => setMEEM2_2(e)} />
                    <Checkbox color="#3e0057" label="Rua" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem2_2} onChange={(e) => setMEEM2_2(e)} />
                    <Checkbox color="#3e0057" label="Azul" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem2_3} onChange={(e) => setMEEM2_3(e)} />
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Atenção e cálculo (marque a opção, se o usuário acertou a resposta)</Text>
                    <Text muted style={styles.buttonText}>Peça para que o paciente faça as subtrações seriadas. Se errar na primeira ou na segunda tentativa, peça para soletrar e pule a etapa da subtração</Text>
                    <Text muted style={styles.buttonText}>Subtrair: 100 - 7</Text>
                    <Checkbox color="#3e0057" label="(93)" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem3_1} onChange={(e) => setMEEM3_1(e)} />
                    <Text muted style={styles.buttonText}>Subtrair: 93 - 7</Text>
                    <Checkbox color="#3e0057" label="(86)" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem3_2} onChange={(e) => setMEEM3_2(e)} />
                    <Text muted style={styles.buttonText}>Subtrair: 86 - 7</Text>
                    <Checkbox color="#3e0057" label="(79)" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem3_3} onChange={(e) => setMEEM3_3(e)} />
                    <Text muted style={styles.buttonText}>Subtrair: 79 - 7</Text>
                    <Checkbox color="#3e0057" label="(72)" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem3_4} onChange={(e) => setMEEM3_4(e)} />
                    <Text muted style={styles.buttonText}>Subtrair: 72 - 7</Text>
                    <Checkbox color="#3e0057" label="(65)" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem3_5} onChange={(e) => setMEEM3_5(e)} />

                    <Text muted style={styles.buttonText}>Se o usuário errou os calculos acima, marque a caixa abaixo e peça para que ele soletre MUNDO de trás pra frente (marque as letras que ele soletrou corretamente)</Text>
                    <Checkbox color="#3e0057" label="Errou" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem3_erro} onChange={(e) => setMEEM3_erro(e)} />
                    <Checkbox color="#3e0057" label="O" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem3_11} onChange={(e) => setMEEM3_11(e)} />
                    <Checkbox color="#3e0057" label="D" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem3_22} onChange={(e) => setMEEM3_22(e)} />
                    <Checkbox color="#3e0057" label="N" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem3_33} onChange={(e) => setMEEM3_33(e)} />
                    <Checkbox color="#3e0057" label="U" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem3_44} onChange={(e) => setMEEM3_44(e)} />
                    <Checkbox color="#3e0057" label="M" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem3_55} onChange={(e) => setMEEM3_55(e)} />
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Evocação (marque a opção, se o usuário lembrar a palavra)</Text>
                    <Text muted style={styles.buttonText}>Perguntar pelas 3 palavras anteriores: PENTE RUA AZUL</Text>
                    <Checkbox color="#3e0057" label="Pente" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem4_1} onChange={(e) => setMEEM4_1(e)} />
                    <Checkbox color="#3e0057" label="Rua" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem4_2} onChange={(e) => setMEEM4_2(e)} />
                    <Checkbox color="#3e0057" label="Azul" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem4_3} onChange={(e) => setMEEM4_3(e)} />
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Linguagem (marque a opção, se o usuário lembrar a palavra)</Text>
                    <Text muted style={styles.buttonText}>Mostre um relógio e uma caneta e peça para nomear</Text>
                    <Checkbox color="#3e0057" label="Relógio" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem5_1} onChange={(e) => setMEEM5_1(e)} />
                    <Checkbox color="#3e0057" label="Caneta" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem5_2} onChange={(e) => setMEEM5_2(e)} />
                    <Text muted style={styles.buttonText}>Repetir: "Nem aqui, nem ali, nem lá"</Text>
                    <Checkbox color="#3e0057" label="Repetiu corretamente" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem6_1} onChange={(e) => setMEEM6_1(e)} />
                    <Text muted style={styles.buttonText}>Seguir o comando (falado) de três estágios: Pegue o papel com a mão direita, dobre ao meio e ponha no chão</Text>
                    <Checkbox color="#3e0057" label="Pegar papel com a mão direita" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem7_1} onChange={(e) => setMEEM7_1(e)} />
                    <Checkbox color="#3e0057" label="Dobre ao meio" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem7_2} onChange={(e) => setMEEM7_2(e)} />
                    <Checkbox color="#3e0057" label="Ponha no chão" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem7_3} onChange={(e) => setMEEM7_3(e)} />
                    <Text muted style={styles.buttonText}>Escreva em um papel e peça para a pessoa executar: Feche os olhos</Text>
                    <Checkbox color="#3e0057" label="Fechou os olhos" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem8_1} onChange={(e) => setMEEM8_1(e)} />
                    <Text muted style={styles.buttonText}>Solicite que o paciente escreva uma frase (um pensamento ou ideia completa)</Text>
                    <Checkbox color="#3e0057" label="Frase/ideia correta" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem9_1} onChange={(e) => setMEEM9_1(e)} />
                    <Text muted style={styles.buttonText}>Copiar o desenho</Text>
                    <Block row space="evenly" style={{ padding: 10 }}>
                      <Image source={require('./assets/meem1.png')} style={{ minWidth: 100, minHeight: 100 }} />
                    </Block>
                    <Checkbox color="#3e0057" label="Desenho correto" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem10_1} onChange={(e) => setMEEM10_1(e)} />
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Qual a escolaridade do paciente?</Text>
                    <Text muted style={styles.buttonText}>Quantos anos concluidos de educação formal (deixe marcado apenas a opção ao qual o paciente se encaixa)</Text>
                    <Checkbox color="#3e0057" label="Analfabeto" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem11_1} onChange={(e) => { setMEEM11_1(true); setMEEM11_2(false); setMEEM11_3(false); setMEEM11_4(false); }} />
                    <Checkbox color="#3e0057" label="1 a 5 anos de escolaridade" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem11_2} onChange={(e) => { setMEEM11_1(false); setMEEM11_2(true); setMEEM11_3(false); setMEEM11_4(false); }} />
                    <Checkbox color="#3e0057" label="6 a 11 anos de escolaridade" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem11_3} onChange={(e) => { setMEEM11_1(false); setMEEM11_2(false); setMEEM11_3(true); setMEEM11_4(false); }} />
                    <Checkbox color="#3e0057" label="12 anos ou mais de escolaridade" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={meem11_4} onChange={(e) => { setMEEM11_1(false); setMEEM11_2(false); setMEEM11_3(false); setMEEM11_4(true); }} />
                  </Block>
                  <Block row center>
                    <Button round uppercase color="#3e0057" onPress={() => test("")}>FECHAR</Button>
                    <Button round uppercase color="primary" onPress={() => meem()}>SALVAR</Button>
                  </Block>
                </>}
                {activeTab == "new" && activeTest == "moca" && <>
                  <Block row space="evenly">
                    <Text muted style={styles.buttonText}>Montreal Cognitive Assessment (MoCA)</Text>
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Visuoespacial / executiva</Text>
                    <Text muted style={styles.buttonText}>Complete a imagem a seguir (marque a opção abaixo, se o usuário conseguir completar a imagem)</Text>
                    <Block row space="evenly" style={{ padding: 10 }}>
                      <Image source={require('./assets/moca1.png')} style={{ minWidth: 100, minHeight: 100 }} />
                    </Block>
                    <Checkbox color="#3e0057" label="Desenho correto" labelStyle={styles.labelCheckbox} labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca1_1} onChange={(e) => setMOCA1_1(e)} />
                    <Text muted style={styles.buttonText}>Copiar o cubo (marque a opção abaixo, se o usuário conseguir copiar o cubo)</Text>
                    <Block row space="evenly" style={{ padding: 10 }}>
                      <Image source={require('./assets/moca2.png')} style={{ minWidth: 100, minHeight: 100 }} />
                    </Block>
                    <Checkbox color="#3e0057" label="Desenho correto" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca1_2} onChange={(e) => setMOCA1_2(e)} />
                    <Text muted style={styles.buttonText}>Peça desenhar um Relógio - onze horas e dez minutos (marque a opção abaixo, de acordo com as opções que o usuários conseguiu realizar)</Text>
                    <Checkbox color="#3e0057" label="Contorno" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca1_3} onChange={(e) => setMOCA1_3(e)} />
                    <Checkbox color="#3e0057" label="Números" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca1_4} onChange={(e) => setMOCA1_4(e)} />
                    <Checkbox color="#3e0057" label="Ponteiros" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca1_5} onChange={(e) => setMOCA1_5(e)} />
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Nomeação</Text>
                    <Text muted style={styles.buttonText}>Qual o nome do animal a seguir? (marque a opção abaixo, se o usuário acertou a resposta)</Text>
                    <Block row space="evenly" style={{ padding: 10 }}>
                      <Image source={require('./assets/moca3.png')} style={{ minWidth: 100, minHeight: 100 }} />
                    </Block>
                    <Checkbox color="#3e0057" label="Resposta correta" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca2_1} onChange={(e) => setMOCA2_1(e)} />
                    <Text muted style={styles.buttonText}>Qual o nome do animal a seguir? (marque a opção abaixo, se o usuário acertou a resposta)</Text>
                    <Block row space="evenly" style={{ padding: 10 }}>
                      <Image source={require('./assets/moca4.png')} style={{ minWidth: 100, minHeight: 100 }} />
                    </Block>
                    <Checkbox color="#3e0057" label="Resposta correta" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca2_2} onChange={(e) => setMOCA2_2(e)} />
                    <Text muted style={styles.buttonText}>Qual o nome do animal a seguir? (marque a opção abaixo, se o usuário acertou a resposta)</Text>
                    <Block row space="evenly" style={{ padding: 10 }}>
                      <Image source={require('./assets/moca5.png')} style={{ minWidth: 100, minHeight: 100 }} />
                    </Block>
                    <Checkbox color="#3e0057" label="Resposta correta" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca2_3} onChange={(e) => setMOCA2_3(e)} />
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Memória (sem pontuação - repetir depois no passo evocação tardia)</Text>
                    <Text muted style={styles.buttonText}>Leia a lista de palavras, o sujeito deve repeti-la, faça duas tentativas, evocar após 5 minutos</Text>
                    <Text muted style={styles.buttonText}>Rosto - Veludo - Igreja - Margarida - Vermelho</Text>
                    <Checkbox color="#3e0057" label="1° tentativa (sem pontuação)" labelStyle={styles.labelCheckbox} style={styles.checkbox} />
                    <Checkbox color="#3e0057" label="2° tentativa (sem pontuação)" labelStyle={styles.labelCheckbox} style={styles.checkbox} />
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Atenção</Text>
                    <Text muted style={styles.buttonText}>Leia a sequência de números (1 por segundo)</Text>
                    <Text muted style={styles.buttonText}>(2 1 8 5 4) em ordem direta (marque abaixo se o usuário respondeu corretamente)</Text>
                    <Checkbox color="#3e0057" label="Resposta correta" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca3_1} onChange={(e) => setMOCA3_1(e)} />
                    <Text muted style={styles.buttonText}>(7 4 2) em ordem indireta (marque abaixo se o usuário respondeu corretamente)</Text>
                    <Checkbox color="#3e0057" label="Resposta correta" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca3_2} onChange={(e) => setMOCA3_2(e)} />
                    <Text muted style={styles.buttonText}>Leia a série de linhas. O Sujeito deve bater com a mão na mesa, cada vez que ouvir a letra (A). Não marque a caixa abaixo se teve 2 ou mais erros</Text>
                    <Text muted style={styles.buttonText}>Linha: F B A C M N A A J K L B A F A K D E A A A J A M O F A A B</Text>
                    <Checkbox color="#3e0057" label="Série A Correta" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca4_1} onChange={(e) => setMOCA4_1(e)} />
                    <Text muted style={styles.buttonText}>Subtração de 7 começando pelo 100 (93) (86) (79) (72) (65) (deixe marcado apenas a opção correta)</Text>
                    <Checkbox color="#3e0057" label="4 ou 5 subtrações corretas" labelStyle={styles.labelCheckbox} style={styles.checkbox} checked={moca5_1} value={moca5_1} onChange={(e) => { setMOCA5_1(true); setMOCA5_2(false); setMOCA5_3(false); setMOCA5_4(false); }} />
                    <Checkbox color="#3e0057" label="2 ou 3 subtrações corretas" labelStyle={styles.labelCheckbox} style={styles.checkbox} checked={moca5_2} value={moca5_2} onChange={(e) => { setMOCA5_1(false); setMOCA5_2(true); setMOCA5_3(false); setMOCA5_4(false); }} />
                    <Checkbox color="#3e0057" label="1 subtração correta" labelStyle={styles.labelCheckbox} style={styles.checkbox} checked={moca5_3} value={moca5_3} onChange={(e) => { setMOCA5_1(false); setMOCA5_2(false); setMOCA5_3(true); setMOCA5_4(false); }} />
                    <Checkbox color="#3e0057" label="0 subtrações corretas" labelStyle={styles.labelCheckbox} style={styles.checkbox} checked={moca5_4} value={moca5_4} onChange={(e) => { setMOCA5_1(false); setMOCA5_2(false); setMOCA5_3(false); setMOCA5_4(true); }} />
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Linguagem</Text>
                    <Text muted style={styles.buttonText}>Repetir: Eu somente sei que é João quem será ajudado hoje</Text>
                    <Checkbox color="#3e0057" label="Resposta correta" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca6_1} onChange={(e) => setMOCA6_1(e)} />
                    <Text muted style={styles.buttonText}>Repetir: O gato sempre se esconde embaixo do Sofá quando o cachorro está na sala</Text>
                    <Checkbox color="#3e0057" label="Resposta correta" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca6_2} onChange={(e) => setMOCA6_2(e)} />
                    <Text muted style={styles.buttonText}>Fluência verbal: dzier o maior número possivel de palavras que comecem pela letra F (1 minuto)</Text>
                    <Checkbox color="#3e0057" label="Maior ou igual a 11 palavras com a letra F" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca7_1} onChange={(e) => setMOCA7_1(e)} />
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Abstração</Text>
                    <Text muted style={styles.buttonText}>Semelhança por exemplo entre banana e laranja = fruta</Text>
                    <Text muted style={styles.buttonText}>Qual a semelhança entre trem - bicicleta? (marque abaixo se o usuário respondeu corretamente)</Text>
                    <Checkbox color="#3e0057" label="Semelhança correta" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca8_1} onChange={(e) => setMOCA8_1(e)} />
                    <Text muted style={styles.buttonText}>Qual a semelhança entre relógio - régua? (marque abaixo se o usuário respondeu corretamente)</Text>
                    <Checkbox color="#3e0057" label="Semelhança correta" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca8_2} onChange={(e) => setMOCA8_2(e)} />
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Evocação tardia</Text>
                    <Text muted style={styles.buttonText}>O sujeito deve se recordas das palavras do teste de memória (sem pistas)</Text>
                    <Checkbox color="#3e0057" label="Rosto" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca9_1} onChange={(e) => setMOCA9_1(e)} />
                    <Checkbox color="#3e0057" label="Veludo" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca9_2} onChange={(e) => setMOCA9_2(e)} />
                    <Checkbox color="#3e0057" label="Igreja" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca9_3} onChange={(e) => setMOCA9_3(e)} />
                    <Checkbox color="#3e0057" label="Margarida" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca9_4} onChange={(e) => setMOCA9_4(e)} />
                    <Checkbox color="#3e0057" label="Vermelho" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca9_5} onChange={(e) => setMOCA9_5(e)} />
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Orientação</Text>
                    <Text muted style={styles.buttonText}>O sujeito deve saber responder as dúvidas abaixo (marque se o usuário acertou a resposta)</Text>
                    <Checkbox color="#3e0057" label="Qual dia do mês estamos" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca10_1} onChange={(e) => setMOCA10_1(e)} />
                    <Checkbox color="#3e0057" label="Qual mês" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca10_2} onChange={(e) => setMOCA10_2(e)} />
                    <Checkbox color="#3e0057" label="Qual Ano" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca10_3} onChange={(e) => setMOCA10_3(e)} />
                    <Checkbox color="#3e0057" label="Qual dia da semana" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca10_4} onChange={(e) => setMOCA10_4(e)} />
                    <Checkbox color="#3e0057" label="Em que Lugar" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca10_5} onChange={(e) => setMOCA10_5(e)} />
                    <Checkbox color="#3e0057" label="Em qual Cidade" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca10_6} onChange={(e) => setMOCA10_6(e)} />
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Escolaridade</Text>
                    <Text muted style={styles.buttonText}>Se o usuário possui menor ou igual a 12 anos de escolaridade, marque a opção abaixo</Text>
                    <Checkbox color="#3e0057" label="Escolaridade <= 12 anos" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={moca11_1} onChange={(e) => setMOCA11_1(e)} />
                  </Block>
                  <Block row center>
                    <Button round uppercase color="#3e0057" onPress={() => test("")}>FECHAR</Button>
                    <Button round uppercase color="primary" onPress={() => moca()}>SALVAR</Button>
                  </Block>
                </>}
                {activeTab == "new" && activeTest == "sintomas" && <>
                  <Block row space="evenly">
                    <Text muted style={styles.buttonText}>Teste de Sintomas</Text>
                  </Block>
                  {listaSintomas != null ? listaSintomas.map((e) => {
                    return <Block style={styles.cardQuestion} key={e.sintomasId}>
                      <Checkbox color="#3e0057" label={e.descricao} style={styles.checkboxSintoma} onChange={(x) => CheckTesteSintoma(e.sintomasId)} />
                    </Block>
                  }) : null}
                  <Block row center>
                    <Button round uppercase color="#3e0057" onPress={() => test("")}>FECHAR</Button>
                    <Button round uppercase color="primary" onPress={() => sendTesteSintoma()}>SALVAR</Button>
                  </Block>
                </>}
              </>}
              {activeTab == "results" && secondTab == "acol" && patientSelected == null && <>
                <Block row space="evenly">
                  <Text muted style={styles.buttonText}>Acolhimento</Text>
                </Block>
                <Block style={styles.cardQuestion}>
                  <Block center>
                    <Button round uppercase color="#3e0057" onPress={() => setPatientSelected("new")}>Novo Paciente</Button>
                  </Block>
                  <Text h4 center style={styles.buttonText}>OU</Text>
                  <Text muted center style={styles.buttonText}>Selecione um paciente</Text>
                  <TouchableOpacity style={styles.touchableOpacity}>
                    <Picker
                      mode="dropdown"
                      style={styles.picker}
                      selectedValue={patientSelected}
                      onValueChange={(itemValue, itemIndex) => { if (itemValue != "null") { setPatientSelected(itemValue) } }}
                    >
                      <Picker.Item label="Nenhum selecionado" value="null" />
                      {patient != null ? patient.data.map((e) => {
                        return <Picker.Item label={e.firstName + " " + e.lastName} value={e.id} key={e.id} />;
                      }) : null}
                    </Picker>
                  </TouchableOpacity>
                </Block>
              </>}
              {activeTab == "results" && secondTab == "acol" && patientSelected != null && patientSelected != "new" && <>
                <Block row space="evenly">
                  <Text muted style={styles.buttonText}>Acolhimento</Text>
                </Block>
                <Block style={styles.cardQuestion}>
                  <Text muted center style={styles.buttonText}>Frequência Cardiaca (batimentos por minuto (bpm))</Text>
                  <Input type="numeric" value={frequencia} onChangeText={(e) => setFrequencia(e)} />
                  <Text muted center style={styles.buttonText}>Saturação (saturação de oxigênio)</Text>
                  <Input type="numeric" value={saturacao} onChangeText={(e) => setSaturacao(e)} />
                  <Text muted center style={styles.buttonText}>Pressão Arterial (exemplo: 14 / 8)</Text>
                  <Block row>
                    <Input type="numeric" style={{ width: '85%' }} value={pressao1} onChangeText={(e) => setPressao1(e)} />
                    <Text muted style={{ marginTop: 18, marginRight: 18 }}>por</Text>
                    <Input type="numeric" style={{ width: '85%' }} value={pressao2} onChangeText={(e) => setPressao2(e)} />
                  </Block>
                  <Text muted center style={styles.buttonText}>Glicemia (nível de glicose no sangue)</Text>
                  <Input type="numeric" value={glicemia} onChangeText={(e) => setGlicemia(e)} />
                  <Text muted center style={styles.buttonText}>Sintomas (insira aqui se o paciente tem algum sintoma aparente para doenças de demência)</Text>
                  <Input type="default" value={sintomas} onChangeText={(e) => setSintomas(e)} />
                  <Text muted center style={styles.buttonText}>Medicamentos Utilizados (insira aqui se o paciente faz uso de algum medicamento)</Text>
                  <Input type="default" value={medicamentos} onChangeText={(e) => setMedicamentos(e)} />
                  <Text muted center style={styles.buttonText}>Observações (insira aqui informações que você acha interessante para histórico)</Text>
                  <Input type="default" value={observacoes} onChangeText={(e) => setObservacoes(e)} />
                </Block>
                <Block row center>
                  <Button round uppercase color="#3e0057" onPress={() => tab("home")}>FECHAR</Button>
                  <Button round uppercase color="primary" onPress={() => newAcolhimento()}>SALVAR</Button>
                </Block>
              </>}
              {activeTab == "results" && secondTab == "acol" && patientSelected != null && patientSelected == "new" && <>
                <Block row space="evenly">
                  <Text muted style={styles.buttonText}>Acolhimento - Novo</Text>
                </Block>
                <Block style={styles.cardQuestion}>
                  <Text muted center style={styles.buttonText}>Primeiro Nome</Text>
                  <Input type="default" value={firstName} onChangeText={(e) => setFirstName(e)} />
                  <Text muted center style={styles.buttonText}>Último Nome</Text>
                  <Input type="default" value={lastName} onChangeText={(e) => setLastName(e)} />
                  <Text muted center style={styles.buttonText}>Data de Nascimento</Text>
                  <DatePicker
                    style={{ width: '100%', borderRadius: 8 }}
                    date={idade}
                    mode="date"
                    format="DD/MM/YYYY"
                    confirmBtnText="Confirma"
                    cancelBtnText="Cancela"
                    onDateChange={(date) => setIdade(date)}
                  />
                  <Text muted center style={styles.buttonText}>Sexo</Text>
                  <TouchableOpacity style={styles.touchableOpacity}>
                    <Picker
                      mode="dropdown"
                      style={styles.picker}
                      selectedValue={sexo}
                      onValueChange={(itemValue, itemIndex) => { setSexo(itemValue) }}
                    >
                      <Picker.Item label="Nenhum selecionado" value="null" />
                      <Picker.Item label="Masculino" value="Masculino" />
                      <Picker.Item label="Feminino" value="Feminino" />
                      <Picker.Item label="Outro" value="Outro" />
                    </Picker>
                  </TouchableOpacity>
                  <Text muted center style={styles.buttonText}>Trabalho</Text>
                  <Input type="default" value={trabalho} onChangeText={(e) => setTrabalho(e)} />
                  <Text muted center style={styles.buttonText}>Estado Civil</Text>
                  <TouchableOpacity style={styles.touchableOpacity}>
                    <Picker
                      mode="dropdown"
                      style={styles.picker}
                      selectedValue={estadoCivil}
                      onValueChange={(itemValue, itemIndex) => { setEstadoCivil(itemValue) }}
                    >
                      <Picker.Item label="Nenhum selecionado" value="null" />
                      <Picker.Item label="Solteiro(a)" value="Solteiro(a)" />
                      <Picker.Item label="Casado(a)" value="Casado(a)" />
                      <Picker.Item label="Separado(a)" value="Separado(a)" />
                      <Picker.Item label="Divorciado(a)" value="Divorciado(a)" />
                      <Picker.Item label="Viúvo(a)" value="Viúvo(a)" />
                      <Picker.Item label="Outro" value="Outro" />
                    </Picker>
                  </TouchableOpacity>
                </Block>
                <Block row center>
                  <Button round uppercase color="#3e0057" onPress={() => tab("home")}>FECHAR</Button>
                  <Button round uppercase color="primary" onPress={() => newPatient()}>SALVAR</Button>
                </Block>
              </>}
              {activeTab == "results" && secondTab == "results" && <>
                <Block row space="evenly">
                  <Text muted style={styles.buttonText}>Resultados</Text>
                </Block>
              </>}
              {activeTab == "results" && secondTab == "patients" && <>
                <Block row space="evenly">
                  <Text muted style={styles.buttonText}>Pacientes</Text>
                </Block>
                {patient != null ? patient.data.map((e) => {
                  return <Card
                    key={e.id}
                    flex
                    borderless
                    style={styles.card}
                    title={"   " + e.firstName + " " + e.lastName}
                    caption={"   Testes aplicados: " + e.totalTests}
                    avatar="https://siddproject.azurewebsites.net/img/theme/avatar.png"
                  />
                }) : null}
              </>}
              {activeTab == "results" && secondTab == "medics" && <>
                <Block row space="evenly">
                  <Text muted style={styles.buttonText}>Médicos</Text>
                </Block>
              </>}
              {activeTab == "results" && secondTab == "unitys" && <>
                <Block row space="evenly">
                  <Text muted style={styles.buttonText}>Unidades</Text>
                </Block>
              </>}
              {activeTab == "results" && secondTab == "tests" && <>
                <Block row space="evenly">
                  <Text muted style={styles.buttonText}>Resultado</Text>
                </Block>
                <Block style={styles.cardQuestion}>
                  <Block style={{ paddingTop: 10 }}></Block>
                  <Text h4 center style={styles.buttonText} color="#3e0057">{testResult}</Text>
                  <Block style={{ paddingTop: 10 }}></Block>
                  <Text h1 bold={true} center color="#3e0057" style={styles.buttonText}>{totalResult}</Text>
                  <Text muted center style={styles.buttonText}>PONTO(S)</Text>
                  <Text muted center style={styles.buttonText}>{obsResult}</Text>
                  <Block style={{ paddingTop: 20 }}></Block>
                </Block>
              </>}
              {activeTab == "user" && <>
                <Block center>
                  <Image source={require('./assets/avatar.png')} style={styles.avatar} />
                </Block>
                <Block row space="evenly">
                  <Text muted style={styles.buttonText}>Informações do usuário</Text>
                </Block>
                <Block flex center>
                  <Text h3>Douglas Dotto</Text>
                  <Button round uppercase size="large" icon="edit" iconFamily="antdesign" color="#3e0057">Alterar senha</Button>
                  <Button round uppercase size="large" icon="close" iconFamily="antdesign" color="#3e0057" onPress={() => { auth.logout(); logout() }}>Sair</Button>
                </Block>
              </>}
            </KeyboardAvoidingView>
          </ScrollView>
        </Block>

        <BottomNavigation
          tabs={tabs}
          activeTab={activeTab}
          renderTab={({ tab, isActive }) => (
            <FullTab
              isActive={isActive}
              key={tab.key}
              label={tab.label}
              renderIcon={() => <Icon name={tab.icon} size={24} color="white" />}
            />
          )}
          onTabPress={(newTab) => { tab(newTab.key) }}
          useLayoutAnimation
        />
      </>}

    </Block >
  );
}

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 10
  },
  picker: {
    height: 45,
    color: "#3e0057b8",
    marginLeft: 6,
    borderWidth: 0,
  },
  checkbox: {
    height: 45,
    color: "#3e0057b8",
    marginLeft: 6,
  },
  labelCheckbox: {
    color: "#3e0057b8",
  },
  checkboxSintoma: {
    paddingRight: 10,
    marginLeft: 6,
    marginRight: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  touchableOpacity: {
    borderWidth: 0,
    borderRadius: 10,
    marginTop: 5
  },
  card: {
    padding: 10,
    backgroundColor: "#fff",
    marginTop: 15,
    borderRadius: 20,
    elevation: 2
  },
  cardQuestion: {
    padding: 10,
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 20,
    elevation: 2,
  },
  avatar: {
    borderRadius: 100,
    height: 150,
    width: 150,
  },
  blockImage: {
    position: 'absolute',
    borderRadius: 100,
    height: width * 0.2,
    width: width * 0.2,
  },
  block: {
    marginTop: 15,
    backgroundColor: "#3e0057",
    borderWidth: 3.5,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    elevation: 1,
    color: '#fff',
    borderRadius: 100,
    height: width * 0.2,
    width: width * 0.2,
    shadowOpacity: 0.5,
    elevation: 15,
  },
  button: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    width: 'auto',
    height: 'auto',
  },
  buttonText: {
    marginTop: 10,
  },
  card: {
    borderColor: 'transparent',
    marginHorizontal: BASE_SIZE,
    marginVertical: BASE_SIZE / 2,
    padding: BASE_SIZE,
    backgroundColor: COLOR_WHITE,
    shadowOpacity: 0.40,
  },
});
