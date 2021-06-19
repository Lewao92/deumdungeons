let player;

function Player(classType, hälsa, energi, vapenfärdighet, styrka, uthållighet) {
    this.classType = classType;
    this.hälsa = hälsa;
    this.energi = energi;
    this.styrka = styrka;
    this.vapenfärdighet = vapenfärdighet;
    this.uthållighet = uthållighet;
}
let PlayerMoves = {
    calcAttack: function () {
        // who attacks first?
        let getPlayerUthållighet = player.uthållighet;
        let getEnemyUthållighet = enemy.uthållighet;
        // Player Attacks
        let playerAttack = function () {
            let calcBaseDamage;
            if (player.energi > 0) {
                calcBaseDamage = player.styrka * player.energi / 1000;
            } else {
                calcBaseDamage = player.styrka * player.vapenfärdighet / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutPutDamage = calcBaseDamage + offsetDamage;
            // Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.vapenfärdighet / 10) / 2) + 1;
            let attackValues = [calcOutPutDamage, numberOfHits];
            return attackValues;
        }
        // Enemy Attacks!
        let enemyAttack = function () {
            let calcBaseDamage;
            if (enemy.energi > 0) {
                calcBaseDamage = enemy.styrka * enemy.energi / 1000;
            } else {
                calcBaseDamage = enemy.styrka * enemy.vapenfärdighet / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutPutDamage = calcBaseDamage + offsetDamage;
            // Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.vapenfärdighet / 10) / 2) + 1;
            let attackValues = [calcOutPutDamage, numberOfHits];
            return attackValues;
        }
        // Get player / enemy health to change later!
        let getPlayerhälsa = document.querySelector(".hälsa-player");
        let getEnemyhälsa = document.querySelector(".hälsa-enemy");
        // Initiate attacks!
        if (getPlayerUthållighet >= getEnemyUthållighet) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.hälsa = enemy.hälsa - totalDamage;
            alert("Du slår " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
            if (enemy.hälsa <= 0) {
                alert("Du vann! Du slog i hjäl monstret! Uppdatera sidan för att spela igen.");
                getPlayerHälsa.innerHTML = 'Hälsa:  ' + player.hälsa;
                getPlayerHälsa.innerHTML = 'Hälsa: 0';
            } else {
                getEnemyHälsa.innerHTML = 'Hälsa:  ' + enemy.hälsa;
                // Enemy attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.hälsa = player.hälsa - totalDamage;
                alert("Monstret hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
                if (player.hälsa <= 0) {
                    alert("Du förlorade och avlider... Uppdatera sidan  för att spela igen.");
                    getPlayerHälsa.innerHTML = 'Hälsa: 0';
                    getEnemyHälsa.innerHTML = 'Hälsa:  ' + enemy.hälsa;
                } else {
                    getPlayerHälsa.innerHTML = 'Hälsa:  ' + player.hälsa;
                }
            }
        }
        // Enemy attacks
        else if (getEnemyUthållighet >= getPlayerUthållighet) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.hälsa = player.hälsa - totalDamage;
            alert("Monstret slår " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
            if (player.hälsa <= 0) {
                alert("Du förlorade och avlider... Uppdatera sidan  för att spela igen.");
                getEnemyHälsa.innerHTML = 'Hälsa:  ' + enemy.hälsa;
                getPlayerHälsa.innerHTML = 'Hälsa: 0';
            } else {
                getPlayerHälsa.innerHTML = 'Hälsa:  ' + player.hälsa;
                // player attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.hälsa = enemy.hälsa - totalDamage;
                alert("Du slår " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
                if (enemy.hälsa <= 0) {
                    alert("Du vann! Du slog i hjäl monstret! Uppdatera sidan för att spela igen.");
                    getEnemyHälsa.innerHTML = 'Hälsa: 0';
                    getPlayerHälsa.innerHTML = 'Hälsa:  ' + enemy.hälsa;
                } else {
                    getEnemyHälsa.innerHTML = 'Hälsa:  ' + enemy.hälsa;
                }
            }
        }
    }
}