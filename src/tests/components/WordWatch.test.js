import WordWatch from "../../components/WordWatch";
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { SE, EN } from '../../constants';
jest
  .useFakeTimers()
    .setSystemTime(new Date(Date.UTC(2024, 0, 14, 14, 1, 0, 0)));
  
describe("WordWatch SE", () => {
    afterEach(() => {
        jest.clearAllMocks();
        jest.clearAllTimers();
        cleanup();
    });
    it("renders word watch component", () => {
        render(<WordWatch />);
        const wordWatch = screen.getByTestId('word-watch');
        expect(wordWatch).toBeInTheDocument();
        SE.WATCH.map((row, i) => row.map((char, j) => {
                const c = (i * 12   ) + j;
                const element = screen.getByTestId(c);
                expect(element).toBeInTheDocument();
                expect(element).toHaveTextContent(char);
                expect(element).toHaveClass('char');
                return null;
            })
        );
    });

    it('renders time 14:01 correctly', () => {
        jest
            .useFakeTimers()
            .setSystemTime(new Date(Date.UTC(2024, 0, 14, 14, 1, 0, 0)));
        
        render(<WordWatch />);
        SE.IT_IS.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });

        SE.HOURS_TWO.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });


        
    });

    it('renders time 18:26 correctly', () => {
        jest
            .useFakeTimers()
            .setSystemTime(new Date(Date.UTC(2024, 0, 14, 18, 26, 0, 0)));
        
        render(<WordWatch />);
        SE.IT_IS.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });

        SE.HOURS_SIX.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });

        SE.MINUTES_TWENTY_FIVE_TO.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });
    });

    it('renders time 23:59 correctly', () => {
        jest
            .useFakeTimers()
            .setSystemTime(new Date(Date.UTC(2024, 0, 14, 0, 0, 0, 0)));
        
        render(<WordWatch />);
        SE.IT_IS.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });

        SE.HOURS_ZERO.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });
    });

    it('renders time 19:34 correctly', () => {
        jest
            .useFakeTimers()
            .setSystemTime(new Date(Date.UTC(2024, 0, 14, 19, 34, 0, 0)));
        
        render(<WordWatch />);
        SE.IT_IS.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });

        SE.HOURS_EIGHT.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });

        SE.MINUTES_TWENTY_FIVE_TO.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });
    });

    it('renders time 16:13 correctly', () => {
        jest
            .useFakeTimers()
            .setSystemTime(new Date(Date.UTC(2024, 0, 14, 16, 13, 0, 0)));
        
        render(<WordWatch />);
        SE.IT_IS.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });

        SE.MINUTES_QUARTER_PAST.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });

        SE.HOURS_FOUR.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });

    }); 

    it('renders time 15:43 correctly', () => {
        jest
            .useFakeTimers()
            .setSystemTime(new Date(Date.UTC(2024, 0, 14, 15, 43, 0, 0)));
        
        render(<WordWatch />);
        SE.IT_IS.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });
        
        SE.MINUTES_QUARTER_TO.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });

        SE.HOURS_FOUR.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });
    });
    it('renders time 12:00 correctly', () => {
        jest
            .useFakeTimers()
            .setSystemTime(new Date(Date.UTC(2024, 0, 14, 12, 0, 0, 0)));
        
        render(<WordWatch />);
        SE.IT_IS.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });

        SE.HOURS_TWELVE.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });
    });

    it('renders time 00:00 correctly', () => {
        jest
            .useFakeTimers()
            .setSystemTime(new Date(Date.UTC(2024, 0, 14, 0, 0, 0, 0)));
        
        render(<WordWatch />);
        SE.IT_IS.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });

        SE.HOURS_ZERO.map((i) => {
            const element = screen.getByTestId(i);
            expect(element).toBeInTheDocument();
            expect(element).toHaveClass('char char-visible');
            return null;
        });
    });
});
