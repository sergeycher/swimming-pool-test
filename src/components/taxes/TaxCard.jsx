import React from 'react';
import { connect } from "react-redux";
import { selectTax } from "../../actions";
import './cards.sass';
import { multiLine } from '../utils';

const TaxCard = ({ taxrate, selectTax, active }) => {
    return (
        <div className="card tax-card">
            <div className="header">{multiLine(taxrate.name)}</div>
            <div className="details">
                {multiLine(taxrate.details)}
            </div>
            <div className="select-button">
                {!active && <button onClick={() => selectTax(taxrate.id)}>Выбрать</button>}
            </div>
            <div className="footer">На 1 месяц</div>
        </div>
    );
};

export default connect(
    (state, { taxrate }) => ({ active: taxrate.id === state.currentTaxId }),
    { selectTax }
)(TaxCard);