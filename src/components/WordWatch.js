import { useState, useEffect, useMemo } from 'react';
import './WordWatch.css';
import * as Constants from '../constants';
const WordWatch = () => {
	const [time, setTime] = useState(new Date());
	const [visibleChars, setVisibleChars] = useState([]);

	let hours = time.getHours();
	const minutes = time.getMinutes();
	if (minutes > 27) {
			hours = hours + 1;
	}
	const calcMinutes = (minutes) => {
			const closestMinutes = Math.round(minutes / 5) * 5;
			return closestMinutes;
	}
	
	const isCharVisible = (c) => memoizedVisibleChars.includes(c);

	const visibleMinutes = {
		5: Constants.MINUTES_FIVE,
		10: Constants.MINUTES_TEN,
		15: Constants.MINUTES_QUARTER_PAST,
		20: Constants.MINUTES_TWENTY,
		25: Constants.MINUTES_TWENTY_FIVE,
		30: Constants.MINUTES_HALF,
		35: Constants.MINUTES_TWENTY_FIVE_TO,
		40: Constants.MINUTES_TWENTY_TO,
		45: Constants.MINUTES_QUARTER_TO,
		50: Constants.MINUTES_TEN_TO,
		55: Constants.MINUTES_FIVE_TO,
		60: [],
	};

	const visibleHours = {
		0: Constants.HOURS_ZERO,
		1: Constants.HOURS_ONE,
		2: Constants.HOURS_TWO,
		3: Constants.HOURS_THREE,
		4: Constants.HOURS_FOUR,
		5: Constants.HOURS_FIVE,
		6: Constants.HOURS_SIX,
		7: Constants.HOURS_SEVEN,
		8: Constants.HOURS_EIGHT,
		9: Constants.HOURS_NINE,
		10: Constants.HOURS_TEN,
		11: Constants.HOURS_ELEVEN,
		12: Constants.HOURS_TWELVE,
		13: Constants.HOURS_ONE,
		14: Constants.HOURS_TWO,
		15: Constants.HOURS_THREE,
		16: Constants.HOURS_FOUR,
		17: Constants.HOURS_FIVE,
		18: Constants.HOURS_SIX,
		19: Constants.HOURS_SEVEN,
		20: Constants.HOURS_EIGHT,
		21: Constants.HOURS_NINE,
		22: Constants.HOURS_TEN,
		23: Constants.HOURS_ELEVEN,
		24: Constants.HOURS_TWELVE,
	};
	const toOrPast = Constants.DISABLED_TO_PAST_MINUTES.includes(minutes) ? [] : minutes < 30 ? Constants.PAST : Constants.TO;
	useEffect(() => {
		setVisibleChars([]);
		setVisibleChars(visibleChars => [...visibleChars, ...Constants.IT_IS])
		setVisibleChars(visibleChars => [...visibleChars, ...toOrPast])
		setVisibleChars(visibleChars => [...visibleChars, ...visibleMinutes[calcMinutes(minutes)] || []])
		setVisibleChars(visibleChars => [...visibleChars, ...visibleHours[hours] || []])
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
			<div className="word-watch">

			{Constants.WATCH.map((row, i) => {
				return (
					<div className="word-watch-row" key={i}>
						{row.map((char, j) => {
							const c = (i * 11) + j;
							return (
								<div data-testid={c} className={`${isCharVisible(c) ? 'char char-visible' : 'char'}`} key={j}>{char}</div>
								)
							})}
					</div>
				)}
				)}
				</div>
			</div>
	)
}
export default WordWatch;