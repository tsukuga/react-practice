import React from 'react';
import P2 from './P2';
export default class P1 extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     score: [
  //       {
  //         '単位数': "number",
  //         '成績': "name",
  //         '科目名': "credit",
  //         '科目番号': "grade"
  //       },{
  //         '単位数': "2.0",
  //         '成績': "name",
  //         '科目名': "credit",
  //         '科目番号': "grade"
  //       },
  //       ],
  //     index: '単位数'
  //   };
  // }
  render() {
    
    const data = {
      'a': ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg"],
      'b': ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg"],
      'c': ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg"]
    };

    return (
      <React.Fragment>
        <table>
          <tbody>
            {Object.keys(data).map((key) => (
              <tr>
                <P2 td={data[key]} />
              </tr>))}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}