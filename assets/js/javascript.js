var pilihan = 0, scoreUser = 0,scoreBot = 0, randomBot;

var score = {
    Menang : 3,
    Kalah : 0,
    Seri     : 1,
    Win : "Menang",
    Lose : "Kalah",
    Draw : "Seri",
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
    }
  };
var cetak = {
    ScoreUser : "score-user",
    ScoreBot : "score-bot",
    User : "display-user",
    Bot : "display-bot",
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
    }
};
function user(pilihan){
    if(pilihan == 1){
        //BatuButton
        bot();
        algoritmaPermainan(1);
    }
    else if(pilihan == 2){
        //GuntingButton
        bot();
        algoritmaPermainan(2);
    }
    else if(pilihan == 3){
        //KertasButton
        bot();
        algoritmaPermainan(3);
    }
}
function bot(){
    randomBot = Math.floor(Math.random()* 3) + 1;
}
function algoritmaPermainan(pilihan){
    if(pilihan == 1){
        //User memiliih Batu
        if(randomBot == 1){
            //seri
            cetak.setImageUser(cetak.Rock);
            cetak.setImageBot(cetak.Rock);
            score.userValue(score.Draw);
            score.botValue(score.Draw);
            cetak.scoreValue();
            //alert("User = Batu\nBot = Batu\nSERI!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }else if(randomBot == 2){
            //user menang
            cetak.setImageUser(cetak.Rock);
            cetak.setImageBot(cetak.Scrissors);
            score.userValue(score.Win);
            score.botValue(score.Lose);
            cetak.scoreValue();
            //alert("User = Batu\nBot = Gunting\nMENANG!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }else if(randomBot == 3){
            //user kalah
            cetak.setImageUser(cetak.Rock);
            cetak.setImageBot(cetak.Paper);
            score.userValue(score.Lose);
            score.botValue(score.Win);
            cetak.scoreValue();
            //alert("User = Batu\nBot = Kertas\nKALAH!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }
    }else if(pilihan == 2){
        //User memiliih Gunting
        if(randomBot == 1){
            //user kalah
            cetak.setImageUser(cetak.Scrissors);
            cetak.setImageBot(cetak.Rock);
            score.userValue(score.Lose);
            score.botValue(score.Win);
            cetak.scoreValue();
            //alert("User = Gunting\nBot = Batu\nKALAH!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }else if(randomBot == 2){
            //seri
            cetak.setImageUser(cetak.Scrissors);
            cetak.setImageBot(cetak.Scrissors);
            score.userValue(score.Draw);
            score.botValue(score.Draw);
            cetak.scoreValue();
            //alert("User = Gunting\nBot = Gunting\nSERI!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }else if(randomBot == 3){
            //user emnang
            cetak.setImageUser(cetak.Scrissors);
            cetak.setImageBot(cetak.Paper);
            score.userValue(score.Win);
            score.botValue(score.Lose);
            cetak.scoreValue();
            //alert("User = Gunting\nBot = Kertas\nMENANG!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }
    }else if(pilihan == 3){
        //User memiliih Kertas
        if(randomBot == 1){
            //user menang
            cetak.setImageUser(cetak.Paper);
            cetak.setImageBot(cetak.Rock);
            score.userValue(score.Win);
            score.botValue(score.Lose);
            cetak.scoreValue();
            //alert("User = Kertas\nBot = Batu\nMENANG!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }else if(randomBot == 2){
            //user kalah
            cetak.setImageUser(cetak.Paper);
            cetak.setImageBot(cetak.Scrissors);
            score.userValue(score.Lose);
            score.botValue(score.Win);
            cetak.scoreValue();
            //alert("User = Kertas\nBot = Gunting\nKALAH!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }else if(randomBot == 3){
            //seri
            cetak.setImageUser(cetak.Paper);
            cetak.setImageBot(cetak.Paper);
            score.userValue(score.Draw);
            score.botValue(score.Draw);
            cetak.scoreValue();
            //alert("User = Kertas\nBot = Kertas\nSERI!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }
    }
}