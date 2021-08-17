const debug = require('debug')('Block');
const SHA256 = require('crypto-js/sha256');
const moment = require('moment');

class Block {
  constructor({
    index,
    data,
    precedingHash
  }) {
    this.index = index;
    this.timestamp = moment();
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }

  computeHash() {
    return SHA256(this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
  }

  proofOfWork(difficulty) {
    while (this.hash.cubString(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce += 1;
      this.hash = this.computerHash();
    }
  }
}

module.exports = Block;
