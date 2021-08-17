const debug = require('debug')('Chain');
const moment = require('moment');
const Block = require('./Block');

class Chain {
  constructor() {
    this.chain = [];
    this.chain.push(this.createGenesisBlock());
    this.difficulty = 4;
  }

  createGenesisBlock() {
    debug('createGenesisBlock');
    return new Block({
      index: this.getNextindex(),
      data: 'Genesis Block',
      precedingHash: '0'
    });
  }

  getLatestBlock() {
    debug('getLatestBlock');
    return this.chain[this.chain.length - 1];
  }

  getNextindex() {
    debug('getNextindex');
    return this.chain.length;
  }

  addNewBlock({
    data
  }) {
    debug('addNewBlock');
    const newBlock = new Block({
      index: this.getNextindex(),
      data: data,
      precedingHash: this.getLatestBlock().hash
    });
    this.chain.push(newBlock);
  }

  checkChainValidity() {
    for (let i = 0; i < this.chain.length; i += 1) {
      const currentBlock = this.chain[i];
      const precedingBlock = this.chain[i - 1];

      if ((currentBlock.hash !== currentBlock.computeHash()) || currentBlock.precedingHash !== precedingBlock.computeHash()) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Chain;
