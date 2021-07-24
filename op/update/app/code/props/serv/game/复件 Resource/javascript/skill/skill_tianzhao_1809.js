importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//天照
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var direct_damage = self.MaxMP*0.35*1.3*(1 + self.SkillAdd0*0.1);
    fightsystem.Attack(self,target,direct_damage,0,fv,timer);
    if(fv.IsHit == 1)
    {
        fightsystem.AddBuff(target,11805,timer,fv);        
    }
    return UserSkillReturn.SKILL_SUCCESS;
}