function saturdayFun(activity ='roller-skate') {
   return `This Saturday, I want to ${activity}!`
}
function mondayWork (office ='go to the office') {
    return `This Monday, I will ${office}.`
}

function wrapAdjective(flair='*') {
    return function(ST='special') {
        return `You are ${flair}${ST}${flair}!`;
    }

}