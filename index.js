const tools = {
  /*
  * 去除空格
  * type 1-所有空格  2-前后空格  3-前空格 4-后空格
  * tools.trim('  1235asd',1)
  * result：1235asd
  * */
  trim: function (str, type) {
    switch (type) {
      case 1:
        return str.replace(/\s+/g, "");
      case 2:
        return str.replace(/(^\s*)|(\s*$)/g, "");
      case 3:
        return str.replace(/(^\s*)/g, "");
      case 4:
        return str.replace(/(\s*$)/g, "");
      default:
        return str;
    }
  },

  /*
  * 字母大小写切换
  * type 1-首字母大写  2-首页母小写  3-大小写转换 4-全部大写 5-全部小写
  * tools.changeCase('asdasd',1)
  * result：Asdasd
  * */
  changeCase: function (str, type) {
    function ToggleCase(str) {
      var itemText = ""
      str.split("").forEach(
        function (item) {
          if (/^([a-z]+)/.test(item)) {
            itemText += item.toUpperCase();
          } else if (/^([A-Z]+)/.test(item)) {
            itemText += item.toLowerCase();
          } else {
            itemText += item;
          }
        });
      return itemText;
    }
    switch (type) {
      case 1:
        return str.replace(/\b\w+\b/g, function (word) {
          return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
        });
      case 2:
        return str.replace(/\b\w+\b/g, function (word) {
          return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
        });
      case 3:
        return ToggleCase(str);
      case 4:
        return str.toUpperCase();
      case 5:
        return str.toLowerCase();
      default:
        return str;
    }
  },
  /*
  * 字符串循环复制
  * repeatStr(str->字符串, count->次数)
  * ecDo.repeatStr('123',3)
  * "result：123123123"
  * */
  repeatStr: function (str, count) {
    var text = '';
    for (var i = 0; i < count; i++) {
      text += str;
    }
    return text;
  }
}