importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//风沙阵，特殊反击
function OnUser(fightsystem, self, target, skill, fv,timer)
{  
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost * 1.1);
    var WindDamage = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            WindDamage = 1.6;
            break;
        }
        case 2: 
        {
            WindDamage = 1.6;
            break;
        } 
        case 3: 
        {
            WindDamage = 0.64;
            break;
        } 
        case 4: 
        {
            WindDamage = 0.68;
            break;
        } 
        case 5: 
        {
            WindDamage = 0.72;
            break;
        }
        case 6: 
        {
            WindDamage = 0.75;
            break;
        }
        case 7: 
        {
            WindDamage = 0.79;
            break;
        } 
        case 8: 
        {
            WindDamage = 0.82;
            break;
        }
        case 9: 
        {
            WindDamage = 0.86;
            break;
        } 
        case 10: 
        {
            WindDamage = 0.9;
            break;
        }
        case 11: 
        {
            WindDamage = 0.93;
            break;
        }
        case 12: 
        {
            WindDamage = 0.97;
            break;
        }
        case 13: 
        {
            WindDamage = 1;
            break;
        }  
        default: ;
    }
    WindDamage = WindDamage * (1+0.01*LogicTool.ToInt(self.SkillAdd4*0.01));
    var BuffVesselDestroy = fightsystem.GetBuff(self, 11839);
    if(BuffVesselDestroy != null)
    {
        MPCost = MPCost*2;
    }
    var BuffSeal = fightsystem.GetBuff(self, 11812);
    if(BuffSeal != null)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    if(self.MP < MPCost)
    {
        return UserSkillReturn.SKILL_LOSE;
    }
    else 
    {
        var IsMelt = 0;
        var BuffSunSet = fightsystem.GetBuff(self, 11822);
        if(BuffSunSet != null)
        {
            if(LogicTool.RandInt(0, 99) < BuffSunSet.SaveData)
            {
                IsMelt = 1;
            }
        } 
		var IsYuanSu = 0;
		var BuffYuanSu = fightsystem.GetBuff(self, 11905);
		if(BuffYuanSu != null)
		{
			IsYuanSu = 0.15;
		}       
        var AttackDamage = fightsystem.GetDamage(self)*WindDamage*(1+IsMelt+IsYuanSu);
        var BackDamage = 0;
        var BuffWarmBlooded = fightsystem.GetBuff(self,11814);
        if(BuffWarmBlooded != null)
        {
            BackDamage = AttackDamage*0.2;
        }
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