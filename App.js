import React, { useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    ScrollView,
    Switch,
    Button,
	TouchableOpacity,
}from 'react-native';
let POKEMONS = [
    {
        imageUrl:
            'https://www.pokepedia.fr/images/thumb/1/17/Dracaufeu-RFVF.png/1200px-Dracaufeu-RFVF.png',
        name: 'Dracaufeu',
        description:{
            Type1: "Feu",
            Type2: "Vol",
        },
        isSelected: false,
    },
    {
        imageUrl:
            'https://www.pokepedia.fr/images/2/24/Tortank-RFVF.png',
        name: 'Tortank',
        description:{
            Type1: "Eau",
            Type2:"",
        },
        isSelected: false,
    },
    {
        imageUrl:
            'https://www.pokepedia.fr/images/e/ef/Bulbizarre-RFVF.png',
        name: 'Bulbizarre',
        description: {
            Type1: "Plante",
            Type2: "Poison",
        },
        isSelected: false,
    },
    {
        imageUrl:
            'https://www.pokepedia.fr/images/thumb/d/d8/Roucarnage-RFVF.png/1200px-Roucarnage-RFVF.png',
        name: 'Roucarnage',
        description: {
            Type1: "Normal",
            Type2: "Vol",
        },
        isSelected: false,
    },
    {
        imageUrl:
            'https://www.pokepedia.fr/images/5/5f/Nidoking-RFVF.png',
        name: 'Nidoking',
        description: {
            Type1: "Poison",
            Type2: "Sol",
        },
        isSelected: false,
    },
    {
        imageUrl:
            'https://www.pokepedia.fr/images/thumb/c/cd/Rondoudou-RFVF.png/250px-Rondoudou-RFVF.png',
        name: 'Rondoudou',
        description: {
            Type1: "Normal",
            Type2:"Fée",
        },
        isSelected: false,
    },
    {
        imageUrl:
            'https://www.pokepedia.fr/images/thumb/2/2b/Nosferapti-RFVF.png/250px-Nosferapti-RFVF.png',
        name: 'Nosferapti',
        description: {
            Type1: "Poison",
            Type2: "Vol",
        },
        isSelected: false,
    },
    {
        imageUrl:
            'https://www.pokepedia.fr/images/thumb/3/38/Tartard-RFVF.png/250px-Tartard-RFVF.png',
        name: 'Tartard',
        description: {
            Type1: "Eau",
            Type2: "Combat",
        },
        isSelected: false,
    },
    {
        imageUrl:
            'https://www.pokepedia.fr/images/thumb/f/f9/Ch%C3%A9tiflor-RFVF.png/250px-Ch%C3%A9tiflor-RFVF.png',
        name: 'Chétiflor',
        description: {
            Type1: "Plante",
            Type2: "Poison",
        },
        isSelected: false,
    },
    {
        imageUrl:
            'https://www.pokepedia.fr/images/thumb/b/b4/Flagadoss-RFVF.png/250px-Flagadoss-RFVF.png',
        name: 'Flagadoss',
        description: {
            Type1: "Eau",
            Type2: "Psy",
        },
        isSelected: false,
    },
];

export default function App() {
    let [search, setSearch] = useState(``);

    let [pokemons, setPokemons] = useState(POKEMONS);

    let selectedPokemons = pokemons.filter(function (pokemon) {
        return pokemon.isSelected;
    });

    let filteredName = pokemons.filter(function (pokemon) {
        return pokemon.name
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase());
    });
	
	let [currentScreen, setCurrentScreen] = useState('menu');
	
	if (currentScreen == 'panier') {
    return (
      <ScrollView>
        <TouchableOpacity
          onPress={function () {
            setCurrentScreen('menu');
          }}>
<Text style={[styles.cardTextd, { fontSize: 25, textAlign:"center",color: 'black' }]}>
  Retour Page d'accueil
  </Text>
        </TouchableOpacity>
        <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.cardText}>Pokémons selectionné(s)</Text>
          <View>
            {selectedPokemons.length > 0 ? (
              selectedPokemons.map(function (pokemon) {
                return <Text style={styles.cardText}>{pokemon.name}</Text>;
              })
            ) : (
              <Text style={[styles.cardText, { fontSize: 12, color: 'grey' }]}>
                Aucun Pokémons selectionné
              </Text>
            )}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
		<TouchableOpacity 
        onPress={function () {
          setCurrentScreen('panier');
        }}>
        <Text>Nombre de pokémons selectionné : {selectedPokemons.length}</Text> 
      </TouchableOpacity> 
            <View style={styles.container}>
                <TextInput
                    placeholder="Rechercher un Pokémon : "
                    style={styles.searchInput}
                    value={search}
                    onChangeText={function (text) {
                        setSearch(text);
                    }}></TextInput>
                <View style={{ alignItems: 'center' }}>
                    <Text style={[styles.cardText, { fontSize: 25, color: 'white' }]}>Pokémons disponible</Text>
                    <View>
                        {selectedPokemons.length > 0 ? (
                            selectedPokemons.map(function (pokemon) {
                                return <Text style={styles.cardText}>{pokemon.name}</Text>;
                            })
                        ) : (
                            <Text style={[styles.cardText, { fontSize: 15, color: 'white' }]}>
                                Aucun pokémons selectionné
                            </Text>
                        )}
                    </View>
                </View>
                <View style={styles.cardsContainer}>
                    {filteredName.map(function (pokemon) {
                        return (
                            <Card
                                imageUrl={pokemon.imageUrl}
                                name={pokemon.name}
                                description={pokemon.description}
                                isSelected={pokemon.isSelected}
                                onSelect={function () {
                                    let newPokemons = pokemons.map(function (c) {
                                        if (pokemon.name == c.name) {
                                            c.isSelected = !c.isSelected;
                                            return c;
                                        }
                                        return c;
                                    });
                                    setPokemons(newPokemons);
                                }}
                            />
                        );
                    })},
                </View>
            </View>
        </ScrollView>
    );
}

function Card(props) {
    return (
        <View style={styles.cardContainer}>
            <Image
                style={styles.cardImage}
                source={{
                    uri: props.imageUrl
                }}
            />
            <View style={styles.cardDescription}>
                <Text style={[styles.cardText, { fontSize: 20, fontWeight: 'bold' }]}>{props.name} </Text>
                <Text style={styles.cardText}>{props.description.Type1}</Text>
                <Text style={styles.cardText}>{props.description.Type2}</Text>
            </View>

            <Switch
                style={{ alignSelf: 'center' }}
                value={props.isSelected}
                onValueChange={props.onSelect}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  cardTextd:{
    backgroundColor: 'red',

  },
    container: {
        flex: 1,
        backgroundColor: '#080404',
        padding: 200,
    },
    searchInput: {
        color: '#87131E',
        padding: 15,
        borderRadius: 4,
        borderColor: '#87131E',
        borderWidth: 1,
        width: 350,
        marginBottom: 20,
    },
    cardsContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: '#080404',
        padding: 100,
    },
    cardContainer: {
        margin: 8,
        width: '20%',
        height: '40%',
        borderRadius: 8,
        borderColor: '#31334a',
        borderWidth: 3,
        marginVertical: 2,
        backgroundColor: '#87131E',
    },
    cardImage: {
        flex: 1,
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardDescription: {
        flex: 1,
        padding: 4,
    },
    cardText: {
        marginTop: 4,
        fontSize: 16,
        color: 'white',
    },
});
