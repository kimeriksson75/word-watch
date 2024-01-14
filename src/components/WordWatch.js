import { useState, useEffect, useMemo } from 'react';
import './WordWatch.css';

const WordWatch = () => {
	const [time, setTime] = useState(new Date());
	const [visibleChars, setVisibleChars] = useState([]);
	
	let chars = 'ITLISASTHPMA ACFIFTEENDCO TWENTYFIVEXW THIRTYFTENOS MINUTESETOUR PASTORUFOURT SEVENXTWELVE NINEFIVECTWO EIGHTFELEVEN SIXTHREEONEG TENSEZACLOCK';
	chars = chars.replaceAll(' ', '').split('');
	const watch = [];
	for (let i = 0; i < 12; i++) {
			watch.push(chars.splice(0, 12));
	}

	const hours = time.getHours();
	const minutes = time.getMinutes();
	const calcMinutes = (minutes) => {
			const closestMinutes = Math.round(minutes / 5) * 5;
			return closestMinutes;
	}
	
	const isCharVisible = (c) => memoizedVisibleChars.includes(c);

	const visibleMinutes = {
			5: [30, 31, 32, 33],
			10: [43, 44, 45],
			15: [14, 15, 16, 17, 18, 19, 20],
			20: [24, 25, 26, 27, 28, 29],
			25: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
			30: [36, 37, 38, 39, 40, 41],
			35: [24, 25, 26, 27, 28, 29, 30, 31, 32, 33],
			40: [24, 25, 26, 27, 28, 29],
			45: [14, 15, 16, 17, 18, 19, 20],
			50: [43, 44, 45],
			55: [30, 31, 32, 33],
			60: [],
			0: [],
	}

	const visibleHours = {
			0: [78, 79, 80, 81, 82, 83],
			1: [116, 117, 118],
			2: [93, 94, 95],
			3: [111 ,112, 113, 114, 115],
			4: [67, 68, 69, 70],
			5: [88, 89, 90, 91],
			6: [108, 109, 110],
			7: [72, 73, 74, 75, 76],
			8: [96, 97, 98, 99, 100],
			9: [84, 85, 86, 87],
			10: [120, 121, 122],
			11: [102, 103, 104, 105, 106, 107],
			12: [78, 79, 80, 81, 82, 83],
			13: [116, 117, 118],
			14: [93, 94, 95],
			15: [111 ,112, 113, 114, 115],
			16: [67, 68, 69, 70],
			17: [88, 89, 90, 91],
			18: [108, 109, 110],
			19: [72, 73, 74, 75, 76],
			20: [96, 97, 98, 99, 100],
			21: [84, 85, 86, 87],
			22: [120, 121, 122],
			23: [102, 103, 104, 105, 106, 107],
			24: [78, 79, 80, 81, 82, 83],
	}
	const itIs = [0, 1, 3, 4]
	const aClock = minutes > 57 || minutes < 3 ? [126, 127, 128, 129, 130, 131] : [];
	const toOrPast = aClock.length > 0 ? [] : minutes > 30 ? [63, 64] : [60, 61, 62, 63];
	
	useEffect(() => {
		setVisibleChars([]);
		setVisibleChars(visibleChars => [...visibleChars, ...itIs])
		setVisibleChars(visibleChars => [...visibleChars, ...toOrPast])
		setVisibleChars(visibleChars => [...visibleChars, ...aClock])
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