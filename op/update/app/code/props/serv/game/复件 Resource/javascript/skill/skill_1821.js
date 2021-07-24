importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//麒麟，麻痹
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_damage = 37; //SkillAdd3
    fightsystem.Attack(self,target,script_damage,0,fv,timer);
    if(fv.IsHit == 1)
    {
        fightsystem.AddBuff(target,1801,timer,fv);
    }
    return UserSkillReturn.SKILL_SUCCESS;
}