import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "http://api.football-data.org/v4/competitions/";

//Authorization
const Auth_Token = "b57c47994b224d27b99ea4069e4b0b82";
const config = {
  headers: { 'X-Auth-Token': Auth_Token },
};




app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//turning the player nameData and idData into key-value pairs for simple searching

//  const playerNames = [ "Gianluigi Donnarumma","Antonio Donnarumma","Ciprian Tătăruşanu","Andreas Jungdal","Leonardo Moleri","Davide Calabria","Alessio Romagnoli","Matteo Gabbia","Fikayo Tomori","Pierre Kalulu","Nikolaos Michelis","Franck Kessié","Rade Krunić","Sandro Tonali","Brahim Diaz","Soualiho Meïté","Alexis Saelemaekers","Daniel Maldini","Giacomo Olzer","Antonio Mionić","Marco Frigerio","Enrico Di Gesù","Mario Mandžukić","Ismael Bennacer","Ante Rebić","Zlatan Ibrahimovic","Samu Castillejo","Jens Hauge","Emil Roback","Hakan Çalhanoğlu","Theo Hernández","Simon Kjær","Diogo Dalot","Rafael Leão","Bartłomiej Dragowski","Federico Brancolini","Pietro Terracciano","Antonio Rosati","Jacopo Ricco","Maximiliano Olivera","Cristiano Biraghi","Martín Cáceres","Antonio Barreca","Lorenzo Venuti","Kevin Malcuit","Igor","Fabio Ponsi","Lorenzo Chiti","Franck Ribéry","Giacomo Bonaventura","Valentin Eysseric","Borja Valero","Gaetano Castrovilli","Sofyan Amrabat","Lucas Martínez","Cristóbal Montiel Rodríguez","Dimo Krastev","Alessandro Bianco","José Callejón","Christian Kouamé","Aleksandr Kokorin","Louis Munteanu","Erick Pulgar","Nikola Milenković","Germán Pezzella","Dušan Vlahović","Daniel Fuzato","Antonio Mirante","Simone Farelli","Pau López","Roger Ibañez","Federico Fazio","Bruno Peres","Rick Karsdorp","Leonardo Spinazzola","Davide Santon","Chris Smalling","Bryan Reynolds","Jordan Veretout","Nicolò Zaniolo","Amadou Diawara","Henrikh Mkhitaryan","Javier Pastore","Gonzalo Villar","Borja Mayoral","Edin Džeko","Carles Pérez","Riccardo Calafiori","Marash Kumbulla","Bryan Cristante","Gianluca Mancini","Stephan El Shaarawy","Lorenzo Pellegrini","Marco Sportiello","Pierluigi Gollini","Francesco Rossi","Boris Radunović","Ludovico Gelmi","Rafael Tolói","Mattia Caldara","Hans Hateboer","José Luis Palomino","Berat Gjimshiti","Boško Šutalo","Matteo Ruggeri","Giorgio Scalvini","Marten de Roon","Matteo Pessina","Aleksei Miranchuk","Viktor Kovalenko","Simone Panada","Manu Emmanuel Gyabuaa","Alessandro Cortinovis","Davide Angelo Ghislandi","Luis Muriel","Duván Zapata","Sam Lammers","Robin Gosens","Josip Iličić","Remo Freuler","Christian Romero","Joakim Mæhle","Ruslan Malinovskyi","Mario Pašalić","Łukasz Skorupski","Angelo Da Costa","Federico Ravaglia","Sebastian Breza","Marco Molla","Ibrahima Mbaye","Danilo","Lorenzo De Silvestri","Mitchell Dijks","Adama Soumaoro","Takehiro Tomiyasu","Gary Medel","Valentin Antov","Aaron Hickey","Alex Arnofoli","Omar Khailoti","Andrea Poli","Paolo Faragò","Roberto Soriano","Andri Fannar Baldursson","Nicolás Domínguez","Dion Ruffo Luci","Musa Barrow","Riccardo Orsolini","Rodrigo Palacio","Emanuel Vignato","Federico Santander","Nicola Sansone","Musa Juwara","Edoardo Vergani","Simone Rabbi","Mattia Pagliuca","Mattias Svanberg","Jerdy Schouten","Andreas Skov Olsen","Alessio Cragno","Guglielmo Vicario","Simone Aresti","Diego Godín","Luca Ceppitelli","Babis Lykogiannis","Daniele Rugani","Arturo Calabresi","Ragnar Klavan","Alessandro Tripaldelli","Francesco Paolo Cusumano","Gabriele Zappa","Andrea Carboni","Salvatore Boccia","Mattéo Tramoni","Radja Nainggolan","João Pedro Galvão","Alessandro Deiola","Kwadwo Asamoah","Marko Rog","Alfred Duncan","Gastón Pereiro","Isaias Del Pupo","Giovanni Simeone","Riccardo Sottil","Leonardo Pavoletti","Alberto Cerri","Zito","Gianluca Contini","Sebastian Walukiewicz","Răzvan Marin","Nahitan Nández","Mattia Perin","Lukáš Zima","Federico Marchetti","Alberto Paleari","Cristián Zapata","Luca Pellegrini","Andrea Masiello","Davide Biraschi","Edoardo Goldaniga","Paolo Ghiglione","Davide Zappacosta","Jérôme Onguéné","Domenico Criscito","Lennart-Marten Czyborra","Daniel Dumbravanu","Milan Badelj","Kevin Strootman","Filippo Melegoni","Ivan Radovanović","Valon Behrami","Francesco Cassata","Miha Zajc","Manolo Portanova","Nicolò Rovella","Mattia Destro","Goran Pandev","Eldor Shomurodov","Giuseppe Caso","Darian Males","Marko Pjaca","Gianluca Scamacca","Samir Handanovič","Daniele Padelli","Ionuț Radu","Filip Stankovic","Achraf Hakimi","Aleksandar Kolarov","Danilo D'Ambrosio","Andrea Ranocchia","Ashley Young","Lorenzo Moretti","Arturo Vidal","Roberto Gagliardini","Matías Vecino","Stefano Sensi","Franco Orlando Vezzoni","David Wieser","Andrea Pinamonti","Martin Satriano","Nicholas Bonfanti","Alexis Sánchez","Matteo Darmian","Romelu Lukaku","Christian Eriksen","Lautaro Martínez","Stefan de Vrij","Milan Škriniar","Ivan Perišić","Marcelo Brozović","Nicolò Barella","Alessandro Bastoni","Gianluigi Buffon","Wojciech Szczęsny","Carlo Pinsoglio","Franco Israel","Giovanni Garofani","Leonardo Bonucci","Gianluca Frabotta","Giorgio Chiellini","Alex Sandro","Juan Cuadrado","Alessandro Di Pardo","Alessandro Riccio","Arthur","Federico Bernardeschi","Aaron Ramsey","Daouda Peeters","Filippo Ranocchia","Riccardo Capellini","Félix Correia","Hamza Rafia","Dejan Kulusevski","Paulo Dybala","Giacomo Vrioni","Cosimo Marco Da Graca","Matthijs de Ligt","Weston McKennie","Adrien Rabiot","Rodrigo Bentancur","Federico Chiesa","Cristiano Ronaldo","Radu Drăgușin","Nicolò Fagioli","Merih Demiral","Danilo","Álvaro Morata","Thomas Strakosha","Pepe Reina","Marco Alia","Alessio Furlanetto","Gabriel Pereira","Mateo Musacchio","Ştefan Radu","Nicolò Armini","Patric","Adam Marušić","Luiz Felipe","Mohamed Salim Fares","Francesco Acerbi","Manuel Lazzari","Djavan Anderson","Jean-Daniel Akpa Akpro","Mattia Novella","Wesley Hoedt","Angelo Ndrecka","Damiano Franco","Marzio Pica","Enzo Adeagbo","Senad Lulić","Marco Parolo","Lucas Leiva","Danilo Cataldi","Joseph Minala","Gonzalo Escalante","Szymon Czyż","Marco Bertini","Joaquín Correa","Ciro Immobile","Luis Alberto","Felipe Caicedo","Vedat Muriqi","Raúl Moro","Sergej Milinković-Savić","Andreas Pereira","Luigi Sepe","Simone Colombi","Filippo Rinaldi","Martin Turk","Andrea Conti","Vincent Laurini","Mattia Bani","Giuseppe Pezzella","Simone Iacoponi","Riccardo Gagliolo","Bruno Alves","Maxime Busi","Lautaro Valenti","Vasilios Zagaritis","Reinaldo Radu","Abdoul Bane","Daan Dierckx","Alberto Grassi","Gastón Brugman","Wylan Cyprien","Hernani","Juan Brunetta","Drissa Camara","Simon Sohm","Márk Kosznovszky","Andreas Cornelius","Roberto Inglese","Yann Karamoh","Mattia Sprocati","Gervinho","Graziano Pellè","Hans Nicolussi Caviglia","Joshua Zirkzee","Gabriele Artistico","Chaka Traorè","André Silva","Yordan Osorio","Dennis Man","Jasmin Kurtić","Botond Balogh","Valentin Mihaila","Juraj Kucka","Alex Meret","David Ospina","Nikita Contini Baranovsky","Kostas Manolas","Faouzi Ghoulam","Kalidou Koulibaly","Mário Rui","Nikola Maksimović","Amir Rrahmani","Lorenzo Insigne","Matteo Politano","Tiemoué Bakayoko","Diego Demme","Andrea Petagna","Dries Mertens","Hirving Lozano","Victor Osimhen","Antonio Cioffi","Stanislav Lobotka","Eljif Elmas","Giovanni Di Lorenzo","Piotr Zieliński","Elseid Hysaj","Fabián Ruiz","Simone Scuffet","Manuel Gasparini","Juan Musso","Matteo Carnelos","Rodrigo Becão","Sebastian De Maio","Samir","Bram Nuytinck","Jens Stryger Larsen","Kevin Bonifazi","Sebastian Prödl","Marvin Zeegelaar","Mato Jajalo","Walace","Roberto Pereyra","Jean-Victor Makengo","Ewandro","Tolgay Ali Arslan","Ignacio Pussetto","Martin Palumbo","Alessandro Rigo","Felipe Vizeu","Ilija Nestorovski","Llorente","Stefano Okaka","Gerard Deulofeu","Fernando Forestieri","Petar Micin","Jayden Braaf","Thomas Ouwejan","Rodrigo de Paul","Nahuel Molina","Marco Silvestri","Nicola Borghetto","Alessandro Berardi","Ivor Pandur","Federico Ceccherini","Davide Faraoni","Giangiacomo Magnani","Yıldırım Mert Çetin","Koray Günter","Kevin Rüegg","Matteo Lovato","Bruno Amione","Matei Ilie","Filippo Terracciano","Iyenoma Udogie","Marco Benassi","Darko Lazović","Miguel Veloso","Daniel Bessa","Stefano Sturaro","Ronaldo Vieira","Adrien Tameze","Christian Pierobon","Eugenio Bracelli","Nikola Kalinić","Eddy Salcedo Mora","Kevin Lasagna","Andrea Favilli","Ebrima Colley","Matteo Cancellieri","Lorenzo Bertini","Philip Ankhrah","Pawel Dawidowicz","Mattia Zaccagni","Antonín Barák","Ivan Ilić","Federico Dimarco","Gianluca Pegolo","Andrea Consigli","Stefano Turati","Jeremy Toljan","Filippo Romagna","Vlad Chiricheş","Gian Marco Ferrari","Marlon","Giorgos Kiriakopoulos","Manuel Locatelli","Francesco Magnanelli","Filip Đuričić","Hamed Traoré","Jérémie Boga","Pedro Obiang","Maxime López","Mehdi Bourabia","Gregoire Defrel","Domenico Berardi","Francesco Caputo","Giacomo Raspadori","Brain Oddei","Lukáš Haraslín","Mert Müldür","Kaan Ayhan","Rogério","Alex Cordaz","Marco Festa","Gian Crespi","Pedro Pereira","Andrea Rispoli","Luca Marrone","Sebastiano Luperto","Antonio Mazzotta","Koffi Djidji","Giuseppe Cuomo","Lisandro Magallán","Vladimir Golemić","Arkadiusz Reca","Eduardo","Massimiliano Mignogna","Giovanni D'Aprile","Luca Cigarini","Adam Ounas","Ahmad Benali","Niccolò Zanellato","Jacopo Petriccione","Salvatore Molina","Aristóteles Romero","Miloš Vulić","Luis Rojas","Antonio Ranieri","Mattia Timmoneri","Simeon Nwankwo","Samuel Di Carmine","Emmanuel Rivière","Junior Messias","Denis Drăguş","Rafael","Titas Krapikas","Ivan Provedel","Jeroen Zoet","Elio Capradossi","Christian Dell'Orco","Federico Mattiello","Riccardo Marchizza","Simone Bastoni","Luca Vignali","Juan Ramos","Salvador Ferrer","Riccardo Saponara","Jacopo Sala","Matteo Ricci","Giulio Maggiore","Gennaro Acampora","Léo Sena","Kevin Agudelo","Nahuel Estévez","Lucien Agoume","Tommaso Pobega","Diego Farias","Andrey Galabinov","Daniele Verde","Mbala N'Zola","Emanuel Gyasi","Roberto Piccoli","Martin Erlic","Ardian Ismajli","Julian Chabot","Nicola Ravaglia","Emil Audero","Karlo Letica","Lorenzo Avogadri","Lorenzo Tonelli","Alex Ferrari","Vasco Regini","Tommaso Augello","Maya Yoshida","Omar Colley","Kaique Rocha","Mehdi Leris","Antonio Candreva","Jakub Jankto","Gastón Ramírez","Valerio Verre","Adrien Silva","Albin Ekdal","Morten Thorsby","Kristoffer Askildsen","Fabio Quagliarella","Antonio La Gumina","Ernesto Torregrossa","Keïta Baldé","Manolo Gabbiadini","Nik Prelec","Mikkel Damsgaard","Bartosz Bereszyński","Salvatore Sirigu","Vanja Milinković-Savić","Samir Ujkani","Armando Izzo","Nicola Murru","Nicolas N'Koulou","Lyanco","Cristian Ansaldi","Erick Ferigra","Mërgim Vojvoda","Wilfried Singo","Simone Verdi","Rolando Mandragora","Karol Linetty","Daniele Baselli","Amer Gojak","Ibrahim Karamoko","Altin Kryeziu","Christian Celesia","Antonio Sanabria","Andrea Belotti","Federico Bonazzoli","Simone Zaza","Samuele Vianni","Krisztofer Horváth","Saša Lukić","Tomás Rincón","Alessandro Buongiorno","Ricardo Rodriguez","Bremer","Niccolò Manfredini","Lorenzo Montipò","Pier Gori","Igor Lucatelli","Fabio Depaoli","Gaetano Letizia","Luca Antei","Alessandro Tuia","Kamil Glik","Daam Foulon","Luca Caldirola","Christian Pastina","Bryan Dabo","Artur Ioniţă","Perparim Hetemaj","Nicolas Viola","Siriki Sanogo","Pasquale Schiattarella","Andrés Tello","Davide Masella","Marco Sau","Gianluca Caprari","Iago Falqué","Roberto Insigne","Riccardo Improta","Gabriele Moncini","Adolfo Gaich","Giuseppe Di Serio","Gianluca Lapadula"
// ];


