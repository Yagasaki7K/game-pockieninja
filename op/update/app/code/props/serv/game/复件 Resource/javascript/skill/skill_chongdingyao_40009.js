importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//叮咬
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var AttackDamage = fightsystem.GetDamage(self)*0.75;
    fightsystem.Attack(self,target,AttackDamage,0,fv,timer);
    if(fv.IsHit == 1)
    {
        var buff1 = fightsystem.GetBuff(target,11811);
        if(buff1 == null)
        {
            fightsystem.AddBuff(target,11811,timer,fv);
        }
    }
    return UserSkillReturn.SKILL_SUCCESS;
}