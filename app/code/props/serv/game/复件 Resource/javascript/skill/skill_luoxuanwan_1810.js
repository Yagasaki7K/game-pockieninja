importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);


//螺旋丸
function OnUser(fightsystem, self, target, skill, fv,timer)
{
	//基础函数定义
	//200+20*(自身等级-1)*(1+(20+自身等级-1+取整(自身等级/3+1)*8+(取整((自身等级-1)/10)*7+14)/3*8)/12*0.01))/30 原因不明
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 1.4);
    var WindDamage = 0;
    var BackWindDamage = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            WindDamage = 1.8;//伤害提升系数
            BackWindDamage = 0.3;//反伤系数
            break;
        } 
        default: ;
    }
	//DEBUFF技能判定流程
    //WindDamage = WindDamage * (1+0.01*LogicTool.ToInt(self.SkillAdd4*0.01));//技能伤害（等级的提升） 已废弃
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);//经络破坏BUFF获得的判断
    if(BuffVesselDestroy != null)
    {
        MPCost = MPCost*2;//MP消耗*2
    }
    var BuffSeal = fightsystem.GetBuff(self, 11812);//五行封印BUFF获得判断
    if(BuffSeal != null)
    {
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
    if(self.MP < MPCost)
    {    
        var skill = fightsystem.ChangeSkill(skill,1,fv);
        return fightsystem.UserSkill(self,target,skill,timer,fv);
    }
	//增益BUFF类技能判定流程
    else
    {
        var IsMelt = 0;
        var BuffSunSet = fightsystem.GetBuff(self, 11822);//日落BUFF判断
        if(BuffSunSet != null)
        {
            if(LogicTool.RandInt(0, 99) < BuffSunSet.SaveData)
            {
                IsMelt = 1;
            }
        }
        var AttackDamage = fightsystem.GetDamage(self)*WindDamage*(1+IsMelt);
        var BackDamage = 0;
        var BuffWarmBlooded = fightsystem.GetBuff(self,11814);//BUFF热血判定
        if(BuffWarmBlooded != null)
        {
            BackDamage = AttackDamage*0.2;//20%反伤
        }
        BackDamage += AttackDamage*BackWindDamage;
		//相关数值扣除及记录
        fightsystem.Attack(self,target,AttackDamage,BackDamage,fv,timer);
        self.MP -= MPCost;
        fv.DecMP = MPCost;
        if(IsMelt != 0)
            fv.IsNeglectDef = 1;
        var BuffDrain = fightsystem.GetBuff(self, 11836);
        if(BuffDrain != null)
            fightsystem.RemoveBuff(self,11836,timer,fv);  
        return UserSkillReturn.SKILL_SUCCESS;
    }
}