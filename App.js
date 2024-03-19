import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = () => {
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);
  const [isScreenOverlayed, setIsScreenOverlayed] = useState(false);
  const [placeholderText, setPlaceholderText] = useState('');
  const [cards, setCards] = useState([]);
  const [isInfoTabVisible, setIsInfoTabVisible] = useState(false);

  const handleAddCard = () => {
    setIsButtonsVisible(true);
    setIsScreenOverlayed(true);
  };

  const handleChooseOption = (option) => {
    setPlaceholderText(`Nome da ${option}`);
    setIsButtonsVisible(false);
    setIsScreenOverlayed(false);
  };

  const handleOverlayPress = () => {
    setIsButtonsVisible(false);
    setIsScreenOverlayed(false);
  };

  const addNewCard = () => {
    const newCard = {
      id: cards.length + 1,
      title: 'Novo Card',
      description: 'Descrição do novo card',
    };
    setCards([...cards, newCard]);
  };

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleHeaderPress = () => {
    setIsInfoTabVisible(!isInfoTabVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleHeaderPress}>
        <View style={styles.header}>
          <Image
            source={require('./assets/logo trivo.png')}
            style={styles.logo}
          />
          <Image
            source={require('./assets/logo_trivo-removebg-preview.png')}
            style={styles.headerImage}
          />
        </View>
      </TouchableOpacity>
      {isInfoTabVisible && (
        <View style={styles.infoTab}>
          <TouchableOpacity onPress={() => console.log('Clicou em Início')}>
    <Text style={styles.linkText}>Início</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => console.log('Clicou em Despesas')}>
    <Text style={styles.linkText}>Despesas</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => console.log('Clicou em Receitas')}>
    <Text style={styles.linkText}>Receitas</Text>
  </TouchableOpacity>
        </View>
      )}
      <View style={styles.statsContainer}>
        <View style={styles.statsColumn}>
          <Text style={styles.statsTitle}>Rendimento</Text>
          <Text style={[styles.statsAmount, { color: 'yellow', fontSize: 45 }]}>R$ 3.800,80</Text>
        </View>
      </View>
      <View style={styles.secondaryStatsContainer}>
        <View style={styles.secondaryStatsColumn}>
          <TouchableOpacity style={styles.iconCircle}>
            <Text style={styles.iconText}>⬆</Text>
          </TouchableOpacity>
          <Text style={styles.secondaryStatsTitle}>Receitas</Text>
          <Text style={styles.secondaryStatsAmount}>R$ 3.800,80</Text>
        </View>
        <View style={styles.secondaryStatsColumn}>
          <TouchableOpacity style={styles.iconCircle}>
            <Text style={styles.iconText}>⬇</Text>
          </TouchableOpacity>
          <Text style={styles.secondaryStatsTitle}>Despesas</Text>
          <Text style={styles.secondaryStatsAmount}>R$ 3.800,80</Text>
        </View>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.contentContainer}>
        <Text style={styles.lastUpdatesText}>Últimas atualizações</Text>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {cards.map((card) => (
            <View key={card.id} style={styles.cardContainer}>
              <TouchableOpacity style={styles.card}>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardDescription}>{card.description}</Text>
                <TouchableOpacity onPress={() => deleteCard(card.id)} style={styles.deleteButton}>
                  <AntDesign name="delete" size={24} color="white" />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      {isScreenOverlayed && (
        <TouchableOpacity style={styles.overlay} onPress={handleOverlayPress} />
      )}
      {isButtonsVisible && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => handleChooseOption('Receita')} style={styles.optionButton}>
            <Text style={styles.optionButtonText}>Receita</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleChooseOption('Despesa')} style={styles.optionButton}>
            <Text style={styles.optionButtonText}>Despesa</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity onPress={handleAddCard} style={styles.addButton}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  header: {
    height: 80,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  infoTab: {
    position: 'absolute',
    top: 80,
    left: 0, 
    backgroundColor: '#3BBB44',
    padding: 10,
    borderRadius: 10,
    elevation: 3,
    zIndex: 99,
    width: '100%',
},
 divider: {
    height: 0.5,
    backgroundColor: 'white',
    marginVertical: 20, 
  },
  infoText: {
    fontSize: 16,
    color: 'white',
    padding: 20,
    textAlign: 'right',
  },
  logo: {
    width: 60,
    height: 50,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  headerImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  statsColumn: {
    flex: 1,
    alignItems: 'center',
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  statsAmount: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  secondaryStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  secondaryStatsColumn: {
    flex: 1,
    alignItems: 'center',
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#7FFF00',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  iconText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  secondaryStatsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  secondaryStatsAmount: {
    fontSize: 18,
    color: 'white',
  },

  contentContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 15,
  },
  lastUpdatesText: {
     fontSize: 24,
  fontWeight: 'bold',
  color: 'white',
  marginBottom: 10,
  marginTop: 10,
},
  addButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 25,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    gap: 80,
  },
  optionButton: {
    backgroundColor: '#32CD32',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  optionButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  cardContainer: {
    width: '100%',
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    maxWidth: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 16,
    color: 'gray',
  },
  deleteButton: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  linkText: {
  fontSize: 16,
  color: 'white',
  marginBottom: 5,
  textAlign: 'right',
  marginRight: 10,
  fontWeight: 'bold',
},
});

export default HomeScreen;