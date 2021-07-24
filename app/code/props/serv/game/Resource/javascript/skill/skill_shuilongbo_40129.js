importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//宠物水龙波
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_damage = fightsystem.GetDamage(self)*0.75;
    fightsystem.Attack(self,target,script_damage,0,fv,timer);
    var buff1 = fightsystem.GetBuff(target,11903);
    if(buff1 == null)
        {
            fightsystem.AddBuff(target,11903,timer,fv);
        }
    return UserSkillReturn.SKILL_SUCCESS;
}