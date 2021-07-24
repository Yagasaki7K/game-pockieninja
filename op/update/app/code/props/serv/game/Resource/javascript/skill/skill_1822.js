importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//重击，打晕
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_damage = 32; //SkillAdd5
    fightsystem.Attack(self,target,script_damage,0,fv,timer);
    if(fv.IsHit == 1)
    {
        fightsystem.AddBuff(target,1813,timer,fv);
    }
    return UserSkillReturn.SKILL_SUCCESS;
}