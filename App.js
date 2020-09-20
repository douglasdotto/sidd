import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Dimensions, Image, Picker, TouchableOpacity, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Button, Block, Text, Input, Card, Checkbox
} from 'galio-framework';
import BottomNavigation, {
  FullTab,
} from 'react-native-material-bottom-navigation'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import theme from './theme';

const BASE_SIZE = theme.SIZES.BASE;
const COLOR_WHITE = theme.COLORS.WHITE;
const { width } = Dimensions.get('screen');

export default function App() {
  // START - CONTROL TABS
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [activeTest, setActiveTest] = useState('');
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
      avatar: 'https://i7.pngguru.com/preview/178/419/741/computer-icons-avatar-login-user-avatar.jpg',
      title: 'Tutoriais',
      caption: 'Acessar',
      location: 'Santa Cruz do Sul, RS',
    }
  ];
  // END - CARDS

  // START - BOTTOM NAVIGATOR
  function tab(tab) {
    setLoading(true);
    setActiveTab(tab);
    setActiveTest("");
    setLoading(false);
  }

  function test(test) {
    setLoading(true);
    setActiveTest(test);
    setLoading(false);
  }
  // END - BOTTOM NAVIGATOR

  return (
    <Block safe flex style={{ backgroundColor: '#F5F5F5' }}>
      <Block row style={{ width: '100%', paddingTop: 54, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, backgroundColor: '#3e0057', color: '#ffffff !important', paddingBottom: 24 }}>
        <Block flex left>
          <Image source={require('./assets/header.png')} style={{ marginLeft: 20, height: 36, width: 100 }} />
        </Block>
        <Block flex right>
          <Icon size={30} color="#fff" name={'bell'} style={{ paddingRight: 30, paddingTop: 5 }} />
        </Block>
      </Block>
      <StatusBar style="light" />

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
        <ScrollView style={{ height: 1 }}>
          {activeTab == "home" && <>
            <Block row space="evenly">
              <Text muted style={styles.buttonText}>Selecione uma opção</Text>
            </Block>
            <Block row space="evenly">
              <Button color="" style={styles.button}>
                <Block middle style={styles.block}>
                  <Icon size={40} color="#F5F5F5" name={'heart-pulse'} />
                </Block>
                <Text muted style={styles.buttonText}>Acolhimento</Text>
              </Button>

              <Button color="" style={styles.button} onPress={() => tab("new")}>
                <Block middle style={styles.block}>
                  <Icon size={40} color="#F5F5F5" name={'thermometer-plus'} />
                </Block>
                <Text muted style={styles.buttonText}>Novo Teste</Text>
              </Button>

              <Button color="" style={styles.button} onPress={() => tab("results")}>
                <Block middle style={styles.block}>
                  <Icon size={40} color="#F5F5F5" name={'format-list-bulleted'} />
                </Block>
                <Text muted style={styles.buttonText}>Resultados</Text>
              </Button>
            </Block>

            <Block row space="evenly">
              <Button color="" style={styles.button}>
                <Block middle style={styles.block}>
                  <Icon size={40} color="#F5F5F5" name={'account-supervisor'} />
                </Block>
                <Text muted style={styles.buttonText}>Pacientes</Text>
              </Button>

              <Button color="" style={styles.button}>
                <Block middle style={styles.block}>
                  <Icon size={40} color="#F5F5F5" name={'medical-bag'} />
                </Block>
                <Text muted style={styles.buttonText}>Médicos</Text>
              </Button>

              <Button color="" style={styles.button}>
                <Block middle style={styles.block}>
                  <Icon size={40} color="#F5F5F5" name={'home-outline'} />
                </Block>
                <Text muted style={styles.buttonText}>Unidades</Text>
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
            {activeTab == "new" && activeTest == "" && <>
              <Block row space="evenly">
                <Text muted style={styles.buttonText}>Qual teste deseja aplicar?</Text>
              </Block>
              <Block flex center>
                <Button round color="#3e0057" uppercase size="large" onPress={() => test("pfeffer")}>1° PASSO - PFEFFER</Button>
              </Block>
              <Block flex center>
                <Button round color="#3e0057" uppercase size="large" onPress={() => test("cdr")}>2° PASSO - CDR</Button>
              </Block>
              <Block flex center>
                <Button round color="#3e0057" uppercase size="large" onPress={() => test("minimental")}>3° PASSO - MINI MENTAL</Button>
              </Block>
              <Block flex center>
                <Button round color="#3e0057" uppercase size="large" onPress={() => test("moca")}>3° PASSO - MoCA</Button>
              </Block>
              <Block flex center>
                <Button round color="#3e0057" uppercase size="large" onPress={() => test("sintomas")}>COMPLEMENTAR - TESTE DE SINTOMAS</Button>
              </Block>
            </>}
            {activeTab == "new" && activeTest != "" && <>
              <Block flex center>
                <TouchableOpacity>
                  <Text h4 muted onPress={() => test("")} style={{ backgroundColor: '#e8e8e8', borderRadius: 50, color: '#f5f5f5' }}>&nbsp;&nbsp;X&nbsp;&nbsp;</Text>
                </TouchableOpacity>
              </Block>
            </>}
            {activeTab == "new" && activeTest == "pfeffer" && <>
              <Block row space="evenly">
                <Text muted style={styles.buttonText}>Questionário Pfeffer</Text>
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Ele(a) manuseia seu próprio dinheiro?</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Normal ou nunca o fez mas poderia fazê-lo agora" value="0" />
                    <Picker.Item label="Faz com dificuldades ou nunca o fez e agora teria dificuldades" value="1" />
                    <Picker.Item label="Necessita de ajuda" value="2" />
                    <Picker.Item label="Não é capaz" value="3" />
                  </Picker>
                </TouchableOpacity>
              </Block>

              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Ele(a) é capaz de comprar comidas, roupas, coisas para casa sozinho(a)?</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Normal ou nunca o fez mas poderia fazê-lo agora" value="0" />
                    <Picker.Item label="Faz com dificuldades ou nunca o fez e agora teria dificuldades" value="1" />
                    <Picker.Item label="Necessita de ajuda" value="2" />
                    <Picker.Item label="Não é capaz" value="3" />
                  </Picker>
                </TouchableOpacity>
              </Block>

              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Ele(a) é capaz de esquenta a água para o café e apagar o fogo?</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Normal ou nunca o fez mas poderia fazê-lo agora" value="0" />
                    <Picker.Item label="Faz com dificuldades ou nunca o fez e agora teria dificuldades" value="1" />
                    <Picker.Item label="Necessita de ajuda" value="2" />
                    <Picker.Item label="Não é capaz" value="3" />
                  </Picker>
                </TouchableOpacity>
              </Block>

              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Ele(a) é capaz de preparar uma comida?</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Normal ou nunca o fez mas poderia fazê-lo agora" value="0" />
                    <Picker.Item label="Faz com dificuldades ou nunca o fez e agora teria dificuldades" value="1" />
                    <Picker.Item label="Necessita de ajuda" value="2" />
                    <Picker.Item label="Não é capaz" value="3" />
                  </Picker>
                </TouchableOpacity>
              </Block>

              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Ele(a) é capaz de preparar uma comida?</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Normal ou nunca o fez mas poderia fazê-lo agora" value="0" />
                    <Picker.Item label="Faz com dificuldades ou nunca o fez e agora teria dificuldades" value="1" />
                    <Picker.Item label="Necessita de ajuda" value="2" />
                    <Picker.Item label="Não é capaz" value="3" />
                  </Picker>
                </TouchableOpacity>
              </Block>

              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Ele(a) é capaz de manter-se em dia com as atualidades, com os acontecimentos da comunidade?</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Normal ou nunca o fez mas poderia fazê-lo agora" value="0" />
                    <Picker.Item label="Faz com dificuldades ou nunca o fez e agora teria dificuldades" value="1" />
                    <Picker.Item label="Necessita de ajuda" value="2" />
                    <Picker.Item label="Não é capaz" value="3" />
                  </Picker>
                </TouchableOpacity>
              </Block>

              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Ele(a) é capaz de prestar atenção, entender e discutir um programa de rádio, jornal ou televisão?</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Normal ou nunca o fez mas poderia fazê-lo agora" value="0" />
                    <Picker.Item label="Faz com dificuldades ou nunca o fez e agora teria dificuldades" value="1" />
                    <Picker.Item label="Necessita de ajuda" value="2" />
                    <Picker.Item label="Não é capaz" value="3" />
                  </Picker>
                </TouchableOpacity>
              </Block>

              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Ele(a) é capaz de lembrar-se de compromissos, acontecimentos familiares ou feriados?</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Normal ou nunca o fez mas poderia fazê-lo agora" value="0" />
                    <Picker.Item label="Faz com dificuldades ou nunca o fez e agora teria dificuldades" value="1" />
                    <Picker.Item label="Necessita de ajuda" value="2" />
                    <Picker.Item label="Não é capaz" value="3" />
                  </Picker>
                </TouchableOpacity>
              </Block>

              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Ele(a) é capaz de manusear seus próprios remédios?</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Normal ou nunca o fez mas poderia fazê-lo agora" value="0" />
                    <Picker.Item label="Faz com dificuldades ou nunca o fez e agora teria dificuldades" value="1" />
                    <Picker.Item label="Necessita de ajuda" value="2" />
                    <Picker.Item label="Não é capaz" value="3" />
                  </Picker>
                </TouchableOpacity>
              </Block>

              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Ele(a) é capaz de passear pela vizinhança e encontrar o caminho de volta para casa?</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Normal ou nunca o fez mas poderia fazê-lo agora" value="0" />
                    <Picker.Item label="Faz com dificuldades ou nunca o fez e agora teria dificuldades" value="1" />
                    <Picker.Item label="Necessita de ajuda" value="2" />
                    <Picker.Item label="Não é capaz" value="3" />
                  </Picker>
                </TouchableOpacity>
              </Block>

              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Ele(a) pode ser deixado(a) em casa sozinho(a) de forma segura?</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Normal ou nunca o fez mas poderia fazê-lo agora" value="0" />
                    <Picker.Item label="Faz com dificuldades ou nunca o fez e agora teria dificuldades" value="1" />
                    <Picker.Item label="Necessita de ajuda" value="2" />
                    <Picker.Item label="Não é capaz" value="3" />
                  </Picker>
                </TouchableOpacity>
              </Block>
            </>}
            {activeTab == "new" && activeTest == "cdr" && <>
              <Block row space="evenly">
                <Text muted style={styles.buttonText}>Clinical Dementia Rating (CDR)</Text>
              </Block>

              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Em relação a memória</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Sem perda da memória; apenas esquecimento discreto" value="0" />
                    <Picker.Item label="Esquecimento leve e consistente; lembrança parcial de eventos" value="1" />
                    <Picker.Item label="Moderada; mais acentuada a fatos recentes; afeta o dia-a-dia" value="2" />
                    <Picker.Item label="Grave; apenas material muito aprendido é retido; materiais novos são rapidamente perdidos" value="3" />
                    <Picker.Item label="Grave; apenas fragmentos permanecem" value="4" />
                  </Picker>
                </TouchableOpacity>
              </Block>

              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Em relação a orientação</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Plenamente orientado" value="0" />
                    <Picker.Item label="Plenamente orientado" value="1" />
                    <Picker.Item label="Dificuldade moderada com as relações de tempo" value="2" />
                    <Picker.Item label="Geralmente desorientado" value="3" />
                    <Picker.Item label="Orientação pessoal apenas" value="4" />
                  </Picker>
                </TouchableOpacity>
              </Block>

              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Em relação a julgamento e solução de problemas</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Resolve bem" value="0" />
                    <Picker.Item label="Leve comprometimento" value="1" />
                    <Picker.Item label="Dificuldade moderada" value="2" />
                    <Picker.Item label="Gravemente comprometido" value="3" />
                    <Picker.Item label="Incapaz de resolver" value="4" />
                  </Picker>
                </TouchableOpacity>
              </Block>

              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Em relação a assuntos da comunidade</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Normal" value="0" />
                    <Picker.Item label="Leve dificuldade" value="1" />
                    <Picker.Item label="Desempenha algumas atividades" value="2" />
                    <Picker.Item label="Precisa de acompanhamento" value="3" />
                    <Picker.Item label="Incapaz" value="4" />
                  </Picker>
                </TouchableOpacity>
              </Block>

              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Em relação ao lar e passatempos</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Normal" value="0" />
                    <Picker.Item label="Levemente afetados" value="1" />
                    <Picker.Item label="Abandono de tarefas mais dificeis" value="2" />
                    <Picker.Item label="Apenas tarefas simples" value="3" />
                    <Picker.Item label="Sem qualquer atividade significativa" value="4" />
                  </Picker>
                </TouchableOpacity>
              </Block>

              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Em relação a cuidados pessoais</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Plenamente capaz" value="0" />
                    <Picker.Item label="Plenamente capaz" value="1" />
                    <Picker.Item label="Necessita de assistência ocasional" value="2" />
                    <Picker.Item label="Requer assistência" value="3" />
                    <Picker.Item label="Requer muito auxílio nos cuidados" value="4" />
                  </Picker>
                </TouchableOpacity>
              </Block>
            </>}
            {activeTab == "new" && activeTest == "minimental" && <>
              <Block row space="evenly">
                <Text muted style={styles.buttonText}>Mini Exame do Estado Mental (MEEM)</Text>
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Orientação (marque a opção, se o usuário acertou a resposta)</Text>
                <Text muted style={styles.buttonText}>Em que ano estamos?</Text>
                <Checkbox color="#3e0057" label="Ano" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Em que estação do ano estamos?</Text>
                <Checkbox color="#3e0057" label="Estação" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Qual o dia da semana em que estamos?</Text>
                <Checkbox color="#3e0057" label="Dia da semana" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Qual o dia do mês em que estamos?</Text>
                <Checkbox color="#3e0057" label="Dia do mês" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Qual o mês em que estamos?</Text>
                <Checkbox color="#3e0057" label="Mês" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Qual o país onde estamos?</Text>
                <Checkbox color="#3e0057" label="Pais" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Qual o estados onde estamos?</Text>
                <Checkbox color="#3e0057" label="Estado" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Qual a cidade onde estamos?</Text>
                <Checkbox color="#3e0057" label="Cidade" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Qual a rua ou local onde estamos?</Text>
                <Checkbox color="#3e0057" label="Rua/local" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Qual o andar onde estamos?</Text>
                <Checkbox color="#3e0057" label="Andar" style={styles.checkbox} />
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Registro (marque a opção, se o usuário acertou a resposta)</Text>
                <Text muted style={styles.buttonText}>Solicite ao paciente que preste atenção pois terá que repetir as palavras mais tarde. Peça para repetir as 3 palavras depois de vocês dizê-las. Se necessário, repita até 5 vezes para aprender as palavras, porém a pontuação é referente a primeira tentativa de repetição.</Text>
                <Text muted style={styles.buttonText}>O objetivo é dizer três palavras: PENTE RUA AZUL</Text>
                <Checkbox color="#3e0057" label="Pente" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Rua" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Azul" style={styles.checkbox} />
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Atenção e cálculo (marque a opção, se o usuário acertou a resposta)</Text>
                <Text muted style={styles.buttonText}>Peça para que o paciente faça as subtrações seriadas. Se errar na primeira ou na segunda tentativa, peça para soletrar e pule a etapa da subtração</Text>
                <Text muted style={styles.buttonText}>Subtrair: 100 - 7</Text>
                <Checkbox color="#3e0057" label="(93)" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Subtrair: 93 - 7</Text>
                <Checkbox color="#3e0057" label="(86)" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Subtrair: 86 - 7</Text>
                <Checkbox color="#3e0057" label="(79)" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Subtrair: 79 - 7</Text>
                <Checkbox color="#3e0057" label="(72)" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Subtrair: 72 - 7</Text>
                <Checkbox color="#3e0057" label="(65)" style={styles.checkbox} />

                <Text muted style={styles.buttonText}>Se o usuário errou acima, peça para que ele soletre MUNDO de trás pra frente</Text>
                <Checkbox color="#3e0057" label="O" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="D" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="N" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="U" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="M" style={styles.checkbox} />
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Evocação (marque a opção, se o usuário lembrar a palavra)</Text>
                <Text muted style={styles.buttonText}>Perguntar pelas 3 palavras anteriores: PENTE RUA AZUL</Text>
                <Checkbox color="#3e0057" label="Pente" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Rua" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Azul" style={styles.checkbox} />
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Linguagem (marque a opção, se o usuário lembrar a palavra)</Text>
                <Text muted style={styles.buttonText}>Mostre um relógio e uma caneta e peça para nomear</Text>
                <Checkbox color="#3e0057" label="Relógio" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Caneta" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Repetir: "Nem aqui, nem ali, nem lá"</Text>
                <Checkbox color="#3e0057" label="Repetiu corretamente" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Seguir o comando (falado) de três estágios: Pegue o papel com a mão direita, dobre ao meio e ponha no chão</Text>
                <Checkbox color="#3e0057" label="Pegar papel com a mão direita" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Dobre ao meio" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Ponha no chão" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Escreva em um papel e peça para a pessoa executar: Feche os olhos</Text>
                <Checkbox color="#3e0057" label="Fechou os olhos" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Solicite que o paciente escreva uma frase (um pensamento ou ideia completa)</Text>
                <Checkbox color="#3e0057" label="Frase/ideia correta" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Copiar o desenho</Text>
                <Block row space="evenly" style={{ padding: 10 }}>
                  <Image source={require('./assets/meem1.png')} />
                </Block>
                <Checkbox color="#3e0057" label="Desenho correto" style={styles.checkbox} />
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Qual a escolaridade do paciente?</Text>
                <Text muted style={styles.buttonText}>Anos concluidos de educação formal</Text>
                <Checkbox color="#3e0057" label="Analfabeto" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="1 a 5 anos de escolaridade" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="6 a 11 anos de escolaridade" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="12 anos ou mais de escolaridade" style={styles.checkbox} />
              </Block>
            </>}
            {activeTab == "new" && activeTest == "moca" && <>
              <Block row space="evenly">
                <Text muted style={styles.buttonText}>Montreal Cognitive Assessment (MoCA)</Text>
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Visuoespacial / executiva</Text>
                <Text muted style={styles.buttonText}>Complete a imagem a seguir</Text>
                <Block row space="evenly" style={{ padding: 10 }}>
                  <Image source={require('./assets/moca1.png')} />
                </Block>
                <Checkbox color="#3e0057" label="Desenho correto" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Copiar o cubo</Text>
                <Block row space="evenly" style={{ padding: 10 }}>
                  <Image source={require('./assets/moca2.png')} />
                </Block>
                <Checkbox color="#3e0057" label="Desenho correto" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Peça desenhar um Relógio (onze horas e dez minutos)</Text>
                <Checkbox color="#3e0057" label="Contorno" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Números" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Ponteiros" style={styles.checkbox} />
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Nomeação</Text>
                <Text muted style={styles.buttonText}>Qual o nome do animal a seguir?</Text>
                <Block row space="evenly" style={{ padding: 10 }}>
                  <Image source={require('./assets/moca3.png')} />
                </Block>
                <Checkbox color="#3e0057" label="Resposta correta" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Qual o nome do animal a seguir?</Text>
                <Block row space="evenly" style={{ padding: 10 }}>
                  <Image source={require('./assets/moca4.png')} />
                </Block>
                <Checkbox color="#3e0057" label="Resposta correta" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Qual o nome do animal a seguir?</Text>
                <Block row space="evenly" style={{ padding: 10 }}>
                  <Image source={require('./assets/moca5.png')} />
                </Block>
                <Checkbox color="#3e0057" label="Resposta correta" style={styles.checkbox} />
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Memória (sem pontuação - repetir depois no passo evocação tardia)</Text>
                <Text muted style={styles.buttonText}>Leia a lista de palavras, o sujeito deve repeti-la, faça duas tentativas, evocar após 5 minutos</Text>
                <Text muted style={styles.buttonText}>Rosto - Veludo - Igreja - Margarida - Vermelho</Text>
                <Checkbox color="#3e0057" label="1° tentativa (sem pontuação)" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="2° tentativa (sem pontuação)" style={styles.checkbox} />
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Atenção</Text>
                <Text muted style={styles.buttonText}>Leia a sequência de números (1 por segundo)</Text>
                <Text muted style={styles.buttonText}>(2 1 8 5 4) em ordem direta</Text>
                <Checkbox color="#3e0057" label="Resposta correta" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>(7 4 2) em ordem indireta</Text>
                <Checkbox color="#3e0057" label="Resposta correta" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Leia a série de linhas. O Sujeito deve bater com a mão na mesa, cada vez que ouvir a letra (A). Não marque a caixa abaixo se teve 2 ou mais erros</Text>
                <Checkbox color="#3e0057" label="Série A Correta" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Subtração de 7 começando pelo 100 (93) (86) (79) (72) (65)</Text>
                <Checkbox color="#3e0057" label="4 ou 5 subtrações corretas" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="2 ou 3 subtrações corretas" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="1 subtração correta" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="0 subtrações corretas" style={styles.checkbox} />
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Linguagem</Text>
                <Text muted style={styles.buttonText}>Repetir: Eu somente sei que é João quem será ajudado hoje</Text>
                <Checkbox color="#3e0057" label="Resposta correta" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Repetir: O gato sempre se esconde embaixo do Sofá quando o cachorro está na sala</Text>
                <Checkbox color="#3e0057" label="Resposta correta" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Fluência verbal: dzier o maior número possivel de palavras que comecem pela letra F (1 minuto)</Text>
                <Checkbox color="#3e0057" label="Maior ou igual a 11 palavras com a letra F" style={styles.checkbox} />
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Abstração</Text>
                <Text muted style={styles.buttonText}>Semelhança por exemplo entre banana e laranja = fruta</Text>
                <Text muted style={styles.buttonText}>Qual a semelhança entre trem - bicicleta?</Text>
                <Checkbox color="#3e0057" label="Semelhança correta" style={styles.checkbox} />
                <Text muted style={styles.buttonText}>Qual a semelhança entre relógio - régua</Text>
                <Checkbox color="#3e0057" label="Semelhança correta" style={styles.checkbox} />
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Evocação tardia</Text>
                <Text muted style={styles.buttonText}>O sujeito deve se recordas das palavras do teste de memória (sem pistas)</Text>
                <Checkbox color="#3e0057" label="Rosto" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Veludo" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Igreja" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Margarida" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Vermelho" style={styles.checkbox} />
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted center style={styles.buttonText}>Orientação</Text>
                <Text muted style={styles.buttonText}>O sujeito deve saber responder as dúvidas abaixo (marque se o usuário acertou a resposta)</Text>
                <Checkbox color="#3e0057" label="Qual dia do mês estamos" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Qual mês" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Qual Ano" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Qual dia da semana" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Em que Lugar" style={styles.checkbox} />
                <Checkbox color="#3e0057" label="Em qual Cidade" style={styles.checkbox} />
              </Block>
            </>}
            {activeTab == "new" && activeTest == "sintomas" && <>
              <Block row space="evenly">
                <Text muted style={styles.buttonText}>Teste de Sintomas</Text>
              </Block>
            </>}
            {activeTab == "new" && activeTest != "" && <>
              <Block row center>
                <Button round uppercase color="primary" onPress={() => test("")}>SALVAR</Button>
                <Button round uppercase color="#3e0057" onPress={() => test("")}>FECHAR</Button>
              </Block>
            </>}
          </>}
          {activeTab == "results" && <>
            <Block row space="evenly">
              <Text muted style={styles.buttonText}>Resultados</Text>
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
              <Button round uppercase size="large" icon="contacts" iconFamily="antdesign" color="#3e0057">Meus dados</Button>
              <Button round uppercase size="large" icon="edit" iconFamily="antdesign" color="#3e0057">Alterar senha</Button>
              <Button round uppercase size="large" icon="close" iconFamily="antdesign" color="#3e0057">Sair</Button>
            </Block>
          </>}
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
    color: "#a6a6a6",
    marginLeft: 6,
    borderWidth: 0
  },
  checkbox: {
    height: 45,
    marginLeft: 6,
  },
  touchableOpacity: {
    borderWidth: 1,
    borderColor: "#a6a6a6",
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
