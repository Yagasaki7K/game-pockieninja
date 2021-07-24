importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//天照
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var damage = 33;        //SkillAdd0
    fightsystem.Attack(self,target,damage,0,fv,timer);
    if(fv.IsHit == 1)
    {
        fightsystem.AddBuff(target,1805,timer,fv);        
    }
    return UserSkillReturn.SKILL_SUCCESS;
}