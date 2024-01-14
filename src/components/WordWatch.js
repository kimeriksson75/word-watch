import { useState, useEffect, useMemo } from 'react';
import './WordWatch.css';

const WordWatch = () => {
	const [time, setTime] = useState(new Date());
	const [visibleChars, setVisibleChars] = useState([]);
	
	let chars = 'KLOCKANTÄRK FEMYISTIONI KVARTQIENZO TJUGOFEMPIM ÖVERKAMHALV ETTUSVLXTVÅ TREMYKYFYRA FEMSFLORSEX SJUÅTTAINIO TIOELVATOLV';
	chars = chars.replaceAll(' ', '').split('');
	const watch = [];
	for (let i = 0; i < 11; i++) {
			watch.push(chars.splice(0, 11));
	}

	let hours = time.getHours();
	const minutes = time.getMinutes();
	if (minutes > 29) {
			hours = hours + 1;
	}
	const calcMinutes = (minutes) => {
			const closestMinutes = Math.round(minutes / 5) * 5;
			return closestMinutes;
	}
	
	const isCharVisible = (c) => memoizedVisibleChars.includes(c);

	const visibleMinutes = {
			5: [12, 13, 14],
			10: [18, 19, 20],
			15: [24, 25, 26, 27, 28],
			20: [35, 36, 37, 38, 39, 40],
			25: [35, 36, 37, 38, 39, 40, 41, 42, 43],
			30: [55, 56, 57, 58],
			35: [35, 36, 37, 38, 39, 40, 41, 42, 43],
			40: [35, 36, 37, 38, 39, 40],
			45: [24, 25, 26, 27, 28],
			50: [18, 19, 20],
			55: [12, 13, 14],
			60: [],
			0: [],
	}

	const visibleHours = {
			0: [115, 116, 117, 118],
			1: [60, 61, 62],
			2: [68, 69, 70],
			3: [72, 73, 74],
			4: [79, 80, 81, 82],
			5: [84, 85, 86],
			6: [92, 93, 94],
			7: [96, 97, 98],
			8: [99, 100, 101, 102],
			9: [104, 105, 106],
			10: [108, 109, 110],
			11: [111, 112, 113, 114],
			12: [115, 116, 117, 118],
			13: [60, 61, 62],
			14: [68, 69, 70],
			15: [72, 73, 74],
			16: [79, 80, 81, 82],
			17: [84, 85, 86],
			18: [92, 93, 94],
			19: [96, 97, 98],
			20: [99, 100, 101, 102],
			21: [104, 105, 106],
			22: [108, 109, 110],
			23: [111, 112, 113, 114],
			24: [115, 116, 117, 118],
	}
	const itIs = [0, 1, 2, 3, 4, 5, 6, 8, 9]
	// const toOrPast =  (minutes > 57 && minutes < 3) ? [] : minutes > 30 ? [48, 49, 50, 51] : [45];
	const disabledToPastMinutes = [28, 29, 30, 31, 32, 58, 59, 0, 1, 2];
	const toOrPast = disabledToPastMinutes.includes(minutes) ? [] : minutes < 30 ? [48, 49, 50, 51] : [45];
	useEffect(() => {
		setVisibleChars([]);
		setVisibleChars(visibleChars => [...visibleChars, ...itIs])
		setVisibleChars(visibleChars => [...visibleChars, ...toOrPast])
		setVisibleChars(visibleChars => [...visibleChars, ...visibleMinutes[calcMinutes(minutes)]])
		setVisibleChars(visibleChars => [...visibleChars, ...visibleHours[hours]])
	}, [hours, minutes]);

	const memoizedVisibleChars = useMemo(() => {
			return [...new Set(visibleChars)];
	}, [visibleChars]);

	useEffect(() => {
			const interval = setInterval(() => {
					setTime(new Date());
			}, 1000);
			return () => clearInterval(interval);

	}, []);

	return (
		<div className="word-watch-container" data-testid="word-watch">
			{watch.map((row, i) => {
				return (
					<div className="word-watch" key={i}>
						{row.map((char, j) => {
							const c = (i * 12) + j;
								return (
									<div data-testid={c} className={`${isCharVisible(c) ? 'char char-visible' : 'char'}`} key={j}>{char}</div>
									)
							})}
					</div>
				)}
			)}
		</div>
	)
}
export default WordWatch;