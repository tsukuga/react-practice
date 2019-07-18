import FileFunc from './CreateFrom/filefn'
import Lists from '../CreateList/List'
export default class Jugementfunc{
　
　

  constructor(score,Syozoku){
    this.score = score;
    this.Syozoku = Syozoku;
  }
  
  jugement(){

    let List = new Lists();
    
    // 選択した所属から卒業要件を取得
    let Youken = List.GetList()[this.Syozoku];

    return Youken;

  }
}