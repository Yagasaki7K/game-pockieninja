importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//怪物花粉
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_damage = fightsystem.GetDamage(self)*1.2; //原值为2.1
    fightsystem.Attack(self,target,script_damage,0,fv,timer);
    if(fv.IsHit == 1)
    {
        fightsystem.AddBuff(target,11826,timer,fv);
    }
    return UserSkillReturn.SKILL_SUCCESS;
}