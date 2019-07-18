import FileFunc from './CreateFrom/filefn'
import Lists from '../CreateList/List'
export default class Jugementfunc{

  constructor(score,Syozoku){
    let score = score;
    let Syozoku = Syozoku;

    console.log(score);
    console.log(Syozoku);
  }
  
  jugement(){

    let List = new Lists();

    let Youken = List.GetList();
    console.log(Youken);
    console.log(this.Syozoku);
    let usingYouken = Youken[this.Syozoku];

    
    return usingYouken;

  }
}