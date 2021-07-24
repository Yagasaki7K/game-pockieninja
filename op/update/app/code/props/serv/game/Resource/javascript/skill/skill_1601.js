importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//孤注一掷，不成功便成仁
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    //生命没有垂危或者已经放过了，就不放了
    if(!(fightsystem.FindBuff(self,1212)||(self.HP*100>self.MaxHP*12)))
    {
        var damage = fightsystem.GetDamage(self)*LogicTool.RandInt(25,38)/10;
        fightsystem.Attack(self,target,damage,0,fv,timer);
        boolean AddBuff(self,1212,timer,fv);
        boolean AddBuff(self,1213,timer,fv);
        return UserSkillReturn.SKILL_SUCCESS;
    }
    return UserSkillReturn.SKILL_LOSE;
}