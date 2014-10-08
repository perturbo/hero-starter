// // The "Careful Assassin"
// // This hero will attempt to kill the closest weaker enemy hero.
var move = function(gameData, helpers) {
   var myHero = gameData.activeHero;

   var enemyStats = helpers.findNearestObjectDirectionAndDistance(gameData.board, myHero, function(boardTile) {
     if (boardTile.type === 'Hero' && boardTile.team != myHero.team) {
       return true;
     }
   });
   var distanceToEnemy = enemyStats.distance;
   var directionToEnemy = enemyStats.direction;

   weakEnemy = helpers.findNearestWeakerEnemy(gameData);
   nonTeamDiamondMine = helpers.findNearestNonTeamDiamondMine(gameData);
   healthWell = helpers.findNearestHealthWell(gameData);
   teamMember = helpers.findNearestTeamMember(gameData);
   
   if (myHero.health < 50) {
     return healthWell;
   }
   else if (typeof weakEnemy != "undefined") {
     return weakEnemy;
   }
   else if (typeof directionToEnemy != "undefined" && distanceToEnemy === 1) {
     return directionToEnemy;
   }
   else if (typeof nonTeamDiamondMine != "undefined" && distanceToEnemy > 3 ){
     return nonTeamDiamondMine;
   }
//   else if (typeof teamMember != "undefined") {
//     return teamMember;
//   }
   else {
     return healthWell;
   }
};

// Export the move function here
module.exports = move;
