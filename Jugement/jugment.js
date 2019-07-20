import FileFunc from './CreateFrom/filefn'
import Lists from '../CreateList/List'
export default class Jugementfunc {



  constructor(score, Syozoku) {
    this.score = score;
    this.Syozoku = Syozoku;
  }

  jugement() {

    let List = new Lists();

    // 選択した所属から卒業要件を取得
    let Youken = List.GetList()[this.Syozoku];


    return this.makeCategory(Youken);

  }

  makeCategory(e) {

    let del_number = 0;
    let M_category = e.concat();

    for (let i = 0; i < M_category.length - 1; i++) {
      for (let j = i + 1; j < M_category.length - 1; j++) {

        e[i + del_number].No = i;
     
        const check1 = e[i].category1 == e[j].category1;
        const check2 = e[i].category2 == e[j].category2;
        const check3 = e[i].category3 == e[j].category3;

        if (check1 && check2 && check3) {

          e[j + del_number].No = i;
          del_number++
          M_category.splice(j, 1);
          j--;
        };

      };
    }
    return e;
  }
}