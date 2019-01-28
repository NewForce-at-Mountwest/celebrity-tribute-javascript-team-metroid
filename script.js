const linData = {
  newsfeed: [
    {
      title: "Lin Manuel Miranda Working on Moana Sequel",
      url: "https://www.cinemablend.com/news/2465663/is-lin-manuel-miranda-working-on-a-moana-sequel",
      date: "1/23/19",
      image: "https://cdn.vox-cdn.com/thumbor/hyA560LW9lkdyANSqeLc3kK8oJw=/0x0:1920x800/1200x800/filters:focal(506x118:812x424)/cdn.vox-cdn.com/uploads/chorus_image/image/52005641/MoanaPortrait.0.jpeg"
    },
    {
      title: "Lin-Manuel Miranda is peeved about this year’s Oscars",
      url: "https://pagesix.com/2019/01/25/lin-manuel-miranda-is-peeved-about-this-years-oscars/",
      date: "1/25/19",
      image: "https://cdn.vox-cdn.com/thumbor/rMx8_Kvm6Bjsejes98fF5CVu-QU=/0x0:3000x2225/1200x800/filters:focal(1453x439:1933x919)/cdn.vox-cdn.com/uploads/chorus_image/image/60769003/97052777.jpg.0.jpg",
    },
    {
      title: "Lin-Manuel Miranda in Talks to Write Disney's First Latina Disney Princess",
      url: "https://www.thedailybeast.com/lin-manuel-miranda-in-talks-to-write-disneys-first-latina-princess",
      date: "1/25/19",
      image: "https://assets1.ignimgs.com/thumbs/userUploaded/2018/12/14/disneysongchallenge-linmanuelblogroll-1544829761062.jpg"
    },
    {
      title: "Puerto Rico Gives Lin-Manuel Miranda a Hero's Welcome at Hamilton Opening Weekend: 'I Felt It'",
      url: "  https://people.com/theater/lin-manuel-miranda-hamilton-puerto-rico-standing-ovation/",
      date: "1/25/19",
      image: "https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2016/09/lin-manuel_miranda_hamilton_trump.jpg?itok=l7Gp4acg",
    },
    {
      title: "See Lin-Manuel Miranda, ‘Hamilton’ Cast Perform ‘The Story of Tonight’ With Jimmy Fallon",
      url: "  https://www.rollingstone.com/tv/tv-news/lin-manuel-miranda-hamilton-jimmy-fallon-779743/",
      date: "1/16/19",
      image: "https://timedotcom.files.wordpress.com/2016/06/lin-manuel-miranda-tonys.jpg"
    },
    {
      title: "Lin-Manuel Miranda And 'Hamilton' Partners Save A Manhattan Theater Bookstore",
      url: "https://www.npr.org/2019/01/08/683284098/lin-manuel-miranda-and-hamilton-partners-save-a-manhattan-theater-bookstore",
      date: "1/8/19",
      image: "https://cdn.cnn.com/cnnnext/dam/assets/170213113114-creators-lin-miranda-exlarge-169.jpg"
    }

  ],
  personalLife: {
    birthDate: "January 16, 1980",
    birthLocation: "New York City",
    cityOfResidence: "New York City",
    nationality: "Puerto Rican, American",
    family: {
      spouse: "Vanessa Nada",
      kids: ["Sebastian Miranda",
        "Francisco Miranda"
      ],
      parents: ["Luis A. Miranda, Jr.",
        "Luz Towns-Miranda"],
      pets: ["Tobillo", "Toby"]
    }
  },
  career: {
    shortIntro: "Lin-Manuel Miranda has written and performed in many successful musicals and movies since 2002. His most recent               musical being Hamilton: An American Musical. He recently starred in the movie, Mary Poppins Returns.",
    MusicalsWritten: ["In The Heights", "Bring It On: The Musical", "Hamilton: An American Musical"],
    notableRoles: ["Usnavi", "Alexander Hamilton"],
    notableSongs: ["In The Heights", "My Shot", "Alexander Hamilton"],
    awards: ["Multiple, Grammy Awards", "Multiple Tony Awards", "An Emmy Award"]
  },
  executiveSummary: {
    knownCollaborations: ["Dwayne The Rock Johnson", "The McElroy Brothers", "Emily Blunt", "Leslie Odom Jr.", "Daveed Diggs", "Renee         Elise Goldsberry", "Phillipa Soo"],
    image: {
      photURL: "https://pmcvariety.files.wordpress.com/2018/07/lin-manuel.jpg?w=1000",
      caption: "Lin Manuel Miranda Headshot"
    },
    listOfAliases: ["Lin", "LMM", "Alexander Hamilton"],
    countryOfResidence: "United States"
  }
}


