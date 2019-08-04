export default class core {

  jugement() {

    // 卒業要件をループさせる
    for (let i = 0; i < Youken.length - 2; i++) {

      presentYouken = Youken[i];
      // 必修科目でなければ、次のグループへ
      if (isHissyuukamoku(presentYouken.category1_min)) return;

      //  成績データをループさせる
      score_loop: for (let j = 0; j < score.length; j++) {

        // グループの合計単位数が卒業要件の取得単位数の下限を満たしたか判定
        let isFull = presentYouken.category1_min <= presentYouken.category1_sum;

        if (isFull) break;

        // 要件の除外項目に該当するかの判定
        if (isRemove(presentYouken.remove, score[j])) {
          continue score_loop;
        }

        // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝未実装＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
        // // 要件の制限要素に該当するかの判定
        // if(isRestriction(Youken[i].restriction,score[j])){
        //   continue score_loop;
        // }
        // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝未実装＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

        

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
  isRemove(remove, score) {

    // 除外要素が要件にない場合即リターン
    if (remove == "-") return false;

    // 除外要素があった場合はturuを返す
    for (let k = 0; k < remove.length; k++) {

      remove_exp = new RegExp('(^)' + remove[k]);

      let isRemovement = remove_exp.test(score.number) || remove_exp[k].test(score.name)

      if (isRemovement) return ture;

    }

  }

  isMatch(score,number,name) {
      
    for (let k = 0; k < number.length; k++){
    
     number_exp = new RegExp('(^)' + number[k])

    }
   
    for (let k = 0; k < name.length; k++){
    
     name_exp = new RegExp('(^)' + name[k])

    }
    
    if (e) {

      Youken[i].group_sum = ++parseFloat(score[j].credit);
      category[M_category[i].No].category_sum = ++parseFloat(score[j].credit);

      result[count] = [page[i].class1, page[i].class2, page[i].class3, page[i].about,
      score[j].number, score[j].name, score[j].credit];

    }



  }


}