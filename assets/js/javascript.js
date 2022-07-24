var pilihan = 0, scoreUser = 0,scoreBot = 0, randomBot;
var score = {
    Menang : 3,
    Kalah : 0,
    Seri     : 1,
    userMenang : function() {
        scoreUser = scoreUser + this.Menang;
        return scoreUser;
    },
    userKalah : function() {
        scoreUser = scoreUser + this.Kalah;
        return scoreUser;
    },
    userSeri : function() {
        scoreUser = scoreUser + this.Seri;
        return scoreUser;
    },
    botMenang : function(){
        scoreBot = scoreBot + this.Menang;
        return scoreBot;
    },
    botKalah : function(){
        scoreBot = scoreBot + this.Kalah;
        return scoreBot;
    },
    botSeri : function(){
        scoreBot = scoreBot + this.Seri;
        return scoreBot;
    }
  };
var cetak = {
    ScoreUser : "score-user",
    ScoreBot : "score-bot",
    scoreValue : function(){
        document.getElementById(this.ScoreUser).innerHTML = scoreUser;
        document.getElementById(this.ScoreBot).innerHTML = scoreBot;
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
            score.userSeri();
            score.botSeri();
            cetak.scoreValue();
            alert("User = Batu\nBot = Batu\nSERI!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }else if(randomBot == 2){
            //user menang
            score.userMenang();
            score.botKalah();
            cetak.scoreValue();
            alert("User = Batu\nBot = Gunting\nMENANG!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }else if(randomBot == 3){
            //user kalah
            score.userKalah();
            score.botMenang();
            cetak.scoreValue();
            alert("User = Batu\nBot = Kertas\nKALAH!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }
    }else if(pilihan == 2){
        //User memiliih Gunting
        if(randomBot == 1){
            //user kalah
            score.userKalah();
            score.botMenang();
            alert("User = Gunting\nBot = Batu\nKALAH!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }else if(randomBot == 2){
            //seri
            score.userSeri();
            score.botSeri();
            alert("User = Gunting\nBot = Gunting\nSERI!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }else if(randomBot == 3){
            //user emnang
            score.userMenang();
            score.botKalah();
            alert("User = Gunting\nBot = Kertas\nMENANG!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }
    }else if(pilihan == 3){
        //User memiliih Kertas
        if(randomBot == 1){
            //user menang
            score.userMenang();
            score.botKalah();
            alert("User = Kertas\nBot = Batu\nMENANG!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }else if(randomBot == 2){
            //user kalah
            score.userKalah();
            score.botMenang();
            alert("User = Kertas\nBot = Gunting\nKALAH!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }else if(randomBot == 3){
            //seri
            score.userSeri();
            score.botSeri();
            alert("User = Kertas\nBot = Kertas\nSERI!!\nScore User : " + scoreUser + "\nScore Bot : " + scoreBot);
        }
    }
}