const range = (start, end) => [...Array(end - start + 1).keys()].map(x => x + start);

module.exports = {range};
