// Real club/player names used for factual reference only (nominative use).
// No logos, crests, or official branding used.

const CATEGORIES = [
  {
    id: "nicknames",
    label: "Nicknames",
    emoji: "🏷️",
    questions: [
      { q: "Which club is known as 'The Red Devils'?", a: ["Manchester United", "Liverpool", "Arsenal", "Chelsea"], c: 0 },
      { q: "Which club is nicknamed 'The Toffees'?", a: ["Everton", "Fulham", "Brentford", "Wolves"], c: 0 },
      { q: "Which club is known as 'The Gunners'?", a: ["Arsenal", "Tottenham", "West Ham", "Crystal Palace"], c: 0 },
      { q: "Which club is called 'The Baggies'?", a: ["West Bromwich Albion", "Burnley", "Norwich", "Watford"], c: 0 },
      { q: "Which club is nicknamed 'The Cherries'?", a: ["Bournemouth", "Brighton", "Brentford", "Bristol City"], c: 0 },
      { q: "Which club is known as 'The Blades'?", a: ["Sheffield United", "Sheffield Wednesday", "Leeds United", "Huddersfield"], c: 0 },
      { q: "Which club is nicknamed 'The Foxes'?", a: ["Leicester City", "Wolves", "Derby County", "Nottingham Forest"], c: 0 },
      { q: "Which club is known as 'The Hammers'?", a: ["West Ham United", "Fulham", "Charlton", "Millwall"], c: 0 },
      { q: "Which club is called 'The Magpies'?", a: ["Newcastle United", "Notts County", "Brighton", "Burnley"], c: 0 },
      { q: "Which club is nicknamed 'The Seagulls'?", a: ["Brighton & Hove Albion", "Bournemouth", "Blackpool", "Southend"], c: 0 },
      { q: "Which club is known as 'The Tigers'?", a: ["Hull City", "Leicester City", "Wolves", "Derby County"], c: 0 },
      { q: "Which club is nicknamed 'The Cottagers'?", a: ["Fulham", "Brentford", "QPR", "Chelsea"], c: 0 },
      { q: "Which club is called 'The Royals'?", a: ["Reading", "Fulham", "Brighton", "Crystal Palace"], c: 0 },
      { q: "Which club is nicknamed 'The Bees'?", a: ["Brentford", "Barnet", "Brighton", "Bury"], c: 0 },
      { q: "Which club is known as 'The Hornets'?", a: ["Watford", "Wolves", "Wigan", "Wycombe"], c: 0 }
    ]
  },
  {
    id: "stadiums",
    label: "Stadiums",
    emoji: "🏟️",
    questions: [
      { q: "Which club plays at Anfield?", a: ["Liverpool", "Everton", "Manchester City", "Newcastle United"], c: 0 },
      { q: "Which club plays its home games at Old Trafford?", a: ["Manchester United", "Manchester City", "Bolton", "Salford City"], c: 0 },
      { q: "The Emirates Stadium is home to which club?", a: ["Arsenal", "Tottenham", "Chelsea", "Fulham"], c: 0 },
      { q: "Stamford Bridge is the home of which club?", a: ["Chelsea", "Fulham", "QPR", "Brentford"], c: 0 },
      { q: "Which club plays at the Tottenham Hotspur Stadium?", a: ["Tottenham", "Arsenal", "West Ham", "Leyton Orient"], c: 0 },
      { q: "The Etihad Stadium is home to which club?", a: ["Manchester City", "Manchester United", "Stockport", "Oldham"], c: 0 },
      { q: "Villa Park has been home to which club since 1897?", a: ["Aston Villa", "Birmingham City", "Wolves", "West Brom"], c: 0 },
      { q: "Which club plays at St James' Park?", a: ["Newcastle United", "Sunderland", "Middlesbrough", "Leeds"], c: 0 },
      { q: "Goodison Park was the long-time home of which club?", a: ["Everton", "Liverpool", "Tranmere", "Wigan"], c: 0 },
      { q: "The London Stadium is home to which club?", a: ["West Ham United", "Tottenham", "Arsenal", "Chelsea"], c: 0 },
      { q: "Molineux Stadium is home to which club?", a: ["Wolves", "West Brom", "Aston Villa", "Birmingham"], c: 0 },
      { q: "Which club plays at Selhurst Park?", a: ["Crystal Palace", "Charlton", "Millwall", "QPR"], c: 0 },
      { q: "The Amex Stadium is home to which club?", a: ["Brighton & Hove Albion", "Bournemouth", "Southampton", "Portsmouth"], c: 0 },
      { q: "Which club plays at the City Ground?", a: ["Nottingham Forest", "Notts County", "Leicester City", "Derby County"], c: 0 },
      { q: "Elland Road is home to which club?", a: ["Leeds United", "Huddersfield", "Bradford", "Sheffield Wednesday"], c: 0 }
    ]
  },
  {
    id: "jerseys",
    label: "Jerseys & Colours",
    emoji: "👕",
    questions: [
      { q: "Which club is famous for playing in all-red at home?", a: ["Liverpool", "Everton", "Chelsea", "Sunderland"], c: 0 },
      { q: "Which club traditionally plays in blue shirts with white shorts?", a: ["Chelsea", "Arsenal", "Liverpool", "Aston Villa"], c: 0 },
      { q: "Which club plays in red and white stripes at home?", a: ["Sunderland", "Chelsea", "Everton", "Newcastle"], c: 0 },
      { q: "Which club is known for black and white stripes?", a: ["Newcastle United", "Wolves", "Fulham", "Derby County"], c: 0 },
      { q: "Which club wears claret and blue at home?", a: ["Aston Villa", "Everton", "Leeds", "Brighton"], c: 0 },
      { q: "Which club plays in gold and black at home?", a: ["Wolves", "Watford", "Norwich", "Burnley"], c: 0 },
      { q: "Which club plays in all-white at home?", a: ["Leeds United", "Fulham", "Tottenham", "Swansea"], c: 0 },
      { q: "Which club is famous for sky blue home shirts?", a: ["Manchester City", "Coventry", "Chelsea", "Brighton"], c: 0 },
      { q: "Which club plays in red home shirts with white sleeves?", a: ["Arsenal", "Liverpool", "Manchester United", "Sunderland"], c: 0 },
      { q: "Which club traditionally wears red and white hoops?", a: ["Reading", "Brentford", "Stoke", "Sheffield United"], c: 0 },
      { q: "Which club plays in yellow and green?", a: ["Norwich City", "Watford", "Burnley", "Hull City"], c: 0 },
      { q: "Which club's home kit is red and white stripes with black shorts?", a: ["Sheffield United", "Sunderland", "Stoke", "Brentford"], c: 0 },
      { q: "Which club's home kit is a plain red shirt with black shorts?", a: ["Manchester United", "Liverpool", "Arsenal", "Nottingham Forest"], c: 0 },
      { q: "Which club wears dark blue with white trim at home?", a: ["Tottenham", "Portsmouth", "Everton", "West Brom"], c: 0 },
      { q: "Which club is famous for its all-claret home kit?", a: ["Burnley", "Aston Villa", "West Ham", "Wolves"], c: 0 }
    ]
  },
  {
    id: "history",
    label: "History",
    emoji: "📜",
    questions: [
      { q: "Which club has won the most English top-flight league titles?", a: ["Manchester United", "Liverpool", "Arsenal", "Everton"], c: 0 },
      { q: "In which year did the English top flight become the 'Premier League'?", a: ["1992", "1988", "1996", "2000"], c: 0 },
      { q: "Which club went an entire league season unbeaten in 2003–04?", a: ["Arsenal", "Manchester United", "Chelsea", "Liverpool"], c: 0 },
      { q: "Which club famously won the league title in 2015–16 against 5000–1 odds?", a: ["Leicester City", "Blackburn Rovers", "Leeds United", "Everton"], c: 0 },
      { q: "Which manager led Manchester United to 13 league titles?", a: ["Sir Alex Ferguson", "Arsène Wenger", "José Mourinho", "Brian Clough"], c: 0 },
      { q: "Which club won the first Premier League title in 1992–93?", a: ["Manchester United", "Blackburn Rovers", "Arsenal", "Liverpool"], c: 0 },
      { q: "Which club is the oldest in the English top flight today?", a: ["Nottingham Forest", "Aston Villa", "Everton", "Wolves"], c: 0 },
      { q: "Which club won the league in 1994–95 under Kenny Dalglish?", a: ["Blackburn Rovers", "Manchester United", "Newcastle", "Liverpool"], c: 0 },
      { q: "Which club did Arsène Wenger manage from 1996 to 2018?", a: ["Arsenal", "Tottenham", "Chelsea", "Fulham"], c: 0 },
      { q: "Which club won the treble in 1999?", a: ["Manchester United", "Liverpool", "Arsenal", "Chelsea"], c: 0 },
      { q: "In 2012, which club won the league with a last-second goal by Sergio Agüero?", a: ["Manchester City", "Manchester United", "Chelsea", "Liverpool"], c: 0 },
      { q: "Which club holds the record for the biggest away win in Premier League history (9–0)?", a: ["Manchester United", "Liverpool", "Leicester City", "Chelsea"], c: 0 },
      { q: "Which English club won the 2005 Champions League final in Istanbul?", a: ["Liverpool", "Manchester United", "Arsenal", "Chelsea"], c: 0 },
      { q: "Which club did Sir Alex Ferguson manage before Manchester United?", a: ["Aberdeen", "Celtic", "Rangers", "St Mirren"], c: 0 },
      { q: "Which club won the first FA Cup final at the new Wembley in 2007?", a: ["Chelsea", "Manchester United", "Arsenal", "Liverpool"], c: 0 }
    ]
  },
  {
    id: "current",
    label: "Modern Era",
    emoji: "⭐",
    questions: [
      { q: "Which Norwegian striker joined Manchester City in 2022 and broke the single-season scoring record?", a: ["Erling Haaland", "Alexander Sørloth", "Joshua King", "Moi Elyounoussi"], c: 0 },
      { q: "Which Egyptian forward has been Liverpool's top scorer for multiple seasons?", a: ["Mohamed Salah", "Sadio Mané", "Roberto Firmino", "Trezeguet"], c: 0 },
      { q: "Which Spanish manager coached Manchester City to a treble in 2022–23?", a: ["Pep Guardiola", "Unai Emery", "Mikel Arteta", "Xabi Alonso"], c: 0 },
      { q: "Which South Korean forward has starred for Tottenham since 2015?", a: ["Son Heung-min", "Kim Min-jae", "Hwang Hee-chan", "Lee Kang-in"], c: 0 },
      { q: "Which club hired Mikel Arteta as head coach in 2019?", a: ["Arsenal", "Everton", "Manchester City", "Chelsea"], c: 0 },
      { q: "Which Portuguese forward returned to Manchester United in 2021?", a: ["Cristiano Ronaldo", "Bruno Fernandes", "Bernardo Silva", "João Félix"], c: 0 },
      { q: "Which club did Jürgen Klopp manage from 2015 to 2024?", a: ["Liverpool", "Manchester United", "Arsenal", "Chelsea"], c: 0 },
      { q: "Which Brazilian midfielder joined Newcastle from Lyon in 2022?", a: ["Bruno Guimarães", "Joelinton", "Gabriel Martinelli", "Richarlison"], c: 0 },
      { q: "Which English club did Graham Potter manage before Chelsea in 2022?", a: ["Brighton", "Fulham", "Crystal Palace", "Southampton"], c: 0 },
      { q: "Which club broke the British transfer record for Moisés Caicedo in 2023?", a: ["Chelsea", "Arsenal", "Manchester United", "Liverpool"], c: 0 },
      { q: "Which Argentine midfielder joined Chelsea in 2023 from Benfica?", a: ["Enzo Fernández", "Moisés Caicedo", "Alexis Mac Allister", "Julián Álvarez"], c: 0 },
      { q: "Which club did Unai Emery take over in 2022 and lead to Champions League qualification?", a: ["Aston Villa", "Arsenal", "Newcastle", "Brighton"], c: 0 },
      { q: "Which English striker became Tottenham's all-time top scorer in 2023?", a: ["Harry Kane", "Son Heung-min", "Wayne Rooney", "Alan Shearer"], c: 0 },
      { q: "Which Dutch defender joined Liverpool from Southampton in 2018?", a: ["Virgil van Dijk", "Matthijs de Ligt", "Nathan Aké", "Stefan de Vrij"], c: 0 },
      { q: "Which Norwegian midfielder joined Arsenal in 2023 from West Ham?", a: ["Martin Ødegaard", "Declan Rice", "Kai Havertz", "Thomas Partey"], c: 0 }
    ]
  },
  {
    id: "mixed",
    label: "Mixed Bag",
    emoji: "🎲",
    questions: [
      { q: "How many players from each team start a football match on the pitch?", a: ["11", "10", "9", "12"], c: 0 },
      { q: "What is the maximum number of substitutions typically allowed in a league match?", a: ["5", "3", "2", "7"], c: 0 },
      { q: "How long is a standard football match (regulation time)?", a: ["90 minutes", "80 minutes", "100 minutes", "60 minutes"], c: 0 },
      { q: "What colour card means a player is sent off?", a: ["Red", "Yellow", "Green", "Blue"], c: 0 },
      { q: "Which domestic English cup is often called the 'FA Cup'?", a: ["FA Cup", "League Cup", "Community Shield", "UEFA Cup"], c: 0 },
      { q: "What is the transfer window?", a: ["A period when clubs can buy and sell players", "A stadium feature", "A training drill", "A type of ticket"], c: 0 },
      { q: "How many points is a win worth in the league table?", a: ["3", "1", "2", "4"], c: 0 },
      { q: "Which club is in North London and plays in red?", a: ["Arsenal", "Chelsea", "Fulham", "West Ham"], c: 0 },
      { q: "Which club is in Manchester and plays in sky blue?", a: ["Manchester City", "Manchester United", "Bolton", "Oldham"], c: 0 },
      { q: "Which club is based in Merseyside and plays in red?", a: ["Liverpool", "Everton", "Tranmere", "Wigan"], c: 0 },
      { q: "Which club is based in Merseyside and plays in blue?", a: ["Everton", "Liverpool", "Tranmere", "Bolton"], c: 0 },
      { q: "What is the name of England's national football stadium?", a: ["Wembley", "Twickenham", "Lord's", "Old Trafford"], c: 0 },
      { q: "Which city is home to both Manchester clubs?", a: ["Manchester", "Liverpool", "Birmingham", "Leeds"], c: 0 },
      { q: "Which club is based in West London and plays in blue?", a: ["Chelsea", "Arsenal", "Tottenham", "West Ham"], c: 0 },
      { q: "Which club is based in East London and plays in claret and blue?", a: ["West Ham United", "Chelsea", "Arsenal", "Fulham"], c: 0 }
    ]
  }
];
