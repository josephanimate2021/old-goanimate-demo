var args = new Object();
var query = location.search.substring(1);
var pairs = query.split(",");
for (var i = 0; i < pairs.length; i++) {
  var pos = pairs[i].indexOf("=");
  if (pos==-1) continue
  var argname = pairs[i].substring(0, pos);
  var value = pairs[i].substring(pos + 1);
  args[argname] = unescape(value)
};
