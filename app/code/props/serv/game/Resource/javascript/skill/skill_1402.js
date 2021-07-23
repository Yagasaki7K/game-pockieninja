importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//高伤害，临时破防，下次出手延后
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var damage = fightsystem.GetDamage(self)*1.7;
    fightsystem.Attack(self,target,damage,0,fv,timer);
    if(fv.IsHit == 1)
    fightsystem.AddBuff(target,1201,timer,fv);
    fightsystem.AddBuff(self,1204,timer,fv);
    return UserSkillReturn.SKILL_SUCCESS;
}