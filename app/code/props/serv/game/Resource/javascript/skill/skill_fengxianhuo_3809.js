importPackage(com.d2.serv.game.Public);
importPackage(com.d2.serv.game.FightModule);

//凤仙火，伤害触发
function OnUser(fightsystem, self, target, skill, fv,timer)
{
    var BaseMPCost = (200+20*(self.Level-1)*(1+(20+self.Level-1+LogicTool.ToInt(self.Level/3+1)*8+(LogicTool.ToInt((self.Level-1)/10)*7+14)/3*8)/12*0.01))/30;
    var MPCost = LogicTool.ToInt(BaseMPCost*0.3);
    var FireDamage = 0;
    var FlameDamage = 0;
    var FlameCount = 0;
    switch(skill.GetLevel())
    {
        case 1: 
        {
            FireDamage = 0.4;
            FlameDamage = 0.4;
            FlameCount = 2;
            break;
        }
        case 2: 
        {
            FireDamage = 0.4;
            FlameDamage = 0.4;
            FlameCount = 2;
            break;
        } 
        case 3: 
        {
            FireDamage = 0.54;
            FlameDamage = 12;
            break;
        } 
        case 4: 
        {
            FireDamage = 0.57;
            FlameDamage = 13;
            break;
        } 
        case 5: 
        {
            FireDamage = 0.6;
            FlameDamage = 15;
            break;
        }
        case 6: 
        {
            FireDamage = 0.63;
            FlameDamage = 17;
            break;
        }
        case 7: 
        {
            FireDamage = 0.66;
            FlameDamage = 19;
            break;
        } 
        case 8: 
        {
            FireDamage = 0.69;
            FlameDamage = 21;
            break;
        }
        case 9: 
        {
            FireDamage = 0.72;
            FlameDamage = 24;
            break;
        } 
        case 10: 
        {
            FireDamage = 0.75;
            FlameDamage = 26;
            break;
        }   
        case 11: 
        {
            FireDamage = 0.78;
            FlameDamage = 29;
            break;
        }   
        case 12: 
        {
            FireDamage = 0.81;
            FlameDamage = 31;
            break;
        }   
        case 13: 
        {
            FireDamage = 0.84;
            FlameDamage = 34;
            break;
        }   
        default: ;
    }
    FireDamage = FireDamage * (1+0.01*LogicTool.ToInt(self.SkillAdd0*0.01));
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
        //检查有没有被冻结
        var BuffFreeze = fightsystem.GetBuff(target, 11802);
        if(BuffFreeze == null)
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
            //直接伤害
            var AttackDamage = fightsystem.GetDamage(self)*FireDamage*(1+IsMelt+IsYuanSu);
            var BackDamage = 0;
            var BuffWarmBlooded = fightsystem.GetBuff(self,11814);
            if(BuffWarmBlooded != null)
            {
                BackDamage = AttackDamage*0.2;
            }
            fightsystem.Attack(self,target,AttackDamage,BackDamage,fv,timer);
            //命中且有酒
            if(fv.IsHit == 1)
            {
                var BuffJiu = fightsystem.GetBuff(target, 11806); //酒
                var BuffTargetWu = fightsystem.GetBuff(target, 11821);
                var BuffSelfWu = fightsystem.GetBuff(self, 11821);
                if((BuffJiu != null)&&(BuffTargetWu == null)&&(BuffSelfWu == null))
                {
                    var BuffDamage = fv.TargetLastDamage * FlameDamage;
                    var BuffFlame = fightsystem.GetBuff(target, 11804);
                    if(BuffFlame != null)
                    {
                        if(BuffFlame.SaveData < BuffDamage)
                        {
                            BuffFlame.SaveData = BuffDamage;
                        }
                        BuffFlame.SaveData1 += FlameCount;
                    }
                    else
                    {
                        fightsystem.AddBuff(target,11804,timer,fv,BuffDamage,FlameCount);
                    }
                }
            }
        }          
        self.MP -= MPCost;
        fv.DecMP = MPCost;
        if(IsMelt != 0)
        {
            fv.IsNeglectDef = 1;
        }
        var BuffDrain = fightsystem.GetBuff(self, 11836);
        if(BuffDrain != null)
        {
            fightsystem.RemoveBuff(self,11836,timer,fv);
        }
        return UserSkillReturn.SKILL_SUCCESS;
    }
}
    