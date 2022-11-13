import { useEffect, useState } from 'react';
import {
    Container,
    SemiBold,
    SortWrapper,
    StyledLabel,
    StyledParagraph,
} from './common/styles';
import { IHotel } from './common/types';
import { SearchRecord } from './components/SearchRecord';
import logo from './images/qantas-logo.png';
import { callApi, sortByPrice } from './utils';

function App() {
    const [results, setResults] = useState<IHotel[]>([]);

    useEffect(() => {
        callApi().then((resp) => {
            const sortedResults = sortByPrice('l2h', resp.data);
            setResults(sortedResults);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <img src={logo} alt="qantas logo" width={160} />
            {results.length && (
                <>
                    <SortWrapper>
                        <StyledParagraph>
                            {results.length} <i>hotels</i> in
                            <SemiBold> Sydney.</SemiBold>
                        </StyledParagraph>
                        <div>
                            <StyledLabel htmlFor={'sortByPrice'}>
                                Sort by &nbsp;
                            </StyledLabel>
                            <select
                                defaultValue={'l2h'}
                                id={'sortByPrice'}
                                onChange={(event) => {
                                    const sortedResults = sortByPrice(
                                        event.target.value,
                                        results
                                    );
                                    setResults(sortedResults);
                                }}
                            >
                                <option value={'l2h'}>Price low-high</option>
                                <option value={'h2l'}>Price high-low</option>
                            </select>
                        </div>
                    </SortWrapper>
                    {results.map((result) => {
                        return <SearchRecord key={result.id} hotel={result} />;
                    })}
                </>
            )}
        </Container>
    );
}

export default App;
