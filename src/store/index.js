
import { useContext } from 'react';
import Context from './context';

export default function useStore() {
    return useContext(Context);
}