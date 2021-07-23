importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//天照，被酒增强，不会被清除
function OnAdd(fightsystem, self, buff, fv, timer)
{
}

function OnActivation(fightsystem, self, buff, fv, timer)
{
    var script_damage = 15;        //SkillAdd0
    var buff = fightsystem.GetBuff(self, 1806);
    if(buff != null)
    {
       script_damage *= 2;
    }
    fightsystem.Damage(self, script_damage); 
    fv.SelfLastDamage = script_damage;
}

function OnRemove(fightsystem, self, buff, fv, timer)
{
}