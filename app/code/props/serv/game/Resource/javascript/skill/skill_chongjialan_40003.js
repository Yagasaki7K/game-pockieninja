importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//加蓝
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var MPRecover = self.MaxMP*0.1;
    //检查溢出
    if(!(self.MP + MPRecover > self.GetInitMaxMP()))
    {
        self.MP += MPRecover;
        fv.IncMP = MPRecover;
        return UserSkillReturn.SKILL_SUCCESS;
    }
    else 
    {
       return UserSkillReturn.SKILL_LOSE;
    }
}