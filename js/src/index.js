const debug = require('debug');
const Chain = require('./Chain');

function createBlockChain() {
  debug('Mining in progress');
  const blockChain = new Chain();
  debug('Mining in progress');
  blockChain.addNewBlock({
    data: {
      sender: 'test01',
      recipient: 'test02',
      quantity: 20
    }
  });
  blockChain.addNewBlock({
    data: {
      sender: 'test03',
      recipient: 'test04',
      quantity: 40
    }
  });
  debug(blockChain);
  debug('blockChain', JSON.stringify(blockChain, null, 20));
  console.log(JSON.stringify(blockChain, null, 4));
}

createBlockChain();
