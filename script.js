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



const h4News = (style, date) => {
  return `<h4 class=${style}>${date}</h4>`
}
const aNews = (link, style, title) => {
  return `<a href="${link}" class=${style}>${title}</a>`

}
const imageNews = (link, style) => {
  return `<img src=${link} class=${style}>`
}
function buildComponent(h4Style, h4Name, imgLink, imgStyle, aLink, aStyle, aTitle) {
  const h4NewsFinished = h4News(h4Style, h4Name);
  const imageNewsFinished = imageNews(imgLink, imgStyle)
  const aNewsFinished = aNews(aLink, aStyle, aTitle)
  return `${h4NewsFinished} ${imageNewsFinished} <br> ${aNewsFinished}`
}

let titleHTMLString = ""
for (let i = 0; i < linData.newsfeed.length; i++) {
  titleHTMLString = titleHTMLString + buildComponent("news-header", linData.newsfeed[i].date, linData.newsfeed[i].image, "news-image", linData.newsfeed[i].url, "news-title", linData.newsfeed[i].title)
}

document.querySelector("#news-feed").innerHTML = titleHTMLString
