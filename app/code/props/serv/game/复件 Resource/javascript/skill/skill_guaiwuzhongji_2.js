importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//怪物重击
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 0.5);
	var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
        MPCost = MPCost*2;
    if(self.MP < MPCost)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    var InitBuff = fightsystem.GetBuff(target,8888);
    if(InitBuff == null)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    else
    {
        var AttackDamage = fightsystem.GetDamage(self);
        fightsystem.Attack(self,target,AttackDamage,0,fv,timer);		       
        self.MP -= MPCost;
        fv.DecMP = MPCost;
        var BuffDrain = fightsystem.GetBuff(self, 11836);
        if(BuffDrain != null)
            fightsystem.RemoveBuff(self,11836,timer,fv); 
        return UserSkillReturn.SKILL_SUCCESS;
    }
}