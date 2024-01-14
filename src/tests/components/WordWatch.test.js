import WordWatch from "../../components/WordWatch";
import { render, screen } from '@testing-library/react';

jest
  .useFakeTimers()
  .setSystemTime(new Date(Date.UTC(2024, 0, 14, 14, 1, 0, 0)));
describe("WordWatch", () => {

    // Date.now = jest.fn().mockReturnValue(new Date('2024-01-14T14:01:00.000Z'));
    it("renders word watch component", () => {
        render(<WordWatch />);
        const wordWatch = screen.getByTestId('word-watch');
        expect(wordWatch).toBeInTheDocument();
    });

    it('renders time 14:01 correctly', () => {
        jest
            .useFakeTimers()
            .setSystemTime(new Date(Date.UTC(2024, 0, 14, 14, 1, 0, 0)));
        
        render(<WordWatch />);
        expect(screen.getByTestId(0)).toHaveClass('char char-visible');
        expect(screen.getByTestId(0)).toHaveTextContent('I');
        expect(screen.getByTestId(1)).toHaveClass('char char-visible');
        expect(screen.getByTestId(1)).toHaveTextContent('T');
        expect(screen.getByTestId(3)).toHaveClass('char char-visible');
        expect(screen.getByTestId(3)).toHaveTextContent('I');
        expect(screen.getByTestId(4)).toHaveClass('char char-visible');
        expect(screen.getByTestId(4)).toHaveTextContent('S');
        
        expect(screen.getByTestId(93)).toHaveClass('char char-visible');
        expect(screen.getByTestId(93)).toHaveTextContent('T');
        expect(screen.getByTestId(94)).toHaveClass('char char-visible');
        expect(screen.getByTestId(94)).toHaveTextContent('W');
        expect(screen.getByTestId(95)).toHaveClass('char char-visible');
        expect(screen.getByTestId(95)).toHaveTextContent('O');

        expect(screen.getByTestId(126)).toHaveClass('char char-visible');
        expect(screen.getByTestId(126)).toHaveTextContent('A');
        expect(screen.getByTestId(127)).toHaveClass('char char-visible');
        expect(screen.getByTestId(127)).toHaveTextContent('C');
        expect(screen.getByTestId(128)).toHaveClass('char char-visible');
        expect(screen.getByTestId(128)).toHaveTextContent('L');
        expect(screen.getByTestId(129)).toHaveClass('char char-visible');
        expect(screen.getByTestId(129)).toHaveTextContent('O');
        expect(screen.getByTestId(130)).toHaveClass('char char-visible');
        expect(screen.getByTestId(130)).toHaveTextContent('C');
        expect(screen.getByTestId(131)).toHaveClass('char char-visible');
        expect(screen.getByTestId(131)).toHaveTextContent('K');
    });

    it('renders time 18:26 correctly', () => {
        jest
            .useFakeTimers()
            .setSystemTime(new Date(Date.UTC(2024, 0, 14, 18, 26, 0, 0)));
        
        render(<WordWatch />);
        expect(screen.getByTestId(0)).toHaveClass('char char-visible');
        expect(screen.getByTestId(0)).toHaveTextContent('I');
        expect(screen.getByTestId(1)).toHaveClass('char char-visible');
        expect(screen.getByTestId(1)).toHaveTextContent('T');
        expect(screen.getByTestId(3)).toHaveClass('char char-visible');
        expect(screen.getByTestId(3)).toHaveTextContent('I');
        expect(screen.getByTestId(4)).toHaveClass('char char-visible');
        expect(screen.getByTestId(4)).toHaveTextContent('S');
        
        expect(screen.getByTestId(24)).toHaveClass('char char-visible');
        expect(screen.getByTestId(24)).toHaveTextContent('T');
        expect(screen.getByTestId(25)).toHaveClass('char char-visible');
        expect(screen.getByTestId(25)).toHaveTextContent('W');
        expect(screen.getByTestId(26)).toHaveClass('char char-visible');
        expect(screen.getByTestId(26)).toHaveTextContent('E');
        expect(screen.getByTestId(27)).toHaveClass('char char-visible');
        expect(screen.getByTestId(27)).toHaveTextContent('N');
        expect(screen.getByTestId(28)).toHaveClass('char char-visible');
        expect(screen.getByTestId(28)).toHaveTextContent('T');
        expect(screen.getByTestId(29)).toHaveClass('char char-visible');
        expect(screen.getByTestId(29)).toHaveTextContent('Y');
        expect(screen.getByTestId(30)).toHaveClass('char char-visible');
        expect(screen.getByTestId(30)).toHaveTextContent('F');
        expect(screen.getByTestId(31)).toHaveClass('char char-visible');
        expect(screen.getByTestId(31)).toHaveTextContent('I');
        expect(screen.getByTestId(32)).toHaveClass('char char-visible');
        expect(screen.getByTestId(32)).toHaveTextContent('V');
        expect(screen.getByTestId(33)).toHaveClass('char char-visible');
        expect(screen.getByTestId(33)).toHaveTextContent('E');

        expect(screen.getByTestId(60)).toHaveClass('char char-visible');
        expect(screen.getByTestId(60)).toHaveTextContent('P');
        expect(screen.getByTestId(61)).toHaveClass('char char-visible');
        expect(screen.getByTestId(61)).toHaveTextContent('A');
        expect(screen.getByTestId(62)).toHaveClass('char char-visible');
        expect(screen.getByTestId(62)).toHaveTextContent('S');
        expect(screen.getByTestId(63)).toHaveClass('char char-visible');
        expect(screen.getByTestId(63)).toHaveTextContent('T');

        expect(screen.getByTestId(108)).toHaveClass('char char-visible');
        expect(screen.getByTestId(108)).toHaveTextContent('S');
        expect(screen.getByTestId(109)).toHaveClass('char char-visible');
        expect(screen.getByTestId(109)).toHaveTextContent('I');
        expect(screen.getByTestId(110)).toHaveClass('char char-visible');
        expect(screen.getByTestId(110)).toHaveTextContent('X');
    });
});