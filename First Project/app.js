new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            // reset health
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack() {
            let damage = this.caculateDamage(3, 10);
            this.monsterHealth -= damage;
            if (this.checkWin()) {
                return;
            }
            this.turns.unshift({
                isPlayer: true,
                text: `玩家攻擊怪物，造成${damage}點傷害!`
            });
            this.monsterAttack();
        },
        specialAttack() {
            let damage = this.caculateDamage(10, 20);
            this.monsterHealth -= damage;
            if (this.checkWin()) {
                return;
            }
            this.turns.unshift({
                isPlayer: true,
                text: `玩家使用技能攻擊怪物，造成${damage}點傷害!`
            });
            this.monsterAttack();
        },

        heal() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                heal: true,
                text: `玩家使用治療技能，恢復10點生命值。`
            });
            this.monsterAttack();
        },
        giveUp() {
            this.gameIsRunning = false;
        },
        monsterAttack() {
            let damage = this.caculateDamage(5, 12);
            this.playerHealth -= damage;
            if (this.checkWin()) {
                return;
            }
            this.turns.unshift({
                isPlayer: false,
                text: `怪物攻擊玩家，造成${damage}點傷害!`
            });
        },
        caculateDamage(min, max) {
            // plus 1 to avoid damage less than 1
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin() {
            if (this.monsterHealth <= 0) {
                if (confirm("You win, you beat the monster")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm("You lose! New Game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            // 條件外
            return false;
        }
    }
});
