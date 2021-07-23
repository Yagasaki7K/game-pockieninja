importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//加血
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var HPRecover = self.MaxHP*0.1;
    //检查溢出
    if(!(self.HP + HPRecover > self.MaxHP))
    {
        self.HP += HPRecover;
        fv.IncHP = HPRecover;
        return UserSkillReturn.SKILL_SUCCESS;
    }
    else 
    {
       return UserSkillReturn.SKILL_LOSE;
    }
}