//Newsfeed
const h4News = (style, date) => {
  return `<h4 class=${style}>${date}</h4>`
}
const aNews = (link, style, title) => {
  return `<a href="${link}" class=${style}>${title}</a>`

}
const imageNews = (newsLink, link, style) => {
  return `<a href=${newsLink}> <img src=${link} class=${style}></a>`
}

function h1News(name){
  return `<h1>${name}</h1>`
}


function buildComponent(h4Style, h4Name, imgNewsLink, imgLink, imgStyle, aLink, aStyle, aTitle) {
  const h4NewsFinished = h4News(h4Style, h4Name);
  const imageNewsFinished = imageNews(imgNewsLink, imgLink, imgStyle)
  const aNewsFinished = aNews(aLink, aStyle, aTitle)
  return `<figure><figcaption>${h4NewsFinished}</figcaption> ${imageNewsFinished} <figcaption>${aNewsFinished}</figcaption></figure>`
}

let titleHTMLString = ""
for (let i = 0; i < linData.newsfeed.length; i++) {
  titleHTMLString = titleHTMLString + buildComponent("news-header", linData.newsfeed[i].date, linData.newsfeed[i].url, linData.newsfeed[i].image, "news-image", linData.newsfeed[i].url, "news-title", linData.newsfeed[i].title)
}

let newsfeedHeader = h1News("News Feed")

function buildFinalComponent(){
  return newsfeedHeader + titleHTMLString
}

document.querySelector("#news-feed").innerHTML = buildFinalComponent();

//End of Newsfeed

  
//Personal page

//Building block functions
const h1personal = function(name, style) {
    return `<h1 class="${style}">${name}</h1>`
}

const personalPara = function(text, style) {
  return `<p class="${style}">${text}</p>`
}

const familySection = function(text, style, image, imgClass) {
  return `<section class="wifeDiv"><p class="${style}">${text}</p><img src="${image}" alt="" class="${imgClass}"></section>`
}

//Family variables (function calls)
const wife = familySection(linData.personalLife.family.spouse, "family", "https://www.gannett-cdn.com/-mm-/bc4847f0b21f1d3e6d397104e9816c0897030a90/c=0-92-3668-2164/local/-/media/2018/02/02/USATODAY/USATODAY/636531785687749795-GTY-884916490-95769085.JPG?width=3200&height=1680&fit=crop", "family-image")


const children = familySection(linData.personalLife.family.kids, "family", "https://i.pinimg.com/736x/87/9a/c1/879ac1a04183fc8807664c9a5663a09b--the-kid-the-ojays.jpg", "family-image");

const parents = familySection(linData.personalLife.family.parents, "family", "https://media.broadway.com/photos/large/67051.jpg", "family-image");

//Pet function and string
const petSection = function (style, text, image, imgClass){
  return `<section class = "${style}"><p>${text}</p><img src="${image}" class = "${imgClass}"></section>`
}

const pets = petSection("family", linData.personalLife.family.pets[1], "https://pbs.twimg.com/media/C4OtiHkWYAAvxKt.jpg", "family-image") + petSection("family", linData.personalLife.family.pets[0], "http://celebritydogwatcher.com/wp-content/uploads/2017/02/celebrity_french_bulldog_names-300x285.jpg", "family-image");

//Combines strings
let family = `<div class = "familyDiv">${wife} ${children} ${parents}</div>`; 
let petString = `<div class = "petDiv">${pets}</div>`;

//DOMString 
let personalHTMLString = h1personal("Lin Manuel Miranda", "h1") + personalPara(`Birth Date: ${linData.personalLife.birthDate}`) + personalPara(`Birth Place: ${linData.personalLife.birthLocation}`, "p") + personalPara(`City of Residence: ${linData.personalLife.cityOfResidence}`, "p") + personalPara(`Nationality: ${linData.personalLife.nationality}`) + h1personal(`Family`, "h1") + family + h1personal("Pets", "h1") + petString;
//Prints to DOM
document.querySelector("#personal-life").innerHTML = personalHTMLString;

//Personal Page



