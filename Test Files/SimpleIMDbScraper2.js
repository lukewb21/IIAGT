const puppeteer = require('puppeteer-extra');

const stealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(stealthPlugin(''));




//ASYNC ALLOWS USE OF 'await' WHICH IS NECESSARY FOR A HEADLESS BROWSER AS LOADING TAKES TIME//
async function scrapeMovie(userSearch) {
  var imdbLink = 'https://www.imdb.com/find?q=';
  var searchText = userSearch.split(' ').join('+');
  var searchURL = imdbLink + searchText;
  console.log(searchURL);
  //LAUNCHES HEADLESS BROWSER//
  const browser = await puppeteer.launch({headless: false});
  //OPENS NEW PAGE//
  const page = await browser.newPage();
  //GOES TO GIVEN URL, WAITS UNTIL NETWORK IDLE TO ENSURE DYNAMIC PAGES FULLY LOAD//
  await page.goto(searchURL, {waitUntil: 'networkidle2'});

  //COPIES TOP RESULT ON IMDB//
  const [urlXPATH] = await page.$x('//*[@id="main"]/div/div[2]/table/tbody/tr[1]/td[2]/a');
  var urlv1 = await urlXPATH.getProperty('href');
  console.log(urlv1);

  urlv1 = String(urlv1);

  const url = urlv1.slice(0, urlv1.indexOf('?'));
  console.log(url);
  browser.close();
  //LAUNCHES HEADLESS BROWSER//

  const puppeteer2 = require('puppeteer-extra');

  const stealthPlugin2 = require('puppeteer-extra-plugin-stealth');

  puppeteer2.use(stealthPlugin2(''));


  const browser2 = await puppeteer2.launch({headless: true});

  //OPENS NEW PAGE//
  const page2 = await browser2.newPage();
  //GOES TO GIVEN URL, WAITS UNTIL NETWORK IDLE TO ENSURE DYNAMIC PAGES FULLY LOAD//
  await page2.goto(url, {
    waitUntil: 'networkidle2',
  });



  //SCRAPES MOVIE TITLE//
  //GETS REQUIRED ELEMENT USING SPECIFIED XPATH//
  const [title] = await page2.$x('//*[@id="__next"]/main/div/section[1]/section/div[3]/section/section/div[1]/div[1]/h1');
  const titletxt = await title.getProperty('textContent');
  const filmTitle = await titletxt.jsonValue();
  console.log({filmTitle});

  //SCRAPES DESCRIPTION//
  //GETS REQUIRED ELEMENT USING SPECIFIED XPATH//
  const [description] = await page2.$x('//*[@id="__next"]/main/div/section[1]/section/div[3]/section/section/div[3]/div[2]/div[1]/div[1]/p/span[3]');
  const desctxt = await description.getProperty('textContent');
  const filmDescription = await desctxt.jsonValue();
  console.log({filmDescription});

  //SCRAPES IMDB RATING//
  //GETS REQUIRED ELEMENT USING SPECIFIED XPATH//
  const [imdbrating] = await page2.$x('//*[@id="__next"]/main/div/section[1]/section/div[3]/section/section/div[1]/div[2]/div/div[1]/a/div/div/div[2]/div[1]/span[1]');
  const rating1txt = await imdbrating.getProperty('textContent');
  const imdbRating = await rating1txt.jsonValue();
  console.log({imdbRating});

  //SCRAPES META SCORE//
  //GETS REQUIRED ELEMENT USING SPECIFIED XPATH//
  const [metarating] = await page2.$x('//*[@id="__next"]/main/div/section[1]/section/div[3]/section/section/div[3]/div[2]/div[2]/ul/li[3]/a/span/span[1]/span');
  const rating2txt = await metarating.getProperty('textContent');
  const metaCriticRating = await rating2txt.jsonValue();
  console.log({metaCriticRating});


  browser2.close();
}

scrapeMovie('Breakfast at tiffanys');
