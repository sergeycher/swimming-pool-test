import { createStore } from "redux";
import { PERIODS } from './constants';

const initialState = {
    currentTaxId: '',
    taxesById: {
        'children': {
            name: 'Дети\n(с 5 до 18 лет)',
            //конкрентные цены вряд ли потребуются, поэтому тут достаточно описания, а не чисел
            details: 'до 15:00 – 90 руб.\nпосле 15:00 – 110 руб.',
            period: PERIODS.MONTH
        },
        'students': {
            name: 'Студенты\n(очная форма)',
            details: 'до 15:00 – 90 руб.\nпосле 15:00 – 110 руб.',
            period: PERIODS.MONTH
        },
        'adults': {
            name: 'Взрослые',
            details: 'до 15:00 – 90 руб.\nпосле 15:00 – 150 руб.',
            period: PERIODS.MONTH
        }
    },
    taxesIds: [
        'children',
        'students',
        'adults'
    ]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_TAX':
            return { ...state, currentTaxId: action.payload.id };
            break;
        default:
            return state;
    }
}

export default createStore(reducer);