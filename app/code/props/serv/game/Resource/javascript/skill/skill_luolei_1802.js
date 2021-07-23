importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//落雷，必中，麻痹
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost);
    var ThunderDamage = 0;
    var ParalysisTime = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            ThunderDamage = 0.8;
            ParalysisTime = 350;
            break;
        }
        case 2: 
        {
            ThunderDamage = 0.8;
            ParalysisTime = 350;
            break;
        } 
        case 3: 
        {
            ThunderDamage = 0.64;
            ParalysisTime = 0;
            break;
        } 
        case 4: 
        {
            ThunderDamage = 0.68;
            ParalysisTime = 0;
            break;
        } 
        case 5: 
        {
            ThunderDamage = 0.73;
            ParalysisTime = 0;
            break;
        }
        case 6: 
        {
            ThunderDamage = 0.77;
            ParalysisTime = 0;
            break;
        }
        case 7: 
        {
            ThunderDamage = 0.81;
            ParalysisTime = 0;
            break;
        } 
        case 8: 
        {
            ThunderDamage = 0.85;
            ParalysisTime = 0;
            break;
        }
        case 9: 
        {
            ThunderDamage = 0.9;
            ParalysisTime = 0;
            break;
        } 
        case 10: 
        {
            ThunderDamage = 0.94;
            ParalysisTime = 0;
            break;
        }
        case 11: 
        {
            ThunderDamage = 0.98;
            ParalysisTime = 0;
            break;
        }
        case 12: 
        {
            ThunderDamage = 1.03;
            ParalysisTime = 0;
            break;
        }
        case 13: 
        {
            ThunderDamage = 1.07;
            ParalysisTime = 0;
            break;
        }   
        default: ;
    }
    ThunderDamage = ThunderDamage * (1+0.01*LogicTool.ToInt(self.SkillAdd3*0.01));
    //检查套子
    var BuffSelfCap = fightsystem.GetBuff(self,11831);
    if(BuffSelfCap != null)
    {
        ThunderDamage = ThunderDamage * 1.2;
        ParalysisTime = ParalysisTime * 1.2;
    }
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
    var InitBuff = fightsystem.GetBuff(target,8888);
    if(InitBuff == null)
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
        var AttackDamage = fightsystem.GetDamage(self)*ThunderDamage*(1+IsMelt+IsYuanSu);
        var BackDamage = 0;
        var BuffWarmBlooded = fightsystem.GetBuff(self,11814);
        if(BuffWarmBlooded != null)
        {
            BackDamage = AttackDamage*0.2;
        }
        var BuffPeg = fightsystem.GetBuff(target,11840);
        fightsystem.Attack(self,target,AttackDamage,BackDamage,fv,timer);
        if((fv.IsHit == 1)&&(BuffPeg == null))
        {
            var BuffDizzy = fightsystem.GetBuff(target,11813);
            if(BuffDizzy != null)   
            {
                fightsystem.RemoveBuff(target,11813,timer,fv);
            }
            if(InitBuff.SaveData%1000/100 < 4)
            {
                var BuffFreeze = fightsystem.GetBuff(target,11802);
                if(BuffFreeze == null)
                {          
                    fightsystem.ChangeNextAtkTime(target,ParalysisTime);
                    //检查重复状态
                    var BuffParalysis = fightsystem.GetBuff(target,11801);
                    if(BuffParalysis != null)
                    {          
                        fightsystem.RemoveBuff(target,11801,timer,fv);
                    }
                    fightsystem.AddBuff(target,11801,timer,fv);
                    InitBuff.SaveData += 100;
                }
            }       
        }
        self.MP -= MPCost;
        fv.DecMP = MPCost;
        if(IsMelt != 0)
            fv.IsNeglectDef = 1;
        var BuffDrain = fightsystem.GetBuff(self, 11836);
        if(BuffDrain != null)
        {
            fightsystem.RemoveBuff(self,11836,timer,fv);
        }
        return UserSkillReturn.SKILL_SUCCESS;
    }
}