//  const playerIDs = [ 1731,1734,8688,152802,153829,1738,1740,1753,11528,141295,157462,1747,2494,2563,7887,8513,8858,136113,144567,156842,157143,157560,2045,2505,3557,11688,33126,37916,129818,1754,71,56,15905,15892,1766,1769,2476,2577,157540,1770,1776,2059,2279,2310,8398,10777,153931,157798,354,1750,1786,2008,2676,3705,11679,82008,157246,157799,2104,2707,49454,115574,1867,1775,1772,82002,1169,1861,2892,32695,1081,1800,1802,1817,1842,1996,7896,83868,1783,2013,2099,7795,8483,33150,69,1822,32510,133512,2151,1844,1837,1823,1819,1767,1829,1830,2611,147226,1832,1833,1835,1838,2315,83710,151241,153990,1848,2836,3681,16480,156554,156982,157495,157780,57,2271,7455,1847,1845,1841,45735,8975,8974,3553,1797,1860,1862,74293,136773,1866,2113,2292,7550,8393,9034,15950,20842,101111,154354,154357,1883,1913,33116,41305,46346,142106,1856,1886,1890,1955,15534,33129,99229,135089,152747,154355,15354,9770,24236,1895,3086,80481,111,1897,1905,2027,3064,7866,83697,97354,114052,137506,144913,420,1813,1907,1914,2033,2098,2194,7444,146074,1789,1792,1925,2606,129314,156704,105441,9237,3168,1959,1961,2048,2684,1737,1803,1831,1964,2187,2950,7807,16339,49444,80166,84821,1779,1812,1843,1943,2130,2199,2495,101080,111220,1888,1985,49307,97309,122236,3558,2681,1991,1993,2788,140823,53,1804,1995,1998,3317,152455,358,2006,2009,2197,152459,154780,2016,152458,152810,7911,7900,3662,3459,3220,2053,2007,2004,2003,1911,1834,2019,2022,2023,97893,156656,1744,1873,2025,2028,2037,97787,136953,1148,2040,7791,8882,40323,97785,127657,129319,1859,2046,56650,156747,7549,6507,3368,2041,1780,44,140432,97879,37118,7881,7819,2050,2082,99816,118438,157684,1746,2052,2058,2065,2069,2071,2168,2180,2358,2450,2627,2628,8087,115587,153557,153559,157019,2061,2062,2068,2329,2633,33344,152457,153558,77,2076,2077,2079,30059,146128,2066,33153,2083,2986,152513,153884,1742,1777,1939,2120,2380,2382,3242,75743,97151,127930,151913,152766,157247,2362,2871,8434,8540,45754,97128,98606,146092,1855,1958,2018,2634,21775,21876,97894,99731,136713,157543,157591,15906,15781,2365,136712,36802,30307,2344,3722,74378,1798,2084,2086,2090,3436,23127,2092,2193,7812,9544,1854,2103,3306,9434,157210,33628,30629,2487,2097,2088,22,2108,2111,46554,157016,1367,1874,2117,2119,2134,2282,8108,8127,2424,6532,8120,8437,11011,15946,45877,144807,157015,1554,2432,8007,8131,8135,11351,80152,159336,7685,2127,46452,2143,2144,2439,16577,2213,2227,2592,30354,30533,30866,118152,125929,135559,144950,150943,1784,1974,1976,1983,2034,4149,8438,145345,154027,1761,1988,2139,2536,123753,152787,154782,157064,2427,2158,2129,67697,30821,2175,2176,41384,162,1902,2087,2250,8440,43256,1751,2190,2334,2499,4121,8210,8352,30087,1824,2202,2506,114117,136634,98966,10647,9512,2188,2207,2208,129646,1971,2411,2460,2483,2865,8689,11078,11654,30791,64415,79822,156698,157726,1915,2100,2232,2234,2462,2806,11103,107982,140259,146609,156697,2236,2603,8744,97869,16027,1892,2243,2475,7433,1806,2184,2363,2795,41093,41316,42154,127154,1782,2257,2635,2834,3037,13424,22552,60002,98223,99013,1923,1986,2170,3011,74287,102591,74268,23287,7748,2645,3087,10205,97168,2089,2149,2248,2831,8082,8965,99358,1956,2005,2128,2264,2266,3252,6527,7421,118120,2268,2434,2571,3637,8101,151943,24238,2249,2274,2275,2648,1962,2251,2281,2283,2284,2288,9204,113375,1880,2230,2258,2290,23133,99970,133583,144749,14,2298,2373,33152,111905,87197,32938,2295,2280,1745,1106,2823,2891,3090,151256,1947,2313,2317,2614,3529,9132,9443,118422,1788,1910,1944,2327,2341,2359,2459,154772,1922,2270,2299,2401,2469,2981,81447,118426,1987
// ];


