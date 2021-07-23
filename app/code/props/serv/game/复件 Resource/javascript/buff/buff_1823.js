importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//天之咒印
function OnAdd(fightsystem, self, buff, fv, timer)
{    
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
    var script_hp = 20;
    var script_mp = 10;
    self.HP -= script_hp;
    self.MP -= script_mp;
    fv.SelfLastDamage = script_hp;
    fv.DecMP = script_mp;
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
}