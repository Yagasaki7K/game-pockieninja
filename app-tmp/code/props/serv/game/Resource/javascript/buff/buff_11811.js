importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//中毒，一直持续，直到被治疗清除
function OnAdd(fightsystem, self, buff, fv, timer)
{
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
    var script_damage = 5;        
    fightsystem.Damage(self, script_damage); 
    fv.SelfLastDamage = script_damage;
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
}