// console.log(playerNames);
// console.log(playerIDs);


// if (playerNames.length !== playerIDs.length) {
//   console.error('The arrays do not have the same length');
// } else {
//   // Create an object to hold the key-value pairs
//   const playerData = {};

//   // Loop through the arrays and populate the object
//   for (let i = 0; i < playerNames.length; i++) {
//     playerData[playerNames[i]] = playerIDs[i];
//   }

//   console.log(playerData);
// }


let content;

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/PlayerData", async(req,res)=>{
const newURL="http://api.football-data.org/v4/persons/"
const name=req.body["playerName"];

const query_url= API_URL+playerData[name];
console.log(query_url);

     const options = {
       method: 'GET',
       url: query_url,
       headers: {
         'X-Auth-Token': Auth_Token
       }
     };
       
  
     axios.request(options)
  .then(response => {
    const data = response.data;
    //here is where I gather all the player data I want and 
//render it on the front end. I want to render the 
//date of birth, nationalitliy, position, shirtnumber and when their 
//contract expires.






  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

});


app.post("/getLeagueInfo", async (req, res) => {
  // const searchId = req.body.id;
  const league=req.body["league"];

  console.log(league);

  const query_url= API_URL+`${league}/teams?season=2020`

     let team=[];
     let player=[];
     const options = {
       method: 'GET',
       url: query_url,
       headers: {
         'X-Auth-Token': Auth_Token
       }
     };
 
     axios.request(options)
     .then(response => {
       const data = response.data;
       

       //data.scorers[0].player.name
       if (data.teams && data.teams.length > 0) {

        for (let i = 0; i < data.teams.length; i++) {

          let teamData={

            teamName :  data.teams[i].name, 
            teamId :    data.teams[i].id
          }
          team.push(teamData);
          //console.log(teamData);
          //console.log(content[i]);
          if (data.teams[i].squad && data.teams[i].squad.length > 0) {
            for (let j = 0; j < data.teams[i].squad.length; j++) {
              let playerData = {
                playerName: data.teams[i].squad[j].name,
                playerId: data.teams[i].squad[j].id
              };
              player.push(playerData);
            }
          }
        }
        //   console.log(teamData.teamName);
        //  console.log(teamData.teamId);
        //  console.log(playerData.playerName);
        //  console.log(playerData.playerId);
        
        console.log(team);
        console.log(player);
         res.render("index.ejs",{teams:team, players: player});
         
 
       } else {
         console.log('Data is undefined');
 
       }
     })
     .catch(error => {
       console.error('Error fetching data:', error);
     });
 
 });

 
// Person / Match	Show all matches for a particular person.	/v4/persons/{id}/matches	dateFrom={DATE}
// dateTo={DATE}
// status={STATUS}
// competitions={competitionIds}
// limit={LIMIT}
// offset={OFFSET}



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
