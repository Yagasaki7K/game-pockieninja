importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

function OnUser(fightsystem, self, target, skill, fv,timer)
{
    fightsystem.Attack(self,target,30,0,fv,timer);
    if(fv.IsHit == 1)
    {
        fightsystem.AddBuff(target,1211,timer,fv);
    }
    return UserSkillReturn.SKILL_SUCCESS;
}
