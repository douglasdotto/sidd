import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Dimensions, Image, Picker, TouchableOpacity, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Button, Block, Text, Input, Card
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
                <Button round color="warning" uppercase size="large" onPress={() => test("pfeffer")}>PFEFFER</Button>
              </Block>
            </>}
            {activeTab == "new" && activeTest == "pfeffer" && <>
              <Block row space="evenly">
                <Text muted style={styles.buttonText}>Questionário Pfeffer</Text>
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted style={styles.buttonText}>Ele(a) manuseia seu próprio dinheiro?</Text>
                <TouchableOpacity style={styles.touchableOpacity}>
                  <Picker
                    style={styles.picker}
                    selectedValue={null}
                  >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker>
                </TouchableOpacity>
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted style={styles.buttonText}>Ele(a) manuseia seu próprio dinheiro?</Text>
                <Input placeholder="Resposta 1" />
              </Block>
            </>}
            {activeTab == "new" && activeTest != "" && <>
              <Block flex center>
                <Button round uppercase color="warning" onPress={() => test("")}>FECHAR</Button>
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
              <Button round uppercase size="large" icon="contacts" iconFamily="antdesign" color="warning">Meus dados</Button>
              <Button round uppercase size="large" icon="edit" iconFamily="antdesign" color="warning">Alterar senha</Button>
              <Button round uppercase size="large" icon="close" iconFamily="antdesign" color="warning">Sair</Button>
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
