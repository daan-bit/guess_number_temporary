import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();

export default function App() {
	const [ userNumber, setUserNumber ] = useState();
	const [ guessRounds, setGuessRounds ] = useState(0);

	const configureNewGameHandler = () => {
		setGuessRounds(0);
		setUserNumber(null);
	};

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
	};

	const gameOverHandler = (numOfRounds) => {
		setGuessRounds(numOfRounds);
	};

	let content = <StartGameScreen onStartGame={startGameHandler} />;

	if (userNumber && guessRounds <= 0) {
		content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
	} else if (guessRounds > 0) {
		content = (
			<GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />
		);
	}

	return (
		<SafeAreaView style={styles.screen} >
				<Header title="Guess a number " />
				{content}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1
	}
});
