import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Container,
    SemiBold,
    SortWrapper,
    StyledLabel,
    StyledParagraph,
} from './common/styles';
import { SearchRecord } from './components/SearchRecord';
import logo from './images/qantas-logo.png';
import { fetch, hotels } from './slices/results.slice';

function App() {
    const dispatch = useDispatch();
    const results = useSelector(hotels);
    useEffect(() => {
        dispatch(fetch());
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
                            <SemiBold> Sydney</SemiBold>
                        </StyledParagraph>
                        <div>
                            <StyledLabel htmlFor={'sortByPrice'}>
                                Sort by &nbsp;
                            </StyledLabel>
                            <select defaultValue={'l2h'} id={'sortByPrice'}>
                                <option value={'l2h'}>Price high-low</option>
                                <option value={'h2l'}>Price low-high</option>
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
