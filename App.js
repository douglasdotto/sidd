import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Dimensions, Image, Picker } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Button, Block, Text, Input, Card
} from 'galio-framework';
import BottomNavigation, {
  IconTab,
} from 'react-native-material-bottom-navigation'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import theme from './theme';

const BASE_SIZE = theme.SIZES.BASE;
const COLOR_WHITE = theme.COLORS.WHITE;
const { width } = Dimensions.get('screen');

export default function App() {
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

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <IconTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={renderIcon(tab.icon)}
    />
  )

  function tab(tab) {
    setActiveTab(tab);
  }

  function test(test) {
    setActiveTest(test);
  }

  return (
    <Block safe flex style={{ backgroundColor: '#F5F5F5' }}>
      <Block row style={{ width: '100%', paddingTop: 54, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, backgroundColor: '#3e0057', color: '#ffffff !important', paddingBottom: 24 }}>
        <Block flex left>
          <Text muted h4 bold style={{ color: "#fff", paddingLeft: 30 }}>SIDD</Text>
        </Block>
        <Block flex right>
          <Icon size={40} color="#fff" name={'bell'} style={{ paddingRight: 30 }} />
        </Block>
      </Block>
      <StatusBar style="light" />

      <Block style={styles.grid}>
        {activeTab == "home" && <>
          <ScrollView>
            <Block row space="evenly">
              <Text muted bold style={styles.buttonText}>Selecione uma opção</Text>
            </Block>
            <Block row space="evenly">
              <Button color="transparent" style={styles.button}>
                <Block middle style={styles.block}>
                  <Icon size={40} color="#F5F5F5" name={'heart-pulse'} />
                </Block>
                <Text muted style={styles.buttonText}>Acolhimento</Text>
              </Button>

              <Button color="transparent" style={styles.button} onPress={() => tab("new")}>
                <Block middle style={styles.block}>
                  <Icon size={40} color="#F5F5F5" name={'thermometer-plus'} />
                </Block>
                <Text muted style={styles.buttonText}>Novo Teste</Text>
              </Button>

              <Button color="transparent" style={styles.button} onPress={() => tab("results")}>
                <Block middle style={styles.block}>
                  <Icon size={40} color="#F5F5F5" name={'format-list-bulleted'} />
                </Block>
                <Text muted style={styles.buttonText}>Resultados</Text>
              </Button>
            </Block>

            <Block row space="evenly">
              <Button color="transparent" style={styles.button}>
                <Block middle style={styles.block}>
                  <Icon size={40} color="#F5F5F5" name={'account-supervisor'} />
                </Block>
                <Text muted style={styles.buttonText}>Pacientes</Text>
              </Button>

              <Button color="transparent" style={styles.button}>
                <Block middle style={styles.block}>
                  <Icon size={40} color="#F5F5F5" name={'medical-bag'} />
                </Block>
                <Text muted style={styles.buttonText}>Médicos</Text>
              </Button>

              <Button color="transparent" style={styles.button}>
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
          </ScrollView>
        </>}
        {activeTab == "new" && <>
          <ScrollView>
            {activeTab == "new" && activeTest == "" && <>
              <Block flex center>
                <Text h4 muted center>Qual teste deseja aplicar?</Text>
                <Button round uppercase color="#3e0057" onPress={() => test("pfeffer")}>PFEFFER</Button>
              </Block>
            </>}
            {activeTab == "new" && activeTest == "pfeffer" && <>
              <Block flex center>
                <Text h6 muted center>Questionário Pfeffer</Text>
              </Block>
              <Block style={styles.cardQuestion}>
                <Text muted style={styles.buttonText}>Ele(a) manuseia seu próprio dinheiro?</Text>
                <Input placeholder="resposta 1" />
                <Picker
                  selectedValue={null}
                >
                  <Picker.Item label="Java" value="java" />
                  <Picker.Item label="JavaScript" value="js" />
                </Picker>
              </Block>
            </>}
            {activeTab == "new" && activeTest != "" && <>
              <Block flex center>
                <Button round uppercase color="warning" onPress={() => test("")}>FECHAR</Button>
              </Block>
            </>}
          </ScrollView>
        </>}
        {activeTab == "results" && <>
          <Block row space="evenly">
            <Text muted bold style={styles.buttonText}>Resultados</Text>
          </Block>
        </>}
        {activeTab == "user" && <>
          <Block center>
            <Image source={require('./assets/avatar.png')} style={styles.avatar} />
          </Block>
          <Block row space="evenly">
            <Text muted bold style={styles.buttonText}>Informações do usuário</Text>
          </Block>
          <Block flex center>
            <Text h3>Douglas Dotto</Text>
            <Button round uppercase icon="contacts" iconFamily="antdesign" color="#3e0057">Meus dados</Button>
            <Button round uppercase icon="edit" iconFamily="antdesign" color="#3e0057">Alterar senha</Button>
            <Button round uppercase icon="close" iconFamily="antdesign" color="#3e0057">Sair</Button>
          </Block>
        </>}
      </Block>

      <BottomNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={(newTab) => { tab(newTab.key) }}
        renderTab={renderTab}
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
    elevation: 2
  },
  avatar: {
    marginTop: -40,
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
