// You can access the NodeCG api anytime from the `window.nodecg` object
// Or just `nodecg` for short. Like this!:
let val_vote1 = document.getElementById('in_vote1')
let val_vote2 = document.getElementById('in_vote2')
let res_vote1 = 0
let res_vote2 = 0
nodecg.listenFor('twitchMessage', (message) => {
    if (message === val_vote1.value){
        res_vote1 = res_vote1 + 1
    }
    else if (message === val_vote2.value) {
        res_vote2 = res_vote2 + 1
    }
    document.getElementById('res_vote1').innerHTML = res_vote1
    document.getElementById('res_vote2').innerHTML = res_vote2

    document.getElementById('res_pervote1').innerHTML = (res_vote1 / (res_vote1 + res_vote2)) * 100
    document.getElementById('res_pervote2').innerHTML = (res_vote2 / (res_vote1 + res_vote2)) * 100
})
function twitchConnect() {
    nodecg.sendMessage('twitchConnect')
}