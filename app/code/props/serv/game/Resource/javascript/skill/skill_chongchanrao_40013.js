importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//缠绕
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var AttackDamage = fightsystem.GetDamage(self)*0.75;
    fightsystem.Attack(self,target,AttackDamage,0,fv,timer);
    if(fv.IsHit == 1)
    {
        var buff1 = fightsystem.GetBuff(target,11837);
        if(buff1 == null)
        {
            fightsystem.AddBuff(target,11837,timer,fv,1,0);   
        }
    }
    return UserSkillReturn.SKILL_SUCCESS;
}