import React from "react";

import "./table.css";

const Table = () => {
    return (
        <div>
            <table id="table">
            <thead>
                <tr>
                    <th>Параметры и требования</th>
                    <th>Участник №1</th>
                    <th>Участник №2</th>
                    <th>Участник №3</th>
                    <th>Участник №4</th>
                </tr>

                </thead>

                <tbody>
                
                <tr>
                    <td>Наличие комплекса мероприятий, повышающих стандарты качества изготовления</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                </tr>
                
                <tr>
                    <td>Срок изготовления лота, дней</td>
                    <td>80</td>
                    <td>90</td>
                    <td>75</td>
                    <td>120</td>
                </tr>

                <tr>
                    <td>Гарантийные обязательства, мес</td>
                    <td>24</td>
                    <td>24</td>
                    <td>22</td>
                    <td>36</td>
                </tr>

                <tr>
                    <td>Условия отплаты</td>
                    <td>30%</td>
                    <td>100%</td>
                    <td>60%</td>
                    <td>50%</td>
                </tr>

                <tr>
                    <td>Стоимость изготовления лота, руб (без НДС)</td>

                    <td>
                        <div className="blue">3,700,000 руб.</div>
                        <div className="red">-25,000 руб.</div>
                        <div className="green">2,475,000 руб.</div>
                    </td>

                    <td>
                        <div className="blue">3,200,000 руб.</div>
                        <div className="red">-25,000 руб.</div>
                        <div className="green">2,475,000 руб.</div>
                    </td>
                    
                    <td>
                        <div className="blue">2,800,000 руб.</div>
                        <div className="red">-25,000 руб.</div>
                        <div className="green">2,475,000 руб.</div>
                    </td>
                    
                    
                    <td>
                        <div className="blue">2,800,000 руб.</div>
                        <div className="red">-25,000 руб.</div>
                        <div className="green">2,475,000 руб.</div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;