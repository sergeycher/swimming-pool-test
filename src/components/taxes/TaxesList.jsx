import React from 'react';
import { connect } from "react-redux";
import { SectionTitle } from '../utils';
import TaxCard from './TaxCard';

const TaxesList = ({ taxes }) => {
    return (
        <div className="container">
            <SectionTitle title="Выбор тарифа"></SectionTitle>
            <div className="cards-deck">
                {taxes.map((tax) => <TaxCard key={`tax-${tax.id}`} taxrate={tax} />)}
            </div>
        </div>
    );
};

export default connect(state => {
    const taxes = state.taxesIds.map(id => ({ id, ...state.taxesById[id] }));

    return { taxes };
})(TaxesList);