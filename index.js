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


let content;

app.get("/", (req, res) => {
  res.render("homepage.ejs");
});


// app.post("/getScoreres", async (req, res) => {
//  // const searchId = req.body.id;
//     const league= req.body;
//     console.log(league);


//     const options = {
//       method: 'GET',
//       url: API_URL,
//       headers: {
//         'X-Auth-Token': Auth_Token
//       }
//     };

//     axios.request(options)
//     .then(response => {
//       const data = response.data;
//       //const firstPlayerName = data.scorers[0].player.name;

//       if (data.scorers && data.scorers.length > 0) {
//         const firstPlayerName = JSON.stringify(data.scorers[0].player.name);
//         console.log('First Player Name:', firstPlayerName); // Outputs the name of the first player
//         res.render("index.ejs",{ content: firstPlayerName });
       
//        // res.render({content:firstPlayerName});

//       } else {
//         console.log('Scorers array is empty or undefined.');

//       }
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });

// });

app.post("/getLeagueInfo", async (req, res) => {
  // const searchId = req.body.id;
  const league=req.body["message"];

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
