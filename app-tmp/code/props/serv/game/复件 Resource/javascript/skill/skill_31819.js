importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//天之咒印
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    if(self.HP < self.MaxHP) //要改成20%的 
    {
        var script_hp = 60;
        var script_mp = 30;
        self.HP += script_hp;
        self.MP += script_mp;
        fightsystem.AddBuff(self,1823,timer,fv);
        fv.IncHP = script_hp;
        fv.IncMP = script_mp;
        return UserSkillReturn.SKILL_SUCCESS;
    }
    return UserSkillReturn.SKILL_LOSE;
}