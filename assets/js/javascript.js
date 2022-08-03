var pilihan = 0, scoreUser = 0,scoreBot = 0, stage = 0, randomBot,repeater = 0,musicClicked = 1,userClicked = 1, botClicked = 1;
let username = prompt("Masukkan Nama Anda : ", "Edwin");
const stageGame = prompt("Ingin bermain berapa stage ? ", 10);
document.getElementById("user-name").innerHTML = username;

var score = {
    UserWin : 0,
    UserLose : 0,
    UserDraw : 0,
    BotWin : 0,
    BotLose : 0,
    BotDraw : 0,
    Menang : 3,
    Kalah : 0,
    Seri     : 1,
    Win : "Menang",
    Lose : "Kalah",
    Draw : "Seri",
    WinPoint : "+3",
    LosePoint : "+0",
    DrawPoint : "+1",
    PanelWin : "YOU WIN",
    PanelLose : "YOU LOSE",
    PanelDraw : "DRAW",
    PromptPanel : "prompt-panel",
    ScorePanel : "score-panel",
    UserWinInfo : "user-win",
    UserLoseInfo : "user-lose",
    UserDrawInfo : "user-draw",
    BotWinInfo : "bot-win",
    BotLoseInfo : "bot-lose",
    BotDrawInfo : "bot-draw",
    userValue : function(kondisi){
        if(kondisi == this.Win){
            scoreUser = scoreUser + this.Menang;
            return scoreUser;
        }else if(kondisi == this.Lose){
            scoreUser = scoreUser + this.Kalah;
            return scoreUser;
        }else if(kondisi == this.Draw){
            scoreUser = scoreUser + this.Seri;
            return scoreUser;
        }
    },
    botValue : function(kondisi){
        if(kondisi == this.Win){
            scoreBot = scoreBot + this.Menang;
            return scoreBot;
        }else if(kondisi == this.Lose){
            scoreBot = scoreBot + this.Kalah;
            return scoreBot;
        }else if(kondisi == this.Draw){
            scoreBot = scoreBot + this.Seri;
            return scoreBot;
        }
    },
    panelPrompt : function(kondisi){
        if(kondisi == this.Win){
            this.UserWin++;
            this.BotLose++;
            document.getElementById(this.PromptPanel).innerHTML = this.PanelWin;
            document.getElementById(this.ScorePanel).innerHTML = this.WinPoint;
            document.getElementById(this.UserWinInfo).innerHTML = "WIN &ensp;&ensp;: " + this.UserWin;
            document.getElementById(this.BotLoseInfo).innerHTML = this.BotLose + " :&ensp; LOSE";
        }else if(kondisi == this.Lose){
            this.UserLose++;
            this.BotWin++;
            document.getElementById(this.PromptPanel).innerHTML = this.PanelLose;
            document.getElementById(this.ScorePanel).innerHTML = this.LosePoint;
            document.getElementById(this.UserLoseInfo).innerHTML = "LOSE &ensp;: " + this.UserLose;
            document.getElementById(this.BotWinInfo).innerHTML = this.BotWin + " :&ensp;&ensp; WIN";
        }else if(kondisi == this.Draw){
            this.UserDraw++;
            this.BotDraw++;
            document.getElementById(this.PromptPanel).innerHTML = this.PanelDraw;
            document.getElementById(this.ScorePanel).innerHTML = this.DrawPoint;
            document.getElementById(this.UserDrawInfo).innerHTML = "DRAW : " + this.UserDraw;
            document.getElementById(this.BotDrawInfo).innerHTML = this.BotDraw + " : DRAW";
        }
    }
  };
var cetak = {
    DefaultName : "Edwin Duta Ramadhan",
    ScoreUser : "score-user",
    ScoreBot : "score-bot",
    User : "display-user",
    Bot : "display-bot",
    Stage : "pertandingan-ke",
    Scrissors : "Gunting",
    Rock : "Batu",
    Paper : "Kertas",
    UserGunting : "./assets/img/display-gunting-user.png",
    UserBatu : "./assets/img/display-batu-user.png",
    UserKertas : "./assets/img/display-kertas-user.png",
    BotGunting : "./assets/img/display-gunting-bot.png",
    BotBatu : "./assets/img/display-batu-bot.png",
    BotKertas : "./assets/img/display-kertas-bot.png",
    scoreValue : function(){
        document.getElementById(this.ScoreUser).innerHTML = scoreUser;
        document.getElementById(this.ScoreBot).innerHTML = scoreBot;
    },
    setImageUser : function(kondisi){
        if(kondisi == this.Scrissors){
            document.getElementById(this.User).src = this.UserGunting;
        }else if(kondisi == this.Rock){
            document.getElementById(this.User).src = this.UserBatu;
        }else if(kondisi == this.Paper){
            document.getElementById(this.User).src = this.UserKertas;
        }
    },
    setImageBot : function(kondisi){
        if(kondisi == this.Scrissors){
            document.getElementById(this.Bot).src = this.BotGunting;
        }else if(kondisi == this.Rock){
            document.getElementById(this.Bot).src = this.BotBatu;
        }else if(kondisi == this.Paper){
            document.getElementById(this.Bot).src = this.BotKertas;
        }
    },
    setStage : function(){
        document.getElementById(this.Stage).innerHTML = stage;
    }
};
var utility = {
    WinCondition : "WIN",
    LoseCondition : "LOSE",
    DrawCondition : "DRAW",
    ButtonClicked : "./assets/mp3/button-clicked.mp3",
    WinSound : "./assets/mp3/win-sound.mp3",
    LoseSound : "./assets/mp3/lose-sound.mp3",
    DrawSound : "./assets/mp3/draw-sound.mp3",
    ButtonClickedID : "button-clicked",
    SoundNotifID: "notification-sound",
    buttonClicked : function(){
        document.getElementById(this.ButtonClickedID).src = this.ButtonClicked;
    },
    soundEffect : function(kondisi){
        if(kondisi == this.WinCondition){
            document.getElementById(this.SoundNotifID).src = this.WinSound;
        }else if(kondisi == this.LoseCondition){
            document.getElementById(this.SoundNotifID).src = this.LoseSound;
        }else if(kondisi = this.DrawCondition){
            document.getElementById(this.SoundNotifID).src = this.DrawSound;
        }
    }
};
function popupFunctionUser() {
    var popup = document.getElementById("myPopupUser");
    popup.classList.toggle("show");
}
function popupFunctionBot() {
    var popup = document.getElementById("myPopupBot");
    popup.classList.toggle("show");
}
var botExpression = {
    BotExpression1 : "Menang ",
    BotExpression2 : "Kalah ",
    WinExpression : function(){
        document.getElementById("myPopupBot").innerHTML = this.BotExpression1 + score.BotWin + " kali ni";
    },
    LoseExpression : function(){
        document.getElementById("myPopupBot").innerHTML = this.BotExpression2 + score.BotWin + " ?";
    }
}
var userExpression = {
    UserExpression1 : "Menang ",
    UserExpression2 : "Kalah ",
    WinExpression : function(){
        document.getElementById("myPopupUser").innerHTML = this.UserExpression1 + score.UserWin + " kali ni";
    },
    LoseExpression : function(){
        document.getElementById("myPopupUser").innerHTML = this.UserExpression2 + score.UserWin + " ?";
    }
}
function userRandomExpression(){
    if(stage % 10 == 0 && stage != 0){
        userExpression.LoseExpression();
        popupFunctionUser();
    }else if(stage % 4 == 0){
        if(scoreBot != 0 && score.BotWin != 0){
            botExpression.WinExpression();
            popupFunctionBot();
        }
    }else if(stage % 5 == 0){
        if(scoreUser != 0 && score.UserWin != 0){
            userExpression.WinExpression();
            popupFunctionUser();
        }
    }else if(stage % 6 == 0){
        botExpression.LoseExpression();
        popupFunctionBot();
    }
}
function user(pilihan){
    if(pilihan == 1){
        //BatuButton
        bot();
        algoritmaPermainan(1);
        userRandomExpression();
        finishGame();
    }
    else if(pilihan == 2){
        //GuntingButton
        bot();
        algoritmaPermainan(2);
        userRandomExpression();
        finishGame();
    }
    else if(pilihan == 3){
        //KertasButton
        bot();
        algoritmaPermainan(3);
        userRandomExpression();
        finishGame();
    }
}
function finishGame(){
    if(stage == stageGame){
        alert("SCORE : " + scoreUser + "\nWIN : " + score.UserWin + "\nLOSE : " + score.UserLose + "\nDraw : " + score.UserDraw );
        var lagi = confirm("Apakah anda ingin bermain lagi?");
        if(lagi == true){
            window.location.reload(true);
        }else{
            window.open("https://2.bp.blogspot.com/-BjidtXjcBWQ/Wh2x23CdDsI/AAAAAAAAAE0/rxuAfsVF8_g_KAHHeOwOB0E2NOMq4GZMgCLcBGAs/s400/Terima-Kasih.gif");
        }
    }
}
function bot(){
    randomBot = Math.floor(Math.random()* 3) + 1;
}
function algoritmaPermainan(pilihan){
    if(pilihan == 1){
        stage++;
        utility.buttonClicked();
        //User memiliih Batu
        if(randomBot == 1){
            //seri
            utility.soundEffect(utility.DrawCondition);
            score.panelPrompt(score.Draw);
            cetak.setImageUser(cetak.Rock);
            cetak.setImageBot(cetak.Rock);
            score.userValue(score.Draw);
            score.botValue(score.Draw);
            cetak.scoreValue();
        }else if(randomBot == 2){
            //user menang
            utility.soundEffect(utility.WinCondition);
            score.panelPrompt(score.Win);
            cetak.setImageUser(cetak.Rock);
            cetak.setImageBot(cetak.Scrissors);
            score.userValue(score.Win);
            score.botValue(score.Lose);
            cetak.scoreValue();
            //user kalah
        }else if(randomBot == 3){
            utility.soundEffect(utility.LoseCondition);
            score.panelPrompt(score.Lose);
            cetak.setImageUser(cetak.Rock);
            cetak.setImageBot(cetak.Paper);
            score.userValue(score.Lose);
            score.botValue(score.Win);
            cetak.scoreValue();
        }
        cetak.setStage();
    }else if(pilihan == 2){
        stage++;
        utility.buttonClicked();
        //User memiliih Gunting
        if(randomBot == 1){
            //user kalah
            utility.soundEffect(utility.LoseCondition);
            score.panelPrompt(score.Lose);
            cetak.setImageUser(cetak.Scrissors);
            cetak.setImageBot(cetak.Rock);
            score.userValue(score.Lose);
            score.botValue(score.Win);
            cetak.scoreValue();
        }else if(randomBot == 2){
            //seri
            utility.soundEffect(utility.DrawCondition);
            score.panelPrompt(score.Draw);
            cetak.setImageUser(cetak.Scrissors);
            cetak.setImageBot(cetak.Scrissors);
            score.userValue(score.Draw);
            score.botValue(score.Draw);
            cetak.scoreValue();
        }else if(randomBot == 3){
            //user emnang
            utility.soundEffect(utility.WinCondition)
            score.panelPrompt(score.Win);
            cetak.setImageUser(cetak.Scrissors);
            cetak.setImageBot(cetak.Paper);
            score.userValue(score.Win);
            score.botValue(score.Lose);
            cetak.scoreValue();
        }
        cetak.setStage();
    }else if(pilihan == 3){
        stage++;
        utility.buttonClicked();
        //User memiliih Kertas
        if(randomBot == 1){
            //user menang
            utility.soundEffect(utility.WinCondition);
            score.panelPrompt(score.Win);
            cetak.setImageUser(cetak.Paper);
            cetak.setImageBot(cetak.Rock);
            score.userValue(score.Win);
            score.botValue(score.Lose);
            cetak.scoreValue();
        }else if(randomBot == 2){
            //user kalah
            utility.soundEffect(utility.LoseCondition);
            score.panelPrompt(score.Lose);
            cetak.setImageUser(cetak.Paper);
            cetak.setImageBot(cetak.Scrissors);
            score.userValue(score.Lose);
            score.botValue(score.Win);
            cetak.scoreValue();
        }else if(randomBot == 3){
            //seri
            utility.soundEffect(utility.DrawCondition);
            score.panelPrompt(score.Draw);
            cetak.setImageUser(cetak.Paper);
            cetak.setImageBot(cetak.Paper);
            score.userValue(score.Draw);
            score.botValue(score.Draw);
            cetak.scoreValue();
        }
        cetak.setStage();
    }
}
function musicButton(){
    if(repeater % 2 == 0){
        //musicOff
        document.getElementById("backsounds").muted = true;
        document.getElementById("music").innerHTML = "Music : Off";
    }else if(repeater % 2 == 1){
         //musicOn
        document.getElementById("backsounds").muted = false;
        document.getElementById("music").innerHTML = "Music : On";
    }
    repeater++;
}

function musicList(){
    const MusicSource = [];
    MusicSource[1] = "/assets/mp3/Lost Saga - Battle Screen.mp3";
    MusicSource[2] = "/assets/mp3/Lost Saga - Boot Camp.mp3";
    MusicSource[3] = "/assets/mp3/Lost Saga - Cube.mp3";
    MusicSource[4] = "/assets/mp3/Lost Saga - Enchanted Forest.mp3";    
    MusicSource[5] = "/assets/mp3/Lost Saga - Wild West.mp3";
    const MusicTitle = [];
    MusicTitle[1] = "Battle Screen";
    MusicTitle[2] = "Boot Camp";
    MusicTitle[3] = "Cube";
    MusicTitle[4] = "Enchanted Forest";
    MusicTitle[5] = "Wild West";
    musicClicked++;
    
    document.getElementById("backsounds").src = MusicSource[musicClicked];
    document.getElementById("music-list").innerHTML = MusicTitle[musicClicked];
    if(musicClicked == 5){musicClicked = 0;}
}
function userProfileClicked(){
    userClicked++;
    const UserSource = [];
    UserSource[1] = "./assets/img/icon/user-boy.png";
    UserSource[2] = "./assets/img/icon/user-girl.png";
    const UserTitle = [];
    UserTitle[1] = "User Profile : Boy";
    UserTitle[2] = "User Profile : Girl";
    document.getElementById("user-profile-img").src = UserSource[userClicked];
    document.getElementById("profile-menu").innerHTML = UserTitle[userClicked];
    if(userClicked == 2){userClicked = 0;}
}
function botProfileClicked(){
    botClicked++;
    const BotSource = [];
    BotSource[1] = "./assets/img/icon/bot-1.png";
    BotSource[2] = "./assets/img/icon/bot-2.png";
    const BotTitle = [];
    BotTitle[1] = "Bot Profile : Bot 1";
    BotTitle[2] = "Bot Profile : Bot 2";
    document.getElementById("bot-profile-img").src = BotSource[botClicked];
    document.getElementById("bot-menu").innerHTML =BotTitle[botClicked];
    if(botClicked == 2){botClicked = 0;}
    console.log(botClicked);
}