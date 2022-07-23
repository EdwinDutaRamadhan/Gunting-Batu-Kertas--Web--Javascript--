var pilihan = 0, scoreUser = 0, randomBot;
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
    }
  };
  console.log();
function user(pilihan){
    if(pilihan == 1){
        //BatuButton
        alert("user memilih tombol batu");
        bot();
        algoritmaPermainan(1);
    }
    else if(pilihan == 2){
        //GuntingButton
        alert("user memilih tombol gunting");
        bot();
        algoritmaPermainan(2);
    }
    else if(pilihan == 3){
        //KertasButton
        alert("user memilih tombol kertas");
        bot();
        algoritmaPermainan(3);
    }
}
function bot(){
    randomBot = Math.floor(Math.random()* 3) + 1;
    if(randomBot == 1){
        //botBatu
        alert("bot memilih Batu");
    }else if(randomBot == 2){
        //botGunting
        alert("bot memilih Gunting");
    }else if(randomBot == 3){
        //botKertas
        alert("bot memilih Kertas");
    }
}
function algoritmaPermainan(pilihan){
    if(pilihan == 1){
        //User memiliih Batu
        if(randomBot == 1){
            //seri
            score.userSeri();
            alert("User = Batu\nBot = Batu\nSERI!!\nScore : " + scoreUser);
        }else if(randomBot == 2){
            //user menang
            score.userMenang();
            alert("User = Batu\nBot = Gunting\nMENANG!!\nScore : " + scoreUser);
        }else if(randomBot == 3){
            //user kalah
            score.userKalah();
            alert("User = Batu\nBot = Kertas\nKALAH!!\nScore : " + scoreUser);
        }
    }else if(pilihan == 2){
        //User memiliih Gunting
        if(randomBot == 1){
            //user kalah
            score.userKalah();
            alert("User = Gunting\nBot = Batu\nKALAH!!\nScore : " + scoreUser);
        }else if(randomBot == 2){
            //seri
            score.userSeri();
            alert("User = Gunting\nBot = Gunting\nSERI!!\nScore : " + scoreUser);
        }else if(randomBot == 3){
            //user emnang
            score.userMenang();
            alert("User = Gunting\nBot = Kertas\nMENANG!!\nScore : " + scoreUser);
        }
    }else if(pilihan == 3){
        //User memiliih Kertas
        if(randomBot == 1){
            //user menang
            score.userMenang();
            alert("User = Kertas\nBot = Batu\nMENANG!!\nScore : " + scoreUser);
        }else if(randomBot == 2){
            //user kalah
            score.userKalah();
            alert("User = Kertas\nBot = Gunting\nKALAH!!\nScore : " + scoreUser);
        }else if(randomBot == 3){
            //seri
            score.userSeri();
            alert("User = Kertas\nBot = Kertas\nSERI!!\nScore : " + scoreUser);
        }
    }
}
