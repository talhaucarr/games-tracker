require('dotenv').config()

const express = require('express')
const cod_api = require('call-of-duty-api')();


const router = express.Router()


router.use(express.static('public'))
router.use(express.urlencoded({ extended: true }))

router.get('/warzone', async (req, res) => {
    console.log("mainWZ")

    res.render('mainWz')

})

router.get('/warzone/:id', async (req, res) => {
    const id = req.params.id
    console.log("sa:" + id)
    let username = process.env.COD_USERNAME;
    let password = process.env.COD_PASSWORD;

    await cod_api.login(username, password);
    let data = await cod_api.MWBattleData(id, 'battle');
    let weekly_data = await cod_api.MWweeklystats(id, 'battle');




    res.render('warzone', { games_played: data.br.gamesPlayed, wins: data.br.wins, kills: data.br.kills, downs: data.br.downs, kdRatio: data.br.kdRatio, top_ten: data.br.topTen, top_five: data.br.topFive, 
        deaths:data.br.deaths,name: id, weekly_data:weekly_data })
})

module.exports = router