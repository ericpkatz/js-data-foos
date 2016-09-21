var router = require('express').Router();
var foos = [
  {
    name: 'fizz',
    id: 1
  },
  {
    name: 'buzz',
    id: 2
  }
];

router.get('/', function(req, res, next){
  res.send(foos);
});

router.delete('/:id', function(req, res, next){
  var idx = foos.indexOf(foos.filter(function(_foo){
    return _foo.id == req.params.id;
  })[0]);
  foos.splice(idx, 1);
  res.sendStatus(200);
});

router.post('/', function(req, res, next){
  var foo = req.body;
  foo.id = foos.reduce(function(max, _foo){
    if(_foo.id > max)
      max = _foo.id;
    return max;
  }, 0) + 1;
  foos.push(foo);
  res.send(foo);
});

module.exports = router;
