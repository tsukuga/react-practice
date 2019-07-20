export default class core {

e(){
for (let i = 0; i < page.length - 2; i++) {
  
  if (page[i].credit_min > 0) { // 必修科目か判定
    let jugelement = "number";
    if (page[i].number == "-") { // 要素(科目番号or科目名判定)
      jugelement = "name";
    };
    elements_number = page[i][jugelement];
    score_loop: for (let j = 0; j < score.length; j++) { //成績データループ
      if (page[i].credit_min <= page[i].credit_sum) {
        break;
      };
      if (page[i].remove != "-") { //除外判定
        for (let k = 0; k < page[i].remove.length; k++) {
          remove_exp[k] = new RegExp('(^)' + page[i].remove[k])
          if (remove_exp[k].test(score[j].number) || remove_exp[k].test(score[j].name)) {
            continue score_loop;
          };
        };
      };
      if (page[i].restriction[0][0] != "-") { //制限ループ
        for (let k = 0; k < page[i].restriction[0].length; k++) {
          if (page[i].restriction[1][0] <= restriction_sum) {
            continue score_loop;
          }
          if (page[i].restriction[k] === score[j].number || page[i].restriction[k] === score[j].name) {
            restriction_sum = restriction_sum + parseFloat(score[j].credit);
          };
        };
      };
      for (let k = 0; k < elements_number.length; k++) { //判定要素ループ
        element[k] = page[i][jugelement][k];
        elements[k] = new RegExp('(^)' + element[k]);
        bool = elements[k].test(score[j][jugelement]);
        if (bool) {
          page[i].credit_sum = page[i].credit_sum + parseFloat(score[j].credit);
          category[page[i].No].class1_sum = category[page[i].No].class1_sum + parseFloat(score[j].credit);
          result[count] = [page[i].class1, page[i].class2, page[i].class3,
          page[i].about, score[j].number, score[j].name, score[j].credit
          ]; // TODO:備考追加
          count++;
          let exe = [j];
          score.splice(j, 1); //判定した成績を削除
          j--;
          //判定要素ループまで抜ける
          break;
        };
      };
    };
  };
};
}


isHissyuukamoku(classname){}

}