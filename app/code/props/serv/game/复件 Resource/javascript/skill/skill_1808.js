importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//火球
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var damage = 22;        //SkillAdd0
    fightsystem.Attack(self,target,damage,0,fv,timer);
    if(fv.IsHit == 1)
    {
        fightsystem.AddBuff(target,1804,timer,fv);        
    }
    return UserSkillReturn.SKILL_SUCCESS;
}