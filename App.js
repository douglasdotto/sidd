import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Dimensions, Image, Picker, ToastAndroid, TouchableOpacity, ActivityIndicator, KeyboardAvoidingView } from 'react-native';
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
import moment from 'moment';

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
  const [tempoDeEstudo, setTempoDeEstudo] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [raca, setRaca] = useState("");
  const [resideCom, setResideCom] = useState("");
  const [possuiCuidador, setPossuiCuidador] = useState("");
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
  // GDS
  const [gds1, setGDS1] = useState(null);
  const [gds2, setGDS2] = useState(null);
  const [gds3, setGDS3] = useState(null);
  const [gds4, setGDS4] = useState(null);
  const [gds5, setGDS5] = useState(null);
  const [gds6, setGDS6] = useState(null);
  const [gds7, setGDS7] = useState(null);
  const [gds8, setGDS8] = useState(null);
  const [gds9, setGDS9] = useState(null);
  const [gds10, setGDS10] = useState(null);
  const [gds11, setGDS11] = useState(null);
  const [gds12, setGDS12] = useState(null);
  const [gds13, setGDS13] = useState(null);
  const [gds14, setGDS14] = useState(null);
  const [gds15, setGDS15] = useState(null);
  // GDS
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
      label: 'Tutoriais',
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
      title: 'Tutoriais sobre testes e demências',
      caption: 'Clique para acessar',
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
      ToastAndroid.show('Seja bem-vindo de volta! 👋', ToastAndroid.SHORT);
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
      ToastAndroid.show('Seu login foi realizado com sucesso! 👋', ToastAndroid.SHORT);
      setActiveTab("home");
    } else {
      setActiveTab("login");
      let notifications = result.notifications
      if (notifications && notifications.length > 0) {
        notifications.forEach(not => {
          ToastAndroid.show(not.message, ToastAndroid.SHORT);
        })
      }
    }
    setLoading(false);
  }

  async function newPatient() {
    setLoading(true);
    if (firstName == "" || lastName == "" || idade == "" || sexo == "" || estadoCivil == "" || raca == "" || resideCom == "" || possuiCuidador == "") {
      ToastAndroid.show("Por favor, preencha todas as opções de acordo com o paciente.", ToastAndroid.SHORT);
      setLoading(false);
      return;
    }
    var data = {
      FirstName: firstName,
      LastName: lastName,
      Sexo: sexo,
      IdadeData: moment(idade).format("DD/MM/YYYY").toString(),
      TempoDeEstudo: tempoDeEstudo,
      EstadoCivil: estadoCivil,
      Raca: raca,
      ResideCom: resideCom,
      PossuiCuidador: possuiCuidador
    };
    var result = await client.postApi(`${endpoints.user.insertPatient}`, data, false);
    if (result.statusCode === 200) {
      setFirstName("");
      setLastName("");
      setIdade("");
      setSexo("");
      ToastAndroid.show('O paciente foi cadastrado com sucesso! 👋', ToastAndroid.SHORT);
      setPatientSelected(result.response.id);
    } else {
      let notifications = result.notifications
      if (notifications && notifications.length > 0) {
        notifications.forEach(not => {
          ToastAndroid.show(not.message, ToastAndroid.SHORT);
        })
      }
      tab("home");
    }
    setLoading(false);
  }

  async function newAcolhimento() {
    setLoading(true);
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
      ToastAndroid.show('Os dados do acolhimento foram salvos com sucesso! 👋', ToastAndroid.SHORT);
      tab("home");
    } else {
      let notifications = result.notifications
      if (notifications && notifications.length > 0) {
        notifications.forEach(not => {
          ToastAndroid.show(not.message, ToastAndroid.SHORT);
        })
      }
      tab("home");
    }
    setLoading(false);
  }


  async function pfeffer() {
    setLoading(true);
    if (pfeffer1 == null || pfeffer2 == null || pfeffer3 == null || pfeffer4 == null || pfeffer5 == null || pfeffer6 == null || pfeffer7 == null || pfeffer8 == null || pfeffer9 == null || pfeffer10 == null) {
      ToastAndroid.show("Por favor, marque todas as opções de acordo com o paciente.", ToastAndroid.SHORT);
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
          ToastAndroid.show(not.message, ToastAndroid.SHORT);
        })
      }
    }
    setLoading(false);
  }

  async function gds() {
    setLoading(true);
    var data = {
      userId: patientSelected,
      question1: gds1 ? 0 : 1,
      question2: gds2 ? 1 : 0,
      question3: gds3 ? 1 : 0,
      question4: gds4 ? 1 : 0,
      question5: gds5 ? 0 : 1,
      question6: gds6 ? 1 : 0,
      question7: gds7 ? 0 : 1,
      question8: gds8 ? 1 : 0,
      question9: gds9 ? 1 : 0,
      question10: gds10 ? 1 : 0,
      question11: gds11 ? 0 : 1,
      question12: gds12 ? 1 : 0,
      question13: gds13 ? 0 : 1,
      question14: gds14 ? 1 : 0,
      question15: gds15 ? 1 : 0,
      createdBy: userData.id
    };
    var result = await client.postApi(`${endpoints.app.insertGDS}`, data, false);
    if (result.statusCode === 200) {
      setGDS1(null);
      setGDS2(null);
      setGDS3(null);
      setGDS4(null);
      setGDS5(null);
      setGDS6(null);
      setGDS7(null);
      setGDS8(null);
      setGDS9(null);
      setGDS10(null);
      setGDS11(null);
      setGDS12(null);
      setGDS13(null);
      setGDS14(null);
      setGDS15(null);
      setPatientSelected(null);
      setActiveTab("results");
      setSecondTab("tests");
      setTestResult("GDS");
      setTotalResult(result.response.total);
      if (result.response.total >= 11)
        setObsResult("Quadro de depressão severa");
      else if (result.response.total >= 6 && result.response.total <= 10)
        setObsResult("Quadro de depressão leve");
      else
        setObsResult("Quadro psicológico normal");
    } else {
      let notifications = result.notifications
      if (notifications && notifications.length > 0) {
        notifications.forEach(not => {
          ToastAndroid.show(not.message, ToastAndroid.SHORT);
        })
      }
    }
    setLoading(false);
  }

  async function cdr() {
    setLoading(true);
    if (cdr1 == null || cdr2 == null || cdr3 == null || cdr4 == null || cdr5 == null || cdr6 == null) {
      ToastAndroid.show("Por favor, marque todas as opções de acordo com o paciente.", ToastAndroid.SHORT);
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
          ToastAndroid.show(not.message, ToastAndroid.SHORT);
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
      ToastAndroid.show("Por favor, marque a escolaridade do paciente.", ToastAndroid.SHORT);
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
          ToastAndroid.show(not.message, ToastAndroid.SHORT);
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
          ToastAndroid.show(not.message, ToastAndroid.SHORT);
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
          ToastAndroid.show(not.message, ToastAndroid.SHORT);
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
      ToastAndroid.show('Os dados do teste de sintomas foram salvos com sucesso! 👋', ToastAndroid.SHORT);
      setTesteSintoma([]);
      tab("home");
    } else {
      let notifications = result.notifications
      if (notifications && notifications.length > 0) {
        notifications.forEach(not => {
          ToastAndroid.show(not.message, ToastAndroid.SHORT);
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

                <Block onClick={() => tab("results")} onPress={() => tab("results")}>
                  {cards && cards.map((card, id) => (
                    <Card
                      onClick={() => tab("results")}
                      onPress={() => tab("results")}
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
                </Block>
              </>}
              {activeTab == "new" && <>
                {activeTab == "new" && activeTest == "" && patientSelected == null && <>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Selecione um paciente</Text>
                    <TouchableOpacity style={styles.touchableOpacity}>
                      <Picker
                        mode="dialog"
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
                    <Text muted center style={styles.buttonText}>Identificação de Sintomas (sintomas que o profissional percebeu ou relatados pelo familiar), na aba de tutoriais tem informações que podem ser úteis para o preenchimento correto deste formulário</Text>
                    <Button round color="#04cfb4" uppercase size="large" onPress={() => calltest("sintomas")}>TESTE DE SINTOMAS</Button>
                  </Block>
                  <Block flex center>
                    <Text muted center style={styles.buttonText}>Questionário de atividades funcionais de Pfeffer</Text>
                    <Button round color="#3e0057" uppercase size="large" onPress={() => test("pfeffer")}>PFEFFER</Button>
                    <Text muted center style={styles.buttonText}>Escala de avaliação clínica da demência</Text>
                    <Button round color="#3e0057" uppercase size="large" onPress={() => test("cdr")}>CDR</Button>
                    <Text muted center style={styles.buttonText}>Escala de depressão geriátrica</Text>
                    <Button round color="#3e0057" uppercase size="large" onPress={() => test("gds")}>GDS</Button>
                  </Block>
                  <Block flex center>
                    <Text muted center style={styles.buttonText}>Mini Exame do Estado Mental</Text>
                    <Button round color="#3e0057" uppercase size="large" onPress={() => test("minimental")}>MEEM</Button>
                    <Text muted center style={styles.buttonText}>Montreal Cognitive Assessment</Text>
                    <Button round color="#3e0057" uppercase size="large" onPress={() => test("moca")}>MoCA</Button>
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
                        mode="dialog"
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
                        mode="dialog"
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
                        mode="dialog"
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
                        mode="dialog"
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
                        mode="dialog"
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
                        mode="dialog"
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
                        mode="dialog"
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
                        mode="dialog"
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
                        mode="dialog"
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
                        mode="dialog"
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
                    <Button round uppercase color="#04cfb4" onPress={() => pfeffer()}>SALVAR</Button>
                  </Block>
                </>}
                {activeTab == "new" && activeTest == "gds" && <>
                  <Block row space="evenly">
                    <Text muted style={styles.buttonText}>ESCALA DE DEPRESSÃO GERIÁTRICA (GDS)</Text>
                  </Block>

                  <Block style={styles.cardQuestion}>
                    <Text muted style={styles.buttonText}>Marque a caixa de seleção se a resposta for sim, caso contrário deixe desmarcado</Text>
                    <Text muted style={styles.buttonText}>Está satisfeito(a) com a sua vida?</Text>
                    <Checkbox color="#3e0057" label="Sim/Não" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={gds1} onChange={(e) => setGDS1(e)} />
                    <Text muted style={styles.buttonText}>Interrompeu muitas de suas atividades?</Text>
                    <Checkbox color="#3e0057" label="Sim/Não" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={gds2} onChange={(e) => setGDS2(e)} />
                    <Text muted style={styles.buttonText}>Acha sua vida vazia?</Text>
                    <Checkbox color="#3e0057" label="Sim/Não" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={gds3} onChange={(e) => setGDS3(e)} />
                    <Text muted style={styles.buttonText}>Aborrece-se com frequência?</Text>
                    <Checkbox color="#3e0057" label="Sim/Não" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={gds4} onChange={(e) => setGDS4(e)} />
                    <Text muted style={styles.buttonText}>Sente-se bem com a vida na maior parte do tempo?</Text>
                    <Checkbox color="#3e0057" label="Sim/Não" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={gds5} onChange={(e) => setGDS5(e)} />
                    <Text muted style={styles.buttonText}>Teme que algo ruim lhe aconteça?</Text>
                    <Checkbox color="#3e0057" label="Sim/Não" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={gds6} onChange={(e) => setGDS6(e)} />
                    <Text muted style={styles.buttonText}>Sente-se alegre a maior parte do tempo?</Text>
                    <Checkbox color="#3e0057" label="Sim/Não" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={gds7} onChange={(e) => setGDS7(e)} />
                    <Text muted style={styles.buttonText}>Sente-se desamparado com frequência?</Text>
                    <Checkbox color="#3e0057" label="Sim/Não" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={gds8} onChange={(e) => setGDS8(e)} />
                    <Text muted style={styles.buttonText}>Prefere ficar em casa a sair e fazer coisas novas?</Text>
                    <Checkbox color="#3e0057" label="Sim/Não" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={gds9} onChange={(e) => setGDS9(e)} />
                    <Text muted style={styles.buttonText}>Acha que tem mais problemas de memória que as outras pessoas?</Text>
                    <Checkbox color="#3e0057" label="Sim/Não" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={gds10} onChange={(e) => setGDS10(e)} />
                    <Text muted style={styles.buttonText}>Acha que é maravilhoso estar vivo(a)?</Text>
                    <Checkbox color="#3e0057" label="Sim/Não" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={gds11} onChange={(e) => setGDS11(e)} />
                    <Text muted style={styles.buttonText}>Sente-se inútil?</Text>
                    <Checkbox color="#3e0057" label="Sim/Não" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={gds12} onChange={(e) => setGDS12(e)} />
                    <Text muted style={styles.buttonText}>Sente-se cheio(a) de energia?</Text>
                    <Checkbox color="#3e0057" label="Sim/Não" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={gds13} onChange={(e) => setGDS13(e)} />
                    <Text muted style={styles.buttonText}>Sente-se sem esperança?</Text>
                    <Checkbox color="#3e0057" label="Sim/Não" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={gds14} onChange={(e) => setGDS14(e)} />
                    <Text muted style={styles.buttonText}>Acha que os outros tem mais sorte que você?</Text>
                    <Checkbox color="#3e0057" label="Sim/Não" labelStyle={styles.labelCheckbox} style={styles.checkbox} value={gds15} onChange={(e) => setGDS15(e)} />
                  </Block>
                  <Block row center>
                    <Button round uppercase color="#3e0057" onPress={() => test("")}>FECHAR</Button>
                    <Button round uppercase color="#04cfb4" onPress={() => gds()}>SALVAR</Button>
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
                        mode="dialog"
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
                        mode="dialog"
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
                        mode="dialog"
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
                        mode="dialog"
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
                        mode="dialog"
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
                        mode="dialog"
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
                    <Button round uppercase color="#04cfb4" onPress={() => cdr()}>SALVAR</Button>
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
                    <Button round uppercase color="#04cfb4" onPress={() => meem()}>SALVAR</Button>
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
                    <Button round uppercase color="#04cfb4" onPress={() => moca()}>SALVAR</Button>
                  </Block>
                </>}
                {activeTab == "new" && activeTest == "sintomas" && <>
                  <Block row space="evenly">
                    <Text muted style={styles.buttonText}>Teste de Sintomas</Text>
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>ATENÇÃO COMPLEXA (Atenção sustentada, dividida, seletiva e velocidade de processamento)</Text>
                    {listaSintomas != null ? listaSintomas.filter(x => x.doenca1 == 11 || x.doenca1 == 12).map((e) => {
                      return <Checkbox color="#3e0057" key={e.sintomasId} label={e.descricao} labelStyle={styles.labelCheckbox} style={styles.checkboxSintoma} onChange={(x) => CheckTesteSintoma(e.sintomasId)} />
                    }) : null}
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>FUNÇÃO EXECUTIVA (Planejamento, tomada de decisão, memória de trabalho, resposta a feedback e correção de erros, substituir hábitos/inibição e flexibilidade mental)</Text>
                    {listaSintomas != null ? listaSintomas.filter(x => x.doenca1 == 21 || x.doenca1 == 22).map((e) => {
                      return <Checkbox color="#3e0057" key={e.sintomasId} label={e.descricao} labelStyle={styles.labelCheckbox} style={styles.checkboxSintoma} onChange={(x) => CheckTesteSintoma(e.sintomasId)} />
                    }) : null}
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>APRENDIZAGEM E MEMÓRIA (Memória imeadiata, recente (incluindo recordação livre, recordação por pistas e memória de reconhecimento), longo prazo (semântica e autobiográfica) e aprendizagem implícita)</Text>
                    {listaSintomas != null ? listaSintomas.filter(x => x.doenca1 == 31 || x.doenca1 == 32).map((e) => {
                      return <Checkbox color="#3e0057" key={e.sintomasId} label={e.descricao} labelStyle={styles.labelCheckbox} style={styles.checkboxSintoma} onChange={(x) => CheckTesteSintoma(e.sintomasId)} />
                    }) : null}
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>LINGUAGEM (Linguagem expressiva (inclui nomeação, encontrar palavras, fluência, gramática e sintaxe) e receptiva)</Text>
                    {listaSintomas != null ? listaSintomas.filter(x => x.doenca1 == 41 || x.doenca1 == 42).map((e) => {
                      return <Checkbox color="#3e0057" key={e.sintomasId} label={e.descricao} labelStyle={styles.labelCheckbox} style={styles.checkboxSintoma} onChange={(x) => CheckTesteSintoma(e.sintomasId)} />
                    }) : null}
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>PERCEPTOMOTOR (Percepção visual, visuoconstrutiva, práxis (utilização de uma teoria ou conhecimento de maneira prática) e gnosia(reconhecimento dos objetos por intermédio de um dos sentidos: visual, auditiva, etc))</Text>
                    {listaSintomas != null ? listaSintomas.filter(x => x.doenca1 == 51 || x.doenca1 == 52).map((e) => {
                      return <Checkbox color="#3e0057" key={e.sintomasId} label={e.descricao} labelStyle={styles.labelCheckbox} style={styles.checkboxSintoma} onChange={(x) => CheckTesteSintoma(e.sintomasId)} />
                    }) : null}
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>COGNIÇÃO SOCIAL (Reconhecimento de emoções e teoria da mente)</Text>
                    {listaSintomas != null ? listaSintomas.filter(x => x.doenca1 == 61 || x.doenca1 == 62).map((e) => {
                      return <Checkbox color="#3e0057" key={e.sintomasId} label={e.descricao} labelStyle={styles.labelCheckbox} style={styles.checkboxSintoma} onChange={(x) => CheckTesteSintoma(e.sintomasId)} />
                    }) : null}
                  </Block>
                  <Block style={styles.cardQuestion}>
                    <Text muted center style={styles.buttonText}>Outros sintomas (específicos de determinadas doenças)</Text>
                    {listaSintomas != null ? listaSintomas.filter(x => x.doenca1 == 71).map((e) => {
                      return <Checkbox color="#3e0057" key={e.sintomasId} label={e.descricao} labelStyle={styles.labelCheckbox} style={styles.checkboxSintoma} onChange={(x) => CheckTesteSintoma(e.sintomasId)} />
                    }) : null}
                  </Block>
                  <Block row center>
                    <Button round uppercase color="#3e0057" onPress={() => test("")}>FECHAR</Button>
                    <Button round uppercase color="#04cfb4" onPress={() => sendTesteSintoma()}>SALVAR</Button>
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
                      mode="dialog"
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
                  <Text muted center style={styles.buttonText}>Queixas relacionadas a possível demência</Text>
                  <Input type="default" value={sintomas} onChangeText={(e) => setSintomas(e)} />
                  <Text muted center style={styles.buttonText}>Medicamentos Utilizados (insira aqui se o paciente faz uso de algum medicamento)</Text>
                  <Input type="default" value={medicamentos} onChangeText={(e) => setMedicamentos(e)} />
                  <Text muted center style={styles.buttonText}>Observações (insira aqui informações que você acha interessante para histórico)</Text>
                  <Input type="default" value={observacoes} onChangeText={(e) => setObservacoes(e)} />
                </Block>
                <Block row center>
                  <Button round uppercase color="#3e0057" onPress={() => tab("home")}>FECHAR</Button>
                  <Button round uppercase color="#04cfb4" onPress={() => newAcolhimento()}>SALVAR</Button>
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
                  <Text muted center style={styles.buttonText}>Tempo de Estudo</Text>
                  <Input type="numeric" value={tempoDeEstudo} onChangeText={(e) => setTempoDeEstudo(e)} />
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
                      mode="dialog"
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
                  <Text muted center style={styles.buttonText}>Estado Civil</Text>
                  <TouchableOpacity style={styles.touchableOpacity}>
                    <Picker
                      mode="dialog"
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
                  <Text muted center style={styles.buttonText}>Raça</Text>
                  <TouchableOpacity style={styles.touchableOpacity}>
                    <Picker
                      mode="dialog"
                      style={styles.picker}
                      selectedValue={raca}
                      onValueChange={(itemValue, itemIndex) => { setRaca(itemValue) }}
                    >
                      <Picker.Item label="Nenhum selecionado" value="null" />
                      <Picker.Item label="Branca" value="Branca" />
                      <Picker.Item label="Negra" value="Negra" />
                      <Picker.Item label="Parda" value="Parda" />
                      <Picker.Item label="Amarela" value="Amarela" />
                      <Picker.Item label="Indígena" value="Indígena" />
                    </Picker>
                  </TouchableOpacity>
                  <Text muted center style={styles.buttonText}>Reside com</Text>
                  <TouchableOpacity style={styles.touchableOpacity}>
                    <Picker
                      mode="dialog"
                      style={styles.picker}
                      selectedValue={resideCom}
                      onValueChange={(itemValue, itemIndex) => { setResideCom(itemValue) }}
                    >
                      <Picker.Item label="Nenhum selecionado" value="null" />
                      <Picker.Item label="Familiar" value="Familiar" />
                      <Picker.Item label="Filho(a)" value="Filho(a)" />
                      <Picker.Item label="Neto(a)" value="Neto(a)" />
                      <Picker.Item label="Sobrinho(a)" value="Sobrinho(a)" />
                      <Picker.Item label="Irmão(Irmã)" value="Irmão(Irmã)" />
                      <Picker.Item label="Companheiro(a)" value="Companheiro(a)" />
                      <Picker.Item label="Conhecido" value="Conhecido" />
                      <Picker.Item label="Sozinho" value="Sozinho" />
                    </Picker>
                  </TouchableOpacity>
                  <Text muted center style={styles.buttonText}>Possui cuidador</Text>
                  <TouchableOpacity style={styles.touchableOpacity}>
                    <Picker
                      mode="dialog"
                      style={styles.picker}
                      selectedValue={possuiCuidador}
                      onValueChange={(itemValue, itemIndex) => { setPossuiCuidador(itemValue) }}
                    >
                      <Picker.Item label="Nenhum selecionado" value="null" />
                      <Picker.Item label="Sim" value="1" />
                      <Picker.Item label="Não" value="0" />
                    </Picker>
                  </TouchableOpacity>
                </Block>
                <Block row center>
                  <Button round uppercase color="#3e0057" onPress={() => tab("home")}>FECHAR</Button>
                  <Button round uppercase color="#04cfb4" onPress={() => newPatient()}>SALVAR</Button>
                </Block>
              </>}
              {activeTab == "results" && secondTab == "results" && <>
                <Block row space="evenly">
                  <Text muted style={styles.buttonText}>Tutoriais</Text>
                </Block>
                <Block style={styles.cardQuestion}>
                  <Text h4 center style={styles.buttonText}>Domínios Cognitivos - Teste de Sintomas</Text>
                  <Text style={styles.buttonText}>
                    •	ATENÇÃO COMPLEXA:
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Atenção sustentada: Manutenção da atenção ao longo do tempo (p. ex., pressionar um botão sempre que escuta um tom e durante certo tempo).
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Atenção seletiva: Manutenção da atenção apesar de estímulos concorrentes e/ ou distratores: escutar a leitura de letras e números e repetir apenas as letras.
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Atenção dividida: Participar de duas tarefas no mesmo período de tempo: bater rapidamente enquanto aprende uma história que está sendo lida. A velocidade de processamento pode ser quantificada em qualquer tarefa cronometrando- a (p. ex., tempo para unir blocos em determinada forma; tempo para combinar símbolos com números; velocidade para responder, como a velocidade de contagem ou a velocidade de séries de 3).
                  </Text>
                  <Text style={styles.buttonText}>
                    •	FUNÇÃO EXECUTIVA:
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Planejamento: Habilidade para encontrar a saída em um labirinto; interpreta uma combinação de figuras ou objetos em sequência.
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Tomada de decisão: Desempenho de tarefas que avaliam o processo de decisão diante de alternativas (p. ex., simulação de aposta).
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Memória de trabalho: Capacidade de manter informações por período curto e de manipulá-las (p. ex., aumento de uma lista de números ou repetição de uma série de números ou palavras, de trás para a frente).
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Resposta a feedback/utilização de erros: Capacidade de beneficiar-se de feedback ou crítica para inferir as regras para resolver um problema.
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Substituição de hábitos/inibição: Capacidade de escolher uma solução mais complexa e exigente para ser correto (p. ex., olhar além do rumo indicado por uma flecha; dar nome à cor da fonte de uma palavra e não nomear a palavra).
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Flexibilidade mental/cognitiva: Capacidade de mudar entre dois conceitos, tarefas ou regras de resposta (p. ex., de número para letra, de resposta verbal para pressionamento de tecla, de soma de números para ordenamento de números, de ordenamento de objetos por tamanho para ordenamento por cor).
                  </Text>
                  <Text style={styles.buttonText}>
                    •	APRENDIZAGEM E MEMÓRIA:
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Alcance da memória imediata: Capacidade de repetir uma lista de palavras ou algarismos.
                  </Text>
                  <Text muted style={styles.buttonText}>
                    Nota: A memória imediata às vezes é considerada “memória de trabalho” (ver “Função Executiva”).
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Memória recente: Avalia o processo de codificar novas informações (p. ex., listas de palavras, contos ou diagramas). Os aspectos da memória recente que podem ser testados incluem:
                  </Text>
                  <Text muted style={styles.buttonText}>
                    1 - evocação livre (pede-se à pessoa que relembre o máximo de palavras, diagramas ou elementos de uma história);
                  </Text>
                  <Text muted style={styles.buttonText}>
                    2) evocação com pistas (o examinador ajuda a recordar, dando pistas semânticas, como “Listar todos os itens alimentares em uma lista” ou “Citar todas as crianças da história”);
                  </Text>
                  <Text muted style={styles.buttonText}>
                    3) memória de reconhecimento (o examinador solicita itens específicos – p. ex., “‘Maçã’ estava na lista?” ou “Você viu este diagrama ou figura?”).
                  </Text>
                  <Text muted style={styles.buttonText}>
                    Outros aspectos da memória que podem ser avaliados incluem memória semântica (memória de fatos), memória autobiográfica (memória de eventos pessoais ou pessoas) e aprendizagem.
                  </Text>
                  <Text style={styles.buttonText}>
                    •	LINGUAGEM
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Linguagem expressiva: Citação confrontativa (identificação de objetos ou figuras); fluência (p. ex., nomear tantos itens quanto possível em uma categoria semântica [p. ex., animais] ou fonêmica [p. ex., palavras que começam com “f”] em um minuto).
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Gramática e sintaxe (p. ex., omissão ou uso incorreto de artigos, preposições, verbos auxiliares): Erros observados durante testes de nomeação e fluência são comparados aos padrões normais para avaliar a frequência de erros e comparados com pequenos erros normais da língua.
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Linguagem receptiva: Compreensão (tarefas de definição de palavras e identificação de objetos envolvendo estímulos animados e inanimados): realização de ações/atividades conforme comando verbal.
                  </Text>
                  <Text style={styles.buttonText}>
                    •	PERCEPTOMOTOR:
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Percepção visual: Tarefas lineares com duas seções podem ser usadas para a detecção de defeito visual básico ou deficiência da atenção. Tarefas perceptivas sem uso da motricidade (incluindo reconhecimento facial) necessitam de identificação e/ou combinação de figuras – melhor quando as tarefas não podem ser mediadas verbalmente (p. ex., figuras não são objetos); algumas exigem a decisão de se uma figura pode ser “real” ou não baseada na dimensionalidade.
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Visuoconstrutiva: Reunir itens com necessidade de coordenação dos olhos- -mãos, como desenhar, copiar e montar blocos.
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Perceptomotora: Integrar a percepção com movimentos que têm um propósito
                    (p. ex., inserção de blocos em uma placa sem pistas visuais; inserir, rapidamente, pinos em estrutura com orifícios).
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Práxis: Integridade de movimentos aprendidos, como habilidade de imitar gestos
                    (abanar ao dar adeus), ou uso de pantomima do uso de objetos (“Mostre- -me como você usaria um martelo”).
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Gnosia: Integridade perceptiva da conscientização e do reconhecimento, como o reconhecimento de faces e cores.
                  </Text>
                  <Text style={styles.buttonText}>
                    •	COGNIÇÃO SOCIAL
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Reconhecimento de emoções: Identificação de emoções em imagens de rostos que representam uma variedade de emoções positivas e negativas.
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Teoria da mente: Capacidade de considerar o estado mental de outra pessoa (pensamentos, desejos, intenções) ou sua experiência – cartões que contam uma história, com perguntas para provocar informações sobre o estado mental dos indivíduos retratados, tal como “Onde a garota procurará a bolsa perdida?” ou “Por que o garoto está triste?”.
                  </Text>
                  <Text muted style={styles.buttonText}>
                    - Os TNCs são aqueles em que a cognição prejudicada não estava presente ao nascimento ou muito no início da vida, representando, assim, um declínio a partir de um nível de funcionamento alcançado anteriormente.
                  </Text>
                </Block>
                <Block style={styles.cardQuestion}>
                  <Text h4 center style={styles.buttonText}>Fatores de Risco e Diagnóstico diferencial para apoio ao tipo de Demência</Text>
                  <Text style={styles.buttonText}>
                    •	Transtorno Neurocognitivo Doença de Alzheimer
                  </Text>
                  <Text style={styles.buttonText}>
                    Fatores de Risco e Prognóstico
                  </Text>
                  <Text muted style={styles.buttonText}>
                    Ambientais. Lesão cerebral traumática aumenta o risco de TNC maior ou leve devido à doença de Alzheimer.
                    Genéticos e fisiológicos. A idade é o fator de risco mais poderoso para a doença de Alzheimer. Múltiplos fatores de risco vasculares influenciam o risco da doença e podem agir aumentando a patologia cerebrovascular ou, ainda, provocando efeitos diretos na patologia da doença de Alzheimer.
                  </Text>
                  <Text style={styles.buttonText}>
                    Diagnóstico Diferencial
                  </Text>
                  <Text muted style={styles.buttonText}>
                    Outros transtornos neurocognitivos. Transtornos neurocognitivos maiores e leves devido a outros processos neurodegenerativos (p. ex., doença com corpos de Lewy, degeneração lobar frontotemporal) partilham o surgimento insidioso e o declínio gradativo causados pela doença de Alzheimer, embora tenham características distintas. No TNC vascular maior ou leve, costuma haver história de acidente vascular cerebral temporariamente relacionada ao surgimento de prejuízo cognitivo, com infartos ou aumento de intensidades da substância branca considerados suficientes para responder pelo quadro clínico. No entanto, sobretudo quando não existe história clara de declínio gradual, o TNC maior ou leve pode partilhar muitas características clínicas da doença de Alzheimer.
                    Outra doença neurológica ou sistêmica ativa e comorbida. Outras doenças neurológicas ou sistêmicas devem ser consideradas quando há uma relação temporal apropriada e gravidade que respondam pelo quadro clínico. No nível leve do TNC, pode ser difícil diferenciar a etiologia da doença de Alzheimer daquela de outra condição médica (p. ex., distúrbios da tireoide, deficiência de vitamina B12).
                    Transtorno depressivo maior. Particularmente no nível leve de um TNC, o diagnóstico diferencial inclui ainda depressão maior. A presença de depressão pode estar associada a funcionamento diário reduzido e concentração insatisfatória capazes de assemelhar-se a um TNC. A melhora com tratamento da depressão pode ser útil para a distinção.
                  </Text>
                  <Text style={styles.buttonText}>
                    •	Transtorno Neurocognitivo Frontotemporal Maior ou Leve
                  </Text>
                  <Text style={styles.buttonText}>
                    Fatores de Risco e Prognóstico
                  </Text>
                  <Text muted style={styles.buttonText}>
                    Genéticos e fisiológicos. Por volta de 40% dos indivíduos com TNC maior ou leve têm história familiar de TNC com surgimento precoce, e cerca de 10% mostram um padrão autossômico dominante herdado. Foram identificados vários fatores genéticos, como mutações no gene codificador da proteína tau associada aos microtúbulos (microtubule associated protein tau – MAPT), o gene granulina (granulin gene – GRN) e o gene C9ORF72. Uma variedade de famílias com mutações causadoras foi identificada (ver a seção “Marcadores Diagnósticos” a seguir), mas muitos indivíduos com transmissão familiar conhecida não têm a mutação conhecida. A presença de doença neuronal motora está associada a deterioração mais rápida.
                  </Text>
                  <Text style={styles.buttonText}>
                    Diagnóstico Diferencial
                  </Text>
                  <Text muted style={styles.buttonText}>
                    Outros transtornos neurocognitivos. Outras doenças neurodegenerativas podem ser diferenciadas de TNC frontotemporal maior ou leve pelos aspectos característicos. No TNC maior ou leve devido à doença de Alzheimer, o declínio na aprendizagem e na memória é um aspecto precoce. Todavia, 10 a 30% dos pacientes que se apresentam com uma síndrome sugestiva de TNC frontotemporal maior ou leve mostram, via necropsia, ser portadores de patologia da doença de Alzheimer. Isso ocorre com mais frequência em indivíduos que apresentam síndromes com alterações progressivas nas funções executivas na ausência de mudanças comportamentais ou de transtorno do movimento ou nos que apresentam a variante logopênica.
                    No TNC maior ou leve com corpos de Lewy, aspectos centrais e sugestivos dos corpos de Lewy podem estar presentes. No TNC maior ou leve devido à doença de Parkinson, surge parkinsonismo espontâneo bem antes do declínio cognitivo. No TNC vascular maior ou leve, dependendo das regiões cerebrais afetadas, pode também haver perda da capacidade executiva e mudanças comportamentais, como apatia, e esse transtorno deve ser levado em conta no diagnóstico diferencial.
                    Uma história de evento cerebrovascular, no entanto, está temporalmente relacionada ao aparecimento de prejuízo cognitivo no TNC vascular maior ou leve, e a neuroimagem revela infartos ou lesões na substância branca, em quantidade suficiente para responder pelo quadro clínico.
                  </Text>
                  <Text style={styles.buttonText}>
                    •	Transtorno Neurocognitivo Maior ou Leve com Corpos de Lewy
                  </Text>
                  <Text style={styles.buttonText}>
                    Fatores de Risco e Prognóstico
                  </Text>
                  <Text muted style={styles.buttonText}>
                    Genéticos e fisiológicos. Pode ocorrer agregação familiar, tendo sido identificados vários genes de risco, embora na maior parte dos casos de TNCCL não haja história familiar.
                  </Text>
                  <Text style={styles.buttonText}>
                    Diagnóstico Diferencial
                  </Text>
                  <Text muted style={styles.buttonText}>
                    Transtorno neurocognitivo maior ou leve devido à doença de Parkinson. Um aspecto distintivo essencial no diagnóstico clínico é a sequência temporal em que aparecem o parkinsonismo e o TNC. No caso de TNC devido à doença de Parkinson, o indivíduo deve desenvolver declínio cognitivo no contexto da doença de Parkinson estabelecida; por convenção, o declínio só atinge o estágio de TNC maior pelo menos um ano após o diagnóstico da doença de Parkinson. Se decorreu menos de um ano desde o surgimento de sintomas motores, o diagnóstico é TNCCL. Essa distinção fica mais clara no nível do TNC maior do que no do leve.
                    O momento certo e a sequência do parkinsonismo e do TNC leve podem ser de difícil determinação, porque o surgimento e a apresentação clínica podem ser ambíguos, e TNC leve não especificado deve ser diagnosticado diante da ausência de outras características principais e sugestivas.
                  </Text>
                  <Text style={styles.buttonText}>
                    •	Transtorno Neurocognitivo Vascular Maior ou Leve
                  </Text>
                  <Text style={styles.buttonText}>
                    Fatores de Risco e Prognóstico
                  </Text>
                  <Text muted style={styles.buttonText}>
                    Ambientais. As consequências neurocognitivas de uma lesão encefálica vascular são influenciadas por fatores de neuroplasticidade, como educação, exercício físico e atividade mental.
                    Genéticos e fisiológicos. Os principais fatores de risco de TNC vascular maior ou leve são os mesmos que os da doença cerebrovascular, incluindo hipertensão, diabetes, tabagismo, obesidade, níveis elevados de colesterol, níveis elevados de homocisteína, outros fatores de risco de aterosclerose e arteriolosclerose, fibrilação atrial e outras condições que aumentam o risco de embolia cerebral. Angiopatia amiloide cerebral é um fator de risco importante, em que ocorrem depósitos amiloides em vasos arteriais. Outro fator de risco significativo é a condição hereditária de arteriopatia cerebral autossômica dominante com infartos subcorticais e leucoencefalopatia, ou
                    CADASIL (cerebral autosomal dominant arteriopathy with subcortical infarcts and leukoencephalopathy).
                  </Text>
                  <Text style={styles.buttonText}>
                    Diagnóstico Diferencial
                  </Text>
                  <Text muted style={styles.buttonText}>
                    Outros transtornos neurocognitivos. Considerando que infartos cerebrais incidentais e lesões na substância branca são comuns em indivíduos idosos, é importante levar em conta outras etiologias possíveis na presença de um transtorno neurocognitivo. História de déficit de memória no começo do curso, com piora progressiva da memória, da linguagem, da função executiva e das capacidades perceptomotoras, na ausência de lesões focais correspondentes em imagens do cérebro, sugere a doença de Alzheimer como diagnóstico primário. Biomarcadores potenciais sendo atualmente validados para a doença de Alzheimer, como níveis de beta-amiloide e de tau
                    fosforilada no líquido cerebrospinal, bem como imagem amiloide, podem ser úteis no diagnóstico diferencial. O TNC com corpos de Lewy difere do TNC vascular maior ou leve em suas características principais de cognição oscilante, alucinações visuais e parkinsonismo espontâneo. No TNC vascular maior ou leve, ocorrem déficits na função executiva e na linguagem, ao passo que o surgimento insidioso e a progressão gradual de prejuízos dos aspectos comportamentais ou da linguagem são características de TNC frontotemporal, não sendo típicos da etiologia vascular.
                    Outras condições médicas. Não é feito um diagnóstico de TNC vascular maior ou leve se outras doenças (p. ex., tumor cerebral, esclerose múltipla, encefalite, distúrbios tóxicos ou metabólicos) estão presentes e tenham gravidade suficiente para responder pelo prejuízo cognitivo.
                    Outros transtornos mentais. É inadequado um diagnóstico de TNC vascular maior ou leve quando os sintomas podem ser completamente atribuídos a delirium, embora este possa, por vezes, estar sobreposto a um TNC vascular maior ou leve preexistente, situação em que podem ser feitos os dois diagnósticos. Se atendidos os critérios para transtorno depressivo maior, e o prejuízo cognitivo está temporariamente relacionado ao possível surgimento da depressão, não deve ser diagnosticado TNC vascular maior ou leve. Quando, porém, o TNC antecedeu o desenvolvimento da depressão, ou a gravidade do prejuízo cognitivo está fora de proporção em relação à gravidade da depressão, ambos devem ser diagnosticados.
                  </Text>
                  <Text style={styles.buttonText}>
                    •	Transtorno Neurocognitivo Maior ou Leve Devido à Doença de Parkinson
                  </Text>
                  <Text style={styles.buttonText}>
                    Fatores de Risco e Prognóstico
                  </Text>
                  <Text muted style={styles.buttonText}>
                    Ambientais. Os fatores de risco para a doença de Parkinson incluem exposição a herbicidas e pesticidas.
                    Genéticos e fisiológicos. Fatores de risco potenciais para TNC entre pessoas com a doença de Parkinson incluem idade mais velha no surgimento e duração aumentada da doença.
                  </Text>
                  <Text style={styles.buttonText}>
                    Diagnóstico Diferencial
                  </Text>
                  <Text muted style={styles.buttonText}>
                    Transtorno neurocognitivo maior ou leve com corpos de Lewy. Essa distinção baseia-se muito no momento certo e na sequência dos sintomas cognitivos e motores. Para o TNC ser atribuído à doença de Parkinson, os sintomas motores e outros sintomas dessa doença devem estar presentes bem antes (por convenção, no mínimo um ano antes) de o declínio cognitivo ter alcançado o nível de TNC maior, ao passo que no TNC maior ou leve com corpos de Lewy os sintomas cognitivos começam logo antes ou são concomitantes aos sintomas motores. Para TNC leve, o momento certo é de difícil estabelecimento, porque o próprio diagnóstico é menos claro e os dois transtornos existem em um continuum. A não ser que a doença de Parkinson tenha sido estabelecida algum tempo antes do surgimento do declínio cognitivo ou as características típicas do TNC maior ou leve com corpos de Lewy estejam presentes, é preferível diagnosticar TNC leve não especificado.
                    Transtorno neurocognitivo maior ou leve devido à doença de Alzheimer. As características motoras são essenciais para a distinção entre TNC maior ou leve devido à doença de Parkinson e TNC maior ou leve devido à doença de Alzheimer. Os dois transtornos podem, porém, ser concomitantes.
                    Transtorno neurocognitivo vascular maior ou leve. O TNC vascular maior ou leve pode se apresentar com aspectos parkinsonianos, como lentificação psicomotora, que pode ocorrer como
                    consequência de doença em pequeno vaso subcortical. As características parkinsonianas, no entanto, não costumam ser suficientes para um diagnóstico de doença de Parkinson, e o curso do
                    TNC normalmente tem clara associação com mudanças cerebrovasculares.
                    Transtorno neurocognitivo devido a outra condição médica (p. ex., distúrbios neurodegenerativos).
                    Quando considerado um diagnóstico de transtorno neurocognitivo maior ou leve devido à doença de Parkinson, deve também ser feita uma distinção de outros distúrbios cerebrais, como paralisia supranuclear progressiva, degeneração corticobasal, atrofia sistêmica múltipla, tumores e hidrocefalia.
                    Parkinsonismo induzido por neurolépticos. Pode ocorrer parkinsonismo induzido por neurolépticos em indivíduos com outros TNCs, particularmente quando fármacos bloqueadores da dopamina são prescritos para manifestações comportamentais desses transtornos.
                    Outras condições médicas. Delirium e TNCs devidos a efeitos secundários de fármacos bloqueadores da dopamina e outras condições médicas (p. ex., sedação ou cognição prejudicada,
                    hipotireoidismo grave, deficiência de vitamina B12) devem ser também descartados.
                  </Text>
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
    color: "rgb(159, 165, 170)",
    marginLeft: 6,
    borderWidth: 0,
  },
  checkbox: {
    height: 45,
    color: "#3e0057b8",
    marginLeft: 6,
  },
  labelCheckbox: {
    color: "rgb(159, 165, 170)",
  },
  checkboxSintoma: {
    color: "#3e0057b8",
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
