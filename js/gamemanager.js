let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Human":
                player = new Player(classType, 120, 100, 80, 100, 100);
                break;
            case "Orc":
                player = new Player(classType, 200, 0, 125, 100, 75);
                break;
            case "Dwarf":
                player = new Player(classType, 200, 5, 100, 100, 95);
                break;
            case "Giant":
                player = new Player(classType, 220, 0, 200, 30, 50);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/avatar-player/' + classType.toLowerCase() + '.png" class="img-avatar"><div><h3>' + classType + '</h3><p class="hälsa-player">Hälsa: ' + player.hälsa + '</p><p>Energi: ' + player.energi + '</p><p>Styrka: ' + player.styrka + '</p><p>Vapenfärdighet: ' + player.vapenfärdighet + '</p><p>Uthållighet: ' + player.uthållighet + '</p></div>';
    },
    setPreFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Uppdrag: Sök efter en motståndare!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Sök efter en motståndare!</a>';
        getArena.style.visibility = 'visible';
    },
    setFight: function () {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".arena");
        // Create enemy!
        let enemy00 = new Enemy("Rat", 10, 10, 10, 10, 10);
        let enemy01 = new Enemy("Wolf", 50, 25, 25, 25, 25);
        let enemy02 = new Enemy("Skeleton", 75, 25, 50, 50, 50);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            case 2:
                enemy = enemy02;
                break;
        }
        getHeader.innerHTML = '<p>Uppdrag: Välj ditt drag!</p>';
        getActions.innerHTML = '<a href = "#" class = "btn-prefight" onclick = "PlayerMoves.calcAttack()">Attackera</a>';
        getEnemy.innerHTML = '<img src="img/avatar-enemy/' + enemy.enemyType.toLowerCase() + '.png" alt"' + enemy.enemyType + '"class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="hälsa-enemy">Hälsa: ' + enemy.hälsa + '</p><p>Energi: ' + enemy.energi + '</p><p> Styrka: ' + enemy.styrka + '</p><p> Vapenfärdighet: ' + enemy.vapenfärdighet + '</p><p>Uthållighet: ' + enemy.uthållighet + '</p></div>';
    }

}