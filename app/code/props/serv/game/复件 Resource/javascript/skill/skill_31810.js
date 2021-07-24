importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//生门
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var script_hp = 15;
    var script_mp = 10;
    if (self.HP > script_hp)
    {
        if(LogicTool.RandInt(0, 100) < 80)
        {
            self.HP -= script_hp;
            self.MP += script_mp;
            fightsystem.AddBuff(self,1819,timer,fv);
            fv.SelfLastDamage = script_hp;
            fv.IncMP = script_mp;
            return UserSkillReturn.SKILL_SUCCESS;
        }
    }
    return UserSkillReturn.SKILL_LOSE;
}