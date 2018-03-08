const test = require('tape');
require('./index');

test('smoosh picks the first item', t => {
  t.plan(1);
  const arr = [10, 20, 30, 40];
  t.equals(arr.smoosh(), 10);
});

test('smooshMap picks the first item then maps it', t => {
  t.plan(1);
  const arr = [5, 6, 7, 8];
  t.equals(arr.smooshMap(x => x * 0.5), 2.5);
});

test('smooshMap does not call fn on an empty array', t => {
  t.plan(1);
  const arr = [];
  t.equals(
    arr.smooshMap(x => {
      throw new Error('Unexpected');
    }),
    undefined,
  );
});
