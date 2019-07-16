import React from 'react';
import P2 from './P2';
export default class P1 extends React.Component {

  constructor() {
    super();
    this.state = {
      score:[
      {'科目番号': "number", '科目名': "name",'単位数': "credit",'成績': "grade"},
      {'科目番号': "number", '科目名': "name",'単位数': "credit",'成績': "grade"},
      {'科目番号': "number", '科目名': "name",'単位数': "credit",'成績': "grade"},
    ],
      index: '単位数'
    };
  }
  render() {

    return (
      <React.Fragment>
        <table>
          <tbody>
            {this.state.score.map((e) => (
              <tr>
                <P2 td={e} />
              </tr>))}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}