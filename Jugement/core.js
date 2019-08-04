export default class core {

  jugement() {

    // 卒業要件をループさせる
  　for(let i = 0; i < Youken.length-2; i++){
    
    // 必修科目でなければ、次のグループへ
     if(isHissyuukamoku(Youken[i].category1_min)) return;
     
    //  成績データをループさせる
     for(let j = 0; j < score.length; j++){
      
      // グループの合計単位数が卒業要件の取得単位数の下限を満たしたか判定
      let isFull = Youken[i].category1_min <= Youken[i].category1_sum;

      if(isFull) return;


     }
  }
  }

  // 必修科目か判定
  isHissyuukamoku(min) {
    if (min > 0) return;
  }
 
  //  正規表現作成
  makeReg(word) {
    word = new RegExp('(^)' + word);
    bool = elements[k].test(score[j][jugelement]);
  }

  // 除外判定メソッド

  

  getMatch(e) {

    if (e) {

      Youken[i].group_sum =++ parseFloat(score[j].credit);
      category[M_category[i].No].category_sum =++ parseFloat(score[j].credit);

      result[count] = [page[i].class1, page[i].class2, page[i].class3, page[i].about,
      score[j].number, score[j].name, score[j].credit];
      
      

    }



  }


}