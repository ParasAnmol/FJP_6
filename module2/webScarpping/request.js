const request = require('request');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

request('https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/chennai-super-kings-vs-kolkata-knight-riders-1st-match-1304047/full-scorecard',cb); 

function cb(error, response, html) {
    if (error)  
        console.error('error:', error); // Print the error if one occurred
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let teamsname = document.querySelectorAll(".name-link .name ");
        console.log(teamsname[0].textContent);
        console.log(teamsname[1].textContent);
    }
}