importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//黏土炸弹
function OnAdd(fightsystem, self, buff, fv, timer)
{    
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
    if(LogicTool.RandInt(0, 100) < 30)
    {
        var script_damage = 37;        
        fightsystem.Damage(self, script_damage); 
        fv.SelfLastDamage = script_damage;
    }
}

function OnRemove(fightsystem, self, buff, fv, timer)
{    
    var script_damage = 37;        
    fightsystem.Damage(self, script_damage); 
    fv.SelfLastDamage = script_damage;
}