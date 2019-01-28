const linData = {
    newsfeed: [
      {
        title: "Lin Manuel Miranda Working on Moana Sequel",
        url: "https://www.cinemablend.com/news/2465663/is-lin-manuel-miranda-working-on-a-moana-sequel",
        date: "1/23/19"
      },
      {
        title: "Lin-Manuel Miranda is peeved about this year’s Oscars",
        url: "https://pagesix.com/2019/01/25/lin-manuel-miranda-is-peeved-about-this-years-oscars/",
        date: "1/25/19",
      },
      {
        title: "Lin-Manuel Miranda in Talks to Write Disney's First Latina Disney Princess",
        url: "https://www.thedailybeast.com/lin-manuel-miranda-in-talks-to-write-disneys-first-latina-princess",
        date: "1/25/19",
      },
      {
        title: "Puerto Rico Gives Lin-Manuel Miranda a Hero's Welcome at Hamilton Opening Weekend: 'I Felt It'",
        url: "  https://people.com/theater/lin-manuel-miranda-hamilton-puerto-rico-standing-ovation/",
        date: "1/25/19"
      },
      {
        title: "See Lin-Manuel Miranda, ‘Hamilton’ Cast Perform ‘The Story of Tonight’ With Jimmy Fallon",
        url: "  https://www.rollingstone.com/tv/tv-news/lin-manuel-miranda-hamilton-jimmy-fallon-779743/",
        date: "1/16/19"
      },
      {
        title: "Lin-Manuel Miranda And 'Hamilton' Partners Save A Manhattan Theater Bookstore",
        url: "https://www.npr.org/2019/01/08/683284098/lin-manuel-miranda-and-hamilton-partners-save-a-manhattan-theater-bookstore",
        date: "1/8/19"
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

  const collabList = function(collabArray) {
    let collabList = "";
    for(let i = 0; i < collabArray.length; i++) {
      collabList += `<li>${collabArray[i]}</li>`
    }
    return collabList;
   }
   
   collabString = collabList(linData.executiveSummary.knownCollaborations);
   document.querySelector("#executive-summary").innerHTML = collabString;

   const aliasList = function(aliasArray) {
    let aliasList = "";
    for(let i = 0; i < aliasArray.length; i++) {
      aliasList += `<li>${aliasArray[i]}</li>`
    }
    return aliasList;
   }
   
   aliasString = aliasList(linData.executiveSummary.listOfAliases);
   document.querySelector("#executive-summary").innerHTML = aliasString;

  const executiveSummaryH1 = function(name, style){
    return `<h1 class = ${style}>${name}</h1>`
  }

  const executiveSummaryH2 = function(name, style){
    return `<h2 class = ${style}>${name}</h2>`
  }
  
  const executiveSummaryLi = function(text, style){
    return `<ul class = ${style}>${text}</ul>`
  }
  const executiveSummaryP = function(text, style){
    return `<p class = ${style}>${text}</p>`
  }

  const executiveImage = function(image, style){
    return  `<img class = ${style} src = ${image.photURL}>`
  }

  // const collaborations = executiveSummaryLi(linData.executiveSummary.knownCollaborations, "ul")

  const image = executiveImage(linData.executiveSummary.image, "https://pmcvariety.files.wordpress.com/2018/07/lin-manuel.jpg?w=1000", "img")

  // const aliases = executiveSummaryP(linData.executiveSummary.listOfAliases)

  const residence = executiveSummaryP(linData.executiveSummary.countryOfResidence)

  let executiveSummaryHTMLString = executiveSummaryH1("Lin Manuel Miranda", "h1") + executiveSummaryH2("Known Collaborators:", "h2") + executiveSummaryLi(`${collabString}`, "ul") + executiveImage(`${image}`, "img") + executiveSummaryH2("Known Aliases", "h2") + executiveSummaryP(`${aliasString}`, "p") + executiveSummaryH2("Known Residence", "h2") + executiveSummaryP(`${residence}`)

  document.querySelector("#executive-summary").innerHTML = executiveSummaryHTMLString