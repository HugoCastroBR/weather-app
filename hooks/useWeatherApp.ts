import { useSelector } from 'react-redux';
import store, { RootState } from '../store';


export default function useWeatherApp(){
    const dispatch = store.dispatch
    const states = useSelector((state:RootState) => state )
    console.log("---",states)
    return {states , dispatch}
}