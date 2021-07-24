importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//结晶之刃
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_damage = fightsystem.GetDamage(self) + 10; //SkillAdd1
    fightsystem.Attack(self,target,script_damage,0,fv,timer);
    if(fv.IsHit == 1)
    {
        fightsystem.AddBuff(target,1802,timer,fv);
    }
    return UserSkillReturn.SKILL_SUCCESS;
}