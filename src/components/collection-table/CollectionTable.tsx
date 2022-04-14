import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDiamond} from '@fortawesome/free-solid-svg-icons';
import {Table} from 'react-bootstrap';

import './CollectionTable.scss';

import {FilterSelect} from '../shared/select/filter-select/FilterSelect';
import {CollectionCellCard} from '../shared/card/collection-cell-card/CollectionCellCard';

export const CollectionTable: React.FC = (props) => {
    const periodFilter = [
        {id: '1', value: 'All time'}
    ];
    const categoryFilter = [
        {id: '2', value: 'All categories'}
    ];
    const chainFilter = [
        {id: '3', value: 'All chains'}
    ];
    const rows = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

    return (
        <div className="collection-table">
            <div className="filter-group d-flex mb-3">
                <h3 className="fw-bold me-4">Filter by</h3>
                <div className="filters d-flex">
                    <FilterSelect options={periodFilter}/>
                    <FilterSelect options={categoryFilter}/>
                    <FilterSelect options={chainFilter}/>
                </div>
            </div>

            <Table responsive>
                <thead>
                <tr className="text-muted">
                    <th className="fw-bold mw-20">#</th>
                    <th className="fw-bold mw-200">Collection</th>
                    <th className="fw-bold mw-80">Volume</th>
                    <th className="fw-bold mw-80">24h%</th>
                    <th className="fw-bold mw-80">7d%</th>
                    <th className="fw-bold mw-80">Floor Price</th>
                    <th className="fw-bold mw-80">Owners</th>
                    <th className="fw-bold mw-80">Items</th>
                </tr>
                </thead>
                <tbody>
                {rows.map((row, index) => (
                    <tr>
                        <td className="fw-bold">{index + 1}.</td>
                        <td>
                            <CollectionCellCard id={'1'} name={'Lorep Ipsum'} />
                        </td>
                        <td>
                            <FontAwesomeIcon className="mt-1 me-1" icon={faDiamond} size="xs" />
                            <span className="fw-bold">{'415'}</span>
                        </td>
                        <td className="fw-bold align-self-center loss">-{'100'}</td>
                        <td className="fw-bold gain">+{'100'}</td>
                        <td>
                            <FontAwesomeIcon className="mt-1 me-1" icon={faDiamond} size="xs" />
                            <span className="fw-bold">{'0.1'}</span>
                        </td>
                        <td className="fw-bold">10K</td>
                        <td className="fw-bold">10K</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}
