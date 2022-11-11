import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SemiBold } from './common/styles';
import { Rating } from './components/Rating';
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
        <>
            <img src={logo} alt="qantas logo" />
            {results.length && (
                <>
                    <p>
                        {results.length} hotels in <SemiBold>Sydney</SemiBold>
                    </p>
                    <Rating rating={2.5} />
                    <select defaultValue={'l2h'}>
                        <option value={'l2h'}>Price high-low</option>
                        <option value={'h2l'}>Price low-high</option>
                    </select>
                    {results.map((result) => {
                        return <SearchRecord key={result.id} hotel={result} />;
                    })}
                </>
            )}
        </>
    );
}

export default App;
