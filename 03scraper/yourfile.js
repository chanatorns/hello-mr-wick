const cheerio = require('cheerio');
const axios = require('axios');
const myArgs = process.argv.slice(2);

const url = 'https://codequiz.azurewebsites.net';

const mapHtmlToFundObj = ({body, column, indexColumn}) => {
  const $ = cheerio.load(body);
  const allRows = $('tr').has('td')
  const fundObj = {}
  allRows.each((i, el) => {
    const fundValue = {}
    column.forEach((val, i) => {
      if (i === indexColumn) {
        return;
      }
      fundValue[val] = $(el).children().eq(i).text();
    })
    fundObj[$(el).children().eq(indexColumn).text()] = fundValue;
  })
  return fundObj;
}

(async () => {
  const response = await axios(url, {
    headers: {
      Cookie: 'hasCookie=true;'
    }
  });

  if (!myArgs[0]) {
    console.log('Please sent fund code as argument.')
    return;
  }

  const fundCode = myArgs[0].toUpperCase();
  const column = ['FUNDNAME', 'NAV', 'BID', 'OFFER', 'CHANGE']
  const fundObj = mapHtmlToFundObj(
    {
      body: response.data,
      column: column,
      indexColumn: 0
    }
  );

  const navValue = fundObj[fundCode] && fundObj[fundCode][column[1]];
  if (!navValue) {
    console.log('This fund code is not exists.')
  }
  console.log(navValue);
})();