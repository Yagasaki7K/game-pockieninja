importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//宠物啄食
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_damage = fightsystem.GetDamage(self)*0.75;
    fightsystem.Attack(self,target,script_damage,0,fv,timer);
    if(fv.IsHit == 1)
    {
        var buff1 = fightsystem.GetBuff(target,11838);
        if(buff1 == null)
        {
            fightsystem.AddBuff(target,11838,timer,fv,3,0);
        }
    }
    return UserSkillReturn.SKILL_SUCCESS